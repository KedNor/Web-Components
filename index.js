/**
 * web component 
 * Custom Element
 * 
 */
class JaimeLaPapayeElement  extends HTMLElement {
    constructor () {
        super();
    }

    connectedCallback(){
        this.innerHTML = "Comment ramasse t'on les papayes ?";
}
}


window.customElements.define('jaime-la-papaye', JaimeLaPapayeElement);
