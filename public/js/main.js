const menuList=["<a>one</a>","two","thee"];

let div= document.createElement('div');
div.classList.add('menu');
document.querySelector('main').prepend(div);

const span=document.createElement('span');
span.classList.add('span');
document.querySelector('.menu').append(span);
const span1=document.createElement('span');
span1.classList.add('span');
document.querySelector('.menu').append(span1);
const span2=document.createElement('span');
span2.classList.add('span');
document.querySelector('.menu').append(span2);

const slide=document.createElement('div');
slide.textContent=menuList;
slide.classList.add('menuOpen')
document.querySelector("main").prepend(slide);
document.querySelector('.menu').addEventListener("click",openMenu);
let click=+0;
function openMenu(clic){
    click++;
    if(click==1){
        document.querySelector(".menuOpen").style.cssText=`
            width:100vh;
        `;
    }else{
        document.querySelector(".menuOpen").style.cssText=`
            width:0;
        `;
        click=0;
    }
    
}

