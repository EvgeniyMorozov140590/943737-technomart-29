const sliderConfig = {
    slideClassList: [ 'slide-perforators', 'slide-drills' ],
    sliderSelector: '.slider-product',
    previousButtonSelector: '.slider-previous-button',
    nextButtonSelector: '.slider-next-button',
    showSlideButtonsSelector: '.slider-show-button'
}

const serviceTabsConfig = {
	tabsSelector: '.tab-service',
	tabsContentSelector: '.tab-service-content'
}

productSlider.create(sliderConfig);
serviceTabs.create(serviceTabsConfig);