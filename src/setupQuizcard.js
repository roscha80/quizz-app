import getAllElements from './utils/getAllElements'
import getElement from './utils/getElement'

export default function setupQuizcards() {
  const quizcards = getAllElements('[data-quizcard]')

  quizcards.forEach(card => {
    const button = getElement('[data-button]', card)
    const answer = getElement('[data-answer]', card)
    button.addEventListener('click', () => {
      answer.classList.toggle('hidden')
    })
  })
}
