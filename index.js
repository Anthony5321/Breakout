const ball = document.getElementsByClassName('ball')
const board = document.getElementsByClassName('board')
const block = document.getElementsByClassName('block')
const conditions = true;

// function movingBall () {
//     let leftRight = ()

// }

function breakBlock() {
        if (!(this.classList.contains("X"))){
            if (conditions === true) {
                this.setAttribute("class", "X");
                winner();
                conditions = false;
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

function playAgain() {
    bl1.setAttribute("class", "");
    bl2.setAttribute("class", "");
    bl3.setAttribute("class", "");
    bl4.setAttribute("class", "");
    bl5.setAttribute("class", "");
    bl6.setAttribute("class", "");
    bl7.setAttribute("class", "");
    bl8.setAttribute("class", "");
    bl9.setAttribute("class", "");
    bl10.setAttribute("class", "");
    conditions = true;
  }