// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!
document.getElementById('modal').className = 'hidden'

const likeBtns = document.querySelectorAll('.like-glyph')
  
for (btn of likeBtns){
  btn.addEventListener('click', handleClick)
}

function handleClick(e){
  const heart = e.target
  mimicServerCall()
    .then(() => {
      if (heart.textContent === '♡'){
      heart.textContent = FULL_HEART
      heart.className = 'activated-heart'
      } else {
        heart.textContent = EMPTY_HEART
        heart.className = 'like-glyph'
      }
    })
    .catch(() => {
      document.getElementById('modal').className = ""
      setTimeout(() => document.getElementById('modal').className = 'hidden',3000)
    })
}

//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
