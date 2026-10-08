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
    "How can we capture the complex internal behavior of our large models, and what probes and frameworks can we build to turn that understanding into more useful and secure systems?",
  // Intro paragraphs. HTML is allowed for links and emphasis.
  intro: [
    "We build large models with remarkable abilities, yet much of the behavior that emerges from them remains hard to explain. I want to develop probes and frameworks that capture these mechanisms, and use them to make the systems we increasingly depend on more explainable, useful and secure. I see many parallels between the hard sciences and the study of these systems. Just as physics builds laws to describe and quantify the complexity of the natural world, and turns that understanding into technology, I believe we can build frameworks that explain these equally complex artificial systems and turn them into tools society can rely on.",
    "My research so far centers on membership inference attacks (MIAs), which test whether a specific example was part of a model's training data. At Emory's AIMS Lab, I have studied them in vision large language models (VLLMs) and medical models, where they double as privacy audits for systems moving into science and medicine. This work became my honors thesis and <a href=\"/research\">COMPASS</a>, now under review at ICLR 2027. It has since grown into two projects: using the dynamics of how models respond to perturbation to build a landscape framework for memorization, and developing scaling laws that predict privacy risk for models too large to audit directly.",
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
