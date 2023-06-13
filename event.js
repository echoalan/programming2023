const btnTwo = document.getElementById("btnNavSecond")
const navOne = document.getElementById("navigator")

const navLayout = ()=>{
    let html="";
    html+=`
    <button class="nav__button" id="btnNav">Inicio</button>
    <a href="" class="navItems">Donaciones</a>
    <a href="" class="navItems">Contacto</a>
    <a href="" class="navItems">Otros sitios confiables de ONG</a>
    <a href="" class="navItems">Más información sobre nosotros</a>
    `
    navOne.innerHTML=html
    btnHome()
}

const btnHome = ()=>{
    const btnOne = document.getElementById("btnNav")
    btnOne.addEventListener("click" , ()=>{
    location.reload()
})
}

btnHome()

btnTwo.addEventListener("click" , ()=>{
    navLayout()
})