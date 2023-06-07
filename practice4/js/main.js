document.addEventListener('DOMContentLoaded', function(){
        //DOMcontentLoaded 이벤트처리 초기화 작업
    let wrapper=document.getElementById('wrapper');
    let topLayer=wrapper.querySelector('.top');
    let handle=wrapper.querySelector('.handle')
    let skew=0;
    let delata=0;

    if(wrapper.className.indexOf('skewed')!=-1){
        skew=1000
    }
    wrapper.addEventListener('mousemove', function(e){
        //console.log((e.clientX-window.innerWidth/2)*0.5)
        delata=(e.clientX-window.innerWidth/2)*0.5;
        handle.style.left=e.clientX+delata+'px'
        topLayer.style.width=e.clientX+skew+delata+'px'
    })
})