const id = 12345
let name = "Hitesh"
var city = "pune"
designation = "Developer"

let salary; // HERE WE ONLY INTILIZED THE VARIABLE NOT DECLARED IT. SO IT DEFAULT VALUE WILL BE UNDEFINED

name = "Naveen";

/*
    DONT USE THE VAR KEYWORD IN YOUR WORK AS IT DOES NOT WORK IN SCOPE.
    MEANING IF I DECLARE SAME VARIABLE INSIDE A SCOPE { } LIKE FOR OR IF LOOP THEN THE OUTER VARIABLE VALUE ALSO CHANGES
*/
console.log(id);

console.table([name, city, designation, salary]); // table fuction is used to print multiple variable at once

