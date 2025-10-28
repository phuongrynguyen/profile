let token = document.querySelector(".token");
let man = document.querySelector(".man");

window.onload = () => {
  token.style.display = 'block';
  man.style.display = 'block';
  document.body.classList.add('r');
}

function dataToken(){
  let tokenUser = document.getElementById("token").value;
  let keyPass = document.getElementById("key").value;
  
  let tokenData = 'tiktok.com/@vuithicode.vtcd';
  let keyData = '_vtb.vytieubang';
  
if(tokenUser == tokenData && keyPass == keyData){
      token.style.display = 'none';
  man.style.display = 'none';
  document.body.classList.remove('r');
  document.getElementById("Myaudio").play();
    }
}

/* panner */
let panner = document.querySelector(".ner");
let body = document.querySelector(".profile-container");

document.addEventListener('scroll', function(){
  if(window.scrollY > 50){
    panner.style.display = 'block';
  }else {
    panner.style.display = 'none';
  }
});

/* */

/* */