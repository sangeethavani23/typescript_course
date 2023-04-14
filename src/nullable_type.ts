// function greet(name: string) {
//     console.log(name.toUpperCase())
// }

// "strictNullChecks": true
// greet(null);

let data

// Inorder to pass null or undefined
function greet(name: string | null | undefined) {
    if(name) console.log(name.toUpperCase())
    else console.log("Hey!")
}

greet("Sangee");
greet(null);
greet(data)