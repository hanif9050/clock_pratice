const hourHand = document.querySelector(".hour-hand");
const minHand = document.querySelector(".min-hand");
const secondsHand = document.querySelector(".second-hand");

function setDate() {
  const now = new Date();
  const seconds = now.getSeconds();
  console.log((360 / 60) * seconds);
  const secondsDeg = (360 / 60) * seconds + 90;
  const min = now.getMinutes();
  const minDeg = (360 / 60) * min + 90;
  secondsHand.style.transform = `rotate(${secondsDeg}deg)`;

  minHand.style.transform = `rotate(${minDeg}deg)`;
  const hour = now.getHours();
  const hourDeg = (360 / 12) * hour + 90;
  hourHand.style.transform = `rotate(${hourDeg}deg)`;
}

setInterval(setDate, 1000);
