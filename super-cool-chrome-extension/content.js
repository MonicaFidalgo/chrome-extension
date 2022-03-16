const fileNames = [
  "kittens/kitten1.jpg",
  "kittens/kitten2.jpg",
  "kittens/kitten3.jpg",
  "kittens/kitten4.jpg",
];

let browserImages = document.getElementsByTagName("img");

for (image of browserImages) {
  let mixPictures = Math.floor(Math.random() * fileNames.length);
  let file = fileNames[mixPictures];
  let replaceImage = chrome.runtime.getURL(file);
  image.src = replaceImage;
}

console.log("It's my first chrome extension, OMG!");
