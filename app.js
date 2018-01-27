document.addEventListener('DOMContentLoaded', () => {
  //The arrays with answers
  const answerArrayEng = [
    'It is certain',
    'It is decidedly so',
    'Without a doubt',
    'Yes definitely',
    'You may rely on it',
    'As I see it, yes',
    'Most likely',
    'Outlook good',
    'Yes',
    'Signs point to yes',
    'Reply hazy try again',
    'Ask again later',
    'Better not tell you now',
    'Cannot predict now',
    'Concentrate and ask again',
    "Don't count on it",
    'My reply is no',
    'My sources say no',
    'Outlook not so good',
    'Very doubtful'
  ];

  const answerArrayRus = [
    'Бесспорно',
    'Так и будет',
    'Несомненно',
    'Определённо да',
    'Можешь на это рассчитывать',
    'Мне кажется — да',
    'Скорее всего',
    'Похоже, что да',
    'Знаки говорят — да',
    'Да',
    'Пока не ясно, попробуй снова',
    'Спроси позже',
    'Не могу ответить',
    'Сейчас нельзя предсказать',
    'Сконцентрируйся и спроси опять',
    'Даже не думай',
    'Мой ответ — нет',
    'По моим данным — нет',
    'Скорее всего нет',
    'Весьма сомнительно'
  ];
  const eng = document.querySelector('.eng');
  const rus = document.querySelector('.rus');
  let emptyArray = [];
  let currentArray = [];
  const ball = document.querySelector('.ball');
  const answerDiv = document.querySelector('.answer');
  const answerElement = document.querySelector('.text');
  currentArray = emptyArray.concat(answerArrayEng);
  //change language of the answers to English byt concatenating arrays
  eng.addEventListener('click', e => {
    e.preventDefault();
    emptyArray = [];
    currentArray = emptyArray.concat(answerArrayEng);
    eng.className += ' langClicked';
    rus.className = 'rus';
  });
  //change language of the answers to Russian byt concatenating arrays
  rus.addEventListener('click', e => {
    e.preventDefault();
    emptyArray = [];
    currentArray = emptyArray.concat(answerArrayRus);
    rus.className += ' langClicked';
    eng.className = 'eng';
  });
  //Generate a random number from 1 to 20
  function getNumber() {
    return Math.floor(Math.random() * 20);
  }
  //show the answer element after the animation
  function jiggle() {
    answerDiv.style.display = 'block';
    ball.className = 'ball';
  }
  //when the ball is clicked, adds a class 'clicked', hides the answer element
  ball.addEventListener('click', e => {
    ball.className += ' clicked';
    answerDiv.style.display = 'none';
    //assigns the random number to the answer number in the arrays
    answerElement.textContent = currentArray[getNumber()];
    setTimeout(jiggle, 250);
  });
});
