var Modal = function (modalSelector) {
    let modalElement;

    init(modalSelector);

    return {
        show: function() {
            show();
        },
        close: function() {
            close();
        }
    }

    function init(modalSelector) {
        modalElement = document.querySelector(modalSelector);
        const closeButton = modalElement.querySelector('.modal-close');

        closeButton.addEventListener('click', () => {
            close();
        });
    }

    function close() {
        modalElement.classList.toggle('visibility-hidden', true);
        modalElement.classList.remove('modal-show');
    }

    function show() {
        modalElement.classList.add('modal-show');
        modalElement.classList.toggle('visibility-hidden', false);
    }
};