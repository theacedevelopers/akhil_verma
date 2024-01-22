let toggle_bar = document.querySelector("button");

let sidebar = document.querySelector(".navbar");

toggle_bar.addEventListener("click", function(){
    if(toggle_bar.firstElementChild.classList.contains("fa-bars"))
    {
        toggle_bar.firstElementChild.classList.replace("fa-bars","fa-xmark");
    }
    else if(toggle_bar.firstElementChild.classList.contains("fa-xmark"))
    {
        toggle_bar.firstElementChild.classList.replace("fa-xmark","fa-bars");
    }
   sidebar.classList.toggle("navbar-open")
});