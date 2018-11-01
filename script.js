
let canClick = true;
let movePlaten = true;
let textRowCounter = 1;

//page element parents
const one = document.querySelector('#rowOne');
const two = document.querySelector('#rowTwo');
const three = document.querySelector('#rowThree');
const numberKeys = document.querySelector('#numbers-keys');
const lever = document.querySelector('.lever');
const platen = document.querySelector('.platen');
const paper = document.querySelector('.paper');
const backPaper = document.querySelector('.nextPaper');
let text = document.querySelector('#text1');
let buttons = [];
const RESET_PLATEN = window.getComputedStyle(platen).left.replace('px', '');

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

const handleInput = (e) => {
  //move key down and up
  let thisTop = parseInt(e.style.top.replace('%',''));
  if(canClick){
    canClick = false;
    e.style.top = thisTop + 20 + '%';
    setTimeout(()=> {
      e.style.top = thisTop + '%';
      canClick = true;
    }, 100);
  }
  //move platen
  let platenPosition = parseInt(window.getComputedStyle(platen).left.replace('px', ''));
  if (movePlaten){
    if (platenPosition > -214 && movePlaten){
      movePlaten = false;
      platen.style.left = platenPosition-=7;
      setTimeout(()=> {
        movePlaten = true;
      }, 100)
    } else {
      //reset platen
      lever.classList.add('pressLever');
      setTimeout(()=> lever.classList.remove('pressLever'), 1100)
      platen.style.left = RESET_PLATEN;
      //adjust front and back paper
      adjustPaper();
      //add new line for text
      textRowCounter++;
      let div = document.createElement('div');
      div.id = `text${textRowCounter}`;
      div.className = "text";
      paper.appendChild(div);
      text = document.querySelector(`#text${textRowCounter}`);
    }
    //add char to text
  text.innerHTML += e.id === 'space' ? ' ' : e.id;
  }
}

generateButtons(rowOne, one, 0, -2, 10.6);
generateButtons(rowTwo, two, 26, 0, 10.2);
generateButtons(rowThree, three, 54, 2, 9.7);
generateButtons(nums, numberKeys, 0,1,10,12)

const keys = [...document.querySelectorAll('.key')];

keys.forEach(key => {
  buttons.push(key.id)
  key.addEventListener('click', (e) => handleInput(e.target));
})

window.addEventListener('keydown', (e)=> {
  if (e.keyCode === 13) {
    e.preventDefault();
  }
  if (e.key === ' '){
    handleInput(document.querySelector('#space'))
  }
  if (buttons.includes(e.key)){
    handleInput(document.querySelector(`#${e.key}`));
  }
});

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
