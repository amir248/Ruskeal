const menuList=['<a href="/">Главная</a>','<a href="/gallery">Галерея</a>','<a href="/microbus">Микроавтобус</a>'];


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
// slide.innerHTML=menuList;
slide.classList.add('menuOpen')
document.querySelector("main").prepend(slide);
document.querySelector('.menu').addEventListener("click",openMenu);
let click=+0;
function openMenu(clic){
    click++;
    if(click==1){
        goList();
        rotate();
        document.querySelector(".menuOpen").style.cssText=`
            width:100%;
            opecity:1;
            margin-left:0;
        `;
        document.querySelector(".menuOpen > a").style.cssText=`
        
            opecity:1;
            margin-left:0;
        `;
        document.querySelector(".menuOpen > a:nth-child(2)").style.cssText=`
        
            opecity:1;
            margin-left:0;
        `;
        document.querySelector(".menuOpen > a:nth-child(3)").style.cssText=`
        
            opecity:1;
            margin-left:0;
        `;
    }else{
        rotateLine();
        document.querySelector(".menuOpen").style.cssText=`
            width:0;
            opacity:0;
            margin-left:00px;
        `;
        document.querySelector(".menuOpen > a").style.cssText=`
        
            opacity:0;
            margin-left:700px;
        `;
        document.querySelector(".menuOpen > a:nth-child(2)").style.cssText=`
        
            opacity:0;
            margin-left:700px;
        `;
        document.querySelector(".menuOpen > a:nth-child(3)").style.cssText=`
        
            opacity:0;
            margin-left:700px;
        `;
        click=0;
    }
    
}
function rotate(){
    document.querySelector('span.span:nth-child(1)').style.cssText=`
    background:red;
    transform:rotate(-40deg);
    margin-bottom:0;
    `;
    document.querySelector('span.span:nth-child(2)').style.cssText=`
    display:none;
    `;
    document.querySelector('span.span:nth-child(3)').style.cssText=`
    background:red;
    transform:rotate(40deg);
    margin-top:0;
    `;
}
function rotateLine(){
    document.querySelector('span.span:nth-child(1)').style.cssText=`
    background:#14632a;
    transform:rotate(0deg);
    margin-bottom:7px;
    `;
    document.querySelector('span.span:nth-child(2)').style.cssText=`
    display:block;
    `;
    document.querySelector('span.span:nth-child(3)').style.cssText=`
    background:#14632a;
    transform:rotate(0deg);
    margin-top:7px;
    `;
}

function goList(){
    document.querySelector(".menuOpen").innerHTML=menuList;
}
goList();