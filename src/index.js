const answer = document.querySelector('.answer')
const buttonShow = document.querySelector('.buttonShowAnswer')

const bookmark = document.querySelector('.quiz-card__bookmark')
const bookmarkAdded = document.querySelector('.quiz-card__bookmark--added')

buttonShow.addEventListener('click', () => {
  answer.classList.toggle('hidden')
})

bookmark.addEventListener('click', () => {
  bookmarkAdded.classList.toggle('quiz-card__bookmark--added')
})
