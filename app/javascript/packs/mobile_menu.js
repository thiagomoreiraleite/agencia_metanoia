const mobileMenu = () =>{
    const menuagencia = document.getElementsByClassName("mob-menu-agencia");
    const menusocios = document.getElementsByClassName("mob-menu-socios");
    const menusolucoes = document.getElementsByClassName("mob-menu-solucoes");
    const menuportfolio = document.getElementsByClassName("mob-menu-portfolio");
    const index = document.getElementById("mob-index");
    const agencia = document.getElementById("mob-agencia");
    const socios = document.getElementById("mob-socios");
    const solucoes = document.getElementById("mob-solucoes");
    const portfolio = document.getElementById("mob-portfolio");

    const displayNoneBlock = (i,n,m,o,x) => {
        setTimeout(function(){ i.children[0].style.opacity = "0"; }, 10);
        setTimeout(function(){ n.children[0].style.opacity = "0"; }, 10);
        setTimeout(function(){ m.children[0].style.opacity = "0"; }, 10);
        setTimeout(function(){ o.children[0].style.opacity = "0"; }, 10);
        setTimeout(function(){ x.children[0].style.opacity = "0"; }, 10);
        setTimeout(function(){ i.style.display = "none"; }, 600);
        setTimeout(function(){ n.style.display = "none"; }, 600);
        setTimeout(function(){ m.style.display = "none"; }, 600);
        setTimeout(function(){ o.style.display = "none"; }, 600);
        setTimeout(function(){ x.style.display = "block"; }, 600);
        setTimeout(function(){ x.children[0].style.opacity = "1"; }, 630);
    };

    for (const element of menuagencia) {
        element.addEventListener('click', () => displayNoneBlock(index,socios,solucoes,portfolio,agencia));
    }
    for (const element of menusocios) {
        element.addEventListener('click', () => displayNoneBlock(index,agencia,solucoes,portfolio,socios));
    }
    for (const element of menusolucoes) {
        element.addEventListener('click', () => displayNoneBlock(index,agencia,socios,portfolio,solucoes));
    }
    for (const element of menuportfolio) {
        element.addEventListener('click', () => displayNoneBlock(index,agencia,socios,solucoes,portfolio));
    }
}

export { mobileMenu };
