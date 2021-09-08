// This library just manages X Windows (No Window Decorations Built In)
// XWin pre1
function _xwinclosewindow(window,task) {
  var x = document.getElementById("window"+window);
  if (x.style.display === "none") {
    x.style.display = "block";
    Function(task+"Open=true;")
  } else {
    x.style.display = "none";
    Function(task+"Open=false;")
  }
}
function _xwinmaxwindow(elmnt){
 let _win = document.getElementById(elmnt.id);
 _win.style.height = "35rem";
 _win.style.width = "100%";
} // Maximize for XWIN!!! (TO-DO: Add double tap behavior)
function _xwinspawnwindow(elmnt) {
  let pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
  if (document.getElementById(elmnt.id + "header")) {
    // if present, the header is where you move the DIV from:
    document.getElementById(elmnt.id + "header").onmousedown = dragMouseDown;
  } else {
    // otherwise, move the DIV from anywhere inside the DIV:
    elmnt.onmousedown = dragMouseDown;
  }

function dragMouseDown(e) {
    e = e || window.event;
    e.preventDefault();
    pos3 = e.clientX;
    pos4 = e.clientY;
    document.onmouseup = closeDragElement;
    document.onmousemove = _xwindrag;
  }

function _xwindrag(e) {
    e = e || window.event;
    e.preventDefault();
    pos1 = pos3 - e.clientX;
    pos2 = pos4 - e.clientY;
    pos3 = e.clientX;
    pos4 = e.clientY;
    elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
    elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
  }

function closeDragElement() {
    // stop moving when mouse button is released:
    document.onmouseup = null;
    document.onmousemove = null;
  }
}

