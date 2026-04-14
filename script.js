let firstinput = document.querySelector(".firstinput")
let post = document.querySelector(".post")
let name = document.querySelector(".name")
let textarea = document.querySelector(".textarea")
let carditems = document.querySelector(".card-items")
let namefield = document.querySelector(".namefield")
let number = document.querySelector(".number")
let textfield = document.querySelector(".textfield")
let postitems = document.querySelector(".post-items")
let list = document.querySelector(".lists")
let update = document.querySelector(".update")
let facebookdemo = document.querySelector(".facebookdemo")

let arr = []
let indexone;




firstinput.addEventListener("click", ()=>{
   carditems.style.display = "block"
firstinput.disabled = true 
})

post.addEventListener("click", ()=>{
    if(!name.value){
        namefield.style.display = "block"
    } else if(!isNaN(name.value)){
        number.style.display = "block"
        namefield.style.display = "none"

    } else if(!textarea.value){
        textfield.style.display = " block"
        namefield.style.display = "none"
    }else{
      
        arr.push({
            name : name.value,
            textarea :textarea.value
        })
        name.value = ""
        textarea.value = ""
        namefield.style.display ="none"
        textfield.style.display = "none"
        postitems.innerHTML = ""
        carditems.style.display = "none"
        firstinput.disabled = false
        
  display()
    
    }
})


update.addEventListener("click", ()=>{
    arr[indexone].name = name.value
    arr[indexone].textarea = textarea.value
 
    postitems.innerHTML = ""
    name.value = ""
    textarea.value = ""
    carditems.style.display = "none"
    display()


    let allbtn = document.querySelectorAll(".editedbtn, .deletedbtn")
            allbtn.forEach((item) => (item.style.pointerEvents= "auto"))
            allbtn.forEach((item) => (item.style.opacity = "1"))
})


function display(){
    arr.map(item=>{
       postitems.innerHTML += `
        <div class="lists">
              <div class="text-Items">
                <h5>${item.name}</h5>
                <p>${item.textarea}</p>
              </div>
              <div class="button-list">
                <i class="fa-solid fa-pen-clip edited"></i>
                <i class="fa-solid fa-trash-can deleted"></i>
              </div>
            </div>
       `
    })

    let deleted = document.querySelectorAll(".deleted") 
    let deletedbtn = Array.from(deleted)
    deletedbtn.map((item,index) =>{
        item.addEventListener("click", ()=>{
            arr.splice(index,1)

            postitems.innerHTML= ""
            display()
        })
    })



    let edited = document.querySelectorAll(".edited")
    let editedbtn = Array.from(edited)
    editedbtn.map((item,index)=>{
        item.addEventListener("click", ()=>{
            name.value = arr[index].name
            textarea.value = arr[index].textarea
            
            indexone = index
            
            carditems.style.display = "block"
            post.style.display = "none"
            number.style.display  = "none"
            update.style.display = "block"



            let allbtn = document.querySelectorAll(".edited, .deleted")
            allbtn.forEach((item) => (item.style.pointerEvents= "none"))
            allbtn.forEach((item) => (item.style.opacity = "0.5"))
        })

    })
}




