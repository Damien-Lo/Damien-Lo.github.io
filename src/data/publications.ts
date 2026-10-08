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
  abstract?: string;
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
    abstract:
      "Vision large language models (VLLMs) are increasingly deployed in privacy-sensitive domains, raising concerns about the exposure of their training data. The strongest existing gray-box membership inference attacks (MIAs) against VLLMs commonly rely on entropy statistics or generated descriptions, requiring costly response generation while providing limited membership separation. In contrast, perturbation-based methods measure how model response changes when images are perturbed, but have mainly focused on large perturbations, leaving VLLM membership behavior under smaller perturbations poorly understood. In this work, we systematically characterize VLLM membership behavior under controlled Gaussian perturbations across the full range of noise levels at fine resolution. Our analysis reveals that both the optimal perturbation magnitude and the direction of the membership signal vary across model–dataset pairs. For many settings, a previously unstudied low-noise regime produces stronger separation than large perturbations, with members exhibiting lower divergence than non-members and thereby reversing the conventionally observed score direction. Other settings retain the conventional direction, demonstrating that neither a fixed perturbation magnitude nor a predetermined score orientation is universally reliable. Motivated by this finding, we propose COMPASS, an adaptive gray-box MIA that calibrates both the perturbation magnitude and membership-score direction using a loosely distribution-matched, known non-member reference set. We instantiate COMPASS using Rényi-normalized KL divergence and Rényi divergence, with max-k aggregation over the most informative image-logit positions. Across LLaVA v1.5–7B, MiniGPT-4, and HuluMed-32B, spanning pretraining, instruction-tuning, and medical-image datasets, COMPASS consistently outperforms baselines. Under general-domain evaluations, COMPASS achieves AUCs of up to 0.88. On the distribution-matched medical evaluation, it reaches 0.64 AUC, while the strongest baseline remains at chance-level. These results establish full-range adaptive perturbation analysis as an effective approach to VLLM membership inference.",
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
