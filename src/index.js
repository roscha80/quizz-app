const answer = document.querySelector('.answer')
const buttonShow = document.querySelector('.buttonShowAnswer')

const bookmark = document.querySelector('.js__bookmark')
const bookmarkAdded = document.querySelector('.js__bookmark--added')

const homeScreen = document.querySelector('.js__home')
const createScreen = document.querySelector('.js__form')
const bookmarkedScreen = document.querySelector('.js__bookmarked')
const profileScreen = document.querySelector('.js__profile')

const homeButtonShow = document.querySelector('.js__button-home')
const createButtonShow = document.querySelector('.js__button-create')
const bookmarkedButtonShow = document.querySelector('.js__button-bookmarked')
const profileButtonShow = document.querySelector('.js__button-profile')

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
  profileScreen.classList.add('hidden')

  homeButtonShow.classList.add('navbar__button-active')
  createButtonShow.classList.remove('navbar__button-active')
  bookmarkedButtonShow.classList.remove('navbar__button-active')
  profileButtonShow.classList.remove('navbar__button-active')
})

createButtonShow.addEventListener('click', () => {
  homeScreen.classList.add('hidden')
  createScreen.classList.remove('hidden')
  bookmarkedScreen.classList.add('hidden')
  profileScreen.classList.add('hidden')

  homeButtonShow.classList.remove('navbar__button-active')
  createButtonShow.classList.add('navbar__button-active')
  bookmarkedButtonShow.classList.remove('navbar__button-active')
  profileButtonShow.classList.remove('navbar__button-active')
})

bookmarkedButtonShow.addEventListener('click', () => {
  homeScreen.classList.add('hidden')
  createScreen.classList.add('hidden')
  bookmarkedScreen.classList.remove('hidden')
  profileScreen.classList.add('hidden')

  homeButtonShow.classList.remove('nnavbar__button-active')
  createButtonShow.classList.remove('navbar__button-active')
  bookmarkedButtonShow.classList.add('navbar__button-active')
  profileButtonShow.classList.remove('navbar__button-active')
})

profileButtonShow.addEventListener('click', () => {
  homeScreen.classList.add('hidden')
  createScreen.classList.add('hidden')
  bookmarkedScreen.classList.add('hidden')
  profileScreen.classList.remove('hidden')

  homeButtonShow.classList.remove('nnavbar__button-active')
  createButtonShow.classList.remove('navbar__button-active')
  bookmarkedButtonShow.classList.remove('navbar__button-active')
  profileButtonShow.classList.add('navbar__button-active')
})
