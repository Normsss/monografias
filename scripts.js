
// const flipImage = () => {

// var flipBox = document.querySelector('.flip-box');
// flipBox.addEventListener( 'click', function() {
//   flipBox.classList.toggle('is-flipped');
// });
// }



// var flipBox = document.querySelector('.flip-box');
// flipBox.addEventListener( 'click', function() {
//   flipBox.classList.toggle('is-flipped');
// });

// var flipBox = document.getElementsByClassName('flip-box');
// for(var i = 0; i < flipBox.length; i++){
//  addEventListener('click', function () {
//      alert('Hi!')

//     })};

    document.querySelectorAll('.flip-box').forEach(flipBox => {
        flipBox.addEventListener('click', event => {
            flipBox.classList.toggle('is-flipped');
        })
      })