// Imports
// import barba from 'barba';
// import { gsap } from 'gsap';
// Vars
navbar = document.querySelector('nav')
ham_btn = document.querySelector('.nav__ham')
nav = document.querySelector('.item__cont')
body = document.querySelector('body')
header = document.querySelector('.head')
body__container = document.querySelector('.body__div')
bar1 = document.querySelector('.first')
bar2 = document.querySelector('.second')
logo = document.querySelector('.logo')

left = document.querySelectorAll('.left')
right = document.querySelectorAll('.right')

window.onscroll = function() {
  let curr_scroll_p = window.pageYOffset
  let scroll_pos = window.scrollY - 1000
    for (let i = 0; i < left.length; i++) {
      if(matchMedia('(max-width: 1000px)')['matches']){
        left[i].style.marginLeft = 'auto'
        left[i].style.marginRight = 'auto'
      }else{
      if(curr_scroll_p > 1155){
        left[i].style.marginLeft = 'auto'
        left[i].style.marginRight = 'auto'
      }else{
        left[i].style.marginLeft = `${scroll_pos}px`
      }
    }
    for (let i = 0; i < right.length; i++) {
      if(matchMedia('(max-width: 1000px)')['matches']){
        right[i].style.marginRight = 'auto'
        right[i].style.marginLeft = 'auto'
      } else{
      if(curr_scroll_p > 1155){
        right[i].style.marginRight = 'auto'
        right[i].style.marginLeft = 'auto'
      }else{
        right[i].style.marginRight = `${scroll_pos}px`
      }
    }
  }
  }
}


const ham_click = () => {
    if (nav.classList.contains("active")){
        // Appearance 
        nav.classList.remove("active");
        nav.style.transform = 'translateY(-101%)'
        // // Form
        bar1.style.transform='rotate(110deg)'
        bar2.style.transform='rotate(110deg)'
        bar1.style.margin = '0 0 0 -20px'
        bar2.style.margin = '0 0 0 -20px'
        body__container.classList.remove('disable-scroll')
        body.classList.remove('disable-scroll')
    } else {
        // Appearance
        nav.classList.add('active')
        nav.style.transform = 'translateY(0%)'
        // Form
        bar1.style.transform='rotate(223deg)'
        bar2.style.transform='rotate(-223deg)'
        bar1.style.margin = '0 0 0 -35px'
        bar2.style.margin = '0 0 0 -35px'
        body.classList.add('disable-scroll')
        body__container.classList.add('disable-scroll')
    }
}

// Close Menu On Click

item__link = document.querySelectorAll('.item__link')
for(let x = 0; x < item__link.length; x++){
  item__link[x].addEventListener('click', ()=>{
      ham_click()
  })
}

// Hover animation

proj__prev = document.querySelectorAll('.proj__prev')
circle__cursor = document.querySelector('.circle__cursor')

for(let o = 0; o < proj__prev.length; o++){
  proj__prev[o].addEventListener('mousemove', (e)=>{
    circle__cursor.style.opacity = 100
    let x = e.clientX
    let y = e.clientY
    circle__cursor.style.left = x + 'px'
    circle__cursor.style.top = y + 'px'
  })
  proj__prev[o].addEventListener('mouseout', (e)=>{
    circle__cursor.style.opacity = 0
  })
}

// Spotlight

const ov__div = document.querySelector('.ov__div')
const span = document.querySelector('.hover-btn2')
const overlay = document.querySelector('.overlay')

ov__div.addEventListener('mousemove', (e) => {
    const { clientX, clientY } = e;
    const x = Math.round((clientX / overlay.clientWidth) * 100);
    const y = Math.round(e.clientY / 10);

    gsap.to(overlay, {
        '--x': `${x}%`,
        '--y': `${y}%`,
        duration: 0.3,
        ease: 'sine.out'
    })
})

// Footer Title
const footer__title = document.querySelector(".footer__title");
const copy = () =>{
  navigator.clipboard.writeText(footer__title.innerHTML);
}

const email__cursor = document.querySelector('.email__cursor')
footer__title.addEventListener('mousemove', (e)=>{
  email__cursor.style.opacity = 100
  let x = e.clientX
  let y = e.clientY
  email__cursor.style.left = x + 'px'
  email__cursor.style.top = y + 'px'
})
footer__title.addEventListener('mouseout', (e)=>{
  email__cursor.style.opacity = 0
})

// Loading Animation
const head__txt = document.querySelector('.head__txt')
const load__txt = () => {
  head__txt.style.transform = 'translateX(0px)'
}

