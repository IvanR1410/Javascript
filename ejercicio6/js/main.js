  document.querySelectorAll(".click").forEach(el => {

    el.addEventListener("click", e => {
  
      const id = e.target.getAttribute("id");
  
      console.log("Se ha clickeado el id "+id);

      if (id =="myToogle1") {
        var x = document.getElementById("myDIV1");
        if (x.style.display == "none") {
        x.style.display = ""
        e.target.textContent="Ocultar contenidos";
        } else {
        x.style.display = "none";
        e.target.textContent="Mostrar contenidos";
        }            
    } 

    if (id =="myToogle2") {
        var x = document.getElementById("myDIV2");
        if (x.style.display == "none") {
        x.style.display = ""
        e.target.textContent="Ocultar contenidos";
        } else {
        x.style.display = "none";
        e.target.textContent="Mostrar contenidos";
        }            
    } 

    if (id =="myToogle3") {
        var x = document.getElementById("myDIV3");
        if (x.style.display == "none") {
        x.style.display = ""
        e.target.textContent="Ocultar contenidos";
        } else {
        x.style.display = "none";
        e.target.textContent="Mostrar contenidos";
        }            
    } 
  
    });
  
  });
  
