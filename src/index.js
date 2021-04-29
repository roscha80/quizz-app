const answer = document.querySelector('.answer')
const buttonShow = document.querySelector('.buttonShowAnswer')

buttonShow.addEventListener('click', () => {
  answer.classList.toggle('hidden')
})
