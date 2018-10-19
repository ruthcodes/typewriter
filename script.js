const keys = [...document.querySelectorAll('.key')];

keys.forEach(key => {
  key.addEventListener('click', function(){
    let currentTop = document.getElementById(this.id);
    currentTop.classList.add('moveKeyRow');
    setTimeout(()=> currentTop.classList.remove('moveKeyRow'), 400);
  })
})
