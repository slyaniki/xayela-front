
/*** modal  */
var btnModalClose = document.getElementById('close__modal');
var modal = document.getElementById('modal');
var btnModalOpen = document.querySelectorAll(".btn-open");

btnModalOpen.forEach(modalOpen => {
    modalOpen.addEventListener('click', function () {
        modal.classList.add('modal__active');

        console.log('clic')
    })
})

btnModalClose.addEventListener('click', function () {
    modal.classList.remove('modal__active');
})