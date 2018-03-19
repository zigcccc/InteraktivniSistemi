const ParallaxContent = (article, nav) => {
  let windowOffset = window.scrollY
  let articleOffset = article.offsetTop
  if (articleOffset - windowOffset > 0) {
    nav.style = `transform: translateY(${windowOffset / 2}px)`
  }
}

document.addEventListener('DOMContentLoaded', () => {
  const article = document.querySelector('main')
  const nav = document.getElementById('main-nav')
  window.addEventListener('scroll', e => {
    ParallaxContent(article, nav)
  })
})