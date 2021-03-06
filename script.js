import LocomotiveScroll from 'locomotive-scroll';

const scroll = new LocomotiveScroll({
	el: document.querySelector('[data-scroll-container]'),
	smooth: true,
	smartphone: {
		smooth: true,
	},
	tablet: {
		smooth: true,
	},
	lerp: 0.08,
	multiplier: 1
});
