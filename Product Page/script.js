window.addEventListener('load', function(){
    let mobileBars = document.querySelector('#cBars');
    let modal = document.querySelector('.cModal');
    let body = document.querySelector('body');
    let mobileMenuItem = document.querySelector('.cMobilemenuitem');

    mobileBars.addEventListener('click', function(){
        if(!modal.classList.contains('modalOpen')){
            modal.classList.add('modalOpen');
        }
        body.style.overflow = 'hidden';
    })
    mobileMenuItem.addEventListener('click', function(){
        modal.classList.remove('modalOpen');
        body.style.overflow = 'auto';
    })
})