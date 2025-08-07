let myData = document.getElementById('f')
console.log(myData)

myData.addEventListener('submit',(e)=>{
    e.preventDefault()
    let pass = document.getElementById('p').value
    console.log(pass)
    if(pass.length<6){
        alert("pass too small")
    }else if(pass.length>15){
        alert("paa too big")
    }
    else{
        //window.location.href='welcome.html'
        window.open('welcome.html', '_blank')
    }


})
