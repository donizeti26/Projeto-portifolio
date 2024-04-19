var area = window.document.getElementsByClassName("dropdown")[0]

var item = window.document.getElementById("contact")



area.addEventListener('mouseenter', colorAdd, false)

area.addEventListener('mouseleave', colorRemove, false)

function colorAdd(){
    item.style.color = "#ededed"
    
}

function colorRemove(){
    item.style.color = "var(--text-color-grey)"
    
}



var toggle= window.document.getElementById("checkbox")
toggle.addEventListener('click', toggleMode)


function toggleMode(){
    if(toggle.checked){
        document.body.setAttribute('class', 'shadow')
    }else{
        document.body.setAttribute('class', 'light')

    }
}



var english= window.document.getElementById("language-usa")
var portuguese= window.document.getElementById("language-br")

english.addEventListener('click', langeng)
portuguese.addEventListener('click', langbr)


function langeng(){
    
    var lang = document.querySelector("html")

    if(lang.lang == 'pt-br'){
        lang.setAttribute('lang','en-us')
        document.getElementsByClassName("navbar-option").children().eq(0).text("About")
    }

}

function langbr(){
    
    var lang = document.querySelector("html")

    if(lang.lang == 'en-us'){
        lang.setAttribute('lang','pt-br')

    }



}
