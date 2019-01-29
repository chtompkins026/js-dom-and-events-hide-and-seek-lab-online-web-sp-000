function getFirstSelector(selector) { 
  return document.querySelector(selector); 
}

function nestedTarget(){
  return document.querySelector('#nested .target');
}

function increaseRankBy(n){
  let lis = document.querySelectorAll('.ranked-list');
  
  for (let i = 0; i < lis.length; i++) {
  lis[i].innerHTML = (i + 1).toString();
  }
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