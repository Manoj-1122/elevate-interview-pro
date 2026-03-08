import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { BookOpen, Check, ArrowRight } from "lucide-react";
import Navbar from "@/components/Navbar";

const learningPaths = [
  {
    id: "frontend-basic",
    title: "UI/Front-End Developer (Basic)",
    subtitle: "HTML / CSS / JS",
    courses: 4,
    description: "Master the fundamentals of web development with HTML, CSS, and JavaScript",
    outcomes: [
      "Build interactive web pages",
      "Apply modern CSS styling techniques",
      "Use JavaScript for dynamic behaviour",
      "Understand responsive design",
    ],
    skills: ["HTML", "Tags", "Attributes and elements", "Modern Tools for Web Development", "CSS", "Styling and Formatting", "Responsive Web Design", "Javascript", "ES6", "Manipulating Document Object Model", "HTTP Requests"],
    detailedDescription: "This course provides a strong foundation in front-end development, focusing on web page structure, styling, and interactivity. Students will be prepared to build basic websites and gain essential problem-solving skills for web development roles.",
  },
  {
    id: "dsa",
    title: "Placement Readiness – C & DSA",
    subtitle: "Become 5 star coder",
    courses: 3,
    description: "Comprehensive C and DSA courses to prepare for placement exams and interviews",
    outcomes: [
      "Learn core C programming concepts",
      "Master data structures and algorithms",
      "Gain hands-on coding experience",
      "Solve placement-level problems",
    ],
    skills: ["C Programming", "Arrays", "Linked Lists", "Stacks & Queues", "Trees", "Graphs", "Sorting Algorithms", "Searching Algorithms", "Dynamic Programming", "Recursion"],
    detailedDescription: "A comprehensive program covering C programming and data structures & algorithms from basics to advanced. Perfect for students preparing for technical interviews and coding assessments at top companies.",
  },
  {
    id: "aptitude",
    title: "Placement Readiness – Aptitude",
    subtitle: "Exams & Interviews",
    courses: 3,
    description: "Enhance verbal, quantitative, and reasoning skills for placement exams and interviews",
    outcomes: [
      "Master verbal and analytical skills",
      "Build strong quantitative aptitude",
      "Solve real-world reasoning problems",
      "Gain speed and accuracy in tests",
    ],
    skills: ["Quantitative Aptitude", "Logical Reasoning", "Verbal Ability", "Data Interpretation", "Number Systems", "Probability", "Permutations", "Time & Work", "Percentages", "Profit & Loss"],
    detailedDescription: "Build strong aptitude skills essential for cracking placement exams and interviews. This path covers quantitative, verbal, and logical reasoning with timed practice tests to improve speed and accuracy.",
  },
  {
    id: "frontend-expert",
    title: "UI/Front-End Developer (Expert)",
    subtitle: "React, HTML5, CSS3, DevOps",
    courses: 3,
    description: "Master the fundamentals of web development with HTML, CSS, and JavaScript",
    outcomes: [
      "Build interactive web pages",
      "Apply modern CSS styling techniques",
      "Use JavaScript for dynamic behaviour",
      "Understand responsive design",
    ],
    skills: ["React", "Component Architecture", "State Management", "Hooks", "HTML5 Semantics", "CSS3 Animations", "Flexbox & Grid", "REST APIs", "Git & GitHub", "CI/CD Basics", "Docker Fundamentals"],
    detailedDescription: "Take your front-end skills to the expert level with React, advanced CSS3, and DevOps practices. Learn to build production-ready applications with modern tooling and deployment workflows.",
  },
  {
    id: "fullstack",
    title: "Full Stack Developer",
    subtitle: "MERN Stack",
    courses: 5,
    description: "End-to-end web development with MongoDB, Express, React, and Node.js",
    outcomes: [
      "Build full-stack web applications",
      "Design RESTful APIs",
      "Manage databases with MongoDB",
      "Deploy applications to cloud",
    ],
    skills: ["MongoDB", "Express.js", "React", "Node.js", "REST APIs", "Authentication", "Database Design", "Cloud Deployment", "Testing", "Version Control"],
    detailedDescription: "A comprehensive full-stack development program covering the entire MERN stack. Build and deploy production-ready web applications from scratch, including authentication, database management, and cloud deployment.",
  },
  {
    id: "data-science",
    title: "Data Science & ML",
    subtitle: "Python, ML, Deep Learning",
    courses: 4,
    description: "Master data science and machine learning with Python and modern frameworks",
    outcomes: [
      "Analyze data with Python & Pandas",
      "Build machine learning models",
      "Apply deep learning techniques",
      "Create data visualizations",
    ],
    skills: ["Python", "Pandas", "NumPy", "Scikit-learn", "TensorFlow", "Data Visualization", "Statistical Analysis", "Feature Engineering", "Model Evaluation", "Neural Networks"],
    detailedDescription: "Dive deep into data science and machine learning. Learn to analyze complex datasets, build predictive models, and apply deep learning techniques using Python and industry-standard libraries.",
  },
  {
    id: "cloud-computing",
    title: "Cloud Computing",
    subtitle: "AWS, Azure, GCP",
    courses: 3,
    description: "Learn cloud infrastructure, deployment, and services on major cloud platforms",
    outcomes: [
      "Understand cloud service models",
      "Deploy applications to cloud",
      "Manage cloud infrastructure",
      "Implement cloud security",
    ],
    skills: ["AWS", "Azure", "Google Cloud", "Docker", "Kubernetes", "Serverless", "Cloud Storage", "Networking", "IAM", "CI/CD Pipelines"],
    detailedDescription: "Comprehensive cloud computing program covering major providers (AWS, Azure, GCP). Learn to architect, deploy, and manage scalable cloud applications with industry best practices.",
  },
  {
    id: "cybersecurity",
    title: "Cybersecurity Essentials",
    subtitle: "Network Security, Ethical Hacking",
    courses: 3,
    description: "Learn cybersecurity fundamentals, ethical hacking, and security best practices",
    outcomes: [
      "Understand security threats and defenses",
      "Perform basic penetration testing",
      "Implement secure coding practices",
      "Manage network security",
    ],
    skills: ["Network Security", "Ethical Hacking", "Cryptography", "OWASP Top 10", "Firewalls", "IDS/IPS", "Vulnerability Assessment", "Secure Coding", "Incident Response", "Compliance"],
    detailedDescription: "Build a strong foundation in cybersecurity, covering threat analysis, ethical hacking techniques, network security, and secure coding practices essential for protecting modern applications.",
  },
];

export { learningPaths };

export default function LearningPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <div className="container mx-auto py-8 px-4 max-w-6xl pt-24">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="mb-2">
          <p className="text-sm text-muted-foreground">
            <Link to="/roles" className="hover:text-primary">Job Roles</Link> / <span className="text-foreground font-medium">Resources</span>
          </p>
        </motion.div>
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.05 }} className="mb-8">
          <h1 className="font-display text-2xl font-bold text-primary mb-2">Learning Resources</h1>
          <p className="text-muted-foreground text-sm">Study these materials to build a strong foundation before practicing interviews.</p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {learningPaths.map((path, i) => (
            <motion.div
              key={path.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.07 }}
              className="glass-card rounded-2xl p-6 flex flex-col justify-between hover:shadow-lg transition-shadow"
            >
              <div>
                <div className="h-20 w-20 mx-auto mb-4 rounded-xl bg-primary/10 flex items-center justify-center">
                  <BookOpen className="h-10 w-10 text-primary" />
                </div>
                <h3 className="font-display font-bold text-foreground text-sm mb-1">{path.title}</h3>
                <p className="text-xs text-muted-foreground mb-2">{path.subtitle}</p>
                <p className="text-xs font-semibold text-foreground mb-1">{path.courses} courses</p>
                <p className="text-xs text-muted-foreground mb-4">{path.description}</p>

                <p className="text-xs text-muted-foreground font-medium mb-2">Learning outcomes:</p>
                <ul className="space-y-1.5 mb-5">
                  {path.outcomes.map((o) => (
                    <li key={o} className="flex items-start gap-2 text-xs text-foreground">
                      <Check className="h-3.5 w-3.5 text-accent mt-0.5 shrink-0" />
                      {o}
                    </li>
                  ))}
                </ul>
              </div>

              <Link to={`/learning/${path.id}`}>
                <Button variant="heroOutline" size="sm" className="w-full">
                  Explore this path
                </Button>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* CTA to Practice */}
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView="visible" viewport={{ once: true }} animate={{ opacity: 1, y: 0 }}
          className="text-center glass-card rounded-2xl p-10 mt-12"
        >
          <h2 className="font-display text-xl font-bold text-foreground mb-2">Done studying?</h2>
          <p className="text-muted-foreground text-sm mb-6">Put your knowledge to the test with AI-powered practice interviews.</p>
          <Link to="/setup">
            <Button variant="hero" size="lg">
              Go to Practice <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </motion.div>
      </div>
    </div>
  );
}
