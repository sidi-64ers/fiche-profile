let chuck = document.querySelector("main > section > aside > div");


chuck.onmouseenter = function() {
    chuck.style.borderRadius = "0%";
};

chuck.onmouseleave = function() {
    chuck.style.borderRadius = "50%";
};


function muFunction(){
    let x = document.querySelector("article div p").nextElementSibling.innerHTML;
    document.getElementById("soluce").innerHTML = x;

}
