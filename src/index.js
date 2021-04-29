const answer = document.querySelector('.answer')
const buttonShow = document.querySelector('.buttonShowAnswer')

const bookmark = document.querySelector('.js__bookmark')
const bookmarkAdded = document.querySelector('.js__bookmark--added')

const homeScreen = document.querySelector('.js__home')
const createScreen = document.querySelector('.js__form')
const bookmarkedScreen = document.querySelector('.js__bookmarked')
const homeButtonShow = document.querySelector('.js__button-home')
const createButtonShow = document.querySelector('.js__button-create')
const bookmarkedButtonShow = document.querySelector('.js__button-bookmarked')

buttonShow.addEventListener('click', () => {
  answer.classList.toggle('hidden')
})

bookmark.addEventListener('click', () => {
  bookmarkAdded.classList.toggle('quiz-card__bookmark--added')
})

homeButtonShow.addEventListener('click', () => {
  homeScreen.classList.remove('hidden')
  createScreen.classList.add('hidden')
  bookmarkedScreen.classList.add('hidden')
})

createButtonShow.addEventListener('click', () => {
  createScreen.classList.remove('hidden')
  homeScreen.classList.add('hidden')
  bookmarkedScreen.classList.add('hidden')
})

bookmarkedButtonShow.addEventListener('click', () => {
  bookmarkedScreen.classList.remove('hidden')
  createScreen.classList.add('hidden')
  homeScreen.classList.add('hidden')
})
