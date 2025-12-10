// Eduqas A Level English Language - Component 1 Section B
// Summer 2023 - Question 2: Child Language Acquisition
// 60 marks | 1 hour recommended

window.ESSAY_CONFIG = {
  title: "A Level English Language - Child Language Acquisition",
  subject: "Eduqas A Level English Language",
  yearGroup: "Year 13",
  essayTitle: "Using this extract as a starting point, analyse and evaluate some of the ways in which children acquire language between eighteen months and four years of age.",
  
  instructions: `<p>Read the following data carefully, then write an extended analytical response.</p>

<h4>The Extract:</h4>

<div style="background-color: #f5f5f5; padding: 15px; border-left: 4px solid #4a90d9; margin: 15px 0; font-family: monospace;">
<p><strong>Mark:</strong> Play. Play. Play, Mummy. Mummy, come on.</p>
<p><strong>Mother:</strong> All right.</p>
<p><strong>Mark:</strong> Helen play, please? (pause) Helen still gone sleep, Mummy?</p>
<p><strong>Mother:</strong> No. Your sister's up there talking, isn't she?</p>
<p><strong>Mark:</strong> Yes. (playing with his toys) Top of the coach. Broken.</p>
<p><strong>Mother:</strong> Who broke the coach?</p>
<p><strong>Mark:</strong> Mark did.</p>
<p><strong>Mother:</strong> How?</p>
<p><strong>Mark:</strong> Out.</p>
<p><strong>Mother:</strong> How did you break it?</p>
<p><strong>Mark:</strong> Dunno (pause) Mummy mend it.</p>
<p><strong>Mother:</strong> I can't, darling. Look the wheels have gone as well.</p>
<p><strong>Mark:</strong> Oh I want Daddy taked it to work (pause) mend it.</p>
<p><strong>Mother:</strong> Daddy did?</p>
<p><strong>Mark:</strong> Daddy take it away, take it to work. Mend it.</p>
</div>

<h4>In your response, you must:</h4>
<ul>
<li>Apply appropriate methods of language analysis, using associated terminology and coherent expression</li>
<li>Demonstrate understanding of relevant language concepts and issues</li>
<li>Consider contextual factors and language features associated with the construction of meaning</li>
<li>Provide supporting examples</li>
</ul>

<h4>Assessment Objectives:</h4>
<ul>
<li><strong>AO1:</strong> Apply appropriate methods of language analysis (20 marks)</li>
<li><strong>AO2:</strong> Demonstrate critical understanding of concepts and issues (20 marks)</li>
<li><strong>AO3:</strong> Analyse and evaluate contextual factors and meaning construction (20 marks)</li>
</ul>`,

  maxAttempts: 3,
  minWordsPerParagraph: 80,
  targetWordsPerParagraph: 150,
  teacherPassword: "teacher123",
  
  paragraphs: [
    {
      id: 1,
      title: "Introduction: Setting Up the Analysis",
      type: "introduction",
      learningMaterial: `## Introduction Guidance

Your introduction should establish your analytical approach and demonstrate immediate engagement with the extract.

### What to Include:
- **Identify the developmental stage**: Mark appears to be in the late two-word/early telegraphic stage, suggesting he is approximately 2-3 years old
- **Establish the key focus**: This essay explores how children acquire language between 18 months and 4 years
- **Signal your approach**: Indicate you will analyse the extract AND bring in wider knowledge of theories and research

### Key Terminology to Use:
- **Developmental stages**: holophrastic stage, two-word stage, telegraphic stage, post-telegraphic stage
- **Child-Directed Speech (CDS)** or "motherese/parentese"
- **Language Acquisition Device (LAD)** - Chomsky's concept

### From the Extract:
Note how Mark uses phrases like "Play. Play." (repetition for emphasis), "Helen play, please?" (early question formation), and "Daddy taked it" (virtuous error/overgeneralisation).

### Theorists to Consider Mentioning:
- Chomsky (Nativist theory)
- Skinner (Behaviourist theory)
- Piaget (Cognitive theory)
- Vygotsky/Bruner (Interactionist theory)`,
      writingPrompt: "Introduce the topic of child language acquisition, identify Mark's approximate developmental stage from the extract, and outline the key areas you will explore in your essay.",
      keyPoints: [
        "Identifies Mark's developmental stage with supporting evidence from the extract",
        "Establishes clear focus on the 18 months to 4 years period",
        "Uses appropriate linguistic terminology from the outset",
        "Signals the theoretical perspectives that will be explored"
      ],
      exampleQuotes: [
        "Play. Play. Play, Mummy.",
        "Helen still gone sleep, Mummy?",
        "Daddy taked it to work"
      ],
      points: 8
    },
    {
      id: 2,
      title: "Analysis of the Extract: Grammatical Development",
      type: "body",
      learningMaterial: `## Analysing Mark's Grammar

This paragraph should provide **detailed linguistic analysis** of Mark's grammatical features in the extract.

### Key Grammatical Features to Identify:

**1. Telegraphic Speech**
Mark often omits function words (determiners, auxiliary verbs):
- "Top of the coach. Broken." - missing determiner "The" and copula verb "is"
- "Mummy mend it" - missing modal "can/will"

**2. Overgeneralisation (Virtuous Errors)**
- "Daddy **taked** it" - applying the regular past tense -ed rule to an irregular verb
- This is crucial evidence for Chomsky's Nativist theory - Mark hasn't heard adults say "taked" so must be applying an internal rule

**3. Pronoun Development**
- Mark refers to himself in third person: "Mark did" rather than "I did"
- This shows pronouns are still being acquired (relates to Bellugi's research)

**4. Question Formation**
- "Helen still gone sleep, Mummy?" - uses intonation and word order rather than auxiliaries
- Early stage of interrogative development

**5. Negation**
- "Dunno" (don't know) - contracted negative form

### Brown's Morphemes
Reference Roger Brown's research on the order of morpheme acquisition - the -ing ending, plurals, possessives, and irregular past tenses are acquired before regular past tense -ed.`,
      writingPrompt: "Analyse the grammatical features of Mark's speech in detail, identifying specific examples of telegraphic speech, overgeneralisation, and other developmental characteristics.",
      keyPoints: [
        "Identifies telegraphic speech with specific examples from the extract",
        "Explains overgeneralisation ('taked') and its theoretical significance",
        "Discusses pronoun development (third person self-reference)",
        "Analyses question formation and negation patterns",
        "Uses accurate grammatical terminology throughout"
      ],
      exampleQuotes: [
        "Top of the coach. Broken.",
        "Mummy mend it",
        "Daddy taked it to work",
        "Mark did"
      ],
      points: 12
    },
    {
      id: 3,
      title: "Lexical and Semantic Development",
      type: "body",
      learningMaterial: `## Lexical and Semantic Analysis

Explore Mark's vocabulary use and meaning-making in the extract.

### Lexical Features to Analyse:

**1. Vocabulary Range**
- Mark uses concrete nouns: "coach", "wheels", "work"
- Verbs showing action and desire: "play", "mend", "take"
- Social words: "please" - showing pragmatic awareness

**2. Semantic Understanding**
- Mark understands cause and effect: broken coach → needs mending → Daddy takes to work
- Shows logical reasoning despite limited expression

**3. Under-extension and Over-extension**
- While not directly shown, discuss how children at this stage may:
  - **Over-extend**: use "dog" for all four-legged animals
  - **Under-extend**: use "car" only for the family car

### Aitchison's Three Stages:
1. **Labelling**: linking words to objects (Mark knows "coach", "wheels")
2. **Packaging**: understanding word boundaries and categories
3. **Network-building**: connecting words in semantic fields

### Nelson's Categories of First Words:
- Naming/nominals (most common): objects, people
- Action words: verbs like "play", "mend"
- Social words: "please", greetings
- Modifiers: describing words

Mark demonstrates vocabulary typical of his developmental stage with a mix of concrete nouns and action verbs.`,
      writingPrompt: "Examine Mark's lexical choices and semantic understanding, discussing vocabulary development and how children build meaning during this developmental period.",
      keyPoints: [
        "Analyses Mark's vocabulary range with specific examples",
        "Discusses semantic development and meaning construction",
        "References relevant research (Aitchison, Nelson)",
        "Connects lexical features to the 18 months-4 years period"
      ],
      exampleQuotes: [
        "Helen play, please?",
        "Top of the coach. Broken.",
        "Look the wheels have gone"
      ],
      points: 10
    },
    {
      id: 4,
      title: "The Role of Interaction and Child-Directed Speech",
      type: "body",
      learningMaterial: `## Interaction and CDS Analysis

Examine how the mother's speech supports Mark's language development.

### Child-Directed Speech (CDS) Features:

**1. Mother's Language Modifications**
- Recasting: Mother doesn't explicitly correct but models correct forms
- "Daddy did?" - offering the correct form implicitly
- Uses questions to prompt further speech: "Who broke the coach?", "How?"

**2. Scaffolding (Bruner)**
- Mother provides a framework for conversation
- Uses the IRF pattern (Initiation-Response-Feedback)
- Supports Mark's meaning-making rather than criticising errors

**3. Turn-Taking and Conversation**
- The exchange shows clear turn-taking structure
- Mark is learning conversational norms
- Adjacency pairs: question-answer sequences

### Theoretical Perspectives on Interaction:

**Vygotsky's Zone of Proximal Development (ZPD)**
- Mother operates within Mark's ZPD
- Language slightly above Mark's current level but comprehensible
- Social interaction crucial for development

**Bruner's LASS (Language Acquisition Support System)**
- Complements Chomsky's LAD
- Caregivers provide scaffolding
- Routines and rituals support learning

**Behaviourist Elements (Skinner)**
- Some evidence of reinforcement: "All right" in response to requests
- However, overgeneralisation ("taked") challenges pure imitation theory`,
      writingPrompt: "Analyse the mother's role in supporting Mark's language development, examining features of Child-Directed Speech and the importance of interaction in language acquisition.",
      keyPoints: [
        "Identifies CDS features in the mother's speech",
        "Discusses scaffolding and recasting with examples",
        "References Bruner's LASS and Vygotsky's ZPD",
        "Evaluates the role of interaction vs innate ability"
      ],
      exampleQuotes: [
        "Who broke the coach?",
        "How did you break it?",
        "Daddy did?",
        "I can't, darling."
      ],
      points: 12
    },
    {
      id: 5,
      title: "Theoretical Perspectives: Nature vs Nurture",
      type: "body",
      learningMaterial: `## Theoretical Framework

This paragraph should demonstrate your understanding of competing theories of language acquisition.

### Nativist Theory (Chomsky)
**Evidence from the extract:**
- "Daddy taked it" - overgeneralisation proves children aren't simply imitating
- Mark applies grammatical rules he's never been taught
- Supports the existence of a **Language Acquisition Device (LAD)**
- **Universal Grammar**: innate knowledge of grammatical structure

**Supporting Research:**
- Berko Gleason's "Wug Test" (1958): children apply morphological rules to novel words
- Children worldwide follow similar acquisition patterns

### Behaviourist Theory (Skinner)
**Evidence from the extract:**
- Mark uses "please" - learned through reinforcement
- Imitation plays some role in vocabulary acquisition
- Mother's responses reinforce communication attempts

**Limitations:**
- Cannot explain overgeneralisation
- Children produce novel utterances never heard before
- Chomsky's critique of "Verbal Behaviour" (1959)

### Cognitive Theory (Piaget)
- Language development linked to cognitive development
- Object permanence must be achieved before certain language features
- Mark shows means-end reasoning: broken toy → solution (Daddy mends)

### Interactionist Theory (Vygotsky/Bruner)
- Combines nature and nurture
- Social interaction essential
- LASS works alongside LAD
- Evidence: turn-taking, scaffolding in the extract

### Case Studies:
- **Genie**: highlighted critical period for language acquisition
- **Jim** (Bard and Sachs): showed interaction is necessary even when exposed to language via TV`,
      writingPrompt: "Evaluate the competing theoretical perspectives on language acquisition, using evidence from the extract and wider research to support your analysis.",
      keyPoints: [
        "Explains Nativist theory with evidence from the extract (overgeneralisation)",
        "Acknowledges Behaviourist contributions and limitations",
        "Discusses Cognitive and Interactionist perspectives",
        "References relevant research and case studies",
        "Evaluates which theories are most persuasive"
      ],
      exampleQuotes: [
        "Daddy taked it to work",
        "Helen play, please?"
      ],
      points: 12
    },
    {
      id: 6,
      title: "Conclusion: Evaluating the Acquisition Process",
      type: "conclusion",
      learningMaterial: `## Conclusion Guidance

Your conclusion should synthesise your analysis and offer a balanced evaluation.

### What to Include:

**1. Summary of Key Points**
- Mark demonstrates typical features of the 18 months to 4 years period
- Evidence of telegraphic speech, overgeneralisation, developing pragmatics
- Mother's CDS supports but doesn't fully explain acquisition

**2. Theoretical Evaluation**
- No single theory fully explains language acquisition
- Nativist theory explains overgeneralisation but undervalues interaction
- Interactionist approach offers most balanced perspective
- Nature AND nurture both play crucial roles

**3. Wider Implications**
- Individual variation in acquisition rates
- Importance of rich linguistic environment
- The remarkable speed and uniformity of acquisition across cultures

**4. Final Reflection**
- The extract illustrates the complexity of acquisition
- Mark's errors are actually evidence of sophisticated rule-learning
- Language acquisition remains one of the most impressive human achievements

### Strong Conclusion Techniques:
- Return to the extract with fresh insight
- Avoid simply repeating earlier points
- End with a perceptive observation about language acquisition
- Maintain academic register throughout`,
      writingPrompt: "Conclude your essay by synthesising your analysis, evaluating the relative contributions of different factors in language acquisition, and offering a final assessment of how children acquire language in this crucial period.",
      keyPoints: [
        "Synthesises key analytical points from the essay",
        "Evaluates theoretical perspectives with a balanced judgement",
        "Returns to the extract with enhanced understanding",
        "Offers perceptive concluding observations",
        "Maintains coherent academic expression throughout"
      ],
      exampleQuotes: [],
      points: 6
    }
  ],
  
  gradingCriteria: {
    ao1: { 
      weight: 33, 
      description: "AO1: Apply appropriate methods of language analysis, using associated terminology and coherent written expression (20 marks)" 
    },
    ao2: { 
      weight: 33, 
      description: "AO2: Demonstrate critical understanding of concepts and issues relevant to language use (20 marks)" 
    },
    ao3: { 
      weight: 34, 
      description: "AO3: Analyse and evaluate how contextual factors and language features are associated with the construction of meaning (20 marks)" 
    }
  },

  bandDescriptors: {
    band5: {
      marks: "17-20 per AO (51-60 total)",
      ao1: "Sophisticated methods of analysis; confident use of a wide range of terminology; perceptive discussion of topic; coherent, academic style",
      ao2: "Detailed critical understanding of concepts; perceptive discussion of issues; confident and concise selection of supporting examples",
      ao3: "Confident analysis and evaluation of a range of contextual factors; productive discussion of the construction of meaning; perceptive evaluation of effectiveness of communication"
    },
    band4: {
      marks: "13-16 per AO (39-48 total)",
      ao1: "Effective methods of analysis; secure use of a range of terminology; thorough discussion of topic; expression generally accurate and clear",
      ao2: "Secure understanding of concepts; some intelligent discussion of issues; consistent selection of apt supporting examples",
      ao3: "Effective analysis and evaluation of contextual factors; some insightful discussion of the construction of meaning; purposeful evaluation of effectiveness of communication"
    },
    band3: {
      marks: "9-12 per AO (27-36 total)",
      ao1: "Sensible methods of analysis; generally sound use of terminology; competent discussion of topic; mostly accurate expression with some lapses",
      ao2: "Sound understanding of concepts; sensible discussion of issues; generally appropriate selection of supporting examples",
      ao3: "Sensible analysis and evaluation of contextual factors; generally clear discussion of the construction of meaning; relevant evaluation of effectiveness of communication"
    },
    band2: {
      marks: "5-8 per AO (15-24 total)",
      ao1: "Basic methods of analysis; using some terminology with some accuracy; uneven discussion of topic; straightforward expression, with technical inaccuracy",
      ao2: "Some understanding of concepts; basic discussion of issues; some points supported by examples",
      ao3: "Some basic analysis of contextual factors; undeveloped discussion of meaning construction; inconsistent evaluation"
    },
    band1: {
      marks: "1-4 per AO (3-12 total)",
      ao1: "Limited methods of analysis; some grasp of basic terminology; undeveloped discussion of topic; errors in expression and lapses in clarity",
      ao2: "A few simple points made about concepts; limited discussion of issues; little use of supporting examples",
      ao3: "Some basic awareness of context; little sense of how meaning is constructed; limited evaluation"
    }
  },

  keyTerminology: [
    "Language Acquisition Device (LAD)",
    "Child-Directed Speech (CDS)",
    "telegraphic speech",
    "overgeneralisation/virtuous error",
    "holophrastic stage",
    "two-word stage",
    "post-telegraphic stage",
    "scaffolding",
    "Zone of Proximal Development (ZPD)",
    "LASS (Language Acquisition Support System)",
    "morpheme",
    "inflection",
    "recasting",
    "expansion",
    "Universal Grammar",
    "critical period hypothesis"
  ],

  theoristsAndResearch: [
    { name: "Chomsky", theory: "Nativist theory, LAD, Universal Grammar" },
    { name: "Skinner", theory: "Behaviourist theory, operant conditioning" },
    { name: "Piaget", theory: "Cognitive theory, stages of development" },
    { name: "Vygotsky", theory: "Zone of Proximal Development, social interaction" },
    { name: "Bruner", theory: "LASS, scaffolding, interactionist approach" },
    { name: "Roger Brown", theory: "Order of morpheme acquisition" },
    { name: "Berko Gleason", theory: "Wug Test - morphological rules" },
    { name: "Bellugi", theory: "Pronoun and negation acquisition" },
    { name: "Aitchison", theory: "Labelling, packaging, network-building" },
    { name: "Katherine Nelson", theory: "Categories of first words" }
  ]
};