const noun = 'Имя существительное';
const adjective = 'Имя прилагательное';

const vocabulary = [
  {
    rusVersion: "усталый",
    engVersion: "tired",
    partSpeech: adjective,
    comment: `В нашем языке может принимать форму глагола,
    а в английском tired имя прилагательное, например:
    Он очень устал. - He's very tired.`,
    total: 3,
  },
  {
    rusVersion: "оптимистичен",
    engVersion: "optimistic",
    partSpeech: adjective,
    comment: `другие варианты:
    оптимистичный, оптимистический`,
    total: 3,
  },
  {
    rusVersion: "страсть",
    engVersion: "passion",
    partSpeech: noun,
    comment: null,
    total: 3,
  },
];

export default vocabulary;