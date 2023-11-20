const cards = [
  "😎",
  "😎",
  "😢",
  "😢",
  "🤩",
  "🤩",
  "😍",
  "😍",
  "😉",
  "😉",
  "😶‍🌫️",
  "😶‍🌫️",
  "🫠",
  "🫠",
  "🤡",
  "🤡",
];

const openedCards = [];

const shuffleEmojis = cards.sort(() => (Math.random() > 0.5) ? 2 : -1);

let startGame = false;

cards.forEach((card, index) => {
  let box = document.createElement('div');
  box.classList.add('item');
  box.classList.add('boxOpen')
  box.innerHTML = shuffleEmojis[index];
  box.onclick = handleClick;
  document.querySelector('.viewport').appendChild(box);
});

function handleClick()
{
  if (!startGame) return;
  if (openedCards.length < 2)
  {
    this.classList.add('boxOpen');
    openedCards.push(this);
  }

  if (openedCards.length === 2)
  {
    setTimeout(checkMatch, 500);
  }
}

function checkMatch()
{
  if (openedCards[0].innerHTML === openedCards[1].innerHTML)
  {
    openedCards[0].classList.add('boxMatch');
    openedCards[1].classList.add('boxMatch');
  } else
  {
    openedCards[0].classList.remove('boxOpen');
    openedCards[1].classList.remove('boxOpen');
  }

  openedCards.splice(0, openedCards.length);

  if(document.querySelectorAll('.boxMatch').length === cards.length)
  {
    let gameover = document.createElement('h2');
    gameover.innerText = 'Você venceu!!!';
    gameover.className = 'gameover'
    document.querySelector('.container').appendChild(gameover)
  }
}

function start()
{
  document.querySelectorAll('.boxOpen').forEach((item) => item.classList.remove('boxOpen'));
  document.querySelector('.counter').classList.add('remove')
  startGame = true;
}

setTimeout(start, 1500);