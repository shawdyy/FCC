window.addEventListener('load', function(){
    let mobileBars = document.querySelector('#cBars');
    let modal = document.querySelector('.cModal');
    let body = document.querySelector('body');
    let mobileMenuItem = document.querySelectorAll('.mNavitem');

    mobileBars.addEventListener('click', function(){
        if(!modal.classList.contains('modalOpen')){
            modal.classList.add('modalOpen');
        }
        body.style.overflow = 'hidden';
    })
    for (el in mobileMenuItem){
        mobileMenuItem[el].addEventListener('click', function(){
            modal.classList.remove('modalOpen');
            body.style.overflow = 'auto';
            body.attributes.removeNamedItem('style');
        })
    }
})