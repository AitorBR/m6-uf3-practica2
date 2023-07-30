var btn_generateForm;
var div_startForm;
var input_title;
var div_newForm;
var start;
var div_saveForm;
var div;
var titleText = [];

function inicia() {
    //showAll();
    takelement();
}

function takelement() {
    btn_generateForm = document.getElementById("btn_generateForm");
    btn_generateForm.addEventListener("click", createForm);
    div_startForm = document.getElementById("startForm");
    input_title = document.getElementById("title");
    div_newForm = document.getElementById("newForm");
    div_saveForm = document.getElementById("saveForm");
}

function createForm() {
    if (input_title.value !== "") {

        let bool = false;
        for (let i = 0; i < titleText.length; i++) {
            if (titleText[i] == input_title.value) {
                bool = true;
            }
        }
        if (bool) {
            alert("El nombre del formulario ya existe, por favor introduce otro.")
            return;
        }
        titleText.push(input_title.value);
        div_startForm.classList.add("hidden");
        //div_startForm.className = "hidden";
        //ulCiudad.className = "noDisplay ";
        console.log("createForm");

        showAll();

        let btn_save = document.createElement("button");
        btn_save.addEventListener("click", saveForm);
        btn_save.classList.add("lateDelete");
        btn_save.innerHTML = "Guardar";

        let btn_delete = document.createElement("button");
        btn_delete.addEventListener("click", deleteForm);
        btn_delete.innerHTML = "Eliminar";
        //btn_delete.classList.add("lateDelete");

        div_newForm.appendChild(btn_save);
        div_newForm.appendChild(btn_delete);

        let titleh3 = document.createElement("h3");
        titleh3.innerHTML = titleText[(titleText.length - 1)];
        div_newForm.appendChild(titleh3);

        //aqi
        let btn_submit = document.createElement('button');
        btn_submit.innerHTML = "Submit";
        btn_submit.className = "btn_submit";
        div_newForm.appendChild(btn_submit);
    } else {
        alert("Rellena el titulo")
    }

}

function saveForm() {
    // div_startForm.classList.add();
    let div_overSavedForm = document.createElement("div");
    /*
        let titleh3 = document.createElement("h3");
        titleh3.innerHTML = titleText[(titleText.length - 1)];
        div_overSavedForm.appendChild(titleh3);*/
    let rem = document.getElementsByClassName('lateDelete');
    console.log(rem)
    let long2 = rem.length;
    for (let i = 0; i < long2; i++) {
        console.log(rem[0]);
        rem[0].remove();
    }



    let child = div_newForm.children;
    let long = child.length;
    for (i = 0; i < long; i++) { // no sabia que se podia dejar esto asi / for (; i--;) { for (i = child.length - 1; i--;) {
        console.log(child.length - 1)
        console.log(child[i]);
        div_overSavedForm.appendChild(child[0]);
        /*if (child[i].tagName !== 'DIV') {
            console.log(child[i][2]);
            child[i][2].remove();
        }

        if (child[i].tagName !== 'selector') {
            if (child[i].tagName !== 'BUTTON') {
                div_saveForm.appendChild(child[i])
            }
        }*/
    }
    div_saveForm.appendChild(div_overSavedForm);

    // deleteForm();

    div_startForm.className = "";




}

function deleteForm() {

    let padreDeAqui = this.parentNode;
    if (this.parentNode.id === "newForm") {
        div_startForm.className = "";
    }
    /*console.log(div_newForm.children);
    div_newForm.children.remove();*/

    console.log(padreDeAqui);

    let nombre = padreDeAqui.getElementsByTagName("h3")[0].innerHTML;
    console.log(nombre)

    for (let i = 0; i < titleText.length; i++) {
        if (titleText[i] == nombre) {
            titleText.splice(i, 1);
        }
    }

    while (padreDeAqui.firstChild) {
        padreDeAqui.removeChild(padreDeAqui.firstChild);
    }
}

function showAll() {
    console.log("okj");
    start = document.getElementById("newForm");
    var input = document.createElement("input");
    input.type = "text";
    input.className = "css-class-name"; // set the CSS class

    //start.appendChild(input);

    let botonAnadirPregunta = document.createElement('button');
    botonAnadirPregunta.addEventListener('click', anadirPregunta);
    botonAnadirPregunta.innerHTML = "Anadir Pregunta";
    //botonAnadirPregunta.classList.add("lateDelete")
    start.appendChild(botonAnadirPregunta);
}

function anadirPregunta() {
    div = document.createElement('div');
    let enunciado = document.createElement('input');
    enunciado.setAttribute("placeholder", "Pregunta");
    enunciado.style.fontWeight = "900";
    let botonBorrarPregunta = document.createElement('button');
    botonBorrarPregunta.addEventListener('click', borrarPregunta);
    botonBorrarPregunta.innerHTML = "Borrar pregunta";
    //botonBorrarPregunta.classList.add("lateDelete")
    let opcio1 = document.createElement('input');
    opcio1.setAttribute("placeholder", "Opcio");
    let botonAnadirRespuesta = document.createElement('button');
    botonAnadirRespuesta.addEventListener('click', anadirRespuesta);
    botonAnadirRespuesta.innerHTML = "Anadir Respuesta";
    //botonAnadirRespuesta.classList.add("lateDelete")
    div.appendChild(enunciado);
    createSelector(div);
    div.appendChild(botonBorrarPregunta)
    div.appendChild(document.createElement('br'));
    div.appendChild(opcio1);
    div.appendChild(document.createElement('br'));
    div.appendChild(botonAnadirRespuesta);
    div.appendChild(document.createElement('br'));
    div.appendChild(document.createElement('br'));

    // aqi

    let padreEee = this.parentNode.parentNode;
    padreEee.getElementsByClassName('btn_submit')[0].remove();

    let btn_submit = document.createElement('button');
    btn_submit.innerHTML = "Submit";
    btn_submit.className = "btn_submit";
    div.appendChild(btn_submit);

    let actualDiv = this.parentNode;
    actualDiv.appendChild(div);
    //console.log(div.getElementsByClassName('btn_submit')[0]);
}

function borrarPregunta(event) {

    event.target.parentNode.remove();

}


function anadirRespuesta(event) {
    let padre = event.target.parentNode;
    let opcio = document.createElement('input');
    let textArea = document.createElement('input');
    //let puntero = padre.getElementsByTagName("input").length;

    let test = padre.getElementsByTagName("input");

    opcio.type = test[1].type;

    opcio.setAttribute("placeholder", "Opcio " /*+ puntero*/ );
    padre.insertBefore(opcio, event.target)
    let botonBorrarRespuesta = document.createElement('button');
    botonBorrarRespuesta.addEventListener('click', borrarRespuesta);
    botonBorrarRespuesta.innerHTML = "Borrar opcio " /* + puntero*/ ;
    botonBorrarRespuesta.classList.add("lateDelete")
    if (test[1].type == "checkbox") {

        textArea.setAttribute("class", "Del")

        padre.insertBefore(textArea, event.target);

    }
    if (opcio.type == "radio") {
        textArea.setAttribute("class", "Del")

        padre.insertBefore(textArea, event.target);
    }



    padre.insertBefore(botonBorrarRespuesta, event.target)


    padre.insertBefore(document.createElement('br'), event.target)
        //typeSelector();

}

function borrarRespuesta(event) {

    if (event.target.previousElementSibling.previousElementSibling.previousElementSibling.tagName.toLowerCase() == "br") {
        event.target.previousElementSibling.previousElementSibling.previousElementSibling.remove();
    }
    event.target.previousElementSibling.previousElementSibling.remove();
    event.target.previousElementSibling.remove();
    event.target.remove();

}

function createSelector(div) {
    let selector = document.createElement('select');
    selector.setAttribute('id', 'allOptions')
        //selector.classList.add("lateDelete")
        //selector.setAttribute('onchange', 'typeSelector()')


    var option_1 = document.createElement("option");
    var option_2 = document.createElement("option");
    var option_3 = document.createElement("option");
    var option_4 = document.createElement("option");
    var option_5 = document.createElement("option");
    var option_6 = document.createElement("option");
    var option_7 = document.createElement("option");
    var option_8 = document.createElement("option");
    var option_9 = document.createElement("option");

    option_1.text = "Campo de texto";
    option_2.text = "Campo de contraseña";
    option_3.text = "Campo de fecha";
    option_4.text = "Campo de fichero";
    option_5.text = "Campo de mail";
    option_6.text = "Campo de radios";
    option_7.text = "Campo de checkbox";
    option_8.text = "Campo de selector simple";
    option_9.text = "Campo de selector multiple";

    selector.add(option_1);
    selector.add(option_2);
    selector.add(option_3);
    selector.add(option_4);
    selector.add(option_5);
    selector.add(option_6);
    selector.add(option_7);
    selector.add(option_8);
    selector.add(option_9);

    selector.addEventListener('change', typeSelector);

    div.appendChild(selector);





    //console.log(selector.value);
}

function arrayFunction(type, padreNuestro) {
    let test = padreNuestro.getElementsByTagName("input");
    for (var i = 1; i < test.length; i++) {
        test[i].setAttribute("type", type);
        console.log("ok" + padreNuestro);
    }
}

function arrayFunctionSelectorMultiple(type, padreNuestro) {


    let newSelector = document.createElement('select');
    newSelector.className = 'optionSelector';
    newSelector.setAttribute("multiple", "true");
    padreNuestro.appendChild(newSelector);

    let test = padreNuestro.getElementsByTagName("input");

    for (var i = 1; i < test.length; i++) {
        test[i].setAttribute("type", type);
        test[i].addEventListener('change', selectorMultiple);
    }
}

function arrayFunctionSelectorSimple(type, padreNuestro) {

    let newSelector = document.createElement('select');
    newSelector.className = 'optionSelector';
    newSelector.removeAttribute("multiple");
    padreNuestro.appendChild(newSelector);

    let test = padreNuestro.getElementsByTagName("input");

    for (var i = 1; i < test.length; i++) {
        test[i].setAttribute("type", type);
        test[i].addEventListener('change', selectorSimple);
    }
}

function typeSelector(event) {
    let padreNuestro = event.target.parentNode;
    /*let selector = padreNuestro.getElementsByTagName('select');
    console.log(selector);*/
    var strUser = event.target.options[event.target.selectedIndex].text;
    //var strUser = selector.value;

    console.log(event);
    //console.log(padreNuestro);

    switch (strUser) {
        case "Campo de contraseña":
            deleteInputDel();
            delete1();
            arrayFunction("password", padreNuestro)
            break;
        case "Campo de fecha":
            deleteInputDel();
            delete1();
            arrayFunction("date", padreNuestro)
            break;
        case "Campo de fichero":
            deleteInputDel()
            delete1();
            arrayFunction("file", padreNuestro)
            break;
        case "Campo de mail":
            deleteInputDel()
            delete1();
            arrayFunction("mail", padreNuestro)
            break;
        case "Campo de radios":
            deleteInputDel();
            delete1();
            arrayFunction("radio", padreNuestro);
            addInput(padreNuestro);
            break;
        case "Campo de checkbox":
            deleteInputDel();
            delete1();
            arrayFunction("checkbox", padreNuestro);
            addInput(padreNuestro);
            break;
        case "Campo de selector simple":
            deleteInputDel();
            delete1();
            arrayFunctionSelectorSimple("text", padreNuestro);
            break;
        case "Campo de selector multiple":
            deleteInputDel();
            delete1();
            arrayFunctionSelectorMultiple("text", padreNuestro);
            break;
        default:
            deleteInputDel();
            delete1();
            arrayFunction("text", padreNuestro);

            break;
    }


    console.log(strUser);
}


function deteleQuestion(div) {

    div.remove();




}

function deleteInputDel() {
    let rem = document.getElementsByClassName('Del');
    for (var i = rem.length - 1; i >= 0; --i) {
        rem[i].remove();
    }
}

function delete1() {
    let rem = document.getElementsByClassName('delete1');
    for (var i = rem.length - 1; i >= 0; --i) {
        rem[i].remove();
    }
}

function addInput(parent) {

    let ok = parent.getElementsByTagName("input");

    for (let i = 1; i < ok.length; i += 2) {
        let createInput = document.createElement("input");
        let ok2 = parent.getElementsByTagName("input")[i];
        ok2.setAttribute("class", "delete1");
        ok2.parentNode.insertBefore(createInput, ok2.nextSibling);
    }
    /*
    let createInput = document.createElement("input");
    let createInput1 = document.createElement("input");
    let createInput2 = document.createElement("input");
    let createInput3 = document.createElement("input");
    let createInput4 = document.createElement("input");
    let createInput5 = document.createElement("input");


    let ok = parent.getElementsByTagName("input")[1];
    let ok1 = parent.getElementsByTagName("input")[2];
    let ok2 = parent.getElementsByTagName("input")[3];
    let ok3 = parent.getElementsByTagName("input")[4];
    let ok4 = parent.getElementsByTagName("input")[5];
    let ok5 = parent.getElementsByTagName("input")[6];

    createInput.setAttribute("class", "delete1");
    createInput1.setAttribute("class", "delete1");
    createInput2.setAttribute("class", "delete1");
    createInput3.setAttribute("class", "delete1");
    createInput4.setAttribute("class", "delete1");
    createInput5.setAttribute("class", "delete1");



    ok.parentNode.insertBefore(createInput, ok.nextSibling);

    ok1.parentNode.insertBefore(createInput1, ok1.nextSibling);
    ok2.parentNode.insertBefore(createInput2, ok2.nextSibling);
    ok3.parentNode.insertBefore(createInput3, ok3.nextSibling);
    ok4.parentNode.insertBefore(createInput4, ok4.nextSibling);
    ok5.parentNode.insertBefore(createInput5, ok5.nextSibling);
*/


}

function selectorSimple() {
    let parentDiv = this.parentNode;
    let inputs = parentDiv.getElementsByTagName('input');
    /*let newSelector = document.createElement('select');
    newSelector.setAttribute('id', 'allOptions')*/
    //let oldSelector = parentDiv.getElementsByClassNames('optionSelector')[0];
    parentDiv.getElementsByClassName('optionSelector')[0].remove();
    //oldSelector.remove();

    let newSelector = document.createElement('select');
    newSelector.className = 'optionSelector';
    for (let i = 1; i < inputs.length; i++) {
        var option = document.createElement("option");
        option.text = inputs[i].value;
        newSelector.add(option);
    }
    parentDiv.appendChild(newSelector);

}

function selectorMultiple() {
    let parentDiv = this.parentNode;
    let inputs = parentDiv.getElementsByTagName('input');
    /*let newSelector = document.createElement('select');
    newSelector.setAttribute('id', 'allOptions')*/
    //let oldSelector = parentDiv.getElementsByClassNames('optionSelector')[0];
    parentDiv.getElementsByClassName('optionSelector')[0].remove();
    //oldSelector.remove();

    let newSelector = document.createElement('select');
    newSelector.className = 'optionSelector';
    for (let i = 1; i < inputs.length; i++) {
        var option = document.createElement("option");
        //option.setAttribute("multiple", "true");
        option.text = inputs[i].value;
        newSelector.add(option);
        newSelector.setAttribute("multiple", "true");
    }
    parentDiv.appendChild(newSelector);

}




window.onload = inicia;