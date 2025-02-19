const triangleLeft = document.querySelector(".triangle-left");
const triangleRight = document.querySelector(".triangle-right");

let index = 0;
let pics = ['pic1.jpg','pic2.jpg','pic3.jpg']

const changePrevPic = () => {
  const picture = document.querySelector("img");
  index--;
  if(index == -1) {
    index = pics.length - 1;
  }
  picture.src = pics[index];
}
const changeNextPic = () => {
  const picture = document.querySelector("img");
  index++;
  if(index == pics.length) {
    index = 0;
  }
  picture.src = pics[index];
}


triangleLeft.addEventListener("click", changePrevPic);
triangleRight.addEventListener("click", changeNextPic);