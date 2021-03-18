var header = document.getElementById("mainlink");
var btns = header.getElementsByClassName("links");

var modalBtn = document.querySelector('.modal-btn');
var modalBg = document.querySelector('.modal-bg');
var modalClose = document.querySelector('.modal-close');

//var copyBtn = document.querySelector('.copy');
var copyBtn = document.querySelectorAll('.copy');

console.log(copyBtn);

//var code = document.getElementById('code');
var toast = document.querySelector('.copy-toast');


modalBtn.addEventListener('click', function() {
    modalBg.classList.add('modal-bg-active');
})

modalClose.addEventListener('click', function() {
    modalBg.classList.remove('modal-bg-active');
})

for (var i=0; i<btns.length; i++) {

    btns[i].addEventListener("click", function () {
        var current = document.getElementsByClassName("active");
        if(current.length>0){
            current[0].className = current[0].className.replace(" active", "");
        }
        this.className += " active";
    });
}

// function copyText() {
//     let text = code.innerText;
//     navigator.clipboard.writeText(text)
//     .then(() => {
//             toast.classList.add('copy-toast-visible');
//             setTimeout(() => {
//                 toast.classList.remove('copy-toast-visible');
//             },2500); 
//     });
// }

// copyBtn.addEventListener('click', copyText);

function copyText(str) {
    console.log(str);
    let code = document.querySelectorAll(`.${str}`);
    let text = code[1].innerText;
    navigator.clipboard.writeText(text)
    .then(() => {
            toast.classList.add('copy-toast-visible');
            setTimeout(() => {
                toast.classList.remove('copy-toast-visible');
            },2500); 
    });
}

Array.prototype.map.call(copyBtn, item => item.addEventListener('click', () => copyText(item.classList[2])));
