
const nextButton = document.getElementById('nextbt')
//console.log(nextButton)
const previousButton = document.getElementById('prevbt')
//console.log(previousButton)


let imgAttiva = ''
let imgList = document.getElementsByClassName('hide')
let immagineSuccessiva = ''
//console.log(imgList)

//NEXT BUTTON
nextButton.addEventListener('click', function() {

    for (let i = 0; i < imgList.length; i++ ){
        //console.log(i)
    
        const immg = imgList[i]
       // console.log(immg)
    
        if(immg.classList.contains("active")) {
    
            immg.classList.remove("active")
    
            imgAttiva = i 
            //console.log(imgAttiva)
        }
         
        
    }
    

    if((imgAttiva + 1) == imgList.length) {
    
     immagineSuccessiva = imgList[0]

    }  else {

        immagineSuccessiva = imgList[imgAttiva + 1]
        //console.log(immagineSuccessiva)
    }

    
    immagineSuccessiva.classList.add("active")
    
})



//PREVIOUS BUTTON
previousButton.addEventListener('click', function(){

    
    immagineSuccessiva = imgList[imgAttiva]
   
    

    for (let i = 0; i < imgList.length; i++ ) {
        console.log(i)
         
       let immg = imgList[i]

        if(immg.classList.contains("active")) {

            immg.classList.remove("active")
         
            imgAttiva = i 

        }


    } immagineSuccessiva = imgAttiva -1 

    if(immagineSuccessiva < 0){

        immagineSuccessiva = 4
       // immg = imgList[0]

    } 
    


     imgList[immagineSuccessiva].classList.add("active")



})
