// const floorValue = document.querySelector("#floorNumber")
const liftValue = document.querySelector("#liftNumber")


const simulate = document.querySelector(".createLiftFloorButton")

simulate.addEventListener('click', function(){

    // 1.Try  
    // console.log("your Floor no is =" +floorValue.value )
    // console.log("your Lift no is =" + liftValue.value )

    
    
    // 2.
    // const floorCreate = document.createElement("div")
    // floorCreate.id = "floor"

    // document.body.appendChild(floorCreate)
    

    // 3.
    const floorValue = document.querySelector("#floorNumber")
    const floorshow = parseInt(floorValue.value)   //4
    
    for (let i = 0 ; i< floorshow; i++){
        


        const floorCreate = document.createElement("div")
        floorCreate.className = "floor"
        const floorName = document.createElement("p")
 
        floorName.textContent = " Floor: " + `${floorshow-i}` //4-2-0

        floorName.className = "floorCounting"

        floorCreate.appendChild(floorName)

        document.body.appendChild(floorCreate)

        console.log(floorCreate.innerHTML)

    }




    
})