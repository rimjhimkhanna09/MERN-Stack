console.log("hi")

// Theory of JSON
// JSON is superset of object
// Parse and STRINGIFY

function jsonDemo(){
    const person = {
        name : "Raj",
        age : 25,
        isStudent : false,
        hobbies : ['reading','writing','swimming']
    }
    console.log(typeof(person))

    // convert our object to JSON.string
    const jsonString = JSON.stringify(person)
    console.log("Stringified JSON : ", jsonString)
    console.log(typeof(jsonString))
    console.log(jsonString.toUpperCase())
    console.log("The name is",jsonString.substring(9,12)) // raj 

    // convert String to Object
    const parseObj = JSON.parse(jsonString)
    console.log("Parsed Object is", parseObj.age)
    console.log(typeof(parseObj))

}

// json
// key n value in double quotes
const person1 = {
    "name" : "Max",
    "age" : 22,
    "hobbies" : ["Read","cook","sleep"]
}