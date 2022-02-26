const btnGetCard = document.querySelector('.btnGetCard');
const cardDisplay = document.querySelector('.card');
const modal = document.querySelector('.modal');
const btnPlayAgain = document.querySelector('.play-again');
const btnCloseModal = document.querySelector('.close-modal');
modal.classList.add('hidden');
cardDisplay.classList.add('hidden');

btnGetCard.addEventListener('click', function () {
  const cardPull = Math.trunc(Math.random() * 79 + 1);
  console.log(cardPull);

  cardDisplay.classList.remove('hidden');
  cardDisplay.src = `card-${cardPull}.png`;
  btnGetCard.addEventListener('click', function () {
    modal.classList.remove('hidden');
    cardDisplay.classList.add('hidden');
  });
});

btnPlayAgain.addEventListener('click', function () {
  location.reload();
});

btnCloseModal.addEventListener('click', function () {
  modal.classList.add('hidden');
});

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});
