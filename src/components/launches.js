import { getRocketLaunch } from "../utilities/space-x-service";
import { Launch } from "./launch";

class Launches{
    constructor(){
        this.node = document.createElement('div');
        getRocketLaunch().then(data => {
            data=data.filter(element =>element.links.mission_patch!=null)
            this.loadData(data)
        }) //podatke za info dobijam preko promisa
    }

    loadData(data){
        this.node.innerHTML = '';
        data.forEach(element => {
            let infoLaunches = new Launch(element);
            this.node.appendChild(infoLaunches.getNode())

        });
    }

    getNode(){
        return this.node
    }
}

export{Launches}