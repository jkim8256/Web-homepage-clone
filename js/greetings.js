const logInForm = document.querySelector("#logIn"); // # represents that it's an id
const logInInput = logInForm.querySelector("input"); // grabs input tag from logInForm
const logInButton = logInForm.querySelector("button"); // grabs input tag from logInForm
// const logInInput = document.querySelector("#logIn input"); // now i dont need the loginform
// const logInButton = document.querySelector("#logIn button");
const greeting = document.querySelector("h1#greeting");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

function paintGreetings(username) {
  greeting.innerText = `Hello ${username}`; //need to use ` above the ~ sign, not'' or "".
  greeting.classList.remove(HIDDEN_CLASSNAME);
}

handleSubmit = (event) => {
  //by adding an argument, the eventlistener will give you some info to the argument on what just happened when the event happens
  event.preventDefault(); //preventDefault stops the default behavior of any event(which refreshes the page as it submits)
  const username = logInInput.value;
  localStorage.setItem(USERNAME_KEY, username); //stores username in the local storage to remember for next time.
  logInForm.classList.add("hidden");
  console.dir(logInForm);
  paintGreetings(username);
};

const localusername = localStorage.getItem(USERNAME_KEY);

if (localusername === null) {
  logInForm.classList.remove("hidden");
  logInForm.addEventListener("submit", handleSubmit);
  //we want the brower to call func when it sees submit not right away. so we dont add () in handleSubmit.
} else {
  paintGreetings(localusername);
}

const REST = "rest";
greeting.classList.add(REST);
logInForm.classList.add(REST);
