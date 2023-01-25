const block = document.getElementsByClassName('block')
const board = document.querySelector('.board')
const divs = [...document.querySelectorAll('div')]
const conditions = true;
const paddleWidth = 75
const paddleHeight = 15
const boundsHeight = 640
const boundsWidth = 540
const ballDiameter = 15
const blockHeight = 15
const blockWidth = 50
const paddleStart = [235, 10]
const ballStart = [265, 40]
const rowOne = document.querySelector('.rowOne')
let rightPressed = false;
let leftPressed = false;
let x = 2
let y = -2
let ballPosition = ballStart
let currentPosition = paddleStart
let timerId
timerId = setInterval(moveBall, 10)

// Key input
document.onkeydown = (e) => {
  e = e || window.event;
  if  (e.key === 'ArrowLeft') {
      currentPosition[0] -= 10
    if  (currentPosition[0] <= 0) {
        currentPosition[0] += 10
    }
    movePaddle()
  } else if (e.key === 'ArrowRight') {
    currentPosition[0] += 10
    if  (currentPosition[0] >= 475) {
        currentPosition[0] -= 10
    }
    movePaddle()
  }
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
    ball.getBoundingClientRect();
    drawBall()
    collision ()
    lose()
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

//block Detection
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
let bl61 = document.getElementById('bl6-1')
bl61.getBoundingClientRect();
let bl62 = document.getElementById('bl6-2')
bl62.getBoundingClientRect();
let bl63 = document.getElementById('bl6-3')
bl63.getBoundingClientRect();
let bl64 = document.getElementById('bl6-4')
bl64.getBoundingClientRect();
let bl65 = document.getElementById('bl6-5')
bl65.getBoundingClientRect();
let bl66 = document.getElementById('bl6-6')
bl66.getBoundingClientRect();
let bl67 = document.getElementById('bl6-7')
bl67.getBoundingClientRect();
let bl68 = document.getElementById('bl6-8')
bl68.getBoundingClientRect();
let bl69 = document.getElementById('bl6-9')
bl69.getBoundingClientRect();
let bl71 = document.getElementById('bl7-1')
bl71.getBoundingClientRect();
let bl72 = document.getElementById('bl7-2')
bl72.getBoundingClientRect();
let bl73 = document.getElementById('bl7-3')
bl73.getBoundingClientRect();
let bl74 = document.getElementById('bl7-4')
bl74.getBoundingClientRect();
let bl75 = document.getElementById('bl7-5')
bl75.getBoundingClientRect();
let bl76 = document.getElementById('bl7-6')
bl76.getBoundingClientRect();
let bl77 = document.getElementById('bl7-7')
bl77.getBoundingClientRect();
let bl78 = document.getElementById('bl7-8')
bl78.getBoundingClientRect();
let bl79 = document.getElementById('bl7-9')
bl79.getBoundingClientRect();

// collision aware
function checkCollision(ball, block) {
  let ballRect = ball.getBoundingClientRect();
  let blockRect = block.getBoundingClientRect();
  return (ballRect.right >= blockRect.left &&
    ballRect.left <= blockRect.right) &&
    (ballRect.bottom >= ballRect.top &&
    ballRect.top <= blockRect.bottom);
}

// wall, block and paddle interactions
function collision () {
  if(ballPosition[0] >= (boundsWidth - ballDiameter) || ballPosition[0] <= 0 || ballPosition[1] >= (boundsHeight - ballDiameter))
    {change()}
  if
    ((ballPosition[0] > currentPosition[0] && ballPosition[0] < currentPosition[0] + paddleWidth) &&
    (ballPosition[1] > currentPosition[1] && ballPosition[1] < currentPosition[1] + paddleHeight ))
    {change()}
  if
    (checkCollision(ball, bl11))
    {bl11.remove(), winner(), change()}
  if
    (checkCollision(ball, bl12))
    {bl12.remove(), winner(), change()}
  if
    (checkCollision(ball, bl13))
    {bl13.remove(), winner(), change()}
  if
    (checkCollision(ball, bl14))
    {bl14.remove(), winner(), change()}
  if
    (checkCollision(ball, bl15))
    {bl15.remove(), winner(), change()}
  if
    (checkCollision(ball, bl16))
    {bl16.remove(), winner(), change()}
  if
    (checkCollision(ball, bl17))
    {bl17.remove(), winner(), change()}
  if
    (checkCollision(ball, bl18))
    {bl18.remove(), winner(), change()}
  if
    (checkCollision(ball, bl19))
    {bl19.remove(), winner(), change()}
  if
    (checkCollision(ball, bl21))
    {bl21.remove(), winner(), change()}
  if
    (checkCollision(ball, bl22))
    {bl22.remove(), winner(), change()}
  if
    (checkCollision(ball, bl23))
    {bl23.remove(), winner(), change()}
  if
    (checkCollision(ball, bl24))
    {bl24.remove(), winner(), change()}
  if
    (checkCollision(ball, bl25))
    {bl25.remove(), winner(), change()}
  if
    (checkCollision(ball, bl26))
    {bl26.remove(), winner(), change()}
  if
    (checkCollision(ball, bl27))
    {bl27.remove(), winner(), change()}
  if
    (checkCollision(ball, bl28))
    {bl28.remove(), winner(), change()}
  if
    (checkCollision(ball, bl29))
    {bl29.remove(), winner(), change()}
  if
    (checkCollision(ball, bl31))
    {bl31.remove(), winner(), change()}
  if
    (checkCollision(ball, bl32))
    {bl32.remove(), winner(), change()}
  if
    (checkCollision(ball, bl33))
    {bl33.remove(), winner(), change()}
  if
    (checkCollision(ball, bl34))
    {bl34.remove(), winner(), change()}
  if
    (checkCollision(ball, bl35))
    {bl35.remove(), winner(), change()}
  if
    (checkCollision(ball, bl36))
    {bl36.remove(), winner(), change()}
  if
    (checkCollision(ball, bl37))
    {bl37.remove(), winner(), change()}
  if
    (checkCollision(ball, bl38))
    {bl38.remove(), winner(), change()}
  if
    (checkCollision(ball, bl39))
    {bl39.remove(), winner(), change()}
  if
    (checkCollision(ball, bl41))
    {bl41.remove(), winner(), change()}
  if
    (checkCollision(ball, bl42))
    {bl42.remove(), winner(), change()}
  if
    (checkCollision(ball, bl43))
    {bl43.remove(), winner(), change()}
  if
    (checkCollision(ball, bl44))
    {bl44.remove(), winner(), change()}
  if
    (checkCollision(ball, bl45))
    {bl45.remove(), winner(), change()}
  if
    (checkCollision(ball, bl46))
    {bl46.remove(), winner(), change()}
  if
    (checkCollision(ball, bl47))
    {bl47.remove(), winner(), change()}
  if
    (checkCollision(ball, bl48))
    {bl48.remove(), winner(), change()}
  if
    (checkCollision(ball, bl49))
    {bl49.remove(), winner(), change()}
  if
    (checkCollision(ball, bl51))
    {bl51.remove(), winner(), change()}
  if
    (checkCollision(ball, bl52))
    {bl52.remove(), winner(), change()}
  if
    (checkCollision(ball, bl53))
    {bl53.remove(), winner(), change()}
  if
    (checkCollision(ball, bl54))
    {bl54.remove(), winner(), change()}
  if
    (checkCollision(ball, bl55))
    {bl55.remove(), winner(), change()}
  if
    (checkCollision(ball, bl56))
    {bl56.remove(), winner(), change()}
  if
    (checkCollision(ball, bl57))
    {bl57.remove(), winner(), change()}
  if
    (checkCollision(ball, bl58))
    {bl58.remove(), winner(), change()}
  if
    (checkCollision(ball, bl59))
    {bl59.remove(), winner(), change()}
  if
    (checkCollision(ball, bl61))
    {bl61.remove(), winner(), change()}
  if
    (checkCollision(ball, bl62))
    {bl62.remove(), winner(), change()}
  if
    (checkCollision(ball, bl63))
    {bl63.remove(), winner(), change()}
  if
    (checkCollision(ball, bl64))
    {bl64.remove(), winner(), change()}
  if
    (checkCollision(ball, bl65))
    {bl65.remove(), winner(), change()}
  if
    (checkCollision(ball, bl66))
    {bl66.remove(), winner(), change()}
  if
    (checkCollision(ball, bl67))
    {bl67.remove(), winner(), change()}
  if
    (checkCollision(ball, bl68))
    {bl68.remove(), winner(), change()}
  if
    (checkCollision(ball, bl69))
    {bl69.remove(), winner(), change()}
  if
    (checkCollision(ball, bl71))
    {bl71.remove(), winner(), change()}
  if
    (checkCollision(ball, bl72))
    {bl72.remove(), winner(), change()}
  if
    (checkCollision(ball, bl73))
    {bl73.remove(), winner(), change()}
  if
    (checkCollision(ball, bl74))
    {bl74.remove(), winner(), change()}
  if
    (checkCollision(ball, bl75))
    {bl75.remove(), winner(), change()}
  if
    (checkCollision(ball, bl76))
    {bl76.remove(), winner(), change()}
  if
    (checkCollision(ball, bl77))
    {bl77.remove(), winner(), change()}
  if
    (checkCollision(ball, bl78))
    {bl78.remove(), winner(), change()}
  if
    (checkCollision(ball, bl79))
    {bl79.remove(), winner(), change()}
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
  if  (ballPosition[1] === -2) {
  alert('You lost, try again?')
  location.reload()
  }
}