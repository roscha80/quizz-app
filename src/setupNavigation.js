import getAllElements from './utils/getAllElements'

export default function setupNavigation() {
  const pages = getAllElements('[data-page]')
  const buttons = getAllElements('[data-nav]')

  buttons.forEach(button => {
    const buttonName = button.dataset.nav

    button.addEventListener('click', () => {
      pages.forEach(page => {
        const pageName = page.dataset.page

        page.classList.toggle('hidden', pageName !== buttonName)
      })
      buttons.forEach(buttonActive => {
        buttonActive.classList.toggle(
          'navbar__button-active',
          buttonName === buttonActive.dataset.nav
        )
      })
    })
  })
}
