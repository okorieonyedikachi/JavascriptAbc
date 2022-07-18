// alert ('Hello');
// let message;
// message = 'Hello';
// console.log(message);
 
// const name = 'John';   //string data type
// const age = 30; //number data type
// const isBrave = true; //boolean data type
// const x = null;
// const y = undefined;
// let z;

// let str ='Hello';
// let str2 = "Double quotes are ok too";
// let phrase = `backticks works ${str2}`
// alert (`Hello ${str2}`)

// let age = prompt('how are old are you', 100);
// alert (`You are ${age} years old`);
// let isBoss = confirm ("Are you the boss?");
// let name = prompt('What is your name?', '');
// alert (name);

// let x = 1;
// x = -x;
// alert ( x ); //unary operator

// let x = 1, y = 4;
// alert ( y - x ); //binary operator

// alert ( 4 ** (1/2) ); //exponentiation
 
// //String concatenation with binary +
// alert( '1'+ 2 + 2 );
// alert( 1 + 3 + '4' );
// // Numeric conversion 
// let x = -1;
// alert( +x );
// //unary plus converts the operand to a number.
// alert( +true ); //1
// alert( +""); //0

// let apples = "2";
// let oranges = "3"

// alert ( apples + oranges ); //"23", binary plus concatenates strings
// alert ( +apples + +oranges ) //"5".

// let counter = 7;
// let a = ++counter;

// alert ( a );

// let year = prompt('What year was I born','');
// if (year < 1997) {
//     alert( 'Too early' );
// } else if ( year > 1997) {
//     alert( 'Too late' );
// } else {
//     alert ( 'Exactly' );
// }


// let value = prompt('What is the "official" name of JavaScript?', '');

// if (value == 'ECMAScript') {
//     alert('Right!');
// } else {
//     alert("You don't know? ECMAScript!");
// }

// // let result = (a + b < 4) ? 'Below' : 'Over';

// let hour = 9;
// if (hour < 10 || hour > 18) {
//     alert ( 'The office is closed' );
// }

// let user = prompt ( "Who's there?", '');
// if (user === 'Admin'){
// let password = prompt ('Password?', '');{
//    if ( password == 'TheMaster' ) {
//     alert ('Welcome');
//    } else if ( password == '' || password == null){
//     alert ('Canceled');
//    } else { 
//      alert ('Wrong password');
//    }  
//   }
// }else if ( user == '' || user == null) {
//     alert ('Cancelled');
// }
//  else   {
//     alert ("I don't know you");
// }
// let firstName = null;
// let lastName = null;
// let nickName = "Raveen";
// alert (firstName ?? lastName ?? nickName ?? 'Anonymous'); //Nullish Coalescing operator

// Understanding the switch statement and syntax
// let a = +prompt('a?', '');
// switch (a) {
//     case 0:
//      alert ( 0 );
//      break;
//     case 1:
//         alert ( 1 );
//         break;
//     case 2:
//     case 3:
//         alert( '2,3' );
//         break;   
// }
// if ( browser == 'Edge' ) {
//     alert ( "You've got the Edge!" );
// }
// else if ( browser == 'Chrome'
// || bowser == 'Firefox'
// || browser == 'Safari'
// || browser == 'Opera'
// ){
//     alert ( 'Okay we support these browsers too' );
// }
// else {
//     alert ( 'We hope that this page looks ok!' );
// }
// function showMessage() {
//     let message = "Hello, I'm JavaScript!";
//     alert ( message );
// }




let sumNum = (a, b, c) => {
    // if (a >= 2) {
    //     return a + b - c
    // }
    // return "error "

    return a >= 2 ?  a + b - c :  "error "
    

}
console.log(sumNum(2, 2, 2));

console.log(sumNum(5, 2, 3));