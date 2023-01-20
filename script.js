
const dropbtn = document.querySelector('.city__dropbtn');
const DropdownModal = document.querySelector('.city__dropdown-content');
const left = document.querySelector('.slider__arrow-left')
const right = document.querySelector('.slider__arrow-right')
const container = document.querySelector('.slider__container')
const leftMobil = document.querySelector('.slider__arrow-left-mobil')
const rightMobil = document.querySelector('.slider__arrow-right-mobil')
const containerMobil = document.querySelector('.slider__container-mobil')

dropbtn.onclick = function myFunction() {
  DropdownModal.classList.toggle("city__show");
}

let offset = 0;

right.addEventListener('click', () => {
  offset += 700;
  if (offset > 3500) {
    offset = 0
  }
  container.style.left = -offset + 'px';
})

left.addEventListener('click', () => {
  offset -= 700;
  if (offset < 0) {
    offset = 3500
  }
  container.style.left = -offset + 'px';
})

rightMobil.addEventListener('click', () => {
  offset += 290;
  if (offset > 1450) {
    offset = 0
  }
  containerMobil.style.left = -offset + 'px';
})

leftMobil.addEventListener('click', () => {
  offset -= 290;
  if (offset < 0) {
    offset = 1450
  }
  containerMobil.style.left = -offset + 'px';
})

