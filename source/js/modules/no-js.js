function initJs() {
  const noJsElement = document.querySelector('.no-js');
  if (noJsElement) {
    noJsElement.classList.remove('no-js');
  }
}

export { initJs };
