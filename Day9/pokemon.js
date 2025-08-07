// https://pokeapi.co/api/v2/

//const { response } = require("express")

/*function myData(){
    let pImage = document.getElementById('poke').value.toLowerCase();
    console.log(pImage);


fetch(`https://pokeapi.co/api/v2/pokemon/${pImage}`)
    .then(response => {
        if(!response.ok){
            throw new Error(`Pokemon not found : ${pImage}`)
        }
        return(response.json())
    })
    .then(abc => {console.log(abc.sprites.front_default)
        let photo = document.getElementById('p')
        photo.src = abc.sprites.front_default
        photo.style.display = 'block'
    })
    .catch(error => (console.log(error)))
}
    */

async function myData(){
    let pImage = document.getElementById('poke').value.toLowerCase();
    console.log(pImage);

    let response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pImage}`)
    try{
        if(!response.ok){
            //throw new error 
            alert(`Pokemon not found :${pImage}`)
        }
        return(response.json())
        .then(abc=> {
            console.log(abc.sprites.front_default)
            let photo = document.getElementById('p')
            photo.src = abc.sprites.front_default
            photo.style.display = 'block'
            document.getElementById('poke').value = ""
        })     
    }catch(error){
        console.log("error is" + error.message)
    }
    finally{
        document.getElementById('poke').value = "" //all cases
    }
    }