//Your JS goes here


// //Regular Checkerboard

function blackTile() {
  let blackDiv = document.createElement("div");
  blackDiv.style.width = "11.1%";
  blackDiv.style.float = "left";
  blackDiv.style.paddingBottom = "11.1%";
  blackDiv.style.backgroundColor = "#000000";
  console.log(blackDiv);
  document.body.appendChild(blackDiv);
}

function redTile() {
    let redDiv = document.createElement("div");
    redDiv.style.width = "11.1%";
    redDiv.style.float = "left";
    redDiv.style.paddingBottom = "11.1%";
    redDiv.style.backgroundColor = "#ff0000";
    console.log(redDiv);
    document.body.appendChild(redDiv);
}

while (document.getElementsByTagName("div").length <80) {
    for (let i = 0; i < 40; i++) {
        blackTile();
        redTile();
    }
}





//randomColors

// function createTile() {
//     let div = document.createElement("Div");
//     let randomColor = Math.floor(Math.random() * 16777215).toString(16);
//     div.style.width = "11.1%";
//     div.style.float = "left";
//     div.style.paddingBottom = "11.1%";
//     div.style.backgroundColor = `#${randomColor}`;
//     console.log(div);
//     document.body.appendChild(div);
// }

// while (document.getElementsByTagName("Div").length < 80) {
//     createTile();
// }




//gradient

// function createTile(color) {
//     const tile = document.createElement("div");
//     tile.style.width = "11.1%";
//     tile.style.float = "left";
//     tile.style.paddingBottom = "11.1%";
//     tile.style.backgroundColor = color;
//     return tile;
// }

//   const numRows = 7;
//   const numCols = 5;
  
// for (let row = 0; row < numRows + 1; row++) {
//     const colorValue = Math.floor(255 - row * (255 / numRows));
//     for (let col = 0; col < numCols; col++) {
//         const color = `rgb(200, 0, ${colorValue})`;
//         document.body.appendChild(createTile(color));
//         document.body.appendChild(createTile("#ff0000"));
//     }
// }




//intervalTiles

// function createTile(color) {
//     const tile = document.createElement("div");
//     tile.style.width = "11.1%";
//     tile.style.float = "left";
//     tile.style.paddingBottom = "11.1%";
//     tile.style.backgroundColor = color;
//     return tile;
// }

// const numRows = 7;
// const numCols = 5;

// // Function to change tile colors to a new random color
// function changeTileColors() {
//     const tiles = document.getElementsByTagName("div");
//     for (let i = 0; i < tiles.length; i++) {
//         const color = `rgb(${Math.random() * 255}, ${Math.random() * 255}, ${Math.random() * 255})`;
//         tiles[i].style.backgroundColor = color;
//     }
// }

// // Set interval to call the changeTileColors function every 2 seconds
// setInterval(changeTileColors, 2000);

// // Create the checkerboard pattern initially
// for (let row = 0; row < numRows + 1; row++) {
// const colorValue = Math.floor(255 - row * (255 / numRows));
//     for (let col = 0; col < numCols; col++) {
//         const color = `rgb(255, 0, ${colorValue})`;
//         document.body.appendChild(createTile(color));
//         document.body.appendChild(createTile("#ff0000"));
//     }
// }



// audioTile

// Create button element
const playButton = document.createElement('button');
playButton.textContent = 'Play Audio';


// Add event listener to call play function when button is clicked
playButton.addEventListener('click', play);

// Add button to the page
document.body.appendChild(playButton);


function play() {
    var audio = new Audio('http://commondatastorage.googleapis.com/codeskulptor-demos/DDR_assets/Kangaroo_MusiQue_-_The_Neverwritten_Role_Playing_Game.mp3');
    audio.play();
  }
  play();