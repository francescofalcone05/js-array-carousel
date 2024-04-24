
// Assegno bottone next ad una variabile
const nextButton = document.getElementById('nextbt')


// Assegno bottone previous ad una variabile
const previousButton = document.getElementById('prevbt')

//Creo array con le immagini
let imgList = document.getElementsByClassName('hide')

let imgAttiva = ''
let immagineSuccessiva = ''
//console.log(imgList)

//NEXT BUTTON
nextButton.addEventListener('click', function() {

    for (let i = 0; i < imgList.length; i++ ){
        
       // prendo l'immagine attualmente selezionata 
        const immg = imgList[i]
       
        //se contiene la classe active 
        if(immg.classList.contains("active")) {
            
            //rimuovi la classe active
            immg.classList.remove("active")
    
            //memorizzo indice 
            imgAttiva = i 
        }
         
        
    }
    
    //se l'indice +1 e` uguale a array.length
    if((imgAttiva + 1) == imgList.length) {
    
     // l'immagine successiva sara` la numero 0 (la prima)   
     immagineSuccessiva = imgList[0]

    }  else {

        //altrimenti vai a quella successiva a quella attuale
        immagineSuccessiva = imgList[imgAttiva + 1]
 
    }

    //all'immagine attualmente selezionata, add 'active' class
    immagineSuccessiva.classList.add("active")
    
})



//PREVIOUS BUTTON
previousButton.addEventListener('click', function(){

    

    for (let i = 0; i < imgList.length; i++ ) {
        
         
        // prendo l'immagine attualmente selezionata 
       let immg = imgList[i]

        //se contiene la classe active 
        if(immg.classList.contains("active")) {

            //rimuovi la classe active
            immg.classList.remove("active")
         
            //memorizzo indice 
            imgAttiva = i 

        }

        //la prossima immagine su cui lavorare
        // sara` quella precedente a quella attuale
    } immagineSuccessiva = imgAttiva -1 

     //se l'indice selezionato e` minore di 0
    if(immagineSuccessiva < 0){

        //ripartiamo dall'ultima 
        immagineSuccessiva = 4
       
    } 
    

    //all'immagine attualmente selezionata, add 'active' class
     imgList[immagineSuccessiva].classList.add("active")



})
