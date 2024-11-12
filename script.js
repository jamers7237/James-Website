function updateCountdown() {
  const christmasDate = new Date('2024-12-25T00:00:00').getTime();
  const currentTime = new Date().getTime();
  const timeLeft = christmasDate - currentTime;

  const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
  const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

  document.getElementById('days').innerHTML = days;
  document.getElementById('hours').innerHTML = hours;
  document.getElementById('minutes').innerHTML = minutes;
  document.getElementById('seconds').innerHTML = seconds;

  const isChristmasDay = new Date().toDateString() === new Date('2024-12-25').toDateString();

  if (isChristmasDay) {
      document.getElementById('message').innerHTML = "Merry Christmas!";
      clearInterval(interval);
  } else {
      document.getElementById('message').innerHTML = "It's not Christmas yet :(";
  }
}

const interval = setInterval(updateCountdown, 1000);

updateCountdown();