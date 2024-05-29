// Immediately Invoked Function Expressions (IIFE)


// function chai(){
//     console.log(`DB CONNECTED`);
// }

// chai()


(function chai() {
    //named IIFE
    console.log(`DB CONNECTED`);
})();

//() () (function)(Execution)

((name) => {
    //Unnamed IFFE
    console.log(`DB CONNECTED ${name}`);
})('Romeo'); 