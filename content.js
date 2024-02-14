function swapNodes(n1, n2) {
    console.log("EOEOEO", n1, n2)
    var p1 = n1.parentNode;
    var p2 = n2.parentNode;
    var i1, i2;


    if ( !p1 || !p2 || p1.isEqualNode(n2) || p2.isEqualNode(n1) ) return;

    for (var i = 0; i < p1.children.length; i++) {
        if (p1.children[i].isEqualNode(n1)) {
            i1 = i;
        }
    }
    for (var i = 0; i < p2.children.length; i++) {
        if (p2.children[i].isEqualNode(n2)) {
            i2 = i;
        }
    }

    if ( p1.isEqualNode(p2) && i1 < i2 ) {
        i2++;
    }
    console.log(p1, n1, p2, n2, i1, i2)
    p1.insertBefore(n2, p1.children[i1]);
    p2.insertBefore(n1, p2.children[i2]);
}

setTimeout(function() {
  const buttons = document.getElementsByClassName("player-tab-header transport-button accented-tab object-video secondary-header");

  
  var left = -1, center = -1, right = -1
  for (var i=0; i<buttons.length; i++) {
    if (buttons.item(i).id.includes("inline")) {
        if (buttons.item(i).innerHTML.includes("Left")) {
            left = i
        }
        else if (buttons.item(i).innerHTML.includes("Right")) {
            right = i
        }
        else if (buttons.item(i).innerHTML.includes("Centre") || buttons.item(i).innerHTML.includes("Center")) {
            center = i
        }
    }
  }

  if (left > center) {
    console.log("1");
    if (left != -1 && center != -1)
        swapNodes(buttons.item(left), buttons.item(center));
    var lleft = left
    left = center
    center = lleft 
  }
  if (left > right) {
    console.log("2");
    if (left != -1 && right != -1)
        swapNodes(buttons.item(left), buttons.item(right));
    var lleft = left
    left = right
    right = lleft 
  }
  if (center > right) {
    console.log("3");
    if (center != -1 && right != -1)
        swapNodes(buttons.item(right), buttons.item(center));
  }
  

}, 2000);