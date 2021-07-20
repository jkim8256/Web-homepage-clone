const clock = document.querySelector("h2#clock");
/*
function sayhello() {
  console.log("Hello");
}

setInterval(sayhello, 5000); //executes func sayhello immediately and every 5000 milisecond, which is 5 sec.
setTimeout(sayhello, 5000); //wait for 5sec then executes sayhello
*/

function getClock() {
  const date = new Date();
  const now = `${date.getMonth() + 1}/${date.getDate()}/${date.getFullYear()}`;
  const hr = String(date.getHours()).padStart(2, "0");
  const min = String(date.getMinutes()).padStart(2, "0");
  const sec = String(date.getSeconds()).padStart(2, "0");
  console.log(hr + ":" + min + ":" + sec);
  clock.innerText = `${now}, ${hr}:${min}:${sec}`;
}
//padStart(number of chars, what to fill in if not enough)
//padend is the same as padstart except padend fills at the end and padstart fill in the beginning

getClock(); //call it here bc we want to show the clock right away when the website loads.
// without this, we have to wait a sec to see the clock.
setInterval(getClock, 1000);

const REST1 = "rest";
clock.classList.add(REST1);
