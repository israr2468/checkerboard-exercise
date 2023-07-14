//Your JS goes here

//Regular Checkerboard

// function newTile() {
//   let newTile = document.createElement("div");
//   newTile.style.backgroundColor = "#800080";
//   newTile.style.width = "11.1%";
//   newTile.style.float = "left";
//   newTile.style.paddingBottom = "11.1%";
//   document.body.appendChild(newTile);
//   console.log("stuff is happening");
//   console.log(newTile);
// }

function blackTile() {
  let blackDiv = document.createElement("div");
  blackDiv.style.width = "11.1%";
  blackDiv.style.float = "left";
  blackDiv.style.paddingBottom = "11.1%";
  blackDiv.style.backgroundColor = "#000000";
  //console.log(blackDiv);
  document.body.appendChild(blackDiv);
}

function redTile() {
  let redDiv = document.createElement("div");
  redDiv.style.width = "11.1%";
  redDiv.style.float = "left";
  redDiv.style.paddingBottom = "11.1%";
  redDiv.style.backgroundColor = "#ff0000";
  //console.log(redDiv);
  document.body.appendChild(redDiv);
}

while (document.getElementsByTagName("div").length < 80) {
  for (let i = 0; i < 40; i++) {
    //newTile();
    blackTile();
    redTile();
  }
}
blackTile();
//newTile();
