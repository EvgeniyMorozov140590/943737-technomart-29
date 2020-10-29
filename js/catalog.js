const addIntoCartModal = new Modal('.modal-add-into-cart');

document.addEventListener('click', (event) => {
    isBuyButton = event.target.classList.contains('button-buy');
    
    if (isBuyButton) {
        addIntoCartModal.show();
    }
})