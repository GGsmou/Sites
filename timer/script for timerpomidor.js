const countFromDate = [
new Date("Sep 01, 2021 08:00:00").getTime(),
new Date("Dec 24, 2021 19:10:00").getTime(),
new Date("Dec 25, 2021 23:44:00").getTime(),
new Date("Jan 10, 2022 10:25:00").getTime(),
new Date("Feb 01, 2022 08:10:00").getTime()]

var x = setInterval(function() {

  var now = new Date().getTime();

  for (var i = countFromDate.length - 1; i >= 0; i--) {

    var distanceFrom = now - countFromDate[i]

    var daysFrom = Math.floor(distanceFrom / (1000 * 60 * 60 * 24));
    var hoursFrom = Math.floor((distanceFrom % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutesFrom = Math.floor((distanceFrom % (1000 * 60 * 60)) / (1000 * 60));
    var secondsFrom = Math.floor((distanceFrom % (1000 * 60)) / 1000);

    document.getElementById(`ot-t${i+1}`).innerHTML = daysFrom + "д " + hoursFrom + "ч " + minutesFrom + "м " + secondsFrom + "с ";
    
    //
    /*
    var distance = -1;
    var d=1;
    while (distance<0) {
      var countDownDate = [
      new Date(`Sep 01, 202${d} 08:00:00`).getTime(),
      new Date(`Dec 24, 202${d} 19:10:00`).getTime(),
      new Date(`Dec 25, 202${d} 23:44:00`).getTime(),
      new Date(`Jan 10, 202${d} 10:25:00`).getTime(),
      new Date(`Feb 01, 202${d} 08:10:00`).getTime()]
      distance = countDownDate[i] - now;
      d++;
    }

    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById(`do-t${i+1}`).innerHTML = days + "д " + hours + "ч " + minutes + "м " + seconds + "с "; */
  }
}, 1000);