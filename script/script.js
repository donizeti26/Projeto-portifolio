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
