var contenidoExtra = "Nullam sit amet nisl elementum elit convallis malesuada. Phasellus magna sem, semper quis, faucibus ut, rhoncus non, mi. Duis pellentesque, felis eu adipiscing ullamcorper, odio urna consequat arcu, at posuere ante quam non dolor. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Duis scelerisque. Donec lacus neque, vehicula in,  leifend vitae, venenatis ac, felis. Donec arcu. Nam sed tortor nec ipsum aliquam ullamcorper. Duis accumsan metus eu urna. Aenean vitae enim. Integer lacus. Vestibulum venenatis erat eu odio. Praesent id metus. Nullam sit amet nisl elementum elit convallis malesuada. Phasellus magna sem, semper quis, faucibus ut, rhoncus non, mi. Duis pellentesque, felis eu adipiscing ullamcorper, odio urna consequat arcu, at posuere ante quam non dolor. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Duis scelerisque. Donec lacus neque,  vehicula in, eleifend vitae, venenatis ac, felis. Donec arcu. Nam sed tortor nec ipsum aliquam ullamcorper. Duis accumsan metus eu urna. Aenean vitae enim. Integer lacus. Vestibulum venenatis erat eu odio. Praesent id metus.";

function toggleText() {
    var x = document.getElementById("myDIV");
    var y= document.getElementById("myToogle");
    if (x.innerHTML === "") {
      x.innerHTML = contenidoExtra;
      y.textContent="Ocultar exceso de texto";
    } else {
      x.innerHTML = "";
      y.textContent="Seguir leyendo";
    }
  }