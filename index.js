function getFirstSelector(selector) { 
  return document.querySelector(selector); 
}

function nestedTarget(){
  return document.querySelector('#nested .target');
}

function increaseRankBy(n){
  let lis = document.querySelectorAll('.ranked-list');
  lis.forEach( el => {
    el.innerHTML = parseInt(el.innerHTML) + n;
  });
}

function deepestChild(){
  let node = document.getElementById('grand-node');
  let next = node.children[0];


  while(next){
    node = next;
    next = node.children[0];
  }

  return node;
}