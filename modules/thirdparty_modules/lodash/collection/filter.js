let _=require("lodash");
let persons=[{user:1,age:12},
{user:2,age:13},
{user:3,age:14},
{user:4,age:15}
]
let fil=_.filter(persons,person=>person.age>13)
console.log(fil);