

let ham = document.querySelector('.hamburger');

let container = document.querySelector('.mobile-menu-container');
let close = document.querySelector('.btn-close');

ham.addEventListener('click' , ()=>{

    container.style.display ="block";

})

close.addEventListener('click',()=>{

    container.style.display='none';
})


 
