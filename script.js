
const one = document.querySelector('#rowOne');
const two = document.querySelector('#rowTwo');
const three = document.querySelector('#rowThree');

const rowOne = [
  {'one': 1}, {'two': 2}, {'three': 3}, {'four': 4}, {'five': 5},
   {'six': 6}, {'seven': 7}, {'eight': 8}, {'nine': 9}, {'zero': 0}
];

const rowTwo = ['q','w','e','r','t','y','u','i','o','p'];

const rowThree = [
  {'z': 'z'}, {'x':'x'}, {'c':'c'}, {'v':'v'}, {'b':'b'}, {'n':'n'},
  {'m':'m'}, {'comma': ','}, {'dot': '.'}, {'question': '?'}
];

const generateButtonsFromObj = (row, element, top, leftStart, leftInc) => {
  row.forEach(key => {
    element.innerHTML += `
      <div class="key" id=${Object.keys(key)} style="top:${top}%;left:${leftStart}%">
        ${key[Object.keys(key)]}
        <div class="key-stem"></div>
      </div>
    `
    leftStart+= leftInc;

  })
}

generateButtonsFromObj(rowOne, one, 0, -2, 10.6);
generateButtonsFromObj(rowThree, three, 54, 2, 9.7);

let topConst = 26;
let left = 0;
const leftInc = 10.2;

rowTwo.forEach(key => {
  two.innerHTML += `
    <div class="key" id=${key} style="top:${topConst}%;left:${left}%">
      ${key}
      <div class="key-stem"></div>
    </div>
  `
  left += leftInc;
})




/*
keys.forEach(key => {
  key.addEventListener('click', function(){
    let currentTop = document.getElementById(this.id);
    currentTop.classList.add('moveKeyRow');
    setTimeout(()=> currentTop.classList.remove('moveKeyRow'), 400);
  })
})

*/
