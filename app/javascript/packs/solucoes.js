const showSolucoesBox = () =>{
    const iconPublicidade = document.getElementById("icon-publicidade");
    const boxPublicidade = document.getElementById("box-publicidade");
    iconPublicidade.onmouseenter = function() {
        if(boxPublicidade.className){
            boxPublicidade.className = '';
        } else {
            boxPublicidade.className = 'fade';
        }
    }

    iconPublicidade.onmouseleave = function() {
        if(boxPublicidade.className){
            boxPublicidade.className = '';
        } else {
            boxPublicidade.className = 'fade';
        }
    }
    const iconGerenciamento = document.getElementById("icon-gerenciamento");
    const boxGerenciamento = document.getElementById("box-gerenciamento");
    iconGerenciamento.onmouseenter = function() {
        if(boxGerenciamento.className){
            boxGerenciamento.className = '';
        } else {
            boxGerenciamento.className = 'fade';
        }
    }
    iconGerenciamento.onmouseleave = function() {
        if(boxGerenciamento.className){
            boxGerenciamento.className = '';
        } else {
            boxGerenciamento.className = 'fade';
        }
    }
    const iconInteligencia = document.getElementById("icon-inteligencia");
    const boxInteligencia = document.getElementById("box-inteligencia");
    iconInteligencia.onmouseenter = function() {
        if(boxInteligencia.className){
            boxInteligencia.className = '';
        } else {
            boxInteligencia.className = 'fade';
        }
    }
    iconInteligencia.onmouseleave = function() {
        if(boxInteligencia.className){
            boxInteligencia.className = '';
        } else {
            boxInteligencia.className = 'fade';
        }
    }
    const iconEstrategia = document.getElementById("icon-estrategia");
    const boxEstrategia = document.getElementById("box-estrategia");
    iconEstrategia.onmouseenter = function() {
        if(boxEstrategia.className){
            boxEstrategia.className = '';
        } else {
            boxEstrategia.className = 'fade';
        }
    }
    iconEstrategia.onmouseleave = function() {
        if(boxEstrategia.className){
            boxEstrategia.className = '';
        } else {
            boxEstrategia.className = 'fade';
        }
    }
    const iconAssessoria = document.getElementById("icon-assessoria");
    const boxAssessoria = document.getElementById("box-assessoria");
    iconAssessoria.onmouseenter = function() {
        if(boxAssessoria.className){
            boxAssessoria.className = '';
        } else {
            boxAssessoria.className = 'fade';
        }
    }
    iconAssessoria.onmouseleave = function() {
        if(boxAssessoria.className){
            boxAssessoria.className = '';
        } else {
            boxAssessoria.className = 'fade';
        }
    }
}

export { showSolucoesBox };