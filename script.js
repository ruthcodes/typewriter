const RESET_PLATEN = 96;
let canClick = true;

//page element parents
const one = document.querySelector('#rowOne');
const two = document.querySelector('#rowTwo');
const three = document.querySelector('#rowThree');
const numberKeys = document.querySelector('#numbers-keys');
const lever = document.querySelector('.lever');
const platen = document.querySelector('.platen');
const paper = document.querySelector('.paper');
const backPaper = document.querySelector('.nextPaper');

//values to generate page element children from
const nums = [1,2,3,4,5,6,7,8,9,0];
const rowOne = ['q','w','e','r','t','y','u','i','o','p'];
const rowTwo = ['a','s','d','f','g','h','j','k','l',':'];
const rowThree = ['z','x','c','v','b','n','m',',','.','?'];

const generateButtons = (row, element, top, leftStart, leftInc,height=15) => {
  row.forEach(key => {
    element.innerHTML += `
      <div class="key" id=${key} style="top:${top}%;left:${leftStart}%;height:${height}%">
        ${key}
        <div class="key-stem"></div>
      </div>
    `
    leftStart += leftInc;
  })
}

generateButtons(rowOne, one, 0, -2, 10.6);
generateButtons(rowTwo, two, 26, 0, 10.2);
generateButtons(rowThree, three, 54, 2, 9.7);
generateButtons(nums, numberKeys, 0,1,10,12)

const keys = [...document.querySelectorAll('.key')];

keys.forEach(key => {
  key.addEventListener('click', function(){
    //move key down and up
    let thisTop = parseInt(this.style.top.replace('%',''));
    if(canClick){
      canClick = false;
      this.style.top = thisTop + 5 + '%';
      setTimeout(()=> {
        this.style.top = thisTop + '%';
        canClick = true;
      }, 400);
    }
    //move platen
    let platenPosition = parseInt(window.getComputedStyle(platen).left.replace('px', ''));
      if (platenPosition > -214){
        platen.style.left = platenPosition-=10;
      } else {
        //reset platen
        lever.classList.add('pressLever');
        setTimeout(()=> lever.classList.remove('pressLever'), 1100)
        platen.style.left = RESET_PLATEN;
        //adjust front and back paper
        adjustPaper();
      }
  })
})

const adjustPaper = () => {
  let frontPaperPos = parseInt(window.getComputedStyle(paper).top.replace('px', ''));
  let frontPaperHeight = parseInt(window.getComputedStyle(paper).height.replace('px', ''));
  let backPaperPos = parseInt(window.getComputedStyle(backPaper).top.replace('px', ''));
  let backPaperHeight = parseInt(window.getComputedStyle(backPaper).height.replace('px', ''));
  paper.style.top = frontPaperPos-=10;
  paper.style.height = frontPaperHeight+=10;
  backPaper.style.top = backPaperPos+=5;
  backPaper.style.height = backPaperHeight-=5;
}

lever.addEventListener('click', ()=> {
  lever.classList.add('pressLever');
  setTimeout(()=> lever.classList.remove('pressLever'), 1100);
  platen.style.left = RESET_PLATEN;
  adjustPaper();
})
