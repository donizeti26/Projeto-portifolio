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
english.addEventListener('click', openenglish)

function openenglish(){
    console.log("OK!")
}