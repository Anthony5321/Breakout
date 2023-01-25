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
const rowOne = document.querySelector('.rowOne')


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
        if (!(this.classList.contains(""))){
                this.remove("class");
                winner();
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
let bl21 = document.getElementById('bl2-1')
bl21.getBoundingClientRect();
let bl22 = document.getElementById('bl2-2')
bl22.getBoundingClientRect();
let bl23 = document.getElementById('bl2-3')
bl23.getBoundingClientRect();
let bl24 = document.getElementById('bl2-4')
bl24.getBoundingClientRect();
let bl25 = document.getElementById('bl2-5')
bl25.getBoundingClientRect();
let bl26 = document.getElementById('bl2-6')
bl26.getBoundingClientRect();
let bl27 = document.getElementById('bl2-7')
bl27.getBoundingClientRect();
let bl28 = document.getElementById('bl2-8')
bl28.getBoundingClientRect();
let bl29 = document.getElementById('bl2-9')
bl29.getBoundingClientRect();
let bl31 = document.getElementById('bl3-1')
bl31.getBoundingClientRect();
let bl32 = document.getElementById('bl3-2')
bl32.getBoundingClientRect();
let bl33 = document.getElementById('bl3-3')
bl33.getBoundingClientRect();
let bl34 = document.getElementById('bl3-4')
bl34.getBoundingClientRect();
let bl35 = document.getElementById('bl3-5')
bl35.getBoundingClientRect();
let bl36 = document.getElementById('bl3-6')
bl36.getBoundingClientRect();
let bl37 = document.getElementById('bl3-7')
bl37.getBoundingClientRect();
let bl38 = document.getElementById('bl3-8')
bl38.getBoundingClientRect();
let bl39 = document.getElementById('bl3-9')
bl39.getBoundingClientRect();
let bl41 = document.getElementById('bl4-1')
bl41.getBoundingClientRect();
let bl42 = document.getElementById('bl4-2')
bl42.getBoundingClientRect();
let bl43 = document.getElementById('bl4-3')
bl43.getBoundingClientRect();
let bl44 = document.getElementById('bl4-4')
bl44.getBoundingClientRect();
let bl45 = document.getElementById('bl4-5')
bl45.getBoundingClientRect();
let bl46 = document.getElementById('bl4-6')
bl46.getBoundingClientRect();
let bl47 = document.getElementById('bl4-7')
bl47.getBoundingClientRect();
let bl48 = document.getElementById('bl4-8')
bl48.getBoundingClientRect();
let bl49 = document.getElementById('bl4-9')
bl49.getBoundingClientRect();
let bl51 = document.getElementById('bl5-1')
bl51.getBoundingClientRect();
let bl52 = document.getElementById('bl5-2')
bl52.getBoundingClientRect();
let bl53 = document.getElementById('bl5-3')
bl53.getBoundingClientRect();
let bl54 = document.getElementById('bl5-4')
bl54.getBoundingClientRect();
let bl55 = document.getElementById('bl5-5')
bl55.getBoundingClientRect();
let bl56 = document.getElementById('bl5-6')
bl56.getBoundingClientRect();
let bl57 = document.getElementById('bl5-7')
bl57.getBoundingClientRect();
let bl58 = document.getElementById('bl5-8')
bl58.getBoundingClientRect();
let bl59 = document.getElementById('bl5-9')
bl59.getBoundingClientRect();


function checkCollision(ball, block) {
  var ballRect = ball.getBoundingClientRect();
  var blockRect = block.getBoundingClientRect();

  return (ballRect.right >= blockRect.left &&
      ballRect.left <= blockRect.right) &&
    (ballRect.bottom >= ballRect.top &&
      ballRect.top <= blockRect.bottom);
}

// wall, block and paddle interactions
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
    if
    (
      checkCollision(ball, bl11)
    )
    {
      bl11.remove()
      winner()
    change()
    }
    if
    (
      checkCollision(ball, bl12)
    )
    {
      bl12.remove()
      winner()
    change()
    }
    if
    (
      checkCollision(ball, bl13)
    )
    {
      bl13.remove()
      winner()
    change()
    }
    if
    (
      checkCollision(ball, bl14)
    )
    {
      bl14.remove()
      winner()
    change()
    }
    if
    (
      checkCollision(ball, bl15)
    )
    {
      bl15.remove()
      winner()
    change()
    }
    if
    (
      checkCollision(ball, bl16)
    )
    {
      bl16.remove()
      winner()
    change()
    }
    if
    (
      checkCollision(ball, bl17)
    )
    {
      bl17.remove()
      winner()
    change()
    }
    if
    (
      checkCollision(ball, bl18)
    )
    {
      bl18.remove()
      winner()
    change()
    }
    if
    (
      checkCollision(ball, bl19)
    )
    {
      bl19.remove()
      winner()
    change()
    }
    if
    (
      checkCollision(ball, bl21)
    )
    {
      bl21.remove()
      winner()
    change()
    }
    if
    (
      checkCollision(ball, bl22)
    )
    {
      bl22.remove()
      winner()
    change()
    }
    if
    (
      checkCollision(ball, bl23)
    )
    {
      bl23.remove()
      winner()
    change()
    }
    if
    (
      checkCollision(ball, bl24)
    )
    {
      bl24.remove()
      winner()
    change()
    }
    if
    (
      checkCollision(ball, bl25)
    )
    {
      bl25.remove()
      winner()
    change()
    }
    if
    (
      checkCollision(ball, bl26)
    )
    {
      bl26.remove()
      winner()
    change()
    }
    if
    (
      checkCollision(ball, bl27)
    )
    {
      bl27.remove()
      winner()
    change()
    }
    if
    (
      checkCollision(ball, bl28)
    )
    {
      bl28.remove()
      winner()
    change()
    }
    if
    (
      checkCollision(ball, bl29)
    )
    {
      bl29.remove()
      winner()
    change()
    }
    if
    (
      checkCollision(ball, bl31)
    )
    {
      bl31.remove()
      winner()
    change()
    }
    if
    (
      checkCollision(ball, bl32)
    )
    {
      bl32.remove()
      winner()
    change()
    }
    if
    (
      checkCollision(ball, bl33)
    )
    {
      bl33.remove()
      winner()
    change()
    }
    if
    (
      checkCollision(ball, bl34)
    )
    {
      bl34.remove()
      winner()
    change()
    }
    if
    (
      checkCollision(ball, bl35)
    )
    {
      bl35.remove()
      winner()
    change()
    }
    if
    (
      checkCollision(ball, bl36)
    )
    {
      bl36.remove()
      winner()
    change()
    }
    if
    (
      checkCollision(ball, bl37)
    )
    {
      bl37.remove()
      winner()
    change()
    }
    if
    (
      checkCollision(ball, bl38)
    )
    {
      bl38.remove()
      winner()
    change()
    }
    if
    (
      checkCollision(ball, bl39)
    )
    {
      bl39.remove()
      winner()
    change()
    }
    if
    (
      checkCollision(ball, bl41)
    )
    {
      bl41.remove()
      winner()
    change()
    }
    if
    (
      checkCollision(ball, bl42)
    )
    {
      bl42.remove()
      winner()
    change()
    }
    if
    (
      checkCollision(ball, bl43)
    )
    {
      bl43.remove()
      winner()
    change()
    }
    if
    (
      checkCollision(ball, bl44)
    )
    {
      bl44.remove()
      winner()
    change()
    }
    if
    (
      checkCollision(ball, bl45)
    )
    {
      bl45.remove()
      winner()
    change()
    }
    if
    (
      checkCollision(ball, bl46)
    )
    {
      bl46.remove()
      winner()
    change()
    }
    if
    (
      checkCollision(ball, bl47)
    )
    {
      bl47.remove()
      winner()
    change()
    }
    if
    (
      checkCollision(ball, bl48)
    )
    {
      bl48.remove()
      winner()
    change()
    }
    if
    (
      checkCollision(ball, bl49)
    )
    {
      bl49.remove()
      winner()
    change()
    }
    if
    (
      checkCollision(ball, bl51)
    )
    {
      bl51.remove()
      winner()
    change()
    }
    if
    (
      checkCollision(ball, bl52)
    )
    {
      bl52.remove()
      winner()
    change()
    }
    if
    (
      checkCollision(ball, bl53)
    )
    {
      bl53.remove()
      winner()
    change()
    }
    if
    (
      checkCollision(ball, bl54)
    )
    {
      bl54.remove()
      winner()
    change()
    }
    if
    (
      checkCollision(ball, bl55)
    )
    {
      bl55.remove()
      winner()
    change()
    }
    if
    (
      checkCollision(ball, bl56)
    )
    {
      bl56.remove()
      winner()
    change()
    }
    if
    (
      checkCollision(ball, bl57)
    )
    {
      bl57.remove()
      winner()
    change()
    }
    if
    (
      checkCollision(ball, bl58)
    )
    {
      bl58.remove()
      winner()
    change()
    }
    if
    (
      checkCollision(ball, bl59)
    )
    {
      bl59.remove()
      winner()
    change()
    }
}

// Win conditions
function winner() {
  if (
    (document.querySelector('.rowOne').children.length === 0) && 
  (document.querySelector('.rowTwo').children.length === 0) &&
  (document.querySelector('.rowThree').children.length === 0) &&
  (document.querySelector('.rowFour').children.length === 0) &&
  (document.querySelector('.rowFive').children.length === 0)
  )
             {
      alert("You win, YAY");
      location.reload()
              }
}

// Loss conditions
function lose() {
  if  (ballPosition[1] < -2) {
alert('You lost, try again?')
location.reload()
  }
}