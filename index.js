// This is my first javascript code
//console.log('Hello World');
//console.log('making the file of javascript separate');
//let name='divyansh';
//console.log(name);
//let name='divyansh';
//let age= 30;
//let bool=true;
//let firstName;
//let colour=null;

/*let person={
    name:'divyansh',
    age:24
};*/

//Dot notation
//person.name='pradeep';

// Bracket Notation
//person['name']='kanika';

//let selection = 'name';
//person[selection]='abhishek';
//console.log(person);

//let selectedColors=['red','blue'];
//console.log(selectedColors);
//console.log(selectedColors[0]);

//console.log(selectedColors[1]);
//selectedColors[2]='green';
//console.log(selectedColors);

//selectedColors[2]=1;
//console.log(selectedColors);

function greet(name,lastName){
    console.log('Hello '+ name +' '+ lastName);
}

// greet('divyansh');
// greet('divyansh','kumar');

// function square(number){
//     return (number*number);
// }

// console.log(square(2));// there are two function call happening in this line one for console.log and another for square
 
//let x= 2>3;
//console.log(x);
//console.log(1!==2);
//console.log(1===2);
//console.log(1===1);
//console.log('1'===1);


// console.log(1=='1');
// console.log(1==1);
// console.log(1=='1');
// console.log(true==1);

// let x= true;
// let y= false;
// let a=1;
// console.log(a && x);
// console.log(!(a));

//let x= true;
// console.log(x && 0);
//console.log(x || 0);

//let usercolour='red';// when we make it to undefined means falesy then
// let usercolour=undefined;
// let defaultcolour='blue';
// let currentcolour= usercolour || defaultcolour;
// console.log(currentcolour);

let a='blue';
let b='red';
// let c=a;
// a=b;
// b=c;

a,b=b,a;
console.log(a);
console.log(b);
