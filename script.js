const btn = document.getElementById('flip');
const coinCont = document.querySelector('.coinContainer');
const headCount = document.getElementById('headCount');
const tailCount = document.getElementById('tailCount');
const Reset  =  document.getElementById('Reset');
const counterTable = document.getElementById('counterTable');
const textBox = document.getElementById('textBox');
let heads=0;
let tails=0;

let dummyText = ["Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nemo dicta dolorem natus fuga maiores, nesciunt iste magni aliquid. Dolore dolor delectus perferendis aperiam eaque modi amet enim officia at recusandae? Libero voluptate perspiciatis alias enim at. Sequi, totam! Aliquid nostrum ipsam vel aperiam "]

let split = (text) =>{
    let t = text.split(' ');
   return t;
}   

let displayText = ()=>{
    let spliitedText = split(dummyText[0]);
    console.log(spliitedText);
    let i=0;
    let display = setInterval(function() {
        textBox.textContent += `${spliitedText[i]} `;
        if (i == (spliitedText.length-1)) {
            clearInterval(display);
        }
        i += 1
    }, 100);
}



function FlipCoin(){
    counterTable.hidden=false;
    let number =Math.floor((Math.random()*2+1));
    console.log(number);
    if(number===1){
        if(coinCont.classList.contains('animate-Head')||coinCont.classList.contains('animate-Tail')){
            coinCont.classList.remove('animate-Head');
            coinCont.classList.remove('animate-Tail');
        }
            coinCont.setAttribute('class','coinContainer animate-Head');
            heads++;
            setTimeout(()=>{
                headCount.innerText=`${heads}`
            },2000);
    }else{
        if(coinCont.classList.contains('animate-Head')||coinCont.classList.contains('animate-Tail')){
            coinCont.classList.remove('animate-Head');
            coinCont.classList.remove('animate-Tail');
        }
            coinCont.setAttribute('class','coinContainer animate-Tail');
            tails++;
            setTimeout(()=>{
                tailCount.innerHTML=`${tails}`
            },2000);
    }
    
}

btn.addEventListener('click',FlipCoin);
Reset.addEventListener('click',()=>{
    counterTable.hidden=true;
    if(headCount){
    headCount.innerText=0;
    }
    if(tailCount){
    tailCount.innerText=0;
    }
    heads=0;
    tails=0;
})

displayText();