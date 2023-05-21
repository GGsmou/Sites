const url = new URL(window.location.href);
const paramsGet = new URLSearchParams(url.search);
const params = {};
let changeUrl = false;

function validateParams() {
  paramsGet.has('date')
    ? (params.date = paramsGet.get('date'))
    : ((params.date = '24.06.2005 00:00:00'), (changeUrl = true));

  paramsGet.has('from')
    ? (params.from = paramsGet.get('from'))
    : ((params.from = 'true'), (changeUrl = true));

  paramsGet.has('textTop')
    ? (params.textTop = paramsGet.get('textTop'))
    : ((params.textTop = 'Таймер до дня народження GGsmou'),
      (changeUrl = true));

  paramsGet.has('text')
    ? (params.text = paramsGet.get('text'))
    : ((params.text = 'Геній народився'), (changeUrl = true));
}
validateParams();

changeUrl
  ? (window.location = `${window.location.href.split('?')[0]}?date=${
      params.date
    }&from=${params.from}&textTop=${params.textTop}&text=${params.text}`)
  : null;

document.getElementById('textTop').innerHTML = params.textTop;
document.getElementById('text').innerHTML = `${params.text}:`;

const dateArr = params.date.split(' ')[0].split('.');
const countDateText = `${dateArr[2]}-${dateArr[1]}-${dateArr[0]}T${
  params.date.split(' ')[1]
}`;
const countFrom = params.from === 'true' ? true : false;

const countDate = new Date(countDateText).getTime();

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
