let burgBtn = document.querySelector('.header__body-burger');
let nav = document.querySelector('.header__nav');
let navOf = document.querySelector('.nav-li1');
let fonBtn = document.querySelectorAll('.fon-circle');

burgBtn.onclick = () => {
    nav.style.top = 0 + 'px';
    burgBtn.style.opacity = 0;
    console.log(nav);
}
navOf.onclick = () => {
    nav.style.top = -460 + 'px';
    burgBtn.style.opacity = 1;
    console.log(nav);
}
// let img = [
//     img.src = './images/banner1.png',
//     img.src = './images/bannerblue.png',
//     img.src = './images/bannergrin.png',
//     img.src = './images/banneryellow.png'
// ]
// function slibFon() {     
fonBtn.forEach(element => {

    element.onclick = (e) => {
        if (e.target) {
            console.dir(element);

        }

    }
});

