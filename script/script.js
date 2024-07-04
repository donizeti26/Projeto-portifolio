let area = document.getElementsByClassName("dropdown")[0]

let item = document.getElementById("contact")

let tema = document.querySelector(".switch")

let socialwindow = document.querySelector('#socialwindow')

area.addEventListener('mouseenter', colorAdd, false)

area.addEventListener('mouseleave', colorRemove, false)

function colorAdd(){
    item.style.color = "#ededed"
    
}

function colorRemove(){
    item.style.color = "var(--text-color-gw)"
    
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

function trocarIdiomaBr(){
    window.location.reload(true);
}


function trocarIdiomaUs(){
    console.log("OJK")
    var lang = document.querySelector("html")
    
    if(lang.lang == 'pt-br'){
        lang.setAttribute('lang','en-us')
        let texto = document.querySelectorAll('p')
        let titulo = document.querySelectorAll('h1')
        let contactbt = document.querySelector('#button-about')
        contactbt.value="GET IN TOUCH"

        titulo[0].innerHTML =`Can I help with your project?`

        texto[0].innerHTML =`If you are looking to bring your website to life with.
        creativity and skill? then you came to the right place.
         Let’s together turn your online presence. 
         into something so amazing that even Google will want
          to hire us.`

        titulo[1].innerHTML = `<span>About</span>.`

        texto[1].innerHTML =`Creating websites that adapt perfectly to any device, providing an impeccable user experience on smartphones, tablets and desktops. Tailored solutions that meet the specific needs of your business, using the most modern and effective technologies.
"Working with a front-end developer is easy and extremely beneficial. You gain a partner who understands your needs and transforms your ideas into reality, with a touch of innovation and efficiency."        `
        
           texto[2].textContent =`In an ever-evolving digital world, first impressions are key. A front-end developer ensures that your website is not only visually appealing, but also functional and accessible across all platforms and devices. A good user interface (UI) and intuitive user experience (UX) can significantly increase customer satisfaction, conversion rates, and user retention.`
        texto[3].innerHTML=`IN SEARCH OF NEW PATHS, OPPORTUNITIES <br> AND A VACANCY IN GOOGLE`
        

        texto[25].innerHTML =`Their designs are visually 
        combining creativity and precision. His attention to detail and professionalism are evident in every project. I strongly recommend his 
        work to anyone seeking quality and excellence in design.`
        }
    
    

}
/**/



const hamburguer = document.querySelector("button.hamburguer")
const nav = document.querySelector("div.navbar")

hamburguer.addEventListener('click',()=>{



    if(nav.classList.contains("active")){
        nav.classList.remove("active")
        tema.style.display ="flex"
        habilitarScroll()
    }else{
        nav.classList.toggle("active")
        tema.style.display ="none"
        
        desabilitarScroll()
    }
        
    }


)


function redesocial(){

    if(socialwindow.classList.contains('windowOf')){
        socialwindow.classList.remove('windowOf')
        socialwindow.classList.add('windowOn')
        desabilitarScroll()

    }else if(socialwindow.classList.contains('windowOn')){
        socialwindow.classList.remove('windowOn')
        socialwindow.classList.add('windowOf')
        habilitarScroll()
    }

}

function desabilitarScroll() {
    document.body.style.overflow = 'hidden';
}
function habilitarScroll() {
    document.body.style.overflow = '';
}



function scrollToElement(meuElemento) {
    // Obtém a posição do elemento em relação ao topo do documento
    var elementPosition = meuElemento.getBoundingClientRect().top + window.scrollY;
    
    // Define o deslocamento dependendo do ID do elemento
    var offset = meuElemento.id === 'scroll-feedback' ? 0 : 85;
    
    // Calcula a posição de rolagem com o deslocamento
    var offsetPosition = elementPosition - offset;

    // Realiza a rolagem suave até a posição calculada
    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth'
    });
}

// Função auxiliar que recebe um ID, obtém o elemento e chama scrollToElement
function scrollToElementById(elementId) {
    var meuElemento = document.getElementById(elementId);
    if (meuElemento) {
        scrollToElement(meuElemento);
    } else {
        console.error('Elemento não encontrado:', elementId);
    }
}

function closehbg(){
    nav.classList.remove("active")

}