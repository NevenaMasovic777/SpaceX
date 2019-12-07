import { getRocketLaunch } from "../utilities/space-x-service"
import { Launches } from "../components/launches"

class Content{
    constructor(){
        this.node = document.createElement('div')
        this.selectYear = document.createElement('select')
        this.selectYear.className = 'select-year'
        let date = new Date()
    
        for(let i = 2002; i <= date.getFullYear(); i++){
            let option = document.createElement('option')
            option.value = i
            option.textContent = i
            this.selectYear.appendChild(option)
        }
        
        this.btnAscending = document.createElement('button')
        this.btnAscending.innerHTML = 'Ascending'
        this.btnAscending.className = 'asc'

        this.btnDescending = document.createElement('button')
        this.btnDescending.innerHTML = 'Descending'
        this.btnDescending.className = 'dsc'

        this.launches = new Launches()

        this.btnAscending.addEventListener('click',()=>{
            getRocketLaunch()
            .then(data => {
                data = data.filter(element => element.links.mission_patch!=null)
                data = data.sort((a, b)=> a.launch_year - b.launch_year)
                this.launches.loadData(data);
            })
        })

        
        this.btnDescending.addEventListener('click',()=>{
            getRocketLaunch()
            .then(data => {
                data = data.filter(element => element.links.mission_patch!=null)
                data = data.sort((a,b) => b.launch_year - a.launch_year)
                this.launches.loadData(data);
            })
        })

        this.selectYear.addEventListener('change',()=>{
            //povucemo podatke s beka
            getRocketLaunch().then(data => {
                //filtriramo podatke po godini
                data = data.filter(element => element.links.mission_patch != null && element.launch_year == this.selectYear.value)
                //posaljemo u this.launches podatke koje zelimo da prikazemo
                this.launches.loadData(data);
            })
        })

        this.node.appendChild(this.selectYear)
        this.node.appendChild(this.btnAscending)
        this.node.appendChild(this.btnDescending)
        this.node.appendChild(this.launches.getNode())
    }
    getNode(){
        return this.node
    }
}

export{Content}
