export const profile = {
  name: "Damien Lo",
  role: "Research Assistant, AIMS Lab",
  affiliation: "Department of Computer Science, Emory University",
  email: "damien.lo@emory.edu",
  links: {
    cv: "/cv.pdf",
    github: "https://github.com/Damien-Lo",
    linkedin: "https://www.linkedin.com/in/damienlo",
    lab: "https://www.cs.emory.edu/site/aims/",
    // Add once the profile exists.
    scholar: "",
  },
  // Opening question shown above the intro.
  question:
    "How can we capture the complex internal behavior of the large models we increasingly depend on, and build the probes and tools that turn that understanding into more useful and secure systems?",
  // Intro paragraphs. HTML is allowed for links and emphasis.
  intro: [
    "We know exactly how large models are built, yet we still struggle to explain the behavior that emerges from them. I want to understand the mechanisms behind these models: how to probe them, how to capture what we find in simple, explainable frameworks, and how to use that understanding to make these tools more useful and secure. The hard sciences faced the same challenge with the natural world, building frameworks, rules and laws to measure and quantify its complexity, and ultimately turning that understanding into technology. I believe the same approach can work for these artificial complex systems.",
    "At Emory's AIMS Lab, I study membership inference in vision large language models (VLLMs), which asks whether a specific image was part of a model's training data. By adding small, controlled amounts of noise to images and measuring how the model responds, my co-authors and I found that training images often behave differently from unseen ones at noise levels earlier attacks skipped. That finding became <a href=\"/research\">COMPASS</a>, now under review at ICLR 2027. Because these models are moving into science and medicine, we also tested it on a medical VLLM, where it still finds a membership signal while existing attacks fall to chance. Understanding how these models work is what will let us trust them as tools for science, and the question I most want to pursue next is what memorization looks like geometrically inside a model.",
    "I am applying to PhD programs for Fall 2027, and I am excited to keep exploring these ideas with groups working on the science of deep learning, interpretability and trustworthy ML.",
  ],
  thanks:
    "I am grateful to Professor Li Xiong and the <a href=\"https://www.cs.emory.edu/site/aims/\">AIMS Lab</a> at Emory for their mentorship and support.",
  interests: [
    "Trustworthy ML",
    "Explainability",
    "Privacy & Membership Inference",
    "Vision-Language Models",
    "Model Behavior",
    "Physics-Inspired ML",
  ],
  cvUpdated: "October 2026",
  siteUpdated: "October 2026",
};
