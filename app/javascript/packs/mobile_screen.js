const screenSize = () =>{
    const pageHeight = window.screen.availHeight;

    const one = document.getElementsByClassName("height-eighty-eight")
    // const two = document.getElementsByClassName("height-twelve")
    // const three = document.getElementsByClassName("height-thirty")
    // const four = document.getElementsByClassName("height-thirty-five")
    // const five = document.getElementsByClassName("top-minus-seven")
    // const six = document.getElementsByClassName("top-six")
    // const seven = document.getElementsByClassName("height-twenty-seven")
    // const eight = document.getElementsByClassName("font-one-nine")
    // const nine = document.getElementsByClassName("padding-top-three")
    // const ten = document.getElementsByClassName("height-twenty")
    // const eleven = document.getElementsByClassName("grid-gap-one")
    // const twelve = document.getElementsByClassName("margin-bottom-five")
    // const thirteen = document.getElementsByClassName("padding-one")
    // const fourteen = document.getElementsByClassName("font-one-seven")
    // const fifteen = document.getElementsByClassName("height-eighteen")
    // const sixteen = document.getElementsByClassName("height-five")
    // const seventeen = document.getElementsByClassName("height-fifty")
    // const eighteen = document.getElementsByClassName("bottom-minus-four")
    // const nineteen = document.getElementsByClassName("padding-top-four")
    // const twenty = document.getElementsByClassName("font-one-eight")
    // const twentyOne = document.getElementsByClassName("bottom-eighteen")
    // const twentyTwo = document.getElementsByClassName("height-ten")
    // const twentyThree = document.getElementsByClassName("height-sixty")


    const setHeight = (i, ratio) => {
        i.style.height = pageHeight*ratio/100
    };

    const applyHeight = (elements, ratio) => {
        for (const element of elements) {
            document.addEventListener('DOMContentLoaded', () => setHeight(element, ratio));
        }
    };

    applyHeight(one, 88);
    // applySize(two, ratio, type);
    // applySize(three, ratio, type);
    // applySize(four, ratio, type);
    // applySize(five, ratio, type);
    // applySize(six, ratio, type);
    // applySize(seven, ratio, type);
    // applySize(eight, ratio, type);
    // applySize(nine, ratio, type);
    // applySize(ten, ratio, type);
    // applySize(eleven, ratio, type);
    // applySize(twelve, ratio, type);
    // applySize(thirteen, ratio, type);
    // applySize(fourteen, ratio, type);
    // applySize(fifteen, ratio, type);
    // applySize(sixteen, ratio, type);
    // applySize(seventeen, ratio, type);
    // applySize(eighteen, ratio, type);
    // applySize(nineteen, ratio, type);
    // applySize(twenty, ratio, type);
    // applySize(twentyOne, ratio, type);
    // applySize(twentyTwo, ratio, type);
    // applySize(twentyThree, ratio, type);




    // mob-vertical-wrapper
    // mob-menu-wrapper
    // mob-menu-item
    // mob-index-logo
    // mob-index-vc
    // mob-agencia-xadrez
    // mob-agencia-title
    // mob-agencia-text
    // mob-socios-title
    // mob-image-card
    // mob-flip-card
    // mob-flip-card-inner
    // mob-flip-card-front
    // mob-flip-card-back
    // mob-solucoes-title
    // mob-solucoes-line
    // #mobsolcarousel-example
    // #mobsolcarousel-example .carousel-inner
    // #mobsolcarousel-example .carousel-inner .carousel-item
    // #mobsolcarousel-example .carousel-inner .carousel-item .carousel-caption
    // #mobsolcarousel-example .carousel-inner .carousel-item img
    // mob-portfolio-title
    // #mobcarousel-example
    // #mobcarousel-example .carousel-inner
    // #mobcarousel-example .carousel-inner img    
}

// export { screenSize };