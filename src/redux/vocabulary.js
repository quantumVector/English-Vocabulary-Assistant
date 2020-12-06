const noun = 'Имя существительное';
const adverb = 'Наречие';
const adjective = 'Имя прилагательное';
const construction = 'Конструкция';

const vocabulary = [
  {
    engItem: "nowadays",
    translate: [
      {
        value: "настоящее время",
        partSpeech: noun,
      },
      {
        value: "в наши дни",
        partSpeech: adverb,
      },
      {
        value: "теперь",
        partSpeech: adverb,
      }
      ,
      {
        value: "в наше время",
        partSpeech: adverb,
      }
    ]
  },
  {
    engItem: "tomorrow",
    translate: [
      {
        value: "завтра",
        partSpeech: adverb,
      },
      {
        value: "завтрашний",
        partSpeech: adjective,
      }
    ]
  },
  {
    engItem: "obvious",
    translate: [
      {
        value: "очевидный",
        partSpeech: adjective,
      }
    ],
  },
  {
    engItem: "Я интересуюсь этим.",
    translate: [
      {
        value: "I'm interested in it.",
        partSpeech: construction,
        construction: "to be nterested in smth.",
      }
    ],
  },
  {
    engItem: "chair",
    translate: [
      {
        value: "Стул",
        partSpeech: noun,
      }
    ],
  },
];

export default vocabulary;