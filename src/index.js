const DOMNodeCollection = require('./dom_node_collection.js'); 


window.$l = function  (arg) {
    if(arg instanceof HTMLElement){
        let array = Array.from(arg);
        return new DOMNodeCollection(array);
    }else{
        let selected = document.querySelectorAll(arg);
        let array = Array.from(selected);
        return new DOMNodeCollection(array);
    }
}


