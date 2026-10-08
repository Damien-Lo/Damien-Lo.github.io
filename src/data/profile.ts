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
    "What is actually happening inside large AI models, and can we describe it the way physics describes the natural world?",
  // Intro paragraphs. HTML is allowed for links and emphasis.
  intro: [
    "I want to understand the mechanisms behind large models: how to probe them, how to capture what we find in simple, explainable descriptions, and how to turn that understanding into answers for real problems. The problem I work on is privacy.",
    "At Emory's AIMS Lab, I study membership inference in vision large language models (VLLMs), which asks whether a specific image was part of a model's training data. By adding small, controlled amounts of noise to images and measuring how the model responds, my co-authors and I found that training images often behave differently from unseen ones at noise levels earlier attacks skipped. That finding became <a href=\"/research\">COMPASS</a>, now under review at ICLR 2027. It also points to the question I most want to pursue next: what memorization looks like geometrically inside a model.",
    "I am applying to PhD programs for Fall 2027, and I am excited to keep exploring these ideas with groups working on the science of deep learning, interpretability and trustworthy ML.",
  ],
  thanks:
    "I am grateful to Professor Li Xiong and the <a href=\"https://www.cs.emory.edu/site/aims/\">AIMS Lab</a> at Emory for their mentorship and support.",
  interests: [
    "Trustworthy ML",
    "Privacy & Membership Inference",
    "Vision-Language Models",
    "Model Behavior",
    "Physics-Inspired ML",
  ],
  cvUpdated: "October 2026",
  siteUpdated: "October 2026",
};
