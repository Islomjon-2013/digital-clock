let hour = document.querySelector(".hour");
let minute = document.querySelector(".minute");
let secund = document.querySelector(".secund");
let ampm = document.getElementById("ampm");

function uptadeClock() {
  let h = new Date().getHours();
  let m = new Date().getMinutes();
  let s = new Date().getSeconds();
  let am = "AM";
  if (h > 12) {
    h = h - 12;
    am = "PM";
  }
  h = h < 10 ? "0" + h : h;
  m = m < 10 ? "0" + m : m;
  s = s < 10 ? "0" + s : s;

  hour.innerHTML = h;
  minute.innerHTML = m;
  secund.innerHTML = s;
  ampm.innerHTML = am;
  setTimeout(() => {
    uptadeClock();
  }, 1000);
}
uptadeClock();
