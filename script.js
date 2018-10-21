let canClick = true;
//page element parents
const one = document.querySelector('#rowOne');
const two = document.querySelector('#rowTwo');
const three = document.querySelector('#rowThree');
const numberKeys = document.querySelector('#numbers-keys');

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
    let thisTop = parseInt(this.style.top.replace('%',''));
    if(canClick){
      canClick = false;
      this.style.top = thisTop + 5 + '%';
      setTimeout(()=> {
        this.style.top = thisTop + '%';
        canClick = true;
      }, 400);
    }
  })
})
