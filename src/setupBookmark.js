import getElement from './utils/getElement'

const bookmark = getElement('.js__bookmark')

export default function setupBookmark() {
  bookmark.addEventListener('click', changeBookmark)
  function changeBookmark() {
    const bookmarkAdded = getElement('.js__bookmark--added')
    bookmarkAdded.classList.toggle('quiz-card__bookmark--added')
  }
}
