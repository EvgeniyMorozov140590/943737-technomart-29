var productSlider = (function() {
	let activeSlideIndex = 0;

	return {
		create: function(config) {
			init(config);
		}
	};

	function init(config) {
		const slideClassList = config.slideClassList;
		const slider = document.querySelector(config.sliderSelector);
		const previousButton = slider.querySelector(config.previousButtonSelector);
		const nextButton = slider.querySelector(config.nextButtonSelector);
		const showSlideButtons = slider.querySelectorAll(config.showSlideButtonsSelector);

		nextButton.addEventListener('click', () => {
			slideShowNext();
		});

		previousButton.addEventListener('click', () => {
			slideShowPrevious();
		});

		showSlideButtons.forEach((button, index) => {
			button.addEventListener('click', () => {
				slideShow(index);
			});
		});

		function slideShowNext() {
			if (activeSlideIndex < slideClassList.length - 1) {
				slideShow(activeSlideIndex + 1);
			};
		}
		
		function slideShowPrevious() {
			if (activeSlideIndex > 0) {
				slideShow(activeSlideIndex - 1);
			};
		}

		function slideShow(slideIndex) {
			if (activeSlideIndex === slideIndex) {
				return;
			}
	
			const showButtonActiveClass = 'slider-show-button-active';
			const hideClass = 'visibility-hidden';
			const slideClass = slideClassList[slideIndex];
			const activeSlideClass = slideClassList[activeSlideIndex];
			const captions = slider.querySelectorAll('.product-info-wrapper');
	
			slider.classList.remove(activeSlideClass);
			slider.classList.add(slideClass);
	
			showSlideButtons[activeSlideIndex].classList.toggle(showButtonActiveClass);
			showSlideButtons[slideIndex].classList.toggle(showButtonActiveClass);
	
			captions[activeSlideIndex].classList.toggle(hideClass);
			captions[slideIndex].classList.toggle(hideClass);
	
			activeSlideIndex = slideIndex;
		}
	}
})();