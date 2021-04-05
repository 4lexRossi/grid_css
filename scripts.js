const urlCat = 'https://aws.random.cat/meow';

const imgCat1 = document.querySelectorAll('#img')[0]
const imgCat2 = document.querySelectorAll('#img')[1]
const imgCat3 = document.querySelectorAll('#img')[2]
const imgCat4 = document.querySelectorAll('#img')[3]
const imgCat5 = document.querySelectorAll('#img')[4]
const imgCat6 = document.querySelectorAll('#img')[5]
const imgCat7 = document.querySelectorAll('#img')[6]
const imgCat8 = document.querySelectorAll('#img')[7]
const imgCat9 = document.querySelectorAll('#img')[8]
const imgCat10 = document.querySelectorAll('#img')[9]
const imgCat11 = document.querySelectorAll('#img')[10]
const imgCat12 = document.querySelectorAll('#img')[11]
const imgCat13 = document.querySelectorAll('#img')[12]
const imgCat14 = document.querySelectorAll('#img')[13]
const imgCat15 = document.querySelectorAll('#img')[14]



function catRandom1(){
    fetch(urlCat).then((res)=>{
        return res.json();
    }).then((date)=>{        
        imgCat1.setAttribute('src',date.file)
    })
}

function catRandom2(){
    fetch(urlCat).then((res)=>{
        return res.json();
    }).then((date)=>{
        imgCat2.setAttribute('src',date.file)
    })
}

function catRandom3(){
    fetch(urlCat).then((res)=>{
        return res.json();
    }).then((date)=>{
        imgCat3.setAttribute('src',date.file)
    })
}

function catRandom4(){
    fetch(urlCat).then((res)=>{
        return res.json();
    }).then((date)=>{
        imgCat4.setAttribute('src',date.file)
    })
}


function catRandom5(){
    fetch(urlCat).then((res)=>{
        return res.json();
    }).then((date)=>{
        imgCat5.setAttribute('src',date.file)
    })
}

function catRandom6(){
    fetch(urlCat).then((res)=>{
        return res.json();
    }).then((date)=>{
        imgCat6.setAttribute('src',date.file)
    })
}

function catRandom7(){
  fetch(urlCat).then((res)=>{
      return res.json();
  }).then((date)=>{
      imgCat7.setAttribute('src',date.file)
  })
}

function catRandom8(){
  fetch(urlCat).then((res)=>{
      return res.json();
  }).then((date)=>{
      imgCat8.setAttribute('src',date.file)
  })
}

function catRandom9(){
  fetch(urlCat).then((res)=>{
      return res.json();
  }).then((date)=>{
      imgCat9.setAttribute('src',date.file)
  })
}

function catRandom10(){
  fetch(urlCat).then((res)=>{
      return res.json();
  }).then((date)=>{
      imgCat10.setAttribute('src',date.file)
  })
}

function catRandom11(){
  fetch(urlCat).then((res)=>{
      return res.json();
  }).then((date)=>{
      imgCat11.setAttribute('src',date.file)
  })
}

function catRandom12(){
  fetch(urlCat).then((res)=>{
      return res.json();
  }).then((date)=>{
      imgCat12.setAttribute('src',date.file)
  })
}

function catRandom13(){
  fetch(urlCat).then((res)=>{
      return res.json();
  }).then((date)=>{
      imgCat13.setAttribute('src',date.file)
  })
}

function catRandom14(){
  fetch(urlCat).then((res)=>{
      return res.json();
  }).then((date)=>{
      imgCat14.setAttribute('src',date.file)
  })
}

function catRandom15(){
  fetch(urlCat).then((res)=>{
      return res.json();
  }).then((date)=>{
      imgCat15.setAttribute('src',date.file)
  })
}

document.querySelector("#btn").addEventListener('click', ()=>{
    setTimeout(catRandom1,1000)
    setTimeout(catRandom2,1000)
    setTimeout(catRandom3,1000)
    setTimeout(catRandom4,1000)
    setTimeout(catRandom5,1000)
    setTimeout(catRandom6,1000)
    setTimeout(catRandom7,1000)
    setTimeout(catRandom8,1000)
    setTimeout(catRandom9,1000)
    setTimeout(catRandom10,1000)
    setTimeout(catRandom11,1000)
    setTimeout(catRandom12,1000)
    setTimeout(catRandom13,1000)
    setTimeout(catRandom14,1000)
    setTimeout(catRandom15,1000)

});

setTimeout(catRandom1,1000)
setTimeout(catRandom2,1000)
setTimeout(catRandom3,1000)
setTimeout(catRandom4,1000)
setTimeout(catRandom5,1000)
setTimeout(catRandom6,1000)
setTimeout(catRandom7,1000)
setTimeout(catRandom8,1000)
setTimeout(catRandom9,1000)
setTimeout(catRandom10,1000)
setTimeout(catRandom11,1000)
setTimeout(catRandom12,1000)
setTimeout(catRandom13,1000)
setTimeout(catRandom14,1000)
setTimeout(catRandom15,1000)