const triangleLeft = document.querySelector(".triangle-left");
const triangleRight = document.querySelector(".triangle-right");

let index = 0;
let pics = ['pic1.jpg','pic2.jpg','pic3.jpg']

const changePrevPic = () => {
  index--;
  if(index == -1) {
    index = pics.length - 1;
  }
  changePic(index);
}
const changeNextPic = () => {
  index++;
  if(index == pics.length) {
    index = 0;
  }
  changePic(index);
}

let timeoutID = undefined;

triangleLeft.addEventListener("click", changePrevPic);
triangleRight.addEventListener("click", changeNextPic);

const changePic = (i) => {
  if(typeof timeoutID === "number") {
    clearTimeout(timeoutID);
  }
  const picture = document.querySelector('img');
  picture.src = pics[i];
  index = i;
  timeoutID = setTimeout(() => {
    index++;
    if(index == pics.length) {
      index = 0;
    }
    changePic(index)
  },5000);
}

const dots = ['.img1','.img2','.img3'];
for (i = 0; i < dots.length; i++) {
  let dot = document.querySelector(dots[i]);
  dot.dataset.pictureIndex = i;
  dot.addEventListener("click", () => changePic(dot.dataset.pictureIndex));
}
