 function printHello() {
    console.log('Hello');
 }
 printHello();

 function log(message) {
    console.log(message);
 }
 log('Hello@');
 log(1234)

let globalmessage = 'global'; // global variable
function printMessage() {
   let message = 'hello';
   console.log(message); // local variable
   console.log(globalmessage);
   function printAnother() {
      console.log(message);
      let childMessahe = 'hello';
   
   }
}
printMessage();