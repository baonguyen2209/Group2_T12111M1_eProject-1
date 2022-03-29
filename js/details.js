searchForm = document.querySelector('.search-form');

document.querySelector('#search-btn').onclick = () =>{
    searchForm.classList.toggle('active');
}

// shopping cart

let closer = document.querySelector('#closer');

closer.onclick = () =>{
    closer.style.display = 'none';
    cartForm.classList.remove('active');
}

let cartForm = document.querySelector('.shopping-cart');

document.querySelector('#cart-btn').onclick = () =>{
    closer.style.display = 'block';
    cartForm.classList.toggle('active');
// document.querySelector('#close-login-btn').onclick = () =>{
//     cartForm.classList.remove('active');
}

// shopping cart

// login

let loginForm = document.querySelector('.login-form-container');

document.querySelector('#login-btn').onclick = () =>{
    loginForm.classList.toggle('active');
}

document.querySelector('#close-login-btn').onclick = () =>{
    loginForm.classList.remove('active');
}

// login

// signup

let signForm = document.querySelector('.signup-form-container');

document.querySelector('#createone-btn').onclick = () =>{
    signForm.classList.toggle('active');
    loginForm.classList.remove('active');
}

document.querySelector('#signup-btn').onclick = () =>{
    signForm.classList.toggle('active');
}

document.querySelector('#close-signup-btn').onclick = () =>{
    signForm.classList.remove('active');
}

document.querySelector('#signin-btn').onclick = () =>{
    loginForm.classList.toggle('active');
    signForm.classList.remove('active');
}

// signup

window.onscroll = () =>{

    searchForm.classList.remove('active');

    if(window.scrollY > 80){
        document.querySelector('.header .header-2').classList.add('active');
    } else {
        document.querySelector('.header .header-2').classList.remove('active');
    }

}

window.onload = () =>{

    if(window.scrollY > 80){
        document.querySelector('.header .header-2').classList.add('active');
    } else {
        document.querySelector('.header .header-2').classList.remove('active');
    }
    fadeOut();
}

// productdetails

let mainImg = document.getElementById('mainimg');
let smallImg = document.getElementsByClassName('small-img');

smallImg[0].onclick = function(){
    mainImg.src = smallImg[0].src;
}
smallImg[1].onclick = function(){
    mainImg.src = smallImg[1].src;
}
smallImg[2].onclick = function(){
    mainImg.src = smallImg[2].src;
}
smallImg[3].onclick = function(){
    mainImg.src = smallImg[3].src;
}

// productdetails

// footer

function loader(){
    document.querySelector('.loader-container').classList.add('active');
}

function fadeOut(){
    setTimeout(loader, 4000);
}

// footer
