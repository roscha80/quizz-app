export default function getElement(selector, target = document) {
  return target.querySelector(selector)
}
