const block = document.getElementsByClassName('block')
const board = document.querySelector('.board')
const conditions = true;
let rightPressed = false;
let leftPressed = false;
let x = 2
let y = -2
const paddleWidth = 75
const paddleHeight = 15
const boundsHigh = 620
const boundsWidth = 520
const ballDiameter = 15
let timerId
timerId = setInterval(moveBall, 100000)
const paddleStart = [225, 10]
let currentPosition = paddleStart
const ballStart = [255, 40]
let ballPosition = ballStart

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
    if (currentPosition[0] >= 455) {
      currentPosition[0] -= 10
    }
    movePaddle()
    console.log('right arrow pressed')
  }
}

function movePaddle() {
  paddle.style.left = currentPosition[0] + 'px'
  paddle.style.bottom = currentPosition[1] + 'px'
}
function breakBlock() {
        if (!(this.classList.contains("x"))){
            if (conditions === true) {
                this.setAttribute("class", "x");
                winner();
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


const paddle = document.createElement('div')
paddle.classList.add('paddle')
board.appendChild(paddle)

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

}

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
    if(ballPosition[0] >= (boundsWidth - ballDiameter) || ballPosition[0] <= 0 || ballPosition[1] >= (boundsHigh - ballDiameter))
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
}
}
function winner () {

}