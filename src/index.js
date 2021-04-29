const answer = document.querySelector('.answer')
const buttonShow = document.querySelector('.buttonShowAnswer')

const bookmark = document.querySelector('.js__bookmark')
const bookmarkAdded = document.querySelector('.js__bookmark--added')

const homeScreen = document.querySelector('[data-page="js__home"]')
const createScreen = document.querySelector('[data-page="js__form"]')
const bookmarkedScreen = document.querySelector('[data-page="js__bookmarked"]')
const profileScreen = document.querySelector('[data-page="js__profile"]')

const homeButtonShow = document.querySelector('[data-button="js__button-home"]')
const createButtonShow = document.querySelector(
  '[data-button="js__button-create"]'
)
const bookmarkedButtonShow = document.querySelector(
  '[data-button="js__button-bookmarked"]'
)
const profileButtonShow = document.querySelector(
  '[data-button="js__button-profile"]'
)

const header = document.querySelector('[data-header]')

buttonShow.addEventListener('click', () => {
  answer.classList.toggle('hidden')
})

bookmark.addEventListener('click', () => {
  bookmarkAdded.classList.toggle('quiz-card__bookmark--added')
})

const hideAllPages = () => {
  homeScreen.classList.add('hidden')
  createScreen.classList.add('hidden')
  bookmarkedScreen.classList.add('hidden')
  profileScreen.classList.add('hidden')
}

const unactiveAllButtons = () => {
  homeButtonShow.classList.remove('navbar__button-active')
  createButtonShow.classList.remove('navbar__button-active')
  bookmarkedButtonShow.classList.remove('navbar__button-active')
  profileButtonShow.classList.remove('navbar__button-active')
}

homeButtonShow.addEventListener('click', () => {
  header.innerText = 'Magic Quizard'
  hideAllPages()
  homeScreen.classList.remove('hidden')

  unactiveAllButtons()
  homeButtonShow.classList.add('navbar__button-active')
})

createButtonShow.addEventListener('click', () => {
  header.innerText = 'Create'
  hideAllPages()
  createScreen.classList.remove('hidden')

  unactiveAllButtons()
  createButtonShow.classList.add('navbar__button-active')
})

bookmarkedButtonShow.addEventListener('click', () => {
  header.innerText = 'Bookmarked'
  hideAllPages()
  bookmarkedScreen.classList.remove('hidden')

  unactiveAllButtons()
  bookmarkedButtonShow.classList.add('navbar__button-active')
})

profileButtonShow.addEventListener('click', () => {
  header.innerText = 'Profile'
  hideAllPages()
  profileScreen.classList.remove('hidden')

  unactiveAllButtons()
  profileButtonShow.classList.add('navbar__button-active')
})
