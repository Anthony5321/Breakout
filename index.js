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
const playerLives = document.querySelector('.lives')
const life1 = document.querySelector('#life1')
const life2 = document.querySelector('#life2')
const life3 = document.querySelector('#life3')
let rightPressed = false;
let leftPressed = false;
let x = 2
let y = -2
let ballPosition = ballStart
let currentPosition = paddleStart
let timerId
timerId = setInterval(moveBall, 1000000000)




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

function start() {
  timerId = setInterval(moveBall, 9)
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
    collision()
    lives()
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
    {change()
    bl11.remove(),
    winner()}
  if
    (checkCollision(ball, bl12))
    {change()
    bl12.remove()
    winner()}
  if
    (checkCollision(ball, bl13))
    {change()
    bl13.remove()
    winner()}
  if
    (checkCollision(ball, bl14))
    {change(),
    bl14.remove(),
    winner()}
  if
    (checkCollision(ball, bl15))
    {change() 
    bl15.remove()
    winner()}
    if
    (checkCollision(ball, bl16))
    {change() 
    bl16.remove()
    winner()}
    if
    (checkCollision(ball, bl17))
    {change() 
    bl17.remove()
    winner()}
    if
    (checkCollision(ball, bl18))
    {change() 
    bl18.remove()
    winner()}
    if
    (checkCollision(ball, bl19))
    {change() 
    bl19.remove()
    winner()}
    if
    (checkCollision(ball, bl21))
    {change() 
    bl21.remove()
    winner()}
    if
    (checkCollision(ball, bl22))
    {change() 
    bl22.remove()
    winner()}
    if
    (checkCollision(ball, bl23))
    {change() 
    bl23.remove()
    winner()}
    if
    (checkCollision(ball, bl24))
    {change() 
    bl24.remove()
    winner()}
    if
    (checkCollision(ball, bl25))
    {change() 
    bl25.remove()
    winner()}
    if
    (checkCollision(ball, bl26))
    {change() 
    bl26.remove()
    winner()}
    if
    (checkCollision(ball, bl27))
    {change() 
    bl27.remove()
    winner()}
    if
    (checkCollision(ball, bl28))
    {change() 
    bl28.remove()
    winner()}
    if
    (checkCollision(ball, bl29))
    {change() 
    bl29.remove()
    winner()}
    if
    (checkCollision(ball, bl31))
    {change() 
    bl31.remove()
    winner()}
    if
    (checkCollision(ball, bl32))
    {change() 
    bl32.remove()
    winner()}
    if
    (checkCollision(ball, bl33))
    {change() 
    bl33.remove()
    winner()}
    if
    (checkCollision(ball, bl34))
    {change() 
    bl34.remove()
    winner()}
    if
    (checkCollision(ball, bl35))
    {change() 
    bl35.remove()
    winner()}
    if
    (checkCollision(ball, bl36))
    {change() 
    bl36.remove()
    winner()}
    if
    (checkCollision(ball, bl37))
    {change() 
    bl37.remove()
    winner()}
    if
    (checkCollision(ball, bl38))
    {change() 
    bl38.remove()
    winner()}
    if
    (checkCollision(ball, bl39))
    {change() 
    bl39.remove()
    winner()}
    if
    (checkCollision(ball, bl41))
    {change() 
    bl41.remove()
    winner()}
    if
    (checkCollision(ball, bl42))
    {change() 
    bl42.remove()
    winner()}
    if
    (checkCollision(ball, bl43))
    {change() 
    bl43.remove()
    winner()}
    if
    (checkCollision(ball, bl44))
    {change() 
    bl44.remove()
    winner()}
    if
    (checkCollision(ball, bl45))
    {change() 
    bl45.remove()
    winner()}
    if
    (checkCollision(ball, bl46))
    {change() 
    bl46.remove()
    winner()}
    if
    (checkCollision(ball, bl47))
    {change() 
    bl47.remove()
    winner()}
    if
    (checkCollision(ball, bl48))
    {change() 
    bl48.remove()
    winner()}
    if
    (checkCollision(ball, bl49))
    {change() 
    bl49.remove()
    winner()}
    if
    (checkCollision(ball, bl51))
    {change() 
    bl51.remove()
    winner()}
    if
    (checkCollision(ball, bl52))
    {change() 
    bl52.remove()
    winner()}
    if
    (checkCollision(ball, bl53))
    {change() 
    bl53.remove()
    winner()}
    if
    (checkCollision(ball, bl54))
    {change() 
    bl54.remove()
    winner()}
    if
    (checkCollision(ball, bl55))
    {change() 
    bl55.remove()
    winner()}
    if
    (checkCollision(ball, bl56))
    {change() 
    bl56.remove()
    winner()}
    if
    (checkCollision(ball, bl57))
    {change() 
    bl57.remove()
    winner()}
    if
    (checkCollision(ball, bl58))
    {change() 
    bl58.remove()
    winner()}
    if
    (checkCollision(ball, bl59))
    {change() 
    bl59.remove()
    winner()}
    if
    (checkCollision(ball, bl61))
    {change() 
    bl61.remove()
    winner()}
    if
    (checkCollision(ball, bl62))
    {change() 
    bl62.remove()
    winner()}
    if
    (checkCollision(ball, bl63))
    {change() 
    bl63.remove()
    winner()}
    if
    (checkCollision(ball, bl64))
    {change() 
    bl64.remove()
    winner()}
    if
    (checkCollision(ball, bl65))
    {change() 
    bl65.remove()
    winner()}
    if
    (checkCollision(ball, bl66))
    {change() 
    bl66.remove()
    winner()}
    if
    (checkCollision(ball, bl67))
    {change() 
    bl67.remove()
    winner()}
    if
    (checkCollision(ball, bl68))
    {change() 
    bl68.remove()
    winner()}
    if
    (checkCollision(ball, bl69))
    {change() 
    bl69.remove()
    winner()}
    if
    (checkCollision(ball, bl71))
    {change() 
    bl71.remove()
    winner()}
    if
    (checkCollision(ball, bl72))
    {change() 
    bl72.remove()
    winner()}
    if
    (checkCollision(ball, bl73))
    {change() 
    bl73.remove()
    winner()}
    if
    (checkCollision(ball, bl74))
    {change() 
    bl74.remove()
    winner()}
    if
    (checkCollision(ball, bl75))
    {change() 
    bl75.remove()
    winner()}
    if
    (checkCollision(ball, bl76))
    {change() 
    bl76.remove()
    winner()}
    if
    (checkCollision(ball, bl77))
    {change() 
    bl77.remove()
    winner()}
    if
    (checkCollision(ball, bl78))
    {change() 
    bl78.remove()
    winner()}
    if
    (checkCollision(ball, bl79))
    {change() 
    bl79.remove()
    winner()}
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

// Life ball
function newBall() {
  ballPosition[1] += 450
}
// number of lives
function lives() {
  if  ((ballPosition[1] === -2) && (playerLives.children.length === 4)) {
      life1.remove()
      newBall()}
  else if  ((ballPosition[1]=== -4) && (playerLives.children.length === 3)){
      life2.remove()
      newBall()}
  else if ((ballPosition[1] === -6) && (playerLives.children.length === 2)){
      life3.remove()
      newBall()}
}
// setTimeout(lives, 200, life3)

// Loss conditions
function lose() {
  if  (
    ballPosition[1] === -8 && (playerLives.children.length === 1)) {
  alert('You lost, try again?')
  location.reload()
  }
}