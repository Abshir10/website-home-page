let login = document.querySelector(".login")
let section1 = document.querySelector("#section1")
let section2 = document.querySelector("#section2")
let btn2 = document.querySelector(".btn2")
let menu = document.querySelector(".menu")
let btn1 = document.querySelector(".btn1")
let p2 = document.querySelector("#p2")
let radio1 = document.querySelector(".to-one ")
let radio2 =document.querySelector(".to-two ")
let radio3 = document.querySelector(".to-three")
let radio4 = document.querySelector(".to-four")

let t = false
function a(){
  if(t== false){
    login.style.height="140px"

    login.style.backgroundImage="url('images/header22.png')"
    section1.style.visibility="visible"
    section2.style.visibility="visible"
    login.style.backgroundSize=" 100% 100%"
btn2.style.visibility="hidden"
btn1.style.visibility="visible"
    btn1.style.position="absolute"
      p2.innerHTML="Close panel"
      p2.style.position="absolute";
        p2.style.top="115px"
        p2.style.right="175px"

      btn1.style.top="117px"
  menu.style.zIndex="-3"

radio1.style.top="350px"
radio2.style.top="350px"
radio3.style.top="350px"
radio4.style.top="350px"

    t=true
  }
  else if(t==true){

    login.style.backgroundImage="url('images/theheader1.png')"
    login.style.height="25px"
    section1.style.visibility="hidden"
    section2.style.visibility="hidden"


    btn2.style.position="absolute";
      btn2.style.top="2px"
      p2.style.position="absolute";
        p2.style.top="1px"
          p2.style.right="210px"
      menu.style.zIndex="1"
      btn2.style.visibility="visible"
      btn1.style.visibility="hidden"
      p2.innerHTML="Join us"
      radio1.style.top="520px"
      radio2.style.top="520px"
      radio3.style.top="520px"
      radio4.style.top="520px"


    t=false
  }

}


let images=['room12.png','room21.jpeg','room31.png',"room41.png"]
let = input1 = document.querySelector(".to-one")
let= input2 =  document.querySelector(".to-two")
let input3 = document.querySelector(".to-three")
let input4 =  document.querySelector(".to-four")
let i = 0
let time = 3000
let slide = document.querySelector(".slide-one")



function changes(){

  slide.src = "images/" +images[i] ;

  switch (i) {
    case 0:
      i=i+1
      input1.checked=true
      break;
      case 1:
          i=i+1
          input2.checked=true
        break;
        case 2:
          i=i+1
          input3.checked=true

          break;
          case 3:
            i=i+1
            input4.checked=true

            break;
    default:
      i=0
  }
  /*if(i==0)
  i=i+1


  else if(i==1)
  i=i+1
else if(i==2)
i=i+1
else
i=0
*/


      setTimeout("changes()", time);





}
window.onload=changes;
const slider = document.querySelector('.slider');
const innerSlider = document.querySelector('.inner-slider');
const prev = document.querySelector('.slider-prev');
const next = document.querySelector('.slider-next');

let dragged = false;
let startX;
let x;

// Desktop Version

slider.addEventListener("mousedown", e => {
    dragged = true;
    startX = e.offsetX - innerSlider.offsetLeft;
    slider.style.cursor = "grabbing";
});

slider.addEventListener("mouseenter", () => {
    slider.style.cursor = "grab";
});

slider.addEventListener("mouseup", () => {
    slider.style.cursor = "grab";
    dragged = false;
});

slider.addEventListener("mousemove", e => {
    if (!dragged) return;
    e.preventDefault();

    x = e.offsetX;

    innerSlider.style.left = `${x - startX}px`;

    checkProbs();

});

// Mobile Version

slider.addEventListener('touchstart', e => {
    dragged = true;
    startX = e.targetTouches[0].clientX - innerSlider.offsetLeft;

    checkProbs();

}, {passive: true});

slider.addEventListener('touchmove', e => {
    if (!dragged) return;
    x = e.targetTouches[0].clientX;

    innerSlider.style.left = `${x - startX}px`;

    checkProbs();

}, {passive: true});

prev.addEventListener('click', () => {
    let innerSliderLeft = innerSlider.style.left;
    innerSlider.style.left = parseInt(innerSliderLeft.replace('px', '')) + 265 + 'px';

    checkProbs();
});

next.addEventListener('click', () => {
    let innerSliderLeft = innerSlider.style.left;
    innerSlider.style.left = innerSliderLeft.replace('px', '') - 265 + 'px';

    checkProbs();
});

const checkProbs = () => {
    let outer = slider.getBoundingClientRect();
    let inner = innerSlider.getBoundingClientRect();

    if (parseInt(innerSlider.style.left) > 0)
        innerSlider.style.left = "-10px";

    if (inner.right < outer.right)
        innerSlider.style.left = `-${inner.width - outer.width - 10}px`;
}
