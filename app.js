document.addEventListener('DOMContentLoaded', () => {
  const answerArrayEng = [
    'Yes',

    "I don't think so",
    'You can count on it',
    'As far as I know, no.'
  ];

  function getNumber() {
    return Math.floor(Math.random() * 5);
  }

  const answerElement = document.querySelector('.text');

  answerElement.addEventListener('click', e => {
    answerElement.textContent = answerArray[getNumber()];
  });
});
