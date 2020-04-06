var nombreColores = ['White', 'LightYellow',
  'LemonChiffon', 'LightGoldenrodYellow', 'PapayaWhip', 'Moccasin', 'PeachPuff', 'PaleGoldenrod', 'Bisque', 'NavajoWhite', 'Wheat', 'BurlyWood', 'Tan',
  'Khaki', 'Yellow', 'Gold', 'Orange', 'DarkOrange', 'OrangeRed', 'Tomato', 'Coral', 'DarkSalmon', 'LightSalmon', 'LightCoral', 'Salmon', 'PaleVioletRed',
  'Pink', 'LightPink', 'HotPink', 'DeepPink', 'MediumVioletRed', 'Crimson', 'Red', 'FireBrick', 'DarkRed', 'Maroon',
  'Brown', 'Sienna', 'SaddleBrown', 'IndianRed', 'RosyBrown',
  'SandyBrown', 'Goldenrod', 'DarkGoldenrod', 'Peru',
  'Chocolate', 'DarkKhaki', 'DarkSeaGreen', 'MediumAquaMarine',
  'MediumSeaGreen', 'SeaGreen', 'ForestGreen', 'Green', 'DarkGreen', 'OliveDrab', 'Olive', 'DarkOliveGreen', 'YellowGreen', 'LawnGreen',
  'Chartreuse', 'GreenYellow', 'Lime', 'SpringGreen', 'LimeGreen',
  'LightGreen', 'PaleGreen', 'PaleTurquoise',
  'AquaMarine', 'Cyan', 'Turquoise', 'MediumTurquoise', 'DarkTurquoise', 'DeepSkyBlue',
  'LightSeaGreen', 'CadetBlue', 'DarkCyan', 'Teal', 'Steelblue', 'LightSteelBlue', 'Honeydew', 'LightCyan',
  'PowderBlue', 'LightBlue', 'SkyBlue', 'LightSkyBlue',
  'DodgerBlue', 'CornflowerBlue', 'RoyalBlue', 'SlateBlue',
  'MediumSlateBlue', 'DarkSlateBlue', 'Indigo', 'Purple', 'DarkMagenta', 'Blue',
  'MediumBlue', 'DarkBlue', 'Navy', 'Thistle',
  'Plum', 'Violet', 'Orchid', 'DarkOrchid', 'Fuchsia', 'Magenta', 'MediumOrchid',
  'BlueViolet', 'DarkViolet', 'DarkOrchid',
  'MediumPurple', 'Lavender', 'Gainsboro', 'LightGray', 'Silver', 'DarkGray', 'Gray',
  'DimGray', 'LightSlateGray', 'DarkSlateGray', 'Black'
];

// Variable para guardar el elemento 'color-personalizado'
// Es decir, el que se elige con la rueda de color.
var colorPersonalizado = document.getElementById('color-personalizado');
var paleta=document.getElementById("paleta");
var grillaPixeles=document.getElementById('grilla-pixeles');
var pintandoEnMovimiento=true;

colorPersonalizado.addEventListener('change', 
  (function() {
    // Se guarda el color de la rueda en colorActual
    colorActual = colorPersonalizado.value;
   
    //indicador-de-color al colorActual
    $("#indicador-de-color").click(function(){
      $(this).css({"background-color":colorActual});
      $("#indicador-de-relleno").css({"background-color":colorActual});
    });
  })
);

$(document).ready(function(){

//recorro arreglo y creo los divs
  for (var i = 0; i < nombreColores.length; i++) {
    var $nuevoDivPaleta=document.createElement("div");
    $($nuevoDivPaleta).css({'background-color':nombreColores[i],"cursor":"pointer"});
    paleta.appendChild($nuevoDivPaleta);
  }
  
    //cambiar color de la rueda desde la paleta incial
  $("#paleta div").click(function(){
    var bg = $(this).css('background');
    $("#indicador-de-color").css({"background":bg});
    $("#indicador-de-relleno").css({"background":bg});
  });

  //total 1750 pixels,creo la grilla
  for(var i=0; i<1750;i++){
    var $nuevoDivGrilla=document.createElement("div");
    grillaPixeles.appendChild($nuevoDivGrilla);
  }
    
  //pinto un pixel
  $("#grilla-pixeles div").click(function(){
    var colorPixel=$('#indicador-de-color').css('background');
    $(this).css({"background":colorPixel});
  });
    
  //mantengo mouse apretado
  $("#grilla-pixeles div").mousedown(function(){
    pintandoEnMovimiento=true;
  });

  //suelto mouse
  $("#grilla-pixeles div").mouseup(function(){
    pintandoEnMovimiento=false;
  });
  
  //verifico si es true
  $("#grilla-pixeles div").mouseenter(function(){
    if(pintandoEnMovimiento){
      var colorPixel=$('#indicador-de-color').css('background');
      $(this).css({"background":colorPixel});
    }
  });

  //borro
  $("#borrar").click(function(){
    var borrarDivs=$("#grilla-pixeles div");
      borrarDivs.animate({'background-color':'white'},1000);      
  });


  //cargo superheroe
  $(".imgs li img").click(function(){
    var copiaSuperheroe=$(this).attr("id"); //obtengo id de superheroe
    
    if(copiaSuperheroe==="batman"){
      copiaSuperheroe = batman;
    }
    else if(copiaSuperheroe==="flash"){
      copiaSuperheroe = flash;
    }
    else if(copiaSuperheroe==="invisible"){
      copiaSuperheroe = invisible;
    }
    else if(copiaSuperheroe==="wonder"){
      copiaSuperheroe = wonder;
    }

    cargarSuperheroe(copiaSuperheroe);  
  });

  //guardo
  $("#guardar").click(function(){
    var imagenPixel=$("#grilla-pixeles");
    guardarPixelArt(imagenPixel);
  });

  //relleno
  $("#indicador-de-relleno").click(function(){
    var colorPixel=$('#indicador-de-color').css('background');
    $("#grilla-pixeles div").css({"background":colorPixel});
  });

});