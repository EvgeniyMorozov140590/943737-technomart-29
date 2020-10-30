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

const mapModal = new Modal('.modal-map');
const writeUsModal = new Modal('.modal-write-us');
const showMap = document.querySelector('.show-map');
const showWriteUs = document.querySelector('.show-write-us');
const addIntoCartModal = new Modal('.modal-add-into-cart');
const writeUsForm = document.querySelector('.form-write-us');

writeUsForm.elements.name.addEventListener('invalid', invalidFormEffect);
writeUsForm.elements.email.addEventListener('invalid', invalidFormEffect);
writeUsForm.elements.message.addEventListener('invalid', invalidFormEffect);

document.addEventListener('click', (event) => {
    isBuyButton = event.target.classList.contains('button-buy');
    
    if (isBuyButton) {
        addIntoCartModal.show();
    }
})

showWriteUs.addEventListener('click', (event) => {
    event.preventDefault();
    writeUsModal.show();
})

showMap.addEventListener('click', (event) => {
    event.preventDefault();
    mapModal.show();
})

document.addEventListener('keydown', (event) => {
    if (event.code === 'Escape') {
        writeUsModal.close();
        mapModal.close();
    }
});

productSlider.create(sliderConfig);
serviceTabs.create(serviceTabsConfig);

function invalidFormEffect() {
    const modalElement = writeUsModal.getModalElement();
    
    modalElement.classList.add('shake');

    setTimeout(() => {
        modalElement.classList.remove('shake');
        modalElement.classList.remove('modal-show');
    }, 600);
}