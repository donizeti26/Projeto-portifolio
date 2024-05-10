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

        texto[1].innerHTML =`Born on January 26, 2000, in a small town called Manga, MG, he entered this world with a joke ready for life.
        From an early age, his quirky humor and passion for computers made him a true master of digital laughter.
        But even with all the fun under the Bahian sun (and that SUN), I knew that his destiny was beyond the happy sun,
        
        which was always cracking. br>.<br> At 19, I plunged deep into college, embarking on a journey of academic discovery. 
          For a year and a half, I ventured into the facu classrooms. of Systems Analysis and Development,
           hoping to find the algorithm for eternal happiness. However, the universe had other plans.          `
        
           texto[2].textContent =`            For some reasons I had to close college and landed in the chaotic and challenging world of logistics, in the busy city of Paulínia SP. Although stacking boxes and organizing stocks wasn’t exactly her childhood dream, I embraced the challenge.

        <br>   
        Today, I continue my journey, navigating the turbulent waters of career transition with a hand-drawn map and a quirky sense of humor. My dream? Finding a profession that not only fills your pockets, but also my heart with joy and satisfaction. With each line of code written I get closer to this goal.

         `
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
    nav.classList.toggle("active")
    document.body.classList.toggle('scrollOf')

}


)


