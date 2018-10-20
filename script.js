
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

const generateKeysFromObj = (row, element) => {
  row.forEach(key => {
    element.innerHTML += `
      <div class="key" id=${Object.keys(key)}>
        ${key[Object.keys(key)]}
        <div class="key-stem"></div>
      </div>
    `
  })
}

generateKeysFromObj(rowOne, one);
generateKeysFromObj(rowThree, three);

rowTwo.forEach(key => {
  two.innerHTML += `
    <div class="key" id=${key}>
      ${key}
      <div class="key-stem"></div>
    </div>
  `
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
