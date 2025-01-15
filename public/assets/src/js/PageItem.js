export default class PageItem {
    constructor(parent,client) {
        this.parent = parent;
        this.client = client;
        // se obtiene el id del elemento padre
        this.parentId = parent.id; 
        this.states = [];
        // se carga el estado inicial de los checkboxes
        this.loadInitialStates();
    }

    // se cargan los estados iniciales de los checkboxes
    

    addPageItem(name) {
        this.states.push({
            name : name,
            state : false
        })
        const check = document.createElement("label");
        check.classList.add("form-switch");
        check.dataset.name = name;  // atributo data-name
        this.parent.appendChild(check);

        const input = document.createElement("input");
        input.setAttribute('type', 'checkbox');
        check.appendChild(input);
        check.appendChild(document.createElement("i"));

        const span = document.createElement('span');
        const text = document.createTextNode('OFF');
        span.appendChild(text);
        check.appendChild(span);
        
        input.addEventListener('change', (event)=> {
            this.changeValue(name, event.target.checked);
        })
    }
}