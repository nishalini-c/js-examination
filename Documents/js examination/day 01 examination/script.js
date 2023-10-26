//1
const object = {};
console.log(object);



//2
const person = {
 name:"nishalini",
 age:21,
 intoduceYou: function (person ){
    console.log('Hello,my name is nishalini');
 }
}
console.log(person.intoduceYou(person.name));


//3
greetstudent  = {
    name:"nishalini",
    age:21,
    intoduceYou:function(greetstudent){
       console.log('Hello ${greet student name} welcome to the coding school');
    }
   };
   console.log(greetstudent.intoduceYou(greetstudent));



//4 
let names={
    name01:"piratheep",
    name02:"nishalini",
    name03:"kamal"
}
console.log(names.name02);
console.log(names['name01']);

//5
person.Email="joha@gmail.com"
console.log(person)

//6
//write a js program to remove a property from a object 
delete names["name01"]
console.log(names);

//7 
//write a js program to check whether a property exists from an object
person.name !== undefined
console.log(name);


//8 
//create a two object student and course and merge the them into a new object named studentcourse
const student = {
    name: "piratheep",
    age: 21,
    studentID: "Ukistu18"
  };
  
  const course = {
    courseName: "Math",
    courseCode: "js"
  };
  
  const Studentcourse = { ...student, ...course };

//   const Student = {
//     name: "piratheep",
//     age: 21,
//     studentID: "Ukistu18"
//   };
  
//   const Course = {
//     courseName: "Math",
//     courseCode: "js"
//   };
  
  const studentcourse = Object.assign({}, student, course);
  
  console.log(studentcourse);
  
  //9
  //How do you check if an object  has a specific property say address? If there an address , log(address is there) in console if not (‘address not found)

const person1 ={
  name: "nishalini",
  age:21,
  city:"Jaffna"
};

if ("address" in person1) {
  console.log("Address is there:", person1.address);
} else {
  console.log("Address not found");
}

//10
//Create an object  book with properties fo title author and year and then convert it into a JSON string 
const book = {
  title: "The Great Gatsby",
  author: "F. Scott Fitzgerald",
  year: 2022
};

const jsonString = JSON.stringify(book);

console.log(jsonString);

  