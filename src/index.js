console.clear()
const box = document.querySelector('.box')
const button = document.querySelector('.btn')

button.addEventListener('click', () => {
  box.classList.add('blue')
})
const buttonRemove = document.querySelector('.btn-rm')
buttonRemove.addEventListener('click', () => {
  box.classList.remove('blue')
})
const buttonToggle = document.querySelector('.tgl')
buttonToggle.addEventListener('click', () => {
  box.classList.toggle('blue')
})
