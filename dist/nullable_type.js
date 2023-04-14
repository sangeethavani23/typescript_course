"use strict";
let data;
function greet(name) {
    if (name)
        console.log(name.toUpperCase());
    else
        console.log("Hey!");
}
greet("Sangee");
greet(null);
greet(data);
