const body = document.querySelector('body');

const home = document.querySelector('.home');
const content = document.querySelector('#content');

home.addEventListener('click',()=>{
    content.innerHTML = `<div class="d-flex flex-column justify-content-center align-items-center h-100 home_content">
    <h1 class="text-light">Mayank Jain</h1>
    <p>Video Editor</p>
  </div>`
})


const body = document.querySelector("body");


body.addEventListener("mousemove", (e) => {
  let innerHeight = window.innerHeight;
  let innerWidth = window.innerWidth;
  body.style.backgroundPositionX = innerWidth -e.offsetX + "px";
  body.style.backgroundPositionY = innerHeight -e.offsetY + "px";
});