let date  = new Date();

console.log(date.toString());
console.log(date.toLocaleDateString());
console.log("fdsfdsf");

console.log(date.toLocaleTimeString());

console.log(date.toDateString());


let myCreatedDate = new Date(2023, 0, 15);
console.log(myCreatedDate.toLocaleDateString());

let timeStamp = new Date();
console.log(timeStamp.getTime()); // this is used to get the diff b/w two date
console.log(Date.now());

console.log(myCreatedDate.getTime());

let newDate = new Date();
console.log(newDate.getMonth());
console.log(newDate.getDay());

console.log(
    newDate.toLocaleString('default',{
        weekday : "long"
    })
);





