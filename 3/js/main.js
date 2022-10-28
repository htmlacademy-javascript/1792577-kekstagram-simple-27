const OBJECT = 25;
const DISKRIPTION__SET = [
  `Не будь обычным, будь диким`,
  `Правда ранит, купите бинт`,
  `О паиньках не пишут книг`,
  `Люди говорят, что я притворяюсь, будто мне плевать. Но я не притворяюсь`,
  `Когда мне говорят следовать своим мечтам, я ложусь спать`,
  `Лучшая тренировка – бег на короткие дистанции, от холодильника к телевизору и обратно`,
  `Если бы у меня было чувство юмора, я бы придумал подпись посмешнее`,
  `Все мы рождаемся немного сумасшедшими, некоторые просто решают не меняться`,
  `У всех есть такой друг…`,
  `Зеркало: ты выглядишь потрясающе сегодня. Камера: неа`,
  `Может, это естественная красота, а может, фильтр Clarendon`
  `Так благодарен за все`,
  `Ничто не сияет ярче золотого сердца`,
  `Путешествие – всегда лучшая часть`,
  `Излучаю добро и позитив`,
  `Я так люблю ваши улыбки`,
  `Держи подбородок повыше, чтобы корона не сползала`,
  `Не сожалей о том, чего не сделал. Просто пойди и сделай!`,
  `Всегда прислушивайся к своему сердцу`,
  `Не жди, пока закончится шторм, выходи и танцуй под дождем`,
  `Не судите людей по ошибкам, судите по тому, как они их исправляют`,
  `Если я не поделюсь фото, у меня не будет доказательств, что это действительно случилось`,
  `Вы поймете, что добились своего, когда идолы станут вашими конкурентами`,
  `Нельзя просто так взять и сочинить глубокомысленный текст для фото`,
  `На создание мира ушло 7 дней, на создание меня – 9 месяцев. Значит, я не так уж прост`
  ]

 const randomNumber = function (min, max) {
  if (isNaN(min) || isNaN(max)) {
    return NaN;
  }
  if (Number.isInteger(max / min)) {
    if (min >= 0 && max >= min) {
      return Math.floor(Math.random() * (max - min + 1)) + min;
    }
    if (max >= 0 && max <= min) {
      return Math.floor(Math.random() * (min - max + 1)) + max;
    }
  }
}

function longString(string, lenght) {
  return string.lenght <= lenght;
}

const objectGeneration = function(index) {
  id: index,
  url:`photos/${index}.jpg`,
  description: DISKRIPTION__SET[randomNumber(0, DISKRIPTION__SET.length-1)],
  likes: randomNumber(15, 200),
  comments: randomNumber(0, 200)
};

const resultArray = Array.from({ length: OBJECT }, objectGeneration);

longString('', 140);
objectGeneration();