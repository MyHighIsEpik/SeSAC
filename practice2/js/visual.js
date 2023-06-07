var currentNum=0;
var menuNum=0;
var liList;
var spanList;
var sid;

function selectNum(num){
    if(currentNum!=num){
        var btn1=spanList[currentNum].getElementsByTagName('img')[0];
        btn1.src=btn1.src.replace('_over.png', '.png');
        liList[currentNum].className="off";

        var btn2=spanList[num].getElementsByTagName('img')[0];
        btn2.src=btn2.src.replace('.png', '_over.png');
        liList[num].className="";

        var page=document.getElementsByClassName('pageNum')[0]
        page.getElementsByClassName('page')[0].innerHTML=num+1;

        currentNum=num
    }
}

function rolling(){
    menuNum++;
    if(menuNum>spanList.length-1){
        menuNum=0;
    }
    selectNum(menuNum)
}

function prevBtn(){
    clearInterval(sid);
    menuNum--;
    if(menuNum<0){
        menuNum=spanList.length-1;
    }
    selectNum(menuNum)
}
function nextBtn(){
    clearInterval(sid);
    menuNum++;
    if(menuNum>spanList.length-1){
        menuNum=0;
    }
    selectNum(menuNum)
}
function stopBtn(){
    clearInterval(sid)
    
}
function playBtn(){
    clearInterval(sid);
    sid=setInterval(rolling, 2000)
}

function init(){
    liList=document.getElementById('visual').getElementsByTagName('li');
    spanList=document.getElementById('visualBtn').getElementsByTagName('span');
    for(var i=0; i<liList.length; i++){
        spanList[i].getElementsByTagName('a')[0].num=i;
        spanList[i].getElementsByTagName('a')[0].onmouseover=function(){
            clearInterval(sid)
            menuNum=this.num;
            selectNum(this.num)
        }
        spanList[i].getElementsByTagName('a')[0].onmouseout=function(){
            clearInterval(sid)
            sid=setInterval(rolling, 2000)
        }
    }
    sid=setInterval(rolling, 2000)
}

window.onload=init;