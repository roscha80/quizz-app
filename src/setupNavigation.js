import getElement from './utils/getElement'

const header = getElement('[data-header]')

const homeScreen = getElement('[data-page="js__home"]')
const createScreen = getElement('[data-page="js__form"]')
const bookmarkedScreen = getElement('[data-page="js__bookmarked"]')
const profileScreen = getElement('[data-page="js__profile"]')

const homeButtonShow = getElement('[data-button="js__button-home"]')
const createButtonShow = getElement('[data-button="js__button-create"]')
const bookmarkedButtonShow = getElement('[data-button="js__button-bookmarked"]')
const profileButtonShow = getElement('[data-button="js__button-profile"]')

export default function setupNavigation() {
  bookmarkedButtonShow.addEventListener('click', navigateToBookmarked)

  profileButtonShow.addEventListener('click', navigateToProfile)

  homeButtonShow.addEventListener('click', navigateToHome)

  createButtonShow.addEventListener('click', navigateToCreate)

  function hideAllPages() {
    homeScreen.classList.add('hidden')
    createScreen.classList.add('hidden')
    bookmarkedScreen.classList.add('hidden')
    profileScreen.classList.add('hidden')
  }

  function deactivateAllButtons() {
    homeButtonShow.classList.remove('navbar__button-active')
    createButtonShow.classList.remove('navbar__button-active')
    bookmarkedButtonShow.classList.remove('navbar__button-active')
    profileButtonShow.classList.remove('navbar__button-active')
  }

  function navigateToHome() {
    changeScreen(homeScreen)
    activateButton(homeButtonShow)
    changeHeaderTextHome()
  }
  function navigateToCreate() {
    changeScreen(createScreen)
    activateButton(createButtonShow)
    changeHeaderTextCreate()
  }

  function navigateToBookmarked() {
    changeScreen(bookmarkedScreen)
    activateButton(bookmarkedButtonShow)
    changeHeaderTextBookmarked()
  }

  function navigateToProfile() {
    changeScreen(profileScreen)
    activateButton(profileButtonShow)
    changeHeaderTextProfile()
  }

  function changeHeaderTextHome() {
    header.innerText = 'Magic Quizard'
  }

  function changeHeaderTextCreate() {
    header.innerText = 'Create'
  }

  function changeHeaderTextBookmarked() {
    header.innerText = 'Bookmarked'
  }

  function changeHeaderTextProfile() {
    header.innerText = 'Profile'
  }

  function changeScreen(page) {
    hideAllPages()
    page.classList.remove('hidden')
  }

  function activateButton(button) {
    deactivateAllButtons()
    button.classList.add('navbar__button-active')
  }
}
