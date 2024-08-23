const btn = document.querySelector('#btn')
const btn2 = document.querySelector('#btn2')
const btn3 = document.querySelector('#btn3')
const btn4 = document.querySelector('#btn4')
const img = document.querySelector('.img')
const body = document.querySelector('body')
const p = document.querySelector('p')



btn.onclick = ( ) => {
   body.classList.toggle('black')

}
btn2.onclick = ( ) => {
  img.classList.toggle('hidden')
}
btn3.onclick = ( ) => {
   p.classList.toggle('hidden')
}
btn4.onclick = ( ) => {
   p.classList.toggle('orange')
}