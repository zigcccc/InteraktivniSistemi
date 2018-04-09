const ParallaxContent = (article, nav, overlay) => {
	let windowOffset = window.scrollY;
	let articleOffset = article.offsetTop;
	if (articleOffset - windowOffset > 0) {
		nav.style = `transform: translateY(${windowOffset / 2}px)`;
	}
	if (articleOffset - windowOffset < 0 - window.innerHeight / 2) {
		if (!localStorage.getItem('raftingOverlayWasVisible')) {
			overlay.classList.add('is-active');
			localStorage.setItem('raftingOverlayWasVisible', true);
			let closeBtn = overlay.querySelectorAll('.close-overlay');
			closeBtn.forEach(btn => {
				btn.addEventListener('click', e => {
					overlay.classList.remove('is-active');
				});
			});
		}
	}
};

document.addEventListener('DOMContentLoaded', () => {
	const body = document.querySelector('body');
	const article = document.querySelector('main');
	const nav = document.getElementById('main-nav');
	const overlay = document.getElementById('overlay');
	window.addEventListener('scroll', e => {
		if (!body.classList.contains('homepage')) {
			ParallaxContent(article, nav, overlay);
		}
	});
});
