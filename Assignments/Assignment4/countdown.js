// Set the date we're counting down to
var countDownDate = new Date("May 3, 2025 19:00:00 EST").getTime();

// Update the count down every 1 second
var x = setInterval(function() {

  // Get todays date and time
  var now = new Date().getTime();

  // Find the distance between now an the count down date
  var distance = countDownDate - now;

  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById("cd_days").innerHTML = days;
    document.getElementById("cd_hours").innerHTML = hours;
    document.getElementById("cd_minutes").innerHTML = minutes;
    document.getElementById("cd_seconds").innerHTML = seconds;
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("cd_days").innerHTML = "0";
    document.getElementById("cd_hours").innerHTML = "0";
    document.getElementById("cd_minutes").innerHTML = "0";
    document.getElementById("cd_seconds").innerHTML = "0";
  }
}, 1000);
