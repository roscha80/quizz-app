import getElement from './utils/getElement'

const buttonShow = getElement('.buttonShowAnswer')

export default function setupQuizcard() {
  buttonShow.addEventListener('click', hideAnswer)

  function hideAnswer() {
    const answer = getElement('.answer')
    answer.classList.toggle('hidden')
  }
}
