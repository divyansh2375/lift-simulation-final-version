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
    const floorshow = parseInt(floorValue.value)
    
    for (let i = 0 ; i< floorshow; i++){
        


        const floorCreate = document.createElement("div")
        floorCreate.id = "floor"
        document.body.appendChild(floorCreate)

    }


    
})