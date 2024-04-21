var area = window.document.getElementsByClassName("dropdown")[0]

var item = window.document.getElementById("contact")



area.addEventListener('mouseenter', colorAdd, false)

area.addEventListener('mouseleave', colorRemove, false)

function colorAdd(){
    item.style.color = "#ededed"
    
}

function colorRemove(){
    item.style.color = "var(--text-color-wb)"
    
}



var toggle= window.document.getElementById("checkbox")
toggle.addEventListener('click', toggleMode)

var logo = window.document.getElementById("logo-dsn")

function toggleMode(){
    if(toggle.checked){
        document.body.setAttribute('class', 'shadow')
        logo.src="./assets/icon-white.svg"

    }else{
        document.body.setAttribute('class', 'light')
        logo.src="./assets/icon-black.svg"

    }
}

/* M U D A R  I D I O M A */

var english= window.document.getElementById("language-usa")
var portuguese= window.document.getElementById("language-br")

english.addEventListener('click', langeng)
portuguese.addEventListener('click', langbr)


function langeng(){
    
    var lang = document.querySelector("html")

    if(lang.lang == 'pt-br'){
        lang.setAttribute('lang','en-us')
        document.getElementsByClassName("navbar-option")
    }

}

function langbr(){
    
    var lang = document.querySelector("html")

    if(lang.lang == 'en-us'){
        lang.setAttribute('lang','pt-br')

    }



}
/**/


const hamburguer = document.querySelector("button.hamburguer")
const nav = document.querySelector("div.navbar")

hamburguer.addEventListener('click',()=>
nav.classList.toggle("active"))

