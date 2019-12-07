
class Launch{
    constructor(data){
        this.data = data
        //{mission_name, launch_year, launch_date_utc, rocket:{rocket_name},links:{mission_patch}}
        this.node = document.createElement('section')
        this.node.id = 'sectionPart'

        this.mission_name = data.mission_name
        this.launch_year = data.launch_year
        this.launch_date_utc = data.launch_date_utc
        this.rocket_name = data.rocket.rocket_name
        this.mission_patch = data.links.mission_patch


        this.txtMissionName = document.createElement('p')
        this.txtMissionName.textContent = this.mission_name

        this.txtLaunchYear = document.createElement('p')
        this.txtLaunchYear.textContent = this.launch_year

        this.txtLaunchDate = document.createElement('p')
        this.txtLaunchDate.textContent = this.launch_date_utc

        this.txtRocketName = document.createElement('p')
        this.txtRocketName.textContent = this.rocket_name

        this.img = document.createElement('img')
        this.img.src = this.mission_patch

        /*this.btn = document.createElement('button')
        this.btn.className = 'batn'
        this.btn.innerHTML = 'X'
        this.btn.addEventListener('click', (e) => {
            e.target;
            this.node.remove()
            this.node.style.display = 'hidden'
            })*/


        this.node.appendChild(this.txtMissionName)
        this.node.appendChild(this.txtLaunchYear)
        this.node.appendChild(this.txtLaunchDate)
        this.node.appendChild(this.txtRocketName)
        this.node.appendChild(this.img)
        //this.node.appendChild(this.btn)
    }
    setBtnAddOnClick(onClick) {
        this.btn.addEventListener('click', onClick);
    }
    getNode(){
        return this.node
    }
}
    
export{Launch}