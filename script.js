let cur1 = document.querySelector('.cursor1');
let cur2 = document.querySelector('.cursor2');

document.addEventListener('mousemove', function(e){
    cur1.style.cssText = cur2.style.cssText = 
        'left: ' + e.clientX + 'px; top: ' + e.clientY + 'px;';
});


document.querySelectorAll('.c-hover')[0].addEventListener('mouseover', function(){
    document.querySelector('.cursor1').classList.add('cursor_hover');
    document.querySelector('.cursor2').classList.add('cursor_hover');
})
document.querySelectorAll('.c-hover')[1].addEventListener('mouseover', function(){
    document.querySelector('.cursor1').classList.add('cursor_hover');
    document.querySelector('.cursor2').classList.add('cursor_hover');
})
document.querySelectorAll('.c-hover')[0].addEventListener('mouseout', function(){
    document.querySelector('.cursor1').classList.remove('cursor_hover');
    document.querySelector('.cursor2').classList.remove('cursor_hover');
})
document.querySelectorAll('.c-hover')[1].addEventListener('mouseout', function(){
    document.querySelector('.cursor1').classList.remove('cursor_hover');
    document.querySelector('.cursor2').classList.remove('cursor_hover');
})