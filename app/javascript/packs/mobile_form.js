const mobileForm = () =>{
    const vamosConversar = document.getElementsByClassName("mob-index-vc")[0];
    const mobForm = document.getElementById("mob-form");

    const displayNoneBlock = (i,x) => {
        setTimeout(function(){ i.style.opacity = "0"; }, 10);
        setTimeout(function(){ i.style.display = "none"; }, 600);
        setTimeout(function(){ x.style.display = "block"; }, 600);
        setTimeout(function(){ x.style.opacity = "1"; }, 630);
    };
    vamosConversar.addEventListener('click', () => displayNoneBlock(vamosConversar,mobForm));
}
export { mobileForm };