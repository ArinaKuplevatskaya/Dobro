const burger = document.querySelector('.burger')
const aside = document.querySelector('aside ul')
const links = document.querySelectorAll('.menu li a, aside ul li a')

links.forEach(el => {
   el.onclick = () => {
      document.body.classList.remove('noScroll')
      aside.classList.remove('active')
   }
})

burger.onclick = () => {
   document.body.classList.toggle('noScroll')
   aside.classList.toggle('active')
}
