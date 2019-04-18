class DOMNodeCollection {
    constructor(array){
        this.array=array;
    }

    html(string) {
        if (string) {
            this.array.forEach( el => {
                el.innerHTML(string);
            })
        } else {
            return this.array[0].innerHTML
        }
    }

    empty() {
        this.array.forEach (el => {
            el.innerHTML = "";
        })
    }

    append(arg) {
        console.log(arg);
        // debugger
        //append outerHTML of each el in arg to innerHTML of each element in the DOMNodeCollection
        if ((typeof arg) === 'string') {
            this.array.forEach( el => {
                el.innerHTML += arg; 
            })
        } else if (arg instanceof HTMLElement) { //what is the difference between string and html element
            this.array.forEach(el => {
                el.innerHTML += arg; //?? <-- might need to parse
            })
        } else {
            arg.array.forEach( el => {
                this.array.forEach( element => {
                    element.innerHTML += el.outerHTML; 
                })
            })
        }
    }

    attr(attrName,value) {
        if(value) {
            this.array.forEach(el => {
                el.attrName = value;
            })
        } else {
            return el.attrName;
        }
    
    }

    addClass(newclass) {
        this.array.forEach (el => {
            el.className=newclass;
        })
    }
    removeClass(){
        this.array.forEach(el=>{
            el.className='';
        })
    }
    
}






module.exports = DOMNodeCollection;


// module.exports = class Square{};