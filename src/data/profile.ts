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
    "How can we explain the complex internal behavior of large models, and use that understanding to make them more useful and secure?",
  // Intro paragraphs. HTML is allowed for links and emphasis.
  intro: [
    "We know exactly how large models are built, yet we still struggle to explain the behavior that emerges from them. I want to develop probes and explainable frameworks that capture these mechanisms, and use them to make the systems we increasingly depend on more useful and secure. The hard sciences met the same challenge with the natural world, building laws to measure and quantify its complexity and ultimately turning that understanding into technology. I believe the same approach can work for these artificial complex systems.",
    "My research so far centers on membership inference attacks (MIAs), which test whether a specific example was part of a model's training data. At Emory's AIMS Lab, I have studied them in vision large language models (VLLMs) and medical models, where they double as privacy audits for systems moving into science and medicine. This work became my honors thesis and <a href=\"/research\">COMPASS</a>, now under review at ICLR 2027. I am now exploring the dynamics of the perturbation-based loss landscape behind these attacks, and how MIA performance scales, so that privacy risk can be predicted for models too large to audit directly.",
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
