
let gElCanvas
let gCtx
let gSelectedLine = 0
gFont = 'impact'
var gKeywordSearchCountMap = { 'funny': 12, 'cat': 16, 'baby': 2 }

let gMeme = {
    selectedImgId: 5,
    lines: [
        {
            txt: 'hello world',
            size: 20,
            selectedLineIdxX: 110,
            selectedLineIdxY: 50,
            font: gFont,
            align: 'left',
            color: 'white'
        },

        {
            txt: 'its good',
            size: 20,
            selectedLineIdxX: 110,
            selectedLineIdxY: 250,
            font: gFont,
            align: 'impact',
            color: 'white'

        }
    ]
}

function onInit(){

    // displayImages()
     drawMeme()
    console.log("text", gMeme.lines[0].txt)
    console.log("place" , gMeme.lines[0].selectedLineIdxY)
    console.log("color" , gMeme.lines[gSelectedLine].color)
    console.log("font" , gMeme.lines[0].font)
    
}

// function renderMeme(){
//     draw()
// }
function onImgSelect(selector){
    gMeme.selectedImgId = selector
    revealMeme()
}
function drawMeme() {

    // gElCanvas = document.querySelector("my-canvas")
    // gCtx = gElCanvas.getContext("2d")

    gCtx = document.getElementById("my-canvas").getContext("2d")
    const img = new Image()
    // img.src = 'img/1.jpg'
  
    img.onload =  () => {gCtx.drawImage(img, 0, 0, 300, 300); 
        drawLines()}
    img.src = `img/${gMeme.selectedImgId}.jpg`
    getCurrentRow()
  }

//   drawMeme('img/4.jpg')
 function setImage(src){

    drawMeme(src)
    // revealMeme()
 }

function revealMeme(){
    const div  = document.querySelector('main')
    div.classList.remove('display')
    const images = document.getElementById('my-gallery')
    images.classList.add('display')
    drawMeme()

  }

 function revealGallery(){
    const div  = document.querySelector('main')
    div.classList.add('display')
    const images = document.getElementById('my-gallery')
    images.classList.remove('display')
  }

  function getNewLine(){
    let newLine = {
        txt: 'new line',
            size: 20,
            selectedLineIdxX: 110,
            selectedLineIdxY: 150,
            font: gFont,
            align: 'impact',
            color: 'white'
    }

    return newLine
  }

function addNewLine(){
    gMeme.lines.push(getNewLine())
    drawMeme()
}

function getCurrentRow(){
    let span = document.querySelector('span')
     span.innerText = gSelectedLine + 1
}

  
function addText(lineNum){

    // gCtx = document.getElementById("my-canvas").getContext("2d");

    gCtx.font = `${gMeme.lines[lineNum].size}px ${gMeme.lines[lineNum].font}`

    gCtx.fillStyle = gMeme.lines[lineNum].color
    
    gCtx.strokeText(gMeme.lines[lineNum].txt, gMeme.lines[lineNum].selectedLineIdxX , gMeme.lines[lineNum].selectedLineIdxY)
    gCtx.fillText(gMeme.lines[lineNum].txt, gMeme.lines[lineNum].selectedLineIdxX , gMeme.lines[lineNum].selectedLineIdxY)
    // console.log("text", gMeme.lines[lineNum].txt)
    // console.log("place" , gMeme.lines[lineNum].selectedLineIdxy)
    
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
        break;

        case 'left':
        gMeme.lines[gSelectedLine].selectedLineIdxX = gMeme.lines[gSelectedLine].selectedLineIdxX - 5
        drawMeme()
        break;

        case 'right':
        gMeme.lines[gSelectedLine].selectedLineIdxX = gMeme.lines[gSelectedLine].selectedLineIdxX + 5
        drawMeme()
        break;
    }

}

function downloadCanvas(elLink) {
     var canvas = document.getElementById("my-canvas") 
    elLink.href = canvas.toDataURL("img/png")
    elLink.download = 'img.png'
  }

function drawLines(){

    for( var i = 0 ; i < gMeme.lines.length ; i++){
        addText(i)
    }

}

function changeColor(newColor){
    gMeme.lines[gSelectedLine].color = newColor
    console.log(gMeme.lines[gSelectedLine].color)
    drawMeme()
}

function changeLine(){

    if(gSelectedLine < gMeme.lines.length - 1){
    gSelectedLine += 1
    drawMeme()
    }
    else{
    gSelectedLine = 0
    drawMeme()
    }
}

function changeText(){

    let txt = document.getElementById('txt').value
    gMeme.lines[gSelectedLine].txt = ''
    gMeme.lines[gSelectedLine].txt = txt
    console.log("text" , gMeme.lines[gSelectedLine].txt)
   
    drawMeme()
    // onInit()

}

function changeFontSize(event){

        switch(event){
            case '+':
            gMeme.lines[gSelectedLine].size = gMeme.lines[gSelectedLine].size + 5
            drawMeme()
            break;
    
            case '-':
            gMeme.lines[gSelectedLine].size = gMeme.lines[gSelectedLine].size - 5
            drawMeme()
            break;
        }
    
    }

function changeFont(value){

    let newFont = document.getElementById('select-font').value

    switch(value){
         case 'impact':
         gMeme.lines[gSelectedLine].font = 'impact'
         drawMeme()
         break;

        case 'Arial':
        gMeme.lines[gSelectedLine].font = 'Arial'
        drawMeme()
        break;

        case 'Times':
        gMeme.lines[gSelectedLine].font = 'Times New Roman'
        drawMeme()
        break;

        

}
}

