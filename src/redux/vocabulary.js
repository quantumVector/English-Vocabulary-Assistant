const noun = 'Имя существительное';
const adverb = 'Наречие';
const adjective = 'Имя прилагательное';
const sentence = 'Предложение'
const construction = 'Конструкция';
const verb = 'Глагол';
const pronoun = 'Местоимение';
const conjunction = 'Союз';

const vocabulary = [

  {
    rusVersion: "удовлетворенный",
    engVersion: "satisfied",
    partSpeech: adjective,
    comment: `другой вариант:
    довольный (имя прилагательное)`
  },

  {
    rusVersion: "Он удовлетворен этим решением.",
    engVersion: "He's satisfied with this decision.",
    partSpeech: sentence,
    comment: `Конструкция: satisfied with smth. or smb.
    В английском satisfied имя прилагательное.`
  },

  {
    rusVersion: "усталый",
    engVersion: "tired",
    partSpeech: adjective,
    comment: `В нашем языке может принимать форму глагола,
    а в английском tired имя прилагательное, например:
    Он очень устал. - He's very tired.`
  },

  {
    rusVersion: "Они реально устали.",
    engVersion: "They're really tired.",
    partSpeech: sentence,
    comment: `В нашем языке может принимать форму глагола,
    а в английском tired имя прилагательное, например:
    Он очень устал. - He's very tired.`
  },

  {
    rusVersion: "в командировке",
    engVersion: "on a business trip",
    partSpeech: construction,
    comment: `Тоже самое, что "в деловой поездке".
    Предлогом on.`
  },

  {
    rusVersion: "в деловой поездке",
    engVersion: "on a business trip",
    partSpeech: construction,
    comment: `Тоже самое, что "в командировке".
    Предлогом on.`
  },

  {
    rusVersion: "в отпуске",
    engVersion: "on holiday",
    partSpeech: construction,
    comment: `Предлогом on.`
  },

  {
    rusVersion: "манеры",
    engVersion: "manner",
    partSpeech: noun,
    comment: `Манера или манеры, буква s не добавляется`
  },

  {
    rusVersion: "оптимистичен",
    engVersion: "optimistic",
    partSpeech: adjective,
    comment: `другие варианты:
    оптимистичный, оптимистический`
  },

  {
    rusVersion: "пессимистичный",
    engVersion: "pessimistic",
    partSpeech: adjective,
    comment: `другие варианты:
    пессимистический, пессимистичен`
  },

  {
    rusVersion: "ванная",
    engVersion: "bathroom",
    partSpeech: noun,
    comment: null
  },

  {
    rusVersion: "в ванной",
    engVersion: "in the bathroom",
    partSpeech: construction,
    comment: null
  },

  {
    rusVersion: "кухня",
    engVersion: "kitchen",
    partSpeech: noun,
    comment: null
  },

  {
    rusVersion: "на кухне",
    engVersion: "in the kitchen",
    partSpeech: construction,
    comment: null
  },

  {
    rusVersion: "карандаш",
    engVersion: "pencil",
    partSpeech: noun,
    comment: null
  },

  {
    rusVersion: "бояться",
    engVersion: "afraid",
    partSpeech: adjective,
    comment: `В английском afraid имя прилагательное`
  },

  {
    rusVersion: "Он боится этого.",
    engVersion: "He's afraid of it.",
    partSpeech: sentence,
    comment: `Конструкция afraid of smth. or smb.`
  },

  {
    rusVersion: "на последнем месте",
    engVersion: "in the last place",
    partSpeech: construction,
    comment: `Предлог in`
  },

  {
    rusVersion: "страсть",
    engVersion: "passion",
    partSpeech: noun,
    comment: null
  },

  {
    rusVersion: "неэффективный",
    engVersion: "ineffective",
    partSpeech: adjective,
    comment: `Преставка in, надо просто запомнить`
  },

  {
    rusVersion: "к следующей неделе",
    engVersion: "by next week",
    partSpeech: construction,
    comment: `Другие примеры с предлогом by в такой конструкции:
    by next year/month - к следующему году/месяцу
    by tomorrow - к завтрашнему дню`
  },

  {
    rusVersion: "к следующему году",
    engVersion: "by next year",
    partSpeech: construction,
    comment: `Другие примеры с предлогом by в такой конструкции:
    by next week/month - к следующей неделе/месяцу
    by tomorrow - к завтрашнему дню`
  },

  {
    rusVersion: "к следующему месяцу",
    engVersion: "by next month",
    partSpeech: construction,
    comment: `Другие примеры с предлогом by в такой конструкции:
    by next week/year - к следующей неделе/году
    by tomorrow - к завтрашнему дню`
  },

  {
    rusVersion: "к завтрашнему дню",
    engVersion: "by tomorrow",
    partSpeech: construction,
    comment: `Другие примеры с предлогом by в такой конструкции:
    by next week/month/year - к следующей неделе/месяцу/году`
  },

  {
    rusVersion: "Я люблю путешествовать. (действительно нравится)",
    engVersion: "I like travelling.",
    partSpeech: construction,
    comment: `Конструкция like + verb + ing обычно применяется, когда действительно что-то нравится, а не как привычка.
    I like to do it будет звучать как привычка.`
  },

  {
    rusVersion: "достаточно",
    engVersion: "enough",
    partSpeech: adverb,
    comment: null
  },

  {
    rusVersion: "пугать",
    engVersion: "frighten",
    partSpeech: verb,
    comment: null
  },

  {
    rusVersion: "дорого",
    engVersion: "expensive",
    partSpeech: adjective,
    comment: null
  },

  {
    rusVersion: "ресторан",
    engVersion: "restaurant",
    partSpeech: noun,
    comment: null
  },

  {
    rusVersion: "решение",
    engVersion: "decision",
    partSpeech: noun,
    comment: null
  },

  {
    rusVersion: "выбор",
    engVersion: "choice",
    partSpeech: noun,
    comment: null
  },

  {
    rusVersion: "необходимый",
    engVersion: "necessary",
    partSpeech: adjective,
    comment: null
  },

  {
    rusVersion: "предмет",
    engVersion: "subject",
    partSpeech: noun,
    comment: null
  },

  {
    rusVersion: "полезный",
    engVersion: "useful",
    partSpeech: adjective,
    comment: null
  },

  {
    rusVersion: "кофе",
    engVersion: "coffee",
    partSpeech: noun,
    comment: null
  },

  {
    rusVersion: "прекрасный, прекрасное (не про внешность)",
    engVersion: "wonderful",
    partSpeech: adjective,
    comment: `wonderful мы можем использовать для описания ситуации, например, "Как прекрасно!"
    beautiful мы можем использовать для описания людей и всё остальное "У Анны красивые глаза", в основном используется для описания внешнего вида чего-либо.`
  },

  {
    rusVersion: "прекрасный, прекрасное (про внешность)",
    engVersion: "beautiful",
    partSpeech: adjective,
    comment: `wonderful мы можем использовать для описания ситуации, например, "Как прекрасно!"
    beautiful мы можем использовать для описания людей и всё остальное "У Анны красивые глаза", в основном используется для описания внешнего вида чего-либо.`
  },

  {
    rusVersion: "добираться",
    engVersion: "get",
    partSpeech: verb,
    comment: `Исключение, get home без to.
    Get to the school, get to work уже с to.`
  },

  {
    rusVersion: "коллега",
    engVersion: "colleague",
    partSpeech: noun,
    comment: null
  },

  {
    rusVersion: "месяц",
    engVersion: "month",
    partSpeech: noun,
    comment: null
  },

  {
    rusVersion: "восхищаться",
    engVersion: "admire",
    partSpeech: verb,
    comment: null
  },

  {
    rusVersion: "какой-либо",
    engVersion: "any",
    partSpeech: pronoun,
    comment: null
  },

  {
    rusVersion: "на фотографии",
    engVersion: "in the photo",
    partSpeech: construction,
    comment: `Нужно запомнить предлог in`
  },

  {
    rusVersion: "Ты знаешь английский язык, как носитель языка.",
    engVersion: "You know English like a native speaker.",
    partSpeech: sentence,
    comment: `Нужно запомнить слово like в значении подобно чему-либо, как. Часто ошибаются и ставят as.`
  },

  {
    rusVersion: "благодарить",
    engVersion: "thank",
    partSpeech: verb,
    comment: null
  },

  {
    rusVersion: "Сколько?",
    engVersion: "How many?",
    partSpeech: construction,
    comment: null
  },

  {
    rusVersion: "удобный (про время)",
    engVersion: "convenient",
    partSpeech: adjective,
    comment: null
  },

  {
    rusVersion: "намного лучше",
    engVersion: "much better",
    partSpeech: construction,
    comment: null
  },

  {
    rusVersion: "Мне нравится жить за границей. (реально нравится)",
    engVersion: "I like living abroad.",
    partSpeech: sentence,
    comment: `Конструкция like + verb + ing обычно применяется, когда действительно что-то нравится, а не как привычка.
    I like to do it будет звучать как привычка.`
  },

  {
    rusVersion: "дочь",
    engVersion: "daughter",
    partSpeech: noun,
    comment: null
  },

  {
    rusVersion: "Во сколько он приходит на работу?",
    engVersion: "What time does he come to work?",
    partSpeech: sentence,
    comment: `Конструкция come home исключение, пишется без to`
  },

  {
    rusVersion: "уверен",
    engVersion: "sure",
    partSpeech: adjective,
    comment: null
  },

  {
    rusVersion: "Она уверена.",
    engVersion: "She's sure.",
    partSpeech: sentence,
    comment: null
  },

  {
    rusVersion: "старший",
    engVersion: "elder",
    partSpeech: adjective,
    comment: `Пример:
    elder brother`
  },

  {
    rusVersion: "Он не с ними.",
    engVersion: "He isn't with them.",
    partSpeech: sentence,
    comment: null
  },

  {
    rusVersion: "исправлять",
    engVersion: "correct",
    partSpeech: verb,
    comment: null
  },

  {
    rusVersion: "потому что",
    engVersion: "because",
    partSpeech: conjunction,
    comment: null
  },

  {
    rusVersion: "Мне нужно усерднее учиться.",
    engVersion: "I need to study harder.",
    partSpeech: sentence,
    comment: null
  },

];

export default vocabulary;