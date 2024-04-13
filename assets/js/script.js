// Set the date we're counting down to
var countDownGCD = new Date("Apr 27, 2024 19:00:00").getTime();

// Update the count down every 1 second
var gcx = setInterval(function () {
  // Get today's date and time
  var now = new Date().getTime();

  // Find the distance between now and the count down date
  var distance = countDownGCD - now;

  var GCdays = Math.floor(distance / (1000 * 60 * 60 * 24));
  var GChours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var GCminutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var GCseconds = Math.floor((distance % (1000 * 60)) / 1000);

  document.getElementById("gch").innerHTML = GCdays;
  document.getElementById("gcj").innerHTML = GChours;
  document.getElementById("gcm").innerHTML = GCminutes;
  document.getElementById("gcd").innerHTML = GCseconds;
}, 1000);

// Set the date we're counting down to
var countDownLSD = new Date("May 05, 2024 15:00:00").getTime();

// Update the count down every 1 second
var lsx = setInterval(function () {
  // Get today's date and time
  var now = new Date().getTime();

  // Find the distance between now and the count down date
  var distance = countDownLSD - now;

  var LSdays = Math.floor(distance / (1000 * 60 * 60 * 24));
  var LShours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var LSminutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var LSseconds = Math.floor((distance % (1000 * 60)) / 1000);

  document.getElementById("lsh").innerHTML = LSdays;
  document.getElementById("lsj").innerHTML = LShours;
  document.getElementById("lsm").innerHTML = LSminutes;
  document.getElementById("lsd").innerHTML = LSseconds;
}, 1000);

