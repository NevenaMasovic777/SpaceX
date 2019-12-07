import { Info } from "../components/info";
import { getCompanyInfo } from "../utilities/space-x-service";

class Header{
    constructor(){
        this.node = document.createElement('header');
        this.node.className = 'header'
        this.info = null; 
        getCompanyInfo().then(data =>{
            this.info = new Info(data);
            this.node.appendChild(this.info.getNode())
        }) //podatke za info dobijam preko promisa
        
         
    }
    getNode(){
        return this.node
    }
}

export {Header}