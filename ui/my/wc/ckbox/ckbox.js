(function() {
  const template = document.createElement('template');
  template.innerHTML = `
  <div>
  	<span id="dn">the dogs name</span><br/>
  	<button type="" >dog</button>
  </div>
  `

  class ckBox extends HTMLElement {
    static get observedAttributes() {
      return ['dog'];
    }
    constructor() {
      super();
      this.shadow = this.createShadowRoot();
      this.shadow.appendChild(template.content.cloneNode(true));
      this.dn = this.shadow.getElementById("dn")

    }
		connectedCallback() {
			this._upgradeProperty('dog');
			this.addEventListener('click', this._onClick);
		}
    _upgradeProperty(prop) {
      if (this.hasOwnProperty(prop)) {
        let value = this[prop];
        delete this[prop];
        this[prop] = value;
      }
    }
    disconnectedCallback() {
      this.removeEventListener('click', this._onClick);
    }
    set dog(value) {
      this.setAttribute('dog', value);
    }

    get dog() {
      return this.hasAttribute('dog');
    }    
    attributeChangedCallback(name, oldValue, newValue) {
    	console.log(name, 'changed from ',oldValue, ' to ', newValue)
      const hasValue = newValue !== null;
      switch (name) {
        case 'dog':
        	console.log('does it do shit')
        	console.log(this.dn)
          this.dn.innerHTML = newValue
          break; 
      }     
    }
    _onClick(event) {
      console.log('clicked');
      this.dispatchEvent(new CustomEvent('updateme', {detail: {dog: 'butler'}, bubbles: true, composed: true}));
    }    
  }
  window.customElements.define('ck-box', ckBox);
})()