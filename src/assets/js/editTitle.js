function someFunc(elem) {
    var divVal  = elem.innerText,
        node = document.createElement('input'),
        span = document.createElement('span'),
        varname
    ;
    node.type = "text";
    node.className = "editInput";
    node.value = divVal;
    
    span.innerText = "save";
    span.id = "save";
    
    elem.innerHTML = "&nbsp";
    elem.appendChild(node);
    elem.appendChild(span);
    
    node.focus();
    
    
    varname = elem.getAttribute("varname");
    span.addEventListener('click', function(e) {
        e.stopPropagation();
        var text = node.value;
        elem.removeChild(node);
        elem.innerText = text;
        app[varname] = text;
    });
}