const countDate = new Date('Jun 23, 2023 16:00:00').getTime();
const countFrom = false;

let x = setInterval(function () {
  let now = new Date().getTime();

  let distance = countFrom ? now - countDate : countDate - now;

  let years = 0;
  let days = Math.floor(distance / (1000 * 60 * 60 * 24));
  let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((distance % (1000 * 60)) / 1000);

  while (days >= 365) {
    days -= 365;
    years++;
  }
  let years_text = '';

  let text = `${years_text}${days}д ${hours}г ${minutes}хв ${seconds}с`;
  if (years > 0) text = `${years}р ` + text;

  document.getElementById('output').innerHTML = text;

  if (distance < 0) {
    clearInterval(x);
    document.getElementById('output').innerHTML = 'Час вийшов';
  }
}, 1000);
