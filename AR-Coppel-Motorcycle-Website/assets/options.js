function GetButtonValue (ClickedID){
    console.log(ClickedID)
    var bValue = document.getElementById(ClickedID);
    bValue = bValue.rel;

    console.log(bValue);

    SetURL(bValue);
}

function SetURL(bValue){
    console.log("Outside");

    if(bValue == 'Moto00'){
        //console.log(bValue);
        console.log("Inside00");
        //document.getElementById("MyiFrame").src='https://ar-viewer.motiondisplays.com/?productSku=512488&libraryName=Motos'; 
        var url = document.querySelector("MyiFrame");
        url.setAttribute("src", "https://ar-viewer.motiondisplays.com/?productSku=512488&libraryName=Motos");
        console.log(MyiFrame);

    } else if(bValue == 'Moto01'){
        console.log("Inside Moto01");

    } else if(bValue == 'Moto02'){
        console.log("Inside Moto02");

    } else if(bValue == 'Moto03'){
        console.log("Inside Moto03");
    }
}

$(document).ready(function(){
 
    if(window.innerWidth < 768){
        $('.button1').addClass('btn-sm');
    }
    
    // Medida por defecto (Sin ningún nombre de clase)
    else if(window.innerWidth < 900){
        $('.button1').removeClass('btn-sm');
    }
 
    // Si el ancho del navegador es menor a 1200 px le asigno la clase 'btn-lg' 
    else if(window.innerWidth < 1200){
        $('.button1').addClass('btn-lg');
    }
 
});

$(document).ready(function(){
 
    if(window.innerWidth < 768){
        $('.button2').addClass('btn-sm');
    }
    
    // Medida por defecto (Sin ningún nombre de clase)
    else if(window.innerWidth < 900){
        $('.button2').removeClass('btn-sm');
    }
 
    // Si el ancho del navegador es menor a 1200 px le asigno la clase 'btn-lg' 
    else if(window.innerWidth < 1200){
        $('.button2').addClass('btn-lg');
    }
 
});



// function newSrc(){
//    var opt = document.getElementById("ButtonMoto00");
//    var newSrc = ButtonMoto00.value;
//    //document.getElementById("MyiFrame").src=newSrc;
//    document.getElementById('MyiFrame').src="https://ar-viewer.motiondisplays.com/?productSku=512488&libraryName=Motos";
// }

// value="https://ar-viewer.motiondisplays.com/?productSku=512488&libraryName=Motos"
// function Moto01(){
//     document.getElementById('MyiFrame').src="https://ar-viewer.motiondisplays.com/?productSku=512674&libraryName=Motos";
// }
// function Moto02(){
//     document.getElementById('MyiFrame').src="https://ar-viewer.motiondisplays.com/?productSku=513468&libraryName=Motos";
// }
// function Moto03(){
//     document.getElementById('MyiFrame').src="https://ar-viewer.motiondisplays.com/?productSku=512488&libraryName=Motos";
// }

