fetch("https://sweetfruit.vercel.app/fruits")
.then(res => res.json())
 .then(data => {
    document.getElementsByTagName('h1')[0].textContent += data[1].name
    document.getElementsByTagName('h2')[0].textContent += data[1].color
    document.getElementsByTagName('h3')[0].textContent += data[1].taste


    //console.log(data[1].name)
})
 