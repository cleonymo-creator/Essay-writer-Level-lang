window.ESSAY_CONFIG = {
  title: "GCSE English Language: Writing an Article",
  subject: "English Language",
  yearGroup: "Year 11",
  essayTitle: "Mobile phones should be banned in all schools.",
  instructions: "You have 45 minutes to write this article. Focus on adopting a convincing persona, using sophisticated vocabulary, and varying your punctuation.",
  
  // Original task displayed in sidebar
  originalTask: `
## Exam Question
**Question 5 (40 marks)**

"A magazine has asked for contributions for their special edition on the topic of technology in schools.

You have decided to write an article for this magazine, arguing your point of view on this statement:

**'Mobile phones should be banned in all schools.'**

Write the article for the magazine."

## Mark Scheme Summary

**Content and Organisation (24 marks)**
* **Level 4 (High):** Compelling, convincing tone; extensive and ambitious vocabulary; highly structured with sophisticated linking.
* **Level 3 (Good):** Clear tone; increasingly sophisticated vocabulary; clear paragraphs and structure.

**Technical Accuracy (16 marks)**
* **Level 4 (High):** Wide range of punctuation used correctly (colons, semi-colons, dashes); high level of grammar accuracy; sophisticated sentence structures.
  `,
  
  maxAttempts: 3,
  minWordsPerParagraph: 60,
  targetWordsPerParagraph: 100,
  teacherPassword: "teacher123",
  
  paragraphs: [
    {
      id: 1,
      title: "Introduction: The Hook & The Stance",
      type: "introduction",
      learningMaterial: `
### The Goal
Your introduction must grab the reader immediately and clearly establish your point of view. As this is an article, you should include a **Headline** at the very top.

### Techniques to use
* **The Hook:** Start with a rhetorical question, a shocking statistic, or a vivid piece of imagery.
* **The Thesis:** Clearly state your opinion on the ban. Do not sit on the fence—be "compelling."

### Vocabulary & Sentence Starters
* *Ubiquitous* (found everywhere)
* *Detrimental* (harmful)
* *Epidemic*
* *"Imagine a classroom where..."*
* *"It is an undeniable truth that..."*
      `,
      writingPrompt: "Write a catchy headline, then write an opening paragraph that hooks the reader and clearly states whether you agree or disagree with the ban.",
      keyPoints: [
        "Include a catchy Headline",
        "Clear, compelling viewpoint established immediately",
        "Ambitious vocabulary (Level 4 Content)"
      ],
      points: 5
    },
    {
      id: 2,
      title: "Body Paragraph 1: The Main Argument (Academic Impact)",
      type: "body",
      learningMaterial: `
### The Goal
Focus on your strongest argument. If you are arguing **for** the ban, focus on *distraction* and *learning*. If you are arguing **against**, focus on *educational resources*.

### Techniques to use
* **Hyperbole:** Exaggerate for effect (e.g., "We are raising a generation of zombies...").
* **Expert Opinion (Invented):** "According to Professor X..."
* **Sentence Variety:** Try starting a sentence with a verb (e.g., *"Scrolling mindlessly, students ignore..."*) or an adverb (e.g., *"Undoubtedly, the impact is..."*).

### Vocabulary
* *Cognitive development*
* *Attention span*
* *Pedagogical tool*
* *Weapon of mass distraction*
      `,
      writingPrompt: "Argue your main point regarding the impact of phones on education/learning. Use at least one complex sentence structure.",
      keyPoints: [
        "Sustained crafting of the argument",
        "Varied sentence structures (Simple, Compound, Complex)",
        "Secure spelling of complex words"
      ],
      points: 10
    },
    {
      id: 3,
      title: "Body Paragraph 2: Social & Emotional Impact",
      type: "body",
      learningMaterial: `
### The Goal
Shift the focus from "learning" to "well-being." This adds depth to your argument. Discuss cyberbullying, social isolation, or mental health.

### Techniques to use
* **Pathos (Emotive Language):** Make the reader feel something (fear, anger, sympathy).
* **The Triplet (Rule of Three):** "Bullying is relentless, invisible, and devastating."
* **Punctuation Variety:** Try to use a **colon** to introduce a list or an explanation, or a **semi-colon** to join two related sentences.

### Vocabulary
* *Insidious* (harmful in a subtle way)
* *Face-to-face interaction*
* *Cyber-bullying*
* *Sanctuary*
      `,
      writingPrompt: "Write about the social or emotional impact of phones in schools. focus on using emotive language and varied punctuation (colon or semi-colon).",
      keyPoints: [
        "Wide range of punctuation (Level 4 Accuracy)",
        "Compelling, emotive tone",
        "Structured paragraph with topic sentence"
      ],
      points: 10
    },
    {
      id: 4,
      title: "Body Paragraph 3: The Counter-Argument (Rebuttal)",
      type: "body",
      learningMaterial: `
### The Goal
To reach the top marks, you must anticipate what the opposition thinks and prove them wrong. This shows sophisticated structure.

### Structure of a Rebuttal
1.  **Acknowledge:** "Critics might argue that phones are necessary for safety..."
2.  **Pivot:** "However, this viewpoint is flawed because..."
3.  **Crush:** "School receptionists exist for emergencies; a personal device is merely a luxury."

### Vocabulary & Connectives
* *Conversely*
* *Admittedly*
* *A fallacy* (a mistaken belief)
* *Justification*
      `,
      writingPrompt: "Acknowledge an opposing view (e.g., safety, research tool) and then argue effectively against it.",
      keyPoints: [
        "Sophisticated linking/discourse markers",
        "Convincing communication",
        "Complex sentence forms"
      ],
      points: 10
    },
    {
      id: 5,
      title: "Conclusion: The Call to Action",
      type: "conclusion",
      learningMaterial: `
### The Goal
Don't just repeat what you said. Leave the reader with a final, powerful thought. Use a **cyclical structure** (reference something you mentioned in your intro).

### Techniques to use
* **Direct Address:** Speak to the reader ("You").
* **Call to Action:** Tell the school/government/parents what they must do now.
* **Short, punchy sentence:** End with impact.

### Vocabulary
* *Imperative* (of vital importance)
* *Safeguard*
* *Future generations*
* *"The time to act is now."*
      `,
      writingPrompt: "Summarize your stance powerfully and end with a call to action. Try to link back to your headline or opening hook.",
      keyPoints: [
        "Effective conclusion (structural feature)",
        "Tone remains compelling to the end",
        "High level of technical accuracy"
      ],
      points: 5
    }
  ],
  
  gradingCriteria: {
    contentAndOrganisation: {
      weight: 60,
      description: "Compelling tone, ambitious vocabulary, and structural crafting (24 marks)."
    },
    technicalAccuracy: {
      weight: 40,
      description: "Spelling, grammar, sentence variety, and wide range of punctuation (16 marks)."
    }
  }
};