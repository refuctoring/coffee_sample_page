$(document).ready(function(){

  // Sukurkite mygtuką "Platesnė informacija" (gali būti "a" elementas) ir
  // paslėptą <p> elementą su informacija. Paspaudus ant <a> elemento turi pasirodyti
  // informacija, dar kartą paspaudus ant "a" elemento informacija turi pasisplėpti.

  var toggleState = true;
  $('#more-info').on('click', function(){
    if(toggleState){
      $('#hidden-div').show();
      toggleState = !toggleState;
    } else {
      $('#hidden-div').hide();
      toggleState = !toggleState;
    }
  });


  // Sukurkite paieškos laukelį:
  // <div id="iskotiBox">
  //  Paieška: <input type="text" name="isekoti">
  // Sukurkite Jquery scriptą kuris pažymėjus šį elementą pakiestų <div> elemento stilių (foną, tekstą...).
  // </div>

  $("#search-input").focus(function(){
    $('#search-input').css('background', '#00ffff')
    $('#search-input').css('color', 'orange');
  });

// Sukurkite du laukelius savo puslapyje, padarykite JQuery scriptą kuris į
// šiuos laukelius išvestų ekrano plotį ir aukštį. Pakeitus ekrano dydžiui plotis
// ir aukštis turi pasikeisti.
  $('#width').html($(window).width());
  $('#height').html($(window).height());

  $(window).resize(function(){
    $('#width').html($(window).width());
    $('#height').html($(window).height());
  });

  // Sukurkite mygtuką savo puslapio apačioje "Į viršų" ir sukurkite JQuery scriptą kuris paspaudus
  // šį mygtuką perkeltų visą tekstą į viršų.

  $("#scroll-up").on('click', function(){
    window.scrollTo(0, 0);
    console.log('wtf is happening');
  });

  // Sukurkite <h1> žymą ir padarykite Jquery scriptą kuris atliktų šio teksto mirksėjimą (fadeIn, fadeOut)
  function wink(){
    $('#coffee-blink').fadeOut(1000);
    $('#coffee-blink').fadeIn(1000);
  }
  setInterval(wink, 1000);

});
