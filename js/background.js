const images = ["japan.jpg", "korea.jpg"];
`
const chosenIamge = images[Math.floor(Math.random() * images.length)];

const bgImage = document.createElement("img"); //creates an html tag named img
bgImage.src = `image/${chosenIamge}`;
document.body.appendChild(bgImage); //appendChild will add an html tag inside the body

const BACKGROUND = "abs";
bgImage.classList.add(BACKGROUND);
