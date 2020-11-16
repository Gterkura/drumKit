let btn = document.querySelectorAll('.drum');

for (let i = 0; i < btn.length; i++) {
  btn[i].addEventListener('click', function(){
      let btnClicked = this.innerHTML;
      playMusic(btnClicked);


  });
}

function playMusic(key) {

  switch (key) {
    case 'w':
      let a1 = new Audio('sounds/crash.mp3');
      a1.play();

      break;
    case 'a':
      let a2 = new Audio('sounds/kick-bass.mp3');
      a2.play();

      break;
    case 's':
      let a3 = new Audio('sounds/snare.mp3');
      a3.play();

      break;
    case 'd':
      let a4 = new Audio('sounds/tom-1.mp3');
      a4.play();

      break;
    case 'j':
      let a5 = new Audio('sounds/tom-2.mp3');
      a5.play();

      break;
    case 'k':
      let a6 = new Audio('sounds/tom-3.mp3');
      a6.play();

      break;
      case 'l':
        let a7 = new Audio('sounds/tom-4.mp3');
        a7.play();

        break;
    default:console.log(key);

  }
}
document.addEventListener('keypress', function(event){
playMusic(event.key);

});
