const ParallaxContent = (article) => {
  let windowOffset = window.scrollY
  let articleOffset = article.offsetTop
  if (articleOffset - windowOffset > 0) {
    article.style = `margin-top: -${windowOffset}px`
  }
}

document.addEventListener('DOMContentLoaded', () => {
  const article = document.querySelector('main')
  window.addEventListener('scroll', e => {
    ParallaxContent(article)
  })
})