const changeSlide = () =>{
    const background = document.getElementById("background");
    const one = document.getElementById("one");
    const two = document.getElementById("two");
    const three = document.getElementById("three");
    const four = document.getElementById("four");
    
    one.onmouseenter = function() {
        if(background.className == 'one'){
            background.className = 'one';
        } else {
            background.style.opacity = "0";
            setTimeout(function(){ two.className = 'tab-underlined'; }, 50);
            setTimeout(function(){ three.className = 'tab-underlined'; }, 50);
            setTimeout(function(){ four.className = 'tab-underlined'; }, 50);
            setTimeout(function(){ one.className = 'yellow'; }, 50);
            setTimeout(function(){ background.className = 'one'; }, 600);
            setTimeout(function(){ background.style.opacity = "1"; }, 600);
        }
    }

    two.onmouseenter = function() {
        if(background.className == 'two'){
            background.className = 'two';
        } else {
            background.style.opacity = "0";
            setTimeout(function(){ one.className = 'tab-underlined'; }, 50);
            setTimeout(function(){ three.className = 'tab-underlined'; }, 50);
            setTimeout(function(){ four.className = 'tab-underlined'; }, 50);
            setTimeout(function(){ two.className = 'yellow'; }, 50);
            setTimeout(function(){ background.className = 'two'; }, 600);
            setTimeout(function(){ background.style.opacity = "1"; }, 600);
        }
    }

    three.onmouseenter = function() {
        if(background.className == 'three'){
            background.className = 'three';
        } else {
            background.style.opacity = "0";
            setTimeout(function(){ two.className = 'tab-underlined'; }, 50);
            setTimeout(function(){ one.className = 'tab-underlined'; }, 50);
            setTimeout(function(){ four.className = 'tab-underlined'; }, 50);
            setTimeout(function(){ three.className = 'yellow'; }, 50);
            setTimeout(function(){ background.className = 'three'; }, 600);
            setTimeout(function(){ background.style.opacity = "1"; }, 600);
        }
    }

    four.onmouseenter = function() {
        if(background.className == 'four'){
            background.className = 'four';
        } else {
            background.style.opacity = "0";
            setTimeout(function(){ two.className = 'tab-underlined'; }, 50);
            setTimeout(function(){ three.className = 'tab-underlined'; }, 50);
            setTimeout(function(){ one.className = 'tab-underlined'; }, 50);
            setTimeout(function(){ four.className = 'yellow'; }, 50);
            setTimeout(function(){ background.className = 'four'; }, 600);
            setTimeout(function(){ background.style.opacity = "1"; }, 600);
        }
    }
}

export { changeSlide };