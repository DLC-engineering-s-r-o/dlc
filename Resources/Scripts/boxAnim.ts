export function initAnim() {
  const aboutCards = document.querySelectorAll(".card")

  let lastKnownScrollPosition = 0 
  let ticking = false 
  const animLength = 1000

  function addClassToCards(scrollPos) {
    for (let i = 0;  i < aboutCards.length;  i++) {
      let card = aboutCards[i] as HTMLElement
      let step = 1
      let interval = animLength / 20

      if (i == 1) {
        step = 100
        interval = animLength / 10
      }

      else if (i == 2) interval = animLength / 3

      if (scrollPos >= card.offsetTop + window.innerHeight / 3) {
        card.classList.add("card--visible")
      }
    }
  }

  document.addEventListener("scroll", () => {
    lastKnownScrollPosition = window.scrollY

    if (!ticking) {
      window.requestAnimationFrame(() => {
        addClassToCards(lastKnownScrollPosition)
        ticking
      }) 

      !ticking
    }
  }) 
}
