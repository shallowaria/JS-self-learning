function addClass(element, newClassName) {
  element.classList.add(newClassName);
}
function removeClass(element, oldClassName) {
  element.classList.remove(oldClassName);
}
function hasClass(element, className) {
  return element.classList.contains(className);
}
function replaceClass(element, oldClassName, newClassName) {
  if (hasClass(element, oldClassName)) {
    element.classList.replace(oldClassName, newClassName);
  }
}
function toggleClass(element, className) {
  element.classList.toggle(className);
}
