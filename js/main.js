const TITLE = [
  'Уютное гнездышко для молодоженов',
  'Маленькая квартирка рядом с озером Комо',
  'Небольшая кормушка в парке',
  'Императорский дворец в центре Геленджика',
  'Милейший чердачок',
  'Тихая квартирка недалеко от метро',
  'Милое гнездышко для фанатов Анимэ',
  'Прекрасная хрущевке в Нижнем Киотово',
];

const TYPE = [
  'palace',
  'flat',
  'house',
  'bungalow',
];

const CHECKIN = [
  '12:00',
  '13:00',
  '14:00',
];

const CHECKOUT = [
  '12:00',
  '13:00',
  '14:00',
];

const FEATURES = [
  'wifi',
  'dishwasher',
  'parking',
  'washer',
  'elevator',
  'conditioner',
];

const DESCRIPTION = [
  'У нас есть всё! Шприцы, интернет, кофе. Для всех кто знает толк в отдыхе. Полицию просим не беспокоить.',
  'У нас тут все ништяк. Ларек за углом. Шава 24 часа. Приезжайте! Интернетов нет!',
  'Тут красиво, светло и уютно. Есть где разместиться компании из 5 человек. Кофе и печеньки бесплатно.',
  'Квартира на первом этаже. Соседи тихие. Для всех, кто терпеть не может шума и суеты.',
];

const PHOTOS = [
  'http://o0.github.io/assets/images/tokyo/hotel1.jpg',
  'http://o0.github.io/assets/images/tokyo/hotel2.jpg',
  'http://o0.github.io/assets/images/tokyo/hotel3.jpg',
];

const LOCATION = {
  x: {
    min: 35.65000,
    max: 35.70000,
  },
  y: {
    min: 139.70000,
    max: 139.80000,
  },
};

const AD_COUNT = 10;

const getRandomNumberInRange = (min, max) => {
  if (min < 0 || max < 0 || min > max) {
    throw new Error('Введите корректные значения');
  }
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

const getRandomFloatInRange = (min, max, commaCount) => {
  if (min < 0 || max < 0 || min > max) {
    throw new Error('Введите корректные значения');
  }
  return Number((Math.random() * (max - min) + min).toFixed(commaCount));
}

const getRandomArray = (array) => {
  let newArray = [];
  array.forEach((element) => {
    if (Math.random() > 0.5) {
      return;
    }
    newArray.push(element);
  })
  return newArray;
}

const getRandomArrayElement = (dataArray) => {
  const randomizer = Math.floor(Math.random() * dataArray.length);
  return dataArray[randomizer];
}

const createAd = () => {
  const getRandomLocationX = getRandomFloatInRange(LOCATION.x.min, LOCATION.x.max, 5);
  const getRandomLocationY = getRandomFloatInRange(LOCATION.y.min, LOCATION.y.max, 5);

  return {
    author: {
      avatar: `img/avatars/user0${getRandomNumberInRange(1,8)}.png`,
    },
    offer: {
      title: getRandomArrayElement(TITLE),
      address: `x: ${getRandomLocationX}, y: ${getRandomLocationY}`,
      price: getRandomNumberInRange(100, 1000000),
      rooms: getRandomNumberInRange(1, 100),
      guests: getRandomNumberInRange(0, 3),
      type: getRandomArrayElement(TYPE),
      checkin: getRandomArrayElement(CHECKIN),
      checkout: getRandomArrayElement(CHECKOUT),
      features: getRandomArray(FEATURES),
      description: getRandomArrayElement(DESCRIPTION),
      photos: getRandomArray(PHOTOS),
    },
    location: {
      x: getRandomLocationX,
      y: getRandomLocationY,
    },
  }
}

const ads = new Array(AD_COUNT).fill(null).map(() => createAd());
