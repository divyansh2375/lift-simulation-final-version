const floorValue = document.querySelector("#floorNumber")
const liftValue = document.querySelector("#liftNumber")
const simulate = document.querySelector(".createLiftFloorButton");
const floorContainer = document.querySelector("#adding-floor")

simulate.addEventListener("click", function () {
  // 1.Try
  // console.log("your Floor no is =" +floorValue.value )
  // console.log("your Lift no is =" + liftValue.value )

  // 2.
  // const floorCreate = document.createElement("div")
  // floorCreate.id = "floor"

  // document.body.appendChild(floorCreate)

  // 3.
  const floorshow = parseInt(floorValue.value) //4
  const liftshow = parseInt(liftValue.value)
    const inputfloor = floorshow
    const inputLift = liftshow
    if (inputfloor<inputLift){
        alert("floor cannot be less than lift")
        return;
    }
    if (inputLift <= 0 || inputfloor <= 0){
        alert("please enter right data")
        return;
    }else
    {

      
      for (let i = 0 ; i<floorshow ;i++){

        const floorCreate = document.createElement("div");
        floorCreate.className = "floor";
        
        const liftCreate = document.createElement("div")
        liftCreate.className = "lift"
        
        const floorName = document.createElement("p");

      floorName.textContent = " Floor: " + `${floorshow - i}`; //4-2-0

      floorName.className = "floorCounting";
      
      
      floorCreate.appendChild(floorName);
      floorCreate.appendChild(liftCreate);
      document.body.appendChild(floorCreate);
      
    }

  
    }
      
    }
    

    


    

  
  


);
