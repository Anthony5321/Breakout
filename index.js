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
const blockHeight = 15
const blockWidth = 50
let timerId
timerId = setInterval(moveBall, 100000)
const paddleStart = [235, 10]
let currentPosition = paddleStart
const ballStart = [265, 40]
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
}

//move ball
function moveBall() {
    ballPosition[0] += x
    ballPosition[1] += y
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

// wall and paddle interatctions
function collision () {
  for (let math = 0; math < block.length; math+= 1){
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
    if
    ((ballPosition[0] >= currentPosition[0] && ballPosition[0] < blockWidth) &&
    (ballPosition[1] > currentPosition[1] && ballPosition[1] < blockHeight ))
    {
      change()
      // block.remove()
    }
}
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
  if  (ballPosition[1] === -2) {
// alert('You lost, try again?')
location.reload()
  }
}

// function collisionBlock() {
// if (currentPosition[0], currentPosition[1] = block) 
//       {  

//         change()
//       }}