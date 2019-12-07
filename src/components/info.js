class Info{
    constructor({name, ceo, founded, founder}){ //object destructuring
        this.node = document.createElement('section');
        //Data
        this.name = name;
        this.ceo = ceo;
        this.founded = founded;
        this.founder = founder;
        //kreiranje html elementata i dodeljivanje vrednosti
        this.banner = document.createElement('h1')
        this.banner.textContent = this.name

        this.txtFounder = document.createElement('label')
        this.txtFounder.textContent = `founder: ${this.founder}`

        this.txtFounded = document.createElement('label')
        this.txtFounded.textContent = ` founded: ${this.founded}`

        this.txtCeo = document.createElement('label')
        this.txtCeo.textContent = ` ceo: ${this.ceo}`

        this.node.appendChild(this.banner)
        this.node.appendChild(this.txtFounder)
        this.node.appendChild(this.txtFounded)
        this.node.appendChild(this.txtCeo)
    }
    getNode(){
        return this.node
    }
}

export {Info}