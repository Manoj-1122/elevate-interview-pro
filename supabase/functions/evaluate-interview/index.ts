import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type, x-supabase-client-platform, x-supabase-client-platform-version, x-supabase-client-runtime, x-supabase-client-runtime-version",
};

serve(async (req) => {
  if (req.method === "OPTIONS") return new Response(null, { headers: corsHeaders });

  try {
    const LOVABLE_API_KEY = Deno.env.get("LOVABLE_API_KEY");
    if (!LOVABLE_API_KEY) throw new Error("LOVABLE_API_KEY is not configured");

    const { role, difficulty, type, questions, answers, totalTimeSeconds } = await req.json();

    const qaPairs = questions.map((q: string, i: number) => 
      `Question ${i + 1}: ${q}\nAnswer ${i + 1}: ${answers[i] || "(no answer)"}`
    ).join("\n\n");

    const systemPrompt = `You are an expert interview evaluator. You will evaluate a candidate's interview performance.

The candidate applied for a "${role}" position. The interview was "${type}" type at "${difficulty}" difficulty level.
Total time taken: ${totalTimeSeconds} seconds for ${questions.length} questions.

Evaluate the candidate across these 6 metrics (score each 0-100):
1. Content Relevance - How relevant and on-topic were the answers
2. Technical Accuracy - Correctness of technical concepts mentioned
3. Communication Skills - Clarity, structure, and articulation
4. Confidence & Fluency - Flow, assertiveness, lack of hesitation
5. Grammar & Vocabulary - Language quality and professional vocabulary
6. Response Time - Efficiency of responses relative to time taken

You MUST respond by calling the evaluate_interview function with your evaluation.`;

    const response = await fetch("https://ai.gateway.lovable.dev/v1/chat/completions", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${LOVABLE_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: "google/gemini-3-flash-preview",
        messages: [
          { role: "system", content: systemPrompt },
          { role: "user", content: `Here are the interview questions and answers:\n\n${qaPairs}` },
        ],
        tools: [
          {
            type: "function",
            function: {
              name: "evaluate_interview",
              description: "Submit the interview evaluation with scores and feedback",
              parameters: {
                type: "object",
                properties: {
                  overallScore: { type: "number", description: "Overall score 0-100" },
                  skills: {
                    type: "array",
                    items: {
                      type: "object",
                      properties: {
                        name: { type: "string" },
                        score: { type: "number" },
                      },
                      required: ["name", "score"],
                      additionalProperties: false,
                    },
                    description: "Array of 6 skill scores in order: Content Relevance, Technical Accuracy, Communication Skills, Confidence & Fluency, Grammar & Vocabulary, Response Time",
                  },
                  feedback: {
                    type: "array",
                    items: {
                      type: "object",
                      properties: {
                        title: { type: "string", description: "Short feedback title" },
                        text: { type: "string", description: "Detailed feedback paragraph" },
                        type: { type: "string", enum: ["strength", "improvement"], description: "Whether this is a strength or area for improvement" },
                      },
                      required: ["title", "text", "type"],
                      additionalProperties: false,
                    },
                    description: "4-6 feedback items mixing strengths and improvements",
                  },
                  performanceLabel: { type: "string", description: "Short label like 'Excellent', 'Great Performance', 'Good Effort', 'Needs Improvement'" },
                },
                required: ["overallScore", "skills", "feedback", "performanceLabel"],
                additionalProperties: false,
              },
            },
          },
        ],
        tool_choice: { type: "function", function: { name: "evaluate_interview" } },
      }),
    });

    if (!response.ok) {
      if (response.status === 429) {
        return new Response(JSON.stringify({ error: "Rate limit exceeded. Please try again later." }), {
          status: 429,
          headers: { ...corsHeaders, "Content-Type": "application/json" },
        });
      }
      if (response.status === 402) {
        return new Response(JSON.stringify({ error: "AI usage limit reached. Please add credits." }), {
          status: 402,
          headers: { ...corsHeaders, "Content-Type": "application/json" },
        });
      }
      const errorText = await response.text();
      console.error("AI gateway error:", response.status, errorText);
      throw new Error(`AI gateway error: ${response.status}`);
    }

    const data = await response.json();
    const toolCall = data.choices?.[0]?.message?.tool_calls?.[0];
    
    if (!toolCall) {
      throw new Error("No tool call in AI response");
    }

    const evaluation = JSON.parse(toolCall.function.arguments);

    return new Response(JSON.stringify(evaluation), {
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  } catch (e) {
    console.error("evaluate-interview error:", e);
    return new Response(
      JSON.stringify({ error: e instanceof Error ? e.message : "Unknown error" }),
      { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  }
});
