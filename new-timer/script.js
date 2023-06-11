const url = new URL(window.location.href);
const paramsGet = new URLSearchParams(url.search);
const params = { shortFormat: false };
let changeUrl = false;
let countDate;

function convertDate(date) {
  const dateArr = date.split(' ')[0].split('.');
  return `${dateArr[2]}-${dateArr[1]}-${dateArr[0]}T${date.split(' ')[1]}`;
}

function fillData() {
  document.getElementById('textTop').innerHTML = params.textTop;
  document.getElementById('text').innerHTML = `${params.text}:`;

  countDate = new Date(convertDate(params.date)).getTime();
}

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

  changeUrl
    ? (window.location = `${
        window.location.href.split('?')[0]
      }?date=${params.date.split(' ').join('+')}&from=${
        params.from
      }&textTop=${params.textTop.split(' ').join('+')}&text=${params.text
        .split(' ')
        .join('+')}`)
    : null;

  params.from = params.from === 'true' ? true : false;

  fillData();
}

function shortFormat() {
  params.date = paramsGet.get('d');

  params.from =
    new Date().getTime() > new Date(convertDate(params.date)).getTime()
      ? true
      : false;

  params.textTop = params.from
    ? `Taймер з ${params.date}`
    : `Taймер до ${params.date}`;

  params.text = params.from ? 'Вже пройшло' : 'До закінчення';
  params.shortFormat = true;

  fillData();
}

paramsGet.has('d') ? shortFormat() : validateParams();

const x = setInterval(() => {
  if (params.date === '5.0') {
    document.getElementById('output').innerHTML = 'Завтра';
    return;
  }

  const now = new Date().getTime();

  const distance = params.from ? now - countDate : countDate - now;

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

  if (distance < 0 && !params.shortFormat) {
    clearInterval(x);
    document.getElementById('output').innerHTML = 'Час вийшов';
  }
  if (distance <= 0 && params.shortFormat) {
    shortFormat();
  }
}, 1000);
