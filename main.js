
let gElCanvas
let gCtx
let gSelectedLine = 0

var gKeywordSearchCountMap = { 'funny': 12, 'cat': 16, 'baby': 2 }

var gImgs = [{ id: 1, url: 'img/1.jpg', keywords: ['funny', 'figuers'] }];

var gMeme = {
    selectedImgId: 5,
    lines: [
        {
            txt: 'I sometimes eat Falafel',
            size: 20,
            selectedLineIdxX: 50,
            selectedLineIdxY: 50,
            align: 'left',
            color: 'white'
        },

        {
            txt: 'its good',
            size: 20,
            selectedLineIdxX: 50,
            selectedLineIdxY: 150,
            align: 'left',
            color: 'white'

        }
    ]
}


function onInit(){
    
    drawMeme()
    
}

// function renderMeme(){
//     draw()
// }

function drawMeme() {

    gCtx = document.getElementById("my-canvas").getContext("2d")
    const img = new Image()
    img.src = 'img/1.jpg'
  
    img.onload =  () => {gCtx.drawImage(img, 0, 0, 300, 300); drawLines()}

  }

function addText(lineNum){

    gCtx = document.getElementById("my-canvas").getContext("2d");
    gCtx.font = "20px serif"
    gCtx.fillStyle = gMeme.lines[lineNum].color
    // gCtx.strokeStyle = 'black '
    gCtx.strokeText(gMeme.lines[lineNum].txt, gMeme.lines[lineNum].selectedLineIdxX , gMeme.lines[lineNum].selectedLineIdxY)
    gCtx.fillText(gMeme.lines[lineNum].txt, gMeme.lines[lineNum].selectedLineIdxX , gMeme.lines[lineNum].selectedLineIdxY)
    
  }

function moveLine(event){

    switch(event){
        case 'up':
        gMeme.lines[gSelectedLine].selectedLineIdxY = gMeme.lines[gSelectedLine].selectedLineIdxY - 5
        drawMeme()
        break;

        case 'down':
        gMeme.lines[gSelectedLine].selectedLineIdxY = gMeme.lines[gSelectedLine].selectedLineIdxY + 5
        drawMeme()
    }

}

function drawLines(){

    for( var i = 0 ; i < gMeme.lines.length ; i++){
        addText(i)
    }

}

function changeColor(newColor){
    gMeme.lines[gSelectedLine].color = newColor
    drawMeme()
}

function changeLine(){

    if(gSelectedLine < gMeme.lines.length - 1)
    gSelectedLine += 1
    else
    gSelectedLine = 0

}



