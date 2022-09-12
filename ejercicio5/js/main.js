var num = 5;
function add(){    
        num++;
        var ul = document.getElementById("lista");
        var li = document.createElement("li");
        var text = document.createTextNode('Elemento '+ num);

        li.appendChild(text);
        ul.appendChild(li);

    }