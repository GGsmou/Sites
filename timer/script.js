const countDate = new Date('Jun 23, 2023 16:00:00').getTime();
const countFrom = false;

const x = setInterval(() => {
  const now = new Date().getTime();

  const distance = countFrom ? now - countDate : countDate - now;

  let years = 0;
  let days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor(
    (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  while (days >= 365) {
    days -= 365;
    years++;
  }

  let text = `${days}д ${hours}г ${minutes}хв ${seconds}с`;
  if (years > 0) text = `${years}р ${text}`;

  document.getElementById('output').innerHTML = text;

  if (distance < 0) {
    clearInterval(x);
    document.getElementById('output').innerHTML = 'Час вийшов';
  }
}, 1000);
