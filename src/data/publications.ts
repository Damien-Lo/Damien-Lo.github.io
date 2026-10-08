export type Status = "under-review" | "accepted" | "published" | "thesis";

export interface Publication {
  id: string;
  title: string;
  authors: string[];
  /** Authors marked with an equal-contribution asterisk. */
  equal?: string[];
  venue: string;
  status: Status;
  year: number;
  summary: string;
  note?: string;
  /** Buttons only render for links that are set. */
  links: { paper?: string; code?: string; library?: string };
  bibtex?: string;
}

export const ME = "Damien Lo";

export const publications: Publication[] = [
  {
    id: "compass",
    title:
      "COMPASS: Membership Inference Attack Against Vision Large Language Models via Adaptive Noise Calibration",
    authors: ["Damien Lo", "Hong Kyu Lee", "Ruixuan Liu", "Li Xiong"],
    equal: ["Damien Lo", "Hong Kyu Lee"],
    venue: "ICLR 2027",
    status: "under-review",
    year: 2026,
    summary:
      "An adaptive gray-box membership inference attack on vision large language models that calibrates the noise level and score direction of Gaussian image perturbations, using only a known non-member reference set.",
    // Paper and code links stay empty during double-blind review.
    links: {},
  },
  {
    id: "thesis",
    title:
      "Probing Artificial Memory: Evaluating the Privacy Risk of Vision Large Language Models Through Membership Inference Attacks",
    authors: ["Damien Lo"],
    venue: "Honors thesis, Department of Computer Science, Emory University",
    status: "thesis",
    year: 2026,
    summary:
      "Characterizes VLLM memorization through low-noise perturbation behavior and introduces the attack that became COMPASS, with evaluations on LLaVA, MiniGPT-4 and the Hulu-Med medical model across MRI, endoscopy and microscopy data.",
    note: "Advisor: Li Xiong. Committee: Tankut Can, Joyce Ho.",
    links: {
      library: "https://etd.library.emory.edu/concern/etds/37720f24v",
    },
    bibtex: `@thesis{lo2026probing,
  title  = {Probing Artificial Memory: Evaluating the Privacy Risk of Vision Large Language Models Through Membership Inference Attacks},
  author = {Lo, Damien},
  school = {Emory University},
  type   = {Honors thesis},
  year   = {2026},
  url    = {https://etd.library.emory.edu/concern/etds/37720f24v}
}`,
  },
];
