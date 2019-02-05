
function getFirstSelector(selector){
  return document.querySelector(selector);
}

function nestedTarget(){
  return document.querySelector("#nested .target");
}

function deepestChild(){
  var node = document.querySelector("#grand-node");
  while(node.children.length != 0){
    node = node.children[0];
  }
  return node;
}