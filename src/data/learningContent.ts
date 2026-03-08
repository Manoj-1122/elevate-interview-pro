export interface Lesson {
  id: string;
  title: string;
  content: string;
  codeExample?: string;
  keyPoints?: string[];
}

export interface Topic {
  id: string;
  title: string;
  lessons: Lesson[];
}

export interface Module {
  id: string;
  title: string;
  topics: Topic[];
}

export interface PathContent {
  pathId: string;
  modules: Module[];
}

export const learningContent: PathContent[] = [
  {
    pathId: "frontend-basic",
    modules: [
      {
        id: "html-fundamentals",
        title: "HTML Fundamentals",
        topics: [
          {
            id: "html-intro",
            title: "Introduction to HTML",
            lessons: [
              {
                id: "what-is-html",
                title: "What is HTML?",
                content: `HTML (HyperText Markup Language) is the standard language used to create and structure content on the web. Every web page you visit is built using HTML as its foundation.\n\nHTML uses a system of **tags** (also called elements) to define the structure of content. Tags are enclosed in angle brackets, like \`<tagname>\`. Most tags come in pairs: an opening tag and a closing tag.\n\nHTML documents follow a specific structure that browsers can interpret and render visually.`,
                codeExample: `<!DOCTYPE html>\n<html lang="en">\n<head>\n  <meta charset="UTF-8">\n  <title>My First Page</title>\n</head>\n<body>\n  <h1>Hello, World!</h1>\n  <p>This is my first web page.</p>\n</body>\n</html>`,
                keyPoints: [
                  "HTML stands for HyperText Markup Language",
                  "It provides the structure of a web page",
                  "HTML uses tags enclosed in angle brackets",
                  "Every HTML document starts with <!DOCTYPE html>",
                ],
              },
              {
                id: "html-elements",
                title: "HTML Elements & Attributes",
                content: `An HTML element consists of a start tag, content, and an end tag. Elements can also have **attributes** that provide additional information.\n\nAttributes are always specified in the opening tag and come in name/value pairs like \`name="value"\`.\n\nSome elements are self-closing (void elements) and don't need a closing tag, such as \`<img>\`, \`<br>\`, and \`<input>\`.`,
                codeExample: `<!-- Element with attributes -->\n<a href="https://example.com" target="_blank">Visit Example</a>\n\n<!-- Image (self-closing) -->\n<img src="photo.jpg" alt="A beautiful sunset" width="400">\n\n<!-- Input (self-closing) -->\n<input type="text" placeholder="Enter your name" required>`,
                keyPoints: [
                  "Elements have opening tags, content, and closing tags",
                  "Attributes provide extra information about elements",
                  "Some elements are self-closing (void elements)",
                  "The 'id' and 'class' attributes are used for styling and scripting",
                ],
              },
            ],
          },
          {
            id: "html-forms",
            title: "HTML Forms & Inputs",
            lessons: [
              {
                id: "form-basics",
                title: "Creating Forms",
                content: `Forms are essential for collecting user input. The \`<form>\` element wraps all form controls and defines how data is submitted.\n\nKey attributes of the form element include \`action\` (where to send data) and \`method\` (GET or POST).\n\nCommon form elements include text inputs, checkboxes, radio buttons, select dropdowns, and textareas.`,
                codeExample: `<form action="/submit" method="POST">\n  <label for="name">Name:</label>\n  <input type="text" id="name" name="name" required>\n\n  <label for="email">Email:</label>\n  <input type="email" id="email" name="email">\n\n  <label for="message">Message:</label>\n  <textarea id="message" name="message" rows="4"></textarea>\n\n  <button type="submit">Send</button>\n</form>`,
                keyPoints: [
                  "The <form> element wraps all input controls",
                  "Use 'action' to specify where data is sent",
                  "Use 'method' to specify GET or POST",
                  "Labels improve accessibility when linked with 'for' attribute",
                ],
              },
            ],
          },
          {
            id: "html-semantic",
            title: "Semantic HTML",
            lessons: [
              {
                id: "semantic-elements",
                title: "Semantic Elements",
                content: `Semantic HTML uses meaningful tags that describe the purpose of the content they contain. This improves accessibility, SEO, and code readability.\n\nInstead of using generic \`<div>\` elements everywhere, semantic elements like \`<header>\`, \`<nav>\`, \`<main>\`, \`<article>\`, \`<section>\`, and \`<footer>\` convey meaning about the structure.`,
                codeExample: `<header>\n  <nav>\n    <a href="/">Home</a>\n    <a href="/about">About</a>\n  </nav>\n</header>\n\n<main>\n  <article>\n    <h2>Blog Post Title</h2>\n    <p>Article content goes here...</p>\n  </article>\n\n  <aside>\n    <h3>Related Posts</h3>\n  </aside>\n</main>\n\n<footer>\n  <p>&copy; 2026 My Website</p>\n</footer>`,
                keyPoints: [
                  "Semantic tags describe the meaning of content",
                  "Improves accessibility for screen readers",
                  "Better SEO as search engines understand structure",
                  "Use <main>, <article>, <section>, <aside>, <header>, <footer>",
                ],
              },
            ],
          },
        ],
      },
      {
        id: "css-fundamentals",
        title: "CSS Fundamentals",
        topics: [
          {
            id: "css-intro",
            title: "Introduction to CSS",
            lessons: [
              {
                id: "what-is-css",
                title: "What is CSS?",
                content: `CSS (Cascading Style Sheets) is a stylesheet language that controls the visual presentation of HTML documents. It handles layout, colors, fonts, spacing, animations, and more.\n\nCSS can be applied in three ways: inline styles, internal stylesheets (inside a \`<style>\` tag), and external stylesheets (linked via a \`<link>\` tag). External stylesheets are the recommended approach.`,
                codeExample: `/* External CSS file: styles.css */\nbody {\n  font-family: 'Segoe UI', sans-serif;\n  background-color: #f5f5f5;\n  margin: 0;\n  padding: 0;\n}\n\nh1 {\n  color: #333;\n  text-align: center;\n  margin-top: 2rem;\n}\n\n.container {\n  max-width: 1200px;\n  margin: 0 auto;\n  padding: 1rem;\n}`,
                keyPoints: [
                  "CSS controls the visual presentation of web pages",
                  "Selectors target HTML elements to style",
                  "Properties define what aspect to change",
                  "External stylesheets are the best practice",
                ],
              },
            ],
          },
          {
            id: "css-flexbox",
            title: "Flexbox Layout",
            lessons: [
              {
                id: "flexbox-basics",
                title: "Flexbox Basics",
                content: `Flexbox is a one-dimensional layout method for arranging items in rows or columns. It provides powerful alignment and distribution capabilities.\n\nTo use Flexbox, set \`display: flex\` on the container. Child elements become flex items that can be controlled with properties like \`justify-content\`, \`align-items\`, \`flex-direction\`, and \`gap\`.`,
                codeExample: `.flex-container {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  gap: 1rem;\n  padding: 1rem;\n}\n\n.flex-item {\n  flex: 1;\n  padding: 1rem;\n  background: #e0e0e0;\n  border-radius: 8px;\n  text-align: center;\n}`,
                keyPoints: [
                  "Set display: flex on the parent container",
                  "justify-content controls horizontal alignment",
                  "align-items controls vertical alignment",
                  "flex: 1 makes items grow equally",
                ],
              },
            ],
          },
          {
            id: "css-grid",
            title: "CSS Grid Layout",
            lessons: [
              {
                id: "grid-basics",
                title: "CSS Grid Basics",
                content: `CSS Grid is a two-dimensional layout system that handles both rows and columns simultaneously. It's perfect for creating complex page layouts.\n\nDefine a grid with \`display: grid\` and use \`grid-template-columns\` and \`grid-template-rows\` to define the structure.`,
                codeExample: `.grid-container {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  grid-template-rows: auto;\n  gap: 1.5rem;\n  padding: 2rem;\n}\n\n.grid-item {\n  background: #fff;\n  padding: 1.5rem;\n  border-radius: 12px;\n  box-shadow: 0 2px 8px rgba(0,0,0,0.1);\n}`,
                keyPoints: [
                  "CSS Grid handles 2D layouts (rows + columns)",
                  "Use grid-template-columns for column definitions",
                  "fr unit distributes available space proportionally",
                  "gap adds spacing between grid items",
                ],
              },
            ],
          },
          {
            id: "css-responsive",
            title: "Responsive Web Design",
            lessons: [
              {
                id: "media-queries",
                title: "Media Queries",
                content: `Responsive design ensures web pages look good on all devices. Media queries allow you to apply different styles based on screen size, orientation, and other conditions.\n\nThe mobile-first approach means writing base styles for small screens and using \`min-width\` media queries to add styles for larger screens.`,
                codeExample: `/* Mobile first (base styles) */\n.container {\n  padding: 1rem;\n}\n\n.card-grid {\n  display: grid;\n  grid-template-columns: 1fr;\n  gap: 1rem;\n}\n\n/* Tablet */\n@media (min-width: 768px) {\n  .card-grid {\n    grid-template-columns: repeat(2, 1fr);\n  }\n}\n\n/* Desktop */\n@media (min-width: 1024px) {\n  .card-grid {\n    grid-template-columns: repeat(3, 1fr);\n  }\n}`,
                keyPoints: [
                  "Mobile-first approach: base styles for small screens",
                  "Use min-width media queries for larger breakpoints",
                  "Common breakpoints: 768px (tablet), 1024px (desktop)",
                  "Use relative units (rem, %, vw) for flexible sizing",
                ],
              },
            ],
          },
        ],
      },
      {
        id: "javascript-fundamentals",
        title: "JavaScript Fundamentals",
        topics: [
          {
            id: "js-intro",
            title: "Introduction to JavaScript",
            lessons: [
              {
                id: "what-is-js",
                title: "What is JavaScript?",
                content: `JavaScript is the programming language of the web. It adds interactivity, dynamic content updates, animations, and much more to web pages.\n\nJavaScript can manipulate HTML and CSS, handle events, communicate with servers, and build complete applications. It runs directly in the browser.`,
                codeExample: `// Variables\nlet name = "Alice";\nconst age = 25;\n\n// Function\nfunction greet(person) {\n  return \`Hello, \${person}! Welcome.\`;\n}\n\nconsole.log(greet(name)); // "Hello, Alice! Welcome."\n\n// Array methods\nconst numbers = [1, 2, 3, 4, 5];\nconst doubled = numbers.map(n => n * 2);\nconsole.log(doubled); // [2, 4, 6, 8, 10]`,
                keyPoints: [
                  "JavaScript adds interactivity to web pages",
                  "Use let/const for variable declarations (avoid var)",
                  "Template literals use backticks for string interpolation",
                  "Arrow functions provide concise syntax",
                ],
              },
            ],
          },
          {
            id: "js-dom",
            title: "DOM Manipulation",
            lessons: [
              {
                id: "dom-basics",
                title: "Working with the DOM",
                content: `The Document Object Model (DOM) is a programming interface that represents HTML as a tree of objects. JavaScript can access and modify any element in this tree.\n\nYou can select elements, change their content, modify styles, add or remove elements, and respond to user events like clicks and keyboard input.`,
                codeExample: `// Select elements\nconst heading = document.querySelector('h1');\nconst buttons = document.querySelectorAll('.btn');\n\n// Modify content\nheading.textContent = 'Updated Title';\nheading.style.color = '#4f46e5';\n\n// Add event listener\nconst btn = document.querySelector('#myBtn');\nbtn.addEventListener('click', () => {\n  alert('Button clicked!');\n});\n\n// Create and append element\nconst newPara = document.createElement('p');\nnewPara.textContent = 'Dynamically added!';\ndocument.body.appendChild(newPara);`,
                keyPoints: [
                  "querySelector selects the first matching element",
                  "querySelectorAll selects all matching elements",
                  "addEventListener attaches event handlers",
                  "createElement and appendChild add new elements",
                ],
              },
            ],
          },
          {
            id: "js-es6",
            title: "ES6+ Features",
            lessons: [
              {
                id: "es6-features",
                title: "Modern JavaScript Features",
                content: `ES6 (ECMAScript 2015) introduced many powerful features that make JavaScript code cleaner and more expressive. These include destructuring, spread operator, promises, async/await, modules, and more.`,
                codeExample: `// Destructuring\nconst { name, age } = { name: 'Bob', age: 30 };\nconst [first, ...rest] = [1, 2, 3, 4];\n\n// Spread operator\nconst arr1 = [1, 2];\nconst arr2 = [...arr1, 3, 4]; // [1, 2, 3, 4]\n\n// Async/Await\nasync function fetchData() {\n  try {\n    const response = await fetch('/api/data');\n    const data = await response.json();\n    return data;\n  } catch (error) {\n    console.error('Failed:', error);\n  }\n}\n\n// Optional chaining\nconst city = user?.address?.city ?? 'Unknown';`,
                keyPoints: [
                  "Destructuring extracts values from objects and arrays",
                  "Spread operator (...) copies and merges arrays/objects",
                  "async/await simplifies asynchronous code",
                  "Optional chaining (?.) safely accesses nested properties",
                ],
              },
            ],
          },
          {
            id: "js-http",
            title: "HTTP Requests",
            lessons: [
              {
                id: "fetch-api",
                title: "Fetch API & HTTP Methods",
                content: `The Fetch API provides a modern way to make HTTP requests from JavaScript. It returns Promises, making it easy to work with async/await.\n\nCommon HTTP methods include GET (retrieve data), POST (send data), PUT (update data), and DELETE (remove data).`,
                codeExample: `// GET request\nconst response = await fetch('https://api.example.com/users');\nconst users = await response.json();\n\n// POST request\nconst newUser = await fetch('https://api.example.com/users', {\n  method: 'POST',\n  headers: { 'Content-Type': 'application/json' },\n  body: JSON.stringify({ name: 'Alice', email: 'alice@example.com' })\n});\n\n// Error handling\nif (!response.ok) {\n  throw new Error(\`HTTP error! Status: \${response.status}\`);\n}`,
                keyPoints: [
                  "fetch() returns a Promise that resolves to a Response",
                  "Use response.json() to parse JSON data",
                  "Set method, headers, and body for POST/PUT requests",
                  "Always handle errors with try/catch or .catch()",
                ],
              },
            ],
          },
        ],
      },
    ],
  },
  {
    pathId: "dsa",
    modules: [
      {
        id: "c-programming",
        title: "C Programming Basics",
        topics: [
          {
            id: "c-intro",
            title: "Introduction to C",
            lessons: [
              {
                id: "c-basics",
                title: "Getting Started with C",
                content: `C is a general-purpose, procedural programming language that provides low-level access to memory. It's widely used for system programming, embedded systems, and competitive programming.\n\nC programs are compiled into machine code, making them very fast. Understanding C gives you a solid foundation for learning other languages.`,
                codeExample: `#include <stdio.h>\n\nint main() {\n    // Variables and data types\n    int age = 25;\n    float gpa = 3.8;\n    char grade = 'A';\n\n    printf("Age: %d\\n", age);\n    printf("GPA: %.1f\\n", gpa);\n    printf("Grade: %c\\n", grade);\n\n    // Conditional statement\n    if (gpa >= 3.5) {\n        printf("Excellent performance!\\n");\n    }\n\n    return 0;\n}`,
                keyPoints: [
                  "C is a compiled, procedural programming language",
                  "Every C program starts with the main() function",
                  "Use printf() for formatted output",
                  "Basic types: int, float, double, char",
                ],
              },
            ],
          },
          {
            id: "c-pointers",
            title: "Pointers in C",
            lessons: [
              {
                id: "pointer-basics",
                title: "Understanding Pointers",
                content: `Pointers are variables that store memory addresses of other variables. They are one of the most powerful features of C, enabling dynamic memory allocation, efficient array handling, and data structure implementation.`,
                codeExample: `#include <stdio.h>\n\nint main() {\n    int num = 42;\n    int *ptr = &num;  // Pointer to num\n\n    printf("Value: %d\\n", num);      // 42\n    printf("Address: %p\\n", &num);   // Memory address\n    printf("Pointer: %d\\n", *ptr);   // 42 (dereferencing)\n\n    // Array and pointer relationship\n    int arr[] = {10, 20, 30, 40};\n    int *p = arr;\n\n    for (int i = 0; i < 4; i++) {\n        printf("%d ", *(p + i));\n    }\n    // Output: 10 20 30 40\n\n    return 0;\n}`,
                keyPoints: [
                  "& operator gets the address of a variable",
                  "* operator dereferences a pointer (gets value)",
                  "Array names are pointers to first element",
                  "Pointer arithmetic: p+1 moves to next element",
                ],
              },
            ],
          },
        ],
      },
      {
        id: "data-structures",
        title: "Data Structures",
        topics: [
          {
            id: "arrays-strings",
            title: "Arrays & Strings",
            lessons: [
              {
                id: "array-ops",
                title: "Array Operations",
                content: `Arrays are collections of elements stored in contiguous memory locations. They provide O(1) random access but O(n) insertion/deletion. Understanding array manipulation is fundamental to solving most DSA problems.`,
                codeExample: `#include <stdio.h>\n\n// Find maximum element\nint findMax(int arr[], int n) {\n    int max = arr[0];\n    for (int i = 1; i < n; i++) {\n        if (arr[i] > max) max = arr[i];\n    }\n    return max;\n}\n\n// Reverse array in-place\nvoid reverse(int arr[], int n) {\n    int left = 0, right = n - 1;\n    while (left < right) {\n        int temp = arr[left];\n        arr[left] = arr[right];\n        arr[right] = temp;\n        left++;\n        right--;\n    }\n}\n\nint main() {\n    int arr[] = {5, 2, 8, 1, 9};\n    printf("Max: %d\\n", findMax(arr, 5));\n    reverse(arr, 5);\n    return 0;\n}`,
                keyPoints: [
                  "Arrays have O(1) access, O(n) insert/delete",
                  "Two-pointer technique is common for array problems",
                  "Sliding window optimizes subarray problems",
                  "Always check boundary conditions",
                ],
              },
            ],
          },
          {
            id: "linked-lists",
            title: "Linked Lists",
            lessons: [
              {
                id: "singly-linked",
                title: "Singly Linked List",
                content: `A linked list is a linear data structure where elements are stored in nodes, each containing data and a pointer to the next node. Unlike arrays, linked lists allow efficient O(1) insertion and deletion at known positions.`,
                codeExample: `#include <stdio.h>\n#include <stdlib.h>\n\ntypedef struct Node {\n    int data;\n    struct Node* next;\n} Node;\n\nNode* createNode(int data) {\n    Node* newNode = (Node*)malloc(sizeof(Node));\n    newNode->data = data;\n    newNode->next = NULL;\n    return newNode;\n}\n\nvoid insertAtHead(Node** head, int data) {\n    Node* newNode = createNode(data);\n    newNode->next = *head;\n    *head = newNode;\n}\n\nvoid printList(Node* head) {\n    Node* temp = head;\n    while (temp != NULL) {\n        printf("%d -> ", temp->data);\n        temp = temp->next;\n    }\n    printf("NULL\\n");\n}`,
                keyPoints: [
                  "Each node contains data and a pointer to next",
                  "O(1) insertion/deletion at head",
                  "O(n) access (no random access)",
                  "Use double pointer (**) to modify head in functions",
                ],
              },
            ],
          },
          {
            id: "stacks-queues",
            title: "Stacks & Queues",
            lessons: [
              {
                id: "stack-impl",
                title: "Stack Implementation",
                content: `A stack is a LIFO (Last In, First Out) data structure. Think of a stack of plates — you can only add or remove from the top. Stacks are used in function call management, expression evaluation, undo operations, and DFS traversal.`,
                codeExample: `#define MAX 100\n\ntypedef struct {\n    int items[MAX];\n    int top;\n} Stack;\n\nvoid init(Stack* s) { s->top = -1; }\nint isEmpty(Stack* s) { return s->top == -1; }\nint isFull(Stack* s) { return s->top == MAX - 1; }\n\nvoid push(Stack* s, int val) {\n    if (!isFull(s)) s->items[++s->top] = val;\n}\n\nint pop(Stack* s) {\n    if (!isEmpty(s)) return s->items[s->top--];\n    return -1;\n}\n\nint peek(Stack* s) {\n    if (!isEmpty(s)) return s->items[s->top];\n    return -1;\n}`,
                keyPoints: [
                  "LIFO: Last In, First Out",
                  "Core operations: push, pop, peek — all O(1)",
                  "Used in DFS, expression parsing, undo features",
                  "Can be implemented with arrays or linked lists",
                ],
              },
            ],
          },
          {
            id: "trees-topic",
            title: "Trees",
            lessons: [
              {
                id: "binary-tree",
                title: "Binary Trees & BST",
                content: `A binary tree is a hierarchical data structure where each node has at most two children. A Binary Search Tree (BST) maintains the property that left children are smaller and right children are larger than the parent.`,
                codeExample: `typedef struct TreeNode {\n    int data;\n    struct TreeNode* left;\n    struct TreeNode* right;\n} TreeNode;\n\nTreeNode* insert(TreeNode* root, int key) {\n    if (root == NULL) {\n        TreeNode* node = (TreeNode*)malloc(sizeof(TreeNode));\n        node->data = key;\n        node->left = node->right = NULL;\n        return node;\n    }\n    if (key < root->data)\n        root->left = insert(root->left, key);\n    else\n        root->right = insert(root->right, key);\n    return root;\n}\n\n// Inorder traversal (sorted order for BST)\nvoid inorder(TreeNode* root) {\n    if (root) {\n        inorder(root->left);\n        printf("%d ", root->data);\n        inorder(root->right);\n    }\n}`,
                keyPoints: [
                  "BST: left < parent < right",
                  "Inorder traversal gives sorted output",
                  "Average operations: O(log n), worst: O(n)",
                  "Traversals: Inorder, Preorder, Postorder, Level-order",
                ],
              },
            ],
          },
        ],
      },
      {
        id: "algorithms",
        title: "Algorithms",
        topics: [
          {
            id: "sorting",
            title: "Sorting Algorithms",
            lessons: [
              {
                id: "sort-overview",
                title: "Sorting Overview",
                content: `Sorting algorithms arrange elements in a specific order. Understanding time and space complexity of different algorithms helps choose the right one for each scenario.\n\n**Bubble Sort** O(n²), **Merge Sort** O(n log n), **Quick Sort** O(n log n) average.`,
                codeExample: `// Quick Sort\nvoid swap(int* a, int* b) {\n    int t = *a; *a = *b; *b = t;\n}\n\nint partition(int arr[], int low, int high) {\n    int pivot = arr[high];\n    int i = low - 1;\n    for (int j = low; j < high; j++) {\n        if (arr[j] < pivot) {\n            i++;\n            swap(&arr[i], &arr[j]);\n        }\n    }\n    swap(&arr[i + 1], &arr[high]);\n    return i + 1;\n}\n\nvoid quickSort(int arr[], int low, int high) {\n    if (low < high) {\n        int pi = partition(arr, low, high);\n        quickSort(arr, low, pi - 1);\n        quickSort(arr, pi + 1, high);\n    }\n}`,
                keyPoints: [
                  "Bubble/Selection/Insertion Sort: O(n²)",
                  "Merge Sort: O(n log n), stable, uses extra space",
                  "Quick Sort: O(n log n) average, in-place",
                  "Choose based on data size and constraints",
                ],
              },
            ],
          },
          {
            id: "dynamic-prog",
            title: "Dynamic Programming",
            lessons: [
              {
                id: "dp-intro",
                title: "Introduction to DP",
                content: `Dynamic Programming solves complex problems by breaking them into overlapping subproblems and storing results to avoid redundant computation. Two approaches exist: **Top-down** (memoization) and **Bottom-up** (tabulation).`,
                codeExample: `// Fibonacci - Bottom-up DP\nint fibonacci(int n) {\n    if (n <= 1) return n;\n    int dp[n + 1];\n    dp[0] = 0;\n    dp[1] = 1;\n    for (int i = 2; i <= n; i++) {\n        dp[i] = dp[i-1] + dp[i-2];\n    }\n    return dp[n];\n}\n\n// 0/1 Knapsack\nint knapsack(int W, int wt[], int val[], int n) {\n    int dp[n+1][W+1];\n    for (int i = 0; i <= n; i++) {\n        for (int w = 0; w <= W; w++) {\n            if (i == 0 || w == 0)\n                dp[i][w] = 0;\n            else if (wt[i-1] <= w)\n                dp[i][w] = fmax(val[i-1] + dp[i-1][w-wt[i-1]], dp[i-1][w]);\n            else\n                dp[i][w] = dp[i-1][w];\n        }\n    }\n    return dp[n][W];\n}`,
                keyPoints: [
                  "Identify overlapping subproblems",
                  "Memoization = top-down + cache",
                  "Tabulation = bottom-up + table",
                  "Classic problems: Fibonacci, Knapsack, LCS, LIS",
                ],
              },
            ],
          },
        ],
      },
    ],
  },
  {
    pathId: "aptitude",
    modules: [
      {
        id: "quantitative",
        title: "Quantitative Aptitude",
        topics: [
          {
            id: "number-systems",
            title: "Number Systems",
            lessons: [
              {
                id: "numbers-basics",
                title: "Types of Numbers",
                content: `Understanding number systems is the foundation of quantitative aptitude. Numbers can be classified into natural numbers, whole numbers, integers, rational numbers, and irrational numbers.\n\n**Divisibility rules** are essential shortcuts:\n- Divisible by 2: last digit is even\n- Divisible by 3: sum of digits divisible by 3\n- Divisible by 9: sum of digits divisible by 9`,
                keyPoints: [
                  "Natural numbers: 1, 2, 3, ... (positive counting numbers)",
                  "Learn divisibility rules for 2, 3, 4, 5, 6, 8, 9, 11",
                  "HCF/GCD and LCM are fundamental concepts",
                  "Prime factorization helps solve HCF/LCM problems",
                ],
              },
            ],
          },
          {
            id: "percentages",
            title: "Percentages & Profit/Loss",
            lessons: [
              {
                id: "percentage-basics",
                title: "Percentage Calculations",
                content: `Percentages express a number as a fraction of 100. They are widely used in profit/loss, discounts, interest calculations, and data interpretation.\n\n**Key formulas:**\n- Percentage = (Part / Whole) × 100\n- Profit % = (Profit / Cost Price) × 100\n- Discount % = (Discount / Marked Price) × 100`,
                keyPoints: [
                  "Percentage increase = (Change / Original) × 100",
                  "Successive discounts are NOT simply added",
                  "CP, SP, Profit%, Loss% relationships",
                  "Memorize fraction-percentage equivalents for speed",
                ],
              },
            ],
          },
          {
            id: "time-work",
            title: "Time & Work",
            lessons: [
              {
                id: "time-work-basics",
                title: "Time and Work Problems",
                content: `Time and work problems involve calculating how long it takes for one or more workers to complete a task. The key concept is work rate: if A can finish a job in 'n' days, A's rate = 1/n per day.\n\nWhen multiple people work together, their rates add up.`,
                keyPoints: [
                  "Work rate = 1 / Total time",
                  "Combined rate = sum of individual rates",
                  "Use LCM method for quick calculations",
                  "Pipes and cisterns follow the same logic",
                ],
              },
            ],
          },
        ],
      },
      {
        id: "logical-reasoning",
        title: "Logical Reasoning",
        topics: [
          {
            id: "patterns",
            title: "Pattern Recognition",
            lessons: [
              {
                id: "series-patterns",
                title: "Number & Letter Series",
                content: `Series problems test your ability to identify patterns in sequences. Look for arithmetic progressions, geometric progressions, alternating patterns, or combinations.\n\n**Example:** 2, 6, 12, 20, 30, ?\nDifferences: 4, 6, 8, 10 → next difference = 12, answer = 42`,
                keyPoints: [
                  "Check differences between consecutive terms",
                  "Look for AP, GP, or mixed patterns",
                  "Letter series: A=1, B=2 ... Z=26",
                  "Some series have alternating patterns",
                ],
              },
            ],
          },
          {
            id: "syllogisms",
            title: "Syllogisms & Logical Deduction",
            lessons: [
              {
                id: "syllogism-basics",
                title: "Solving Syllogisms",
                content: `Syllogisms are logical arguments where conclusions are drawn from two or more premises. Use Venn diagrams to visualize and solve.\n\n**Types of statements:** All, Some, No, Some...not\n\n**Example:**\nPremise 1: All cats are animals.\nPremise 2: Some animals are pets.\nConclusion: Some cats are pets. → Not necessarily true.`,
                keyPoints: [
                  "Draw Venn diagrams for each premise",
                  "All A are B doesn't mean All B are A",
                  "Some A are B = Some B are A (converse is true)",
                  "Check all possible Venn diagram configurations",
                ],
              },
            ],
          },
        ],
      },
      {
        id: "verbal-ability",
        title: "Verbal Ability",
        topics: [
          {
            id: "reading-comp",
            title: "Reading Comprehension",
            lessons: [
              {
                id: "rc-strategies",
                title: "RC Strategies",
                content: `Reading comprehension tests your ability to understand, analyze, and infer from written passages. Effective strategies include skimming for main ideas, identifying the author's tone, and distinguishing between facts and opinions.\n\n**Approach:** Read the questions first, then scan the passage for relevant sections.`,
                keyPoints: [
                  "Read questions before the passage",
                  "Identify main idea of each paragraph",
                  "Look for keywords that match question terms",
                  "Eliminate options that contradict the passage",
                ],
              },
            ],
          },
        ],
      },
    ],
  },
  {
    pathId: "frontend-expert",
    modules: [
      {
        id: "react-fundamentals",
        title: "React Fundamentals",
        topics: [
          {
            id: "react-intro",
            title: "Introduction to React",
            lessons: [
              {
                id: "react-basics",
                title: "Components & JSX",
                content: `React is a JavaScript library for building user interfaces using reusable components. Components are the building blocks — each one encapsulates its own logic and UI.\n\nJSX (JavaScript XML) allows you to write HTML-like syntax in JavaScript. It gets transpiled to React.createElement() calls.`,
                codeExample: `// Functional Component\nfunction Welcome({ name }) {\n  return (\n    <div className="welcome-card">\n      <h1>Hello, {name}!</h1>\n      <p>Welcome to React.</p>\n    </div>\n  );\n}\n\n// Using the component\nfunction App() {\n  return (\n    <div>\n      <Welcome name="Alice" />\n      <Welcome name="Bob" />\n    </div>\n  );\n}\n\nexport default App;`,
                keyPoints: [
                  "Components are reusable UI building blocks",
                  "JSX lets you write HTML-like syntax in JS",
                  "Props pass data from parent to child",
                  "Components must return a single root element",
                ],
              },
            ],
          },
          {
            id: "react-hooks",
            title: "React Hooks",
            lessons: [
              {
                id: "hooks-overview",
                title: "useState & useEffect",
                content: `Hooks let you use state and other React features in functional components. The two most essential hooks are useState (for managing state) and useEffect (for side effects like API calls, subscriptions, etc.).`,
                codeExample: `import { useState, useEffect } from 'react';\n\nfunction UserProfile({ userId }) {\n  const [user, setUser] = useState(null);\n  const [loading, setLoading] = useState(true);\n\n  useEffect(() => {\n    async function fetchUser() {\n      setLoading(true);\n      const res = await fetch(\`/api/users/\${userId}\`);\n      const data = await res.json();\n      setUser(data);\n      setLoading(false);\n    }\n    fetchUser();\n  }, [userId]); // Re-run when userId changes\n\n  if (loading) return <p>Loading...</p>;\n  return <h2>{user.name}</h2>;\n}`,
                keyPoints: [
                  "useState returns [value, setter] pair",
                  "useEffect runs after render; dependency array controls re-runs",
                  "Empty dependency array [] = run once on mount",
                  "Custom hooks extract reusable logic",
                ],
              },
            ],
          },
        ],
      },
      {
        id: "advanced-css",
        title: "Advanced CSS3",
        topics: [
          {
            id: "css-animations",
            title: "CSS Animations & Transitions",
            lessons: [
              {
                id: "animations-basics",
                title: "Keyframes & Transitions",
                content: `CSS animations and transitions bring interfaces to life. Transitions handle simple state changes (hover, focus), while keyframe animations allow complex multi-step sequences.\n\nUse \`transition\` for hover effects and \`@keyframes\` for loading spinners, entrance animations, etc.`,
                codeExample: `/* Smooth transition */\n.button {\n  background: #4f46e5;\n  transition: all 0.3s ease;\n}\n.button:hover {\n  background: #4338ca;\n  transform: translateY(-2px);\n  box-shadow: 0 4px 12px rgba(79, 70, 229, 0.4);\n}\n\n/* Keyframe animation */\n@keyframes fadeInUp {\n  from {\n    opacity: 0;\n    transform: translateY(20px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n\n.card {\n  animation: fadeInUp 0.5s ease-out;\n}`,
                keyPoints: [
                  "transition: property duration timing-function",
                  "@keyframes define multi-step animations",
                  "Use transform for GPU-accelerated animations",
                  "will-change hints the browser for optimization",
                ],
              },
            ],
          },
        ],
      },
      {
        id: "devops-basics",
        title: "DevOps Fundamentals",
        topics: [
          {
            id: "git-github",
            title: "Git & GitHub",
            lessons: [
              {
                id: "git-basics",
                title: "Version Control with Git",
                content: `Git is a distributed version control system that tracks changes in your code. It allows multiple developers to collaborate, create branches, merge features, and maintain a complete history of changes.\n\nGitHub is a platform that hosts Git repositories and provides collaboration tools like pull requests and issues.`,
                codeExample: `# Initialize a repository\ngit init\n\n# Stage and commit\ngit add .\ngit commit -m "Initial commit"\n\n# Create and switch to a branch\ngit checkout -b feature/navbar\n\n# Push to remote\ngit remote add origin https://github.com/user/repo.git\ngit push -u origin main\n\n# Pull request workflow\ngit checkout -b feature/login\n# ... make changes ...\ngit add .\ngit commit -m "Add login form"\ngit push origin feature/login\n# Create PR on GitHub`,
                keyPoints: [
                  "git add stages changes, git commit saves them",
                  "Branches isolate features from main codebase",
                  "Pull requests enable code review before merging",
                  "Always write meaningful commit messages",
                ],
              },
            ],
          },
        ],
      },
    ],
  },
  {
    pathId: "fullstack",
    modules: [
      {
        id: "nodejs",
        title: "Node.js & Express",
        topics: [
          {
            id: "node-intro",
            title: "Introduction to Node.js",
            lessons: [
              {
                id: "node-basics",
                title: "Node.js Basics",
                content: `Node.js is a JavaScript runtime built on Chrome's V8 engine that allows running JavaScript on the server side. It uses an event-driven, non-blocking I/O model, making it ideal for building scalable network applications.\n\nExpress.js is the most popular web framework for Node.js, providing a simple API for building web servers and APIs.`,
                codeExample: `const express = require('express');\nconst app = express();\n\napp.use(express.json());\n\n// Routes\napp.get('/api/users', (req, res) => {\n  res.json([{ id: 1, name: 'Alice' }]);\n});\n\napp.post('/api/users', (req, res) => {\n  const { name, email } = req.body;\n  // Save to database...\n  res.status(201).json({ id: 2, name, email });\n});\n\napp.listen(3000, () => {\n  console.log('Server running on port 3000');\n});`,
                keyPoints: [
                  "Node.js runs JavaScript on the server",
                  "Express simplifies HTTP server creation",
                  "Middleware processes requests in sequence",
                  "Use app.get/post/put/delete for REST endpoints",
                ],
              },
            ],
          },
        ],
      },
      {
        id: "mongodb",
        title: "MongoDB",
        topics: [
          {
            id: "mongo-intro",
            title: "Introduction to MongoDB",
            lessons: [
              {
                id: "mongo-basics",
                title: "NoSQL with MongoDB",
                content: `MongoDB is a NoSQL database that stores data in flexible, JSON-like documents called BSON. Unlike SQL databases, MongoDB doesn't require a fixed schema, making it easy to evolve your data model.\n\nMongoDB uses collections (similar to tables) and documents (similar to rows).`,
                codeExample: `const { MongoClient } = require('mongodb');\n\nasync function main() {\n  const client = new MongoClient('mongodb://localhost:27017');\n  await client.connect();\n\n  const db = client.db('myapp');\n  const users = db.collection('users');\n\n  // Insert\n  await users.insertOne({ name: 'Alice', age: 25, skills: ['React', 'Node'] });\n\n  // Find\n  const user = await users.findOne({ name: 'Alice' });\n\n  // Update\n  await users.updateOne({ name: 'Alice' }, { $set: { age: 26 } });\n\n  // Aggregate\n  const results = await users.aggregate([\n    { $match: { age: { $gte: 20 } } },\n    { $group: { _id: null, avgAge: { $avg: '$age' } } }\n  ]).toArray();\n}`,
                keyPoints: [
                  "Documents are JSON-like objects (BSON format)",
                  "Collections hold groups of documents",
                  "No fixed schema — flexible data modeling",
                  "CRUD: insertOne, findOne, updateOne, deleteOne",
                ],
              },
            ],
          },
        ],
      },
      {
        id: "fullstack-react",
        title: "React for Full Stack",
        topics: [
          {
            id: "state-management",
            title: "State Management",
            lessons: [
              {
                id: "context-redux",
                title: "Context API & State Libraries",
                content: `As applications grow, managing state becomes complex. React's Context API avoids prop drilling for global data. For larger apps, state management libraries like Redux Toolkit or Zustand provide structured solutions.`,
                codeExample: `// Context API example\nimport { createContext, useContext, useState } from 'react';\n\nconst AuthContext = createContext(null);\n\nexport function AuthProvider({ children }) {\n  const [user, setUser] = useState(null);\n\n  const login = (userData) => setUser(userData);\n  const logout = () => setUser(null);\n\n  return (\n    <AuthContext.Provider value={{ user, login, logout }}>\n      {children}\n    </AuthContext.Provider>\n  );\n}\n\n// Use in any component\nfunction Profile() {\n  const { user, logout } = useContext(AuthContext);\n  return user ? <p>Hi, {user.name} <button onClick={logout}>Logout</button></p> : <p>Please login</p>;\n}`,
                keyPoints: [
                  "Context API for light global state (theme, auth)",
                  "Redux Toolkit for complex state with actions/reducers",
                  "Zustand is a simpler alternative to Redux",
                  "Avoid putting everything in global state",
                ],
              },
            ],
          },
        ],
      },
      {
        id: "deployment",
        title: "Cloud Deployment",
        topics: [
          {
            id: "deploy-basics",
            title: "Deploying Applications",
            lessons: [
              {
                id: "deploy-overview",
                title: "Deployment Strategies",
                content: `Deploying a full-stack app involves hosting both the frontend and backend, setting up a database, configuring environment variables, and setting up CI/CD pipelines.\n\nPopular platforms: Vercel/Netlify (frontend), Railway/Render (backend), MongoDB Atlas (database).`,
                keyPoints: [
                  "Separate frontend and backend deployments",
                  "Use environment variables for secrets",
                  "Set up CI/CD with GitHub Actions",
                  "Monitor with logging and error tracking",
                ],
              },
            ],
          },
        ],
      },
    ],
  },
  {
    pathId: "data-science",
    modules: [
      {
        id: "python-basics",
        title: "Python Programming",
        topics: [
          {
            id: "python-intro",
            title: "Python Fundamentals",
            lessons: [
              {
                id: "python-basics-lesson",
                title: "Getting Started with Python",
                content: `Python is a high-level, interpreted programming language known for its readability and versatility. It's the go-to language for data science, machine learning, automation, and web development.\n\nPython's rich ecosystem of libraries (NumPy, Pandas, Matplotlib, Scikit-learn, TensorFlow) makes it the dominant language in data science.`,
                codeExample: `# Variables and types\nname = "Alice"\nage = 25\nscores = [85, 92, 78, 96]\n\n# List comprehension\nsquares = [x**2 for x in range(10)]\n\n# Dictionary\nstudent = {"name": "Alice", "grade": "A", "gpa": 3.8}\n\n# Function with type hints\ndef calculate_average(numbers: list[float]) -> float:\n    return sum(numbers) / len(numbers)\n\nprint(f"{name}'s average: {calculate_average(scores):.1f}")`,
                keyPoints: [
                  "Python uses indentation for code blocks",
                  "Dynamic typing — no need to declare types",
                  "List comprehensions for concise loops",
                  "f-strings for formatted string output",
                ],
              },
            ],
          },
        ],
      },
      {
        id: "data-analysis",
        title: "Data Analysis",
        topics: [
          {
            id: "pandas-numpy",
            title: "Pandas & NumPy",
            lessons: [
              {
                id: "pandas-basics",
                title: "Data Manipulation with Pandas",
                content: `Pandas is the primary library for data manipulation and analysis. Its DataFrame structure is like a spreadsheet in Python — rows and columns with labels.\n\nNumPy provides high-performance numerical operations on arrays and matrices, forming the foundation for Pandas and ML libraries.`,
                codeExample: `import pandas as pd\nimport numpy as np\n\n# Create DataFrame\ndf = pd.DataFrame({\n    'Name': ['Alice', 'Bob', 'Charlie'],\n    'Age': [25, 30, 28],\n    'Score': [85, 92, 78]\n})\n\n# Filter and aggregate\nhigh_scorers = df[df['Score'] > 80]\navg_age = df['Age'].mean()\n\n# Group by\ndf.groupby('Department')['Salary'].agg(['mean', 'max'])\n\n# NumPy operations\narr = np.array([1, 2, 3, 4, 5])\nprint(arr.mean(), arr.std())`,
                keyPoints: [
                  "DataFrame: 2D labeled data structure",
                  "Use .loc[] for label-based, .iloc[] for index-based access",
                  "groupby() for aggregation operations",
                  "NumPy arrays are faster than Python lists",
                ],
              },
            ],
          },
        ],
      },
      {
        id: "machine-learning",
        title: "Machine Learning",
        topics: [
          {
            id: "ml-intro",
            title: "ML Fundamentals",
            lessons: [
              {
                id: "ml-basics",
                title: "Introduction to Machine Learning",
                content: `Machine Learning is a subset of AI where systems learn patterns from data without being explicitly programmed. There are three main types:\n\n1. **Supervised Learning** — labeled data (classification, regression)\n2. **Unsupervised Learning** — unlabeled data (clustering, dimensionality reduction)\n3. **Reinforcement Learning** — learning through rewards`,
                codeExample: `from sklearn.model_selection import train_test_split\nfrom sklearn.ensemble import RandomForestClassifier\nfrom sklearn.metrics import accuracy_score\n\n# Prepare data\nX_train, X_test, y_train, y_test = train_test_split(\n    X, y, test_size=0.2, random_state=42\n)\n\n# Train model\nmodel = RandomForestClassifier(n_estimators=100)\nmodel.fit(X_train, y_train)\n\n# Predict and evaluate\npredictions = model.predict(X_test)\naccuracy = accuracy_score(y_test, predictions)\nprint(f"Accuracy: {accuracy:.2%}")`,
                keyPoints: [
                  "Supervised: classification (categories) & regression (continuous)",
                  "Always split data into train/test sets",
                  "Feature engineering significantly impacts model performance",
                  "Evaluate with appropriate metrics (accuracy, F1, RMSE)",
                ],
              },
            ],
          },
          {
            id: "deep-learning",
            title: "Deep Learning",
            lessons: [
              {
                id: "dl-basics",
                title: "Neural Networks",
                content: `Deep learning uses artificial neural networks with multiple layers to learn hierarchical representations of data. TensorFlow and PyTorch are the most popular frameworks.\n\nNeural networks excel at tasks like image recognition, natural language processing, and generative AI.`,
                codeExample: `import tensorflow as tf\nfrom tensorflow.keras import layers, models\n\n# Build a simple neural network\nmodel = models.Sequential([\n    layers.Dense(128, activation='relu', input_shape=(784,)),\n    layers.Dropout(0.3),\n    layers.Dense(64, activation='relu'),\n    layers.Dropout(0.2),\n    layers.Dense(10, activation='softmax')\n])\n\nmodel.compile(\n    optimizer='adam',\n    loss='sparse_categorical_crossentropy',\n    metrics=['accuracy']\n)\n\n# Train\nmodel.fit(X_train, y_train, epochs=10, batch_size=32,\n          validation_split=0.2)`,
                keyPoints: [
                  "Neural networks have input, hidden, and output layers",
                  "Activation functions introduce non-linearity",
                  "Dropout prevents overfitting",
                  "CNN for images, RNN/Transformer for sequences",
                ],
              },
            ],
          },
        ],
      },
    ],
  },
  {
    pathId: "cloud-computing",
    modules: [
      {
        id: "cloud-intro",
        title: "Cloud Fundamentals",
        topics: [
          {
            id: "cloud-concepts",
            title: "Cloud Computing Concepts",
            lessons: [
              {
                id: "cloud-basics",
                title: "What is Cloud Computing?",
                content: `Cloud computing delivers computing services — servers, storage, databases, networking, software — over the internet. Instead of owning infrastructure, you rent it on-demand.\n\n**Service Models:**\n- IaaS (Infrastructure): Virtual machines, storage\n- PaaS (Platform): Heroku, Google App Engine\n- SaaS (Software): Gmail, Slack, Salesforce`,
                keyPoints: [
                  "Pay-as-you-go model reduces upfront costs",
                  "IaaS, PaaS, SaaS are the three service models",
                  "Major providers: AWS, Azure, Google Cloud",
                  "Benefits: scalability, reliability, global reach",
                ],
              },
            ],
          },
        ],
      },
    ],
  },
  {
    pathId: "cybersecurity",
    modules: [
      {
        id: "security-fundamentals",
        title: "Security Fundamentals",
        topics: [
          {
            id: "security-intro",
            title: "Introduction to Cybersecurity",
            lessons: [
              {
                id: "security-basics",
                title: "Cybersecurity Basics",
                content: `Cybersecurity involves protecting systems, networks, and data from digital attacks. The CIA triad — Confidentiality, Integrity, and Availability — forms the foundation of security practices.\n\nCommon threats include phishing, malware, SQL injection, XSS, and DDoS attacks.`,
                keyPoints: [
                  "CIA Triad: Confidentiality, Integrity, Availability",
                  "Common attacks: phishing, SQL injection, XSS, CSRF",
                  "Defense in depth: multiple security layers",
                  "Regular updates and patches are critical",
                ],
              },
            ],
          },
        ],
      },
    ],
  },
];

export function getPathContent(pathId: string): PathContent | undefined {
  return learningContent.find((p) => p.pathId === pathId);
}

export function getAllTopicIds(pathId: string): string[] {
  const content = getPathContent(pathId);
  if (!content) return [];
  return content.modules.flatMap((m) =>
    m.topics.flatMap((t) => t.lessons.map((l) => `${t.id}/${l.id}`))
  );
}
