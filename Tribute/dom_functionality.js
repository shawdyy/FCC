window.addEventListener('load', function(){
  // NAVBAR start
  let mobileMenu = document.querySelector('#mobile_menu');
  let mobilePoints = document.querySelector('#mobile_points > a');
  mobilePoints.addEventListener('click', function(e){
    e.preventDefault();
    if(mobileMenu.classList.contains('hidden')){
      mobileMenu.classList.remove('hidden');
    }
    else{
      mobileMenu.classList.add('hidden');
    }
  })
  // NAVBAR End
  // CONTENTBOX start
  let buttonBoxes = document.querySelectorAll('.life_date');
  let textBoxes = document.querySelectorAll('.content_text_box');
  console.log(textBoxes);
  for(let i=0; i< buttonBoxes.length; i++){
    buttonBoxes[i].addEventListener('click', function(){
      for(let j=0; j<buttonBoxes.length; j++){
        if(buttonBoxes[j].classList.contains('active')){
          buttonBoxes[j].classList.remove('active');
          textBoxes[j].classList.remove('active-')
        }
      }
      this.classList.add('active');
      textBoxes[parseInt(this.dataset.count)].classList.add('active-');
    })
  }
})
