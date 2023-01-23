const block = document.getElementsByClassName('block')
const paddle = document.getElementsByClassName('paddle')
const conditions = true;
let xDirection = -2
let yDirection = 2

const ballStart = [305, 40]
let ballCurrentPosition = ballStart

function userStart () {
absolute
  left
  bottom 
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

function winner () {

}

for (math = 0; math < block.length; math += 1){
    block[math].addEventListener("click", breakBlock)
}

const board = document.querySelector('.board')
const ballDiameter = 30

let timerId
let score = 0

//add ball
const ball = document.createElement('div')
ball.classList.add('ball')
board.appendChild(ball)


//draw Ball
function drawBall() {
  ball.style.left = ballCurrentPosition[0] + 'px'
  ball.style.bottom = ballCurrentPosition[1] + 'px'
}

//move ball
function moveBall() {
    ballCurrentPosition[0] += xDirection
    ballCurrentPosition[1] += yDirection
    drawBall()

}
timerId = setInterval(moveBall, 20)

function changeDirection() {
  if (xDirection === 2 && yDirection === 2) {
    yDirection = -2
    return
  }
  if (xDirection === 2 && yDirection === -2) {
    xDirection = -2
    return
  }
  if (xDirection === -2 && yDirection === -2) {
    yDirection = 2
    return
  }
  if (xDirection === -2 && yDirection === 2) {
    xDirection = 2
    return
  }
}
