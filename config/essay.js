window.ESSAY_CONFIG = {
  title: "A Level English Language - Language and Power",
  subject: "English Language",
  yearGroup: "A Level",
  essayTitle: "Analyse and evaluate the ways in which one speaker might seek to challenge the authority of another.",
  instructions: "You will write an essay analysing the provided transcript where a pupil challenges a teacher's authority. Your response should apply appropriate methods of language analysis, demonstrate understanding of relevant concepts (like power and face), and consider contextual factors. Use the transcript as a starting point but you may also bring in wider knowledge.",

  // Original task displayed in sidebar while students write
  originalTask: `
## Exam Question

**3. Read the following data.**
[Source: Martin Montgomery's An Introduction to Language and Society (Routledge 2008)]

The teacher has just given instructions concerning the completion of a written task, telling the class that underlining should be done in black.

> **Pupil:** What colour do we use to underline, miss?
> *(laughter from pupils)*
> **Teacher:** That is a stupid question. I've only just this minute said.
> **Pupil:** I know, miss.
> *(laughter from pupils)*
> **Teacher:** What is your name?
> **Pupil:** Ian Smith.
> **Teacher:** Well, you're not a very polite boy, are you?
> **Pupil:** No, miss.
> **Teacher:** In fact, you seem a very rude, very stupid kind of boy.
> **Pupil:** I am, miss.
> *(laughter from pupils)*
> **Teacher:** I see.

**Using this extract as a starting point, analyse and evaluate the ways in which one speaker might seek to challenge the authority of another. [60 marks]**

In your response to this section, you must:
* apply appropriate methods of language analysis, using associated terminology and coherent expression
* demonstrate understanding of relevant language concepts and issues
* consider contextual factors and language features associated with the construction of meaning
* provide supporting examples.

## Mark Scheme Summary

**AO1: Analysis & Terminology (20 marks)**
* **Band 5 (17-20):** Sophisticated analysis, confident terminology, perceptive discussion, academic style.
* **Band 4 (13-16):** Effective analysis, secure terminology, thorough discussion.

**AO2: Concepts & Issues (20 marks)**
* **Band 5 (17-20):** Detailed critical understanding of concepts (e.g., power, face), perceptive discussion of issues, concise supporting examples.
* **Band 4 (13-16):** Secure understanding, intelligent discussion, consistent examples.

**AO3: Context & Meaning (20 marks)**
* **Band 5 (17-20):** Confident analysis/evaluation of contextual factors, productive discussion of meaning construction, perceptive evaluation of effectiveness.
* **Band 4 (13-16):** Effective analysis of context, insightful discussion of meaning, purposeful evaluation.
  `,

  maxAttempts: 3,
  minWordsPerParagraph: 100,
  targetWordsPerParagraph: 150,
  teacherPassword: "teacher123",

  paragraphs: [
    {
      id: 1,
      title: "Introduction",
      type: "introduction",
      learningMaterial: `
## Introduction Guidance

Your introduction needs to set up the theoretical framework for analysing power and authority in language.

### Key Goals:
* **Define key concepts:** Briefly define power (instrumental vs. influential) and authority in this context.
* **Introduce the extract:** Mention the specific context (classroom discourse) and the participants (Teacher vs. Pupil).
* **Thesis Statement:** Outline your main argument. How is authority being challenged here? Is it through direct confrontation, sarcasm, or refusal to cooperate?
* **Wider Context:** Signal that you will look beyond just this extract to other contexts (e.g., political, legal, or domestic) as the question asks you to use the text as a *starting point*.

### Useful Terminology:
* Instrumental power (power enforced by authority/law)
* Influential power (power gained through persuasion)
* Asymmetrical power relationship
* Classroom discourse conventions (IRF structure - Initiation, Response, Feedback)
      `,
      writingPrompt: "Write an introduction that defines relevant concepts of power and authority, introduces the classroom extract, and outlines how the pupil challenges the teacher's status.",
      keyPoints: [
        "Clear definitions of power/authority",
        "Introduction of the specific extract context",
        "Indication of wider scope (using text as starting point)",
        "Coherent academic expression (AO1)"
      ],
      points: 5
    },
    {
      id: 2,
      title: "Analysing the Transcript: Face and Politeness",
      type: "body",
      learningMaterial: `
## Analysing the Transcript: Face and Politeness

Focus closely on the dialogue in the extract. How is the pupil "attacking" the teacher's authority?

### Concepts to Apply:
* **Goffman's Face Theory:** The pupil is threatening the teacher's *positive face* (need to be liked/respected) and *negative face* (need for freedom of action/imposition).
* **Brown and Levinson's Politeness:** The teacher *tries* to use authority ("That is a stupid question"), but the pupil's responses undermine it.
* **Face Threatening Acts (FTAs):** The pupil's "I know, miss" is a bald on-record FTA. He admits to wasting her time intentionally.
* **Vocatives:** The repeated use of "miss" is interesting. Is it respectful (mock politeness) or sarcastic? This is *ironic deference*.

### Key Evidence:
* "What colour do we use..." (Feigning ignorance to disrupt)
* "(laughter from pupils)" (The audience empowers the challenger)
* "I know, miss." (Direct challenge to the teacher's informational power)
* "I am, miss." (Agreement with the insult "rude, very stupid" disarms the teacher's power)

### Analysis Tip:
Don't just list features. Explain *how* they construct meaning. The pupil agrees with the teacher's insults ("I am, miss") to refuse the "subservient" role—he takes control by accepting the "bad boy" identity.
      `,
      writingPrompt: "Analyse the transcript focusing on how the pupil uses language to challenge authority. Apply concepts like Face Threatening Acts, irony, and the role of the audience (the other pupils).",
      keyPoints: [
        "Analysis of specific quotes (e.g., 'I know, miss')",
        "Application of Face Theory (Goffman/Brown & Levinson)",
        "Discussion of the audience's role (laughter)",
        "Evaluation of the teacher's loss of control"
      ],
      exampleQuotes: [
        "What colour do we use to underline, miss?",
        "I know, miss.",
        "I am, miss."
      ],
      points: 15
    },
    {
      id: 3,
      title: "Classroom Discourse & Structural Power",
      type: "body",
      learningMaterial: `
## Classroom Discourse & Structural Power

Zoom out to the *structure* of the conversation.

### Concepts to Apply:
* **Sinclair and Coulthard's IRF Exchange:** The typical classroom structure is Initiation (Teacher), Response (Student), Feedback (Teacher).
    * *Normal:* T: "What color?" -> P: "Black" -> T: "Good."
    * *Here:* The pupil initiates ("What colour..."), forcing the teacher to respond. He *inverts* the power structure.
* **Topic Management:** Who controls the topic? The pupil forces the teacher to repeat instructions she just gave.
* **Fairclough's Power in Discourse:** How is power negotiated? The teacher tries to use *coercive power* ("stupid question", "rude boy"), but it fails because the pupil refuses to be coerced.

### Contextual Factors:
* Why does the teacher fail? She loses her temper ("stupid", "rude"). Professional authority usually relies on staying calm.
* The pupil uses *subversive compliance*. He follows the rules of speaking (answering when asked) but subverts the *intent*.
      `,
      writingPrompt: "Evaluate the structural challenge to authority. Discuss how the pupil disrupts the standard IRF (Initiation-Response-Feedback) structure and manipulates the topic to undermine the teacher.",
      keyPoints: [
        "Use of Sinclair & Coulthard (IRF structure)",
        "Analysis of topic control/management",
        "Evaluation of the teacher's reaction (coercive language)",
        "Discussion of 'subversive compliance'"
      ],
      points: 15
    },
    {
      id: 4,
      title: "Wider Contexts: Challenging Authority Elsewhere",
      type: "body",
      learningMaterial: `
## Wider Contexts

The question asks you to use the text as a *starting point*. Now, broaden your essay to other contexts where authority is challenged.

### Possible Contexts to Compare:
* **Political Discourse:** How do interviewers challenge politicians? (e.g., Interruptions, overlapping, refusing to accept evasive answers). Or how the public challenges politicians (heckling).
* **Legal Discourse:** Courtroom exchanges. Witnesses usually must comply. What happens if a witness refuses to answer or uses slang? It challenges the *institutional power* of the court.
* **Police Interviews:** Suspects challenging police authority through silence ("no comment"), evasion, or back-chat.
* **Workplace/Domestic:** Employees challenging bosses or children challenging parents.

### Theories to Integrate:
* **Fairclough's Synthetic Personalisation:** How authority figures sometimes fake friendliness to maintain power, and how this can be challenged.
* **Giles' Accommodation Theory:** Divergence. The challenger deliberately uses language *unlike* the authority figure to distance themselves (e.g., slang vs. formal legal register).
      `,
      writingPrompt: "Broaden your analysis to other contexts. Discuss how language is used to challenge authority in political interviews, legal settings, or police interactions. Compare these to the classroom example.",
      keyPoints: [
        "Discussion of at least one other context (Political/Legal/Police)",
        "Comparison of strategies (e.g., silence vs. interruption)",
        "Application of relevant theory (e.g., Fairclough, Giles)",
        "Evaluation of effectiveness in different contexts"
      ],
      points: 15
    },
    {
      id: 5,
      title: "Conclusion",
      type: "conclusion",
      learningMaterial: `
## Conclusion

Summarise your findings on how language challenges authority.

### Key Points to Cover:
* **Recap:** Authority is not just about status (Teacher/Police); it must be *enacted* and *maintained* through language.
* **Fragility of Power:** The extract shows that power is a negotiation. If the subordinate refuses to play the game (like the pupil saying "I am, miss"), authority collapses.
* **Context is Key:** Strategies that work in a classroom (ironic politeness) might not work in a court of law (where you could be held in contempt).
* **Final Judgement:** Evaluate which strategies are most effective for challenging authority.

### Sentence Starters:
* "Ultimately, the extract demonstrates that authority is..."
* "While institutional power provides a framework, the dynamic nature of interaction means..."
* "As seen in both the classroom and wider contexts like..."
      `,
      writingPrompt: "Write a conclusion that summarises how authority is negotiated and challenged. Reflect on the idea that power is not static but constructed through interaction.",
      keyPoints: [
        "Summary of main argument",
        "Reflection on the 'negotiated' nature of power",
        "Final comparison of context effectiveness",
        "Coherent, academic closing statement"
      ],
      points: 10
    }
  ],

  gradingCriteria: {
    ao1: {
      weight: 20,
      description: "Apply appropriate methods of language analysis, using associated terminology and coherent written expression."
    },
    ao2: {
      weight: 20,
      description: "Demonstrate critical understanding of concepts and issues relevant to language use (e.g., power, face, gender)."
    },
    ao3: {
      weight: 20,
      description: "Analyse and evaluate how contextual factors and language features are associated with the construction of meaning."
    }
  }
};