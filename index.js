const block = document.getElementsByClassName('block')
const board = document.querySelector('.board')
const divs = [...document.querySelectorAll('div')]
const conditions = true;
let rightPressed = false;
let leftPressed = false;
let x = 2
let y = -2
const paddleWidth = 75
const paddleHeight = 15
const boundsHeight = 640
const boundsWidth = 540
const ballDiameter = 15
const blockHeight = 15 + 'px'
const blockWidth = 50 + 'px'
let timerId
timerId = setInterval(moveBall, 10000)
const paddleStart = [235, 10]
let currentPosition = paddleStart
const ballStart = [265, 40]
// for testing blocks
// const ballStart = [420, 625]
let ballPosition = ballStart

// Key input
document.onkeydown = (e) => {
  e = e || window.event;
  if (e.key === 'ArrowLeft') {
    currentPosition[0] -= 10
    console.log(currentPosition[0])
   if (currentPosition[0] <= 0) {
    currentPosition[0] += 10
   }
    movePaddle()
    console.log(currentPosition[0] > 0)
    console.log('left arrow pressed')
  } else if (e.key === 'ArrowRight') {
    currentPosition[0] += 10
    console.log(currentPosition[0])
    if (currentPosition[0] >= 475) {
      currentPosition[0] -= 10
    }
    movePaddle()
    console.log('right arrow pressed')
  }
}


// For tests
function breakBlock() {
        if (!(this.classList.contains("x"))){
            if (conditions === true) {
                this.setAttribute("class", "x");
                // winner();
                // conditions = false;
                return false;
      
          }
            if (conditions === false) {
                this.setAttribute("class", "");
                conditions = true;
          }
        }
        
      }
for (math = 0; math < block.length; math += 1){
    block[math].addEventListener("click", breakBlock)
}

// Add paddle
const paddle = document.createElement('div')
paddle.classList.add('paddle')
board.appendChild(paddle)

// Player moving
function movePaddle() {
  paddle.style.left = currentPosition[0] + 'px'
  paddle.style.bottom = currentPosition[1] + 'px'
}

//add ball
const ball = document.createElement('div')
ball.classList.add('ball')
board.appendChild(ball)


//draw Ball
function drawBall() {
  ball.style.left = ballPosition[0] + 'px'
  ball.style.bottom = ballPosition[1] + 'px'

  console.log(ball.getBoundingClientRect())
}

//move ball
function moveBall() {
    ballPosition[0] += x
    ballPosition[1] += y
ball.getBoundingClientRect();
    drawBall()
    collision ()
    lose()
    // collisionBlock()

}

// Reverse Direction
function change() {
  if (x === 2 && y === 2) {
    y = -2
    return
  }
  if (x === 2 && y === -2) {
    x = -2
    return
  }
  if (x === -2 && y === -2) {
    y = 2
    return
  }
  if (x === -2 && y === 2) {
    x = 2
    return
  }
}

// for testing the blocks
// const block = document.getElementsByid('bl4')
let bl11 = document.getElementById('bl1-1')
bl11.getBoundingClientRect();
let bl12 = document.getElementById('bl1-2')
bl12.getBoundingClientRect();
let bl13 = document.getElementById('bl1-3')
bl13.getBoundingClientRect();
let bl14 = document.getElementById('bl1-4')
bl14.getBoundingClientRect();
let bl15 = document.getElementById('bl1-5')
bl15.getBoundingClientRect();
let bl16 = document.getElementById('bl1-6')
bl16.getBoundingClientRect();
let bl17 = document.getElementById('bl1-7')
bl17.getBoundingClientRect();
let bl18 = document.getElementById('bl1-8')
bl18.getBoundingClientRect();
let bl19 = document.getElementById('bl1-9')
bl19.getBoundingClientRect();


function checkCollision(elm1, elm2) {
  var elm1Rect = elm1.getBoundingClientRect();
  var elm2Rect = elm2.getBoundingClientRect();

  return (elm1Rect.right >= elm2Rect.left &&
      elm1Rect.left <= elm2Rect.right) &&
    (elm1Rect.bottom >= elm2Rect.top &&
      elm1Rect.top <= elm2Rect.bottom);
}

// wall and paddle interatctions
function collision () {
    if(ballPosition[0] >= (boundsWidth - ballDiameter) || ballPosition[0] <= 0 || ballPosition[1] >= (boundsHeight - ballDiameter))
    {
      change()
    }
    if
    (
      (ballPosition[0] > currentPosition[0] && ballPosition[0] < currentPosition[0] + paddleWidth) &&
      (ballPosition[1] > currentPosition[1] && ballPosition[1] < currentPosition[1] + paddleHeight ) 
    )
    {
      change()
    }
    // Work around for the ball not hitting correctly
    // if
    // ((ballPosition[1] > 590 && ballPosition[0] < 245 + blockWidth))
    // {
    // let rowOne = document.querySelector('.rowOne')
    // rowOne.removeChild(rowOne.children[0])
    // change()
    // }
    // if
    // ((ballPosition[1] > 570 && ballPosition[0] < 245 + blockWidth))
    // {
    // let rowTwo = document.querySelector('.rowTwo')
    // rowTwo.removeChild(rowTwo.children[0])
    // change()
    // }
    // if
    // ((ballPosition[1] > 550 && ballPosition[0] < 245 + blockWidth))
    // {
    // let rowThree = document.querySelector('.rowThree')
    // rowThree.removeChild(rowThree.children[0])
    // change()
    // }
    // if
    //   ((ballPosition[1] > 530))
    // {
    //   let rowFour = document.querySelector('.rowFour')
    // rowFour.removeChild(rowFour.children[0])
    //   change()
    // }
    if
    (
      checkCollision(ball, bl11)
    )
    {
      bl11.remove()
    change()
    }
    if
    (
      checkCollision(ball, bl12)
    )
    {
      bl12.remove()
    change()
    }
    if
    (
      checkCollision(ball, bl13)
    )
    {
      bl13.remove()
    change()
    }
    if
    (
      checkCollision(ball, bl14)
    )
    {
      bl14.remove()
    change()
    }
    if
    (
      checkCollision(ball, bl15)
    )
    {
      bl15.remove()
    change()
    }
    if
    (
      checkCollision(ball, bl16)
    )
    {
      bl16.remove()
    change()
    }
    if
    (
      checkCollision(ball, bl17)
    )
    {
      bl17.remove()
    change()
    }
    if
    (
      checkCollision(ball, bl18)
    )
    {
      bl18.remove()
    change()
    }
    if
    (
      checkCollision(ball, bl19)
    )
    {
      bl19.remove()
    change()
    }
    // if
    // ((ballPosition[1] > 510 && ballPosition[0] < 245 + blockWidth))
    // {
    // let breakbl5 = document.getElementById('bl5-5')
    // breakbl5.remove()
    // // change()
    // }
    // if
    // ((ballPosition[1] > 510 && ballPosition[0] < 300 + blockWidth))
    // {
    // let breakbl6 = document.getElementById('bl5-6')
    // breakbl6.remove()
    // change()
    // }
    // if
    // ((ballPosition[1] >= 510))
    // {
    // let breakbl7 = document.getElementById('bl5-7')
    // breakbl7.remove()
    // change()
    // }
}

// Win conditions
// function winner() {
//   if ((bl1.classList.contains("X")) && (bl2.classList.contains("X")) && (bl3.classList.contains("X")) &&
//              ((bl4.classList.contains("X")) && (bl5.classList.contains("X")) && (bl6.classList.contains("X"))) &&
//              ((bl7.classList.contains("X")) && (bl8.classList.contains("X")) && (bl9.classList.contains("X"))))
//              {
//       alert("You win, YAY");
//               }
// }

// Loss conditions
function lose() {
  if  (ballPosition[1] < -2) {
// alert('You lost, try again?')
location.reload()
  }
}

// function collisionBlock() {
// if (currentPosition[0], currentPosition[1] = block) 
//       {  

//         change()
//       }}

