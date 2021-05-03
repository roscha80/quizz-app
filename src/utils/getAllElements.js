export default function getAllElements(selector, target = document) {
  return target.querySelectorAll(selector)
}
