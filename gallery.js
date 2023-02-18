

var gKeywordSearchCountMap = { 'funny': 12, 'cat': 16, 'baby': 2 }

var gImgs = [{ id: 1, url: 'img/1.jpg', keywords: ['funny', 'figuers']},
{id: 2, url: 'img/2.jpg', keywords: ['animals', 'figuers']},
{id: 3, url: 'img/3.jpg', keywords: ['animals', 'kids']},
{id: 4, url: 'img/4.jpg', keywords: ['animals', 'funny']},
{id: 5, url: 'img/5.jpg', keywords: ['kids', 'funny']},
{id: 6, url: 'img/6.jpg', keywords: ['animals', 'funny']},
{id: 7, url: 'img/7.jpg', keywords: ['animals', 'funny']},
{id: 8, url: 'img/8.jpg', keywords: ['animals', 'funny']},
{id: 9, url: 'img/9.jpg', keywords: ['animals', 'funny']},
{id: 10, url: 'img/10.jpg', keywords: ['animals', 'funny']},
{id: 11, url: 'img/11.jpg', keywords: ['animals', 'funny']},
{id: 12, url: 'img/12.jpg', keywords: ['animals', 'funny']},
{id: 13, url: 'img/13.jpg', keywords: ['animals', 'funny']},
{id: 14, url: 'img/14.jpg', keywords: ['animals', 'funny']},
{id: 15, url: 'img/15.jpg', keywords: ['animals', 'funny']},
{id: 16, url: 'img/16.jpg', keywords: ['animals', 'funny']},
{id: 17, url: 'img/17.jpg', keywords: ['animals', 'funny']},
{id: 18, url: 'img/18.jpg', keywords: ['animals', 'funny']},];

// const gallery = document.getElementById('gallery')


renderGallery()

function renderGallery() {

    const strHTMLs = gImgs.map(img => `<article class="gallery-img" onclick="onImgSelect(${img.id})">
              <img src="${img.url}"  alt="" />
            </article> `
    )
    .join('')
  document.querySelector('.my-gallery').innerHTML = strHTMLs

}

// craeteColumm()

// function craeteColumm(){
//     var images = document.getElementsByClassName("gallery-img")

//     for(var i = 0; i < images.length ;i++){
//         images[i].style.flex = "25%"
//     }
// }

