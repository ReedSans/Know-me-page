const seeMoreBtn = document.getElementById('toggle-details-btn')
const detailsElements = document.querySelectorAll('.more-info ul, .more-info li')
let isShown = false

seeMoreBtn.addEventListener('click', () => {
  isShown = !isShown
  seeMoreBtn.innerText = isShown ? "SEE LESS" : "SEE MORE"
  Array.from(detailsElements).forEach(element => element.classList.toggle('expanded'))
})
