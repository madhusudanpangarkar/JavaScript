// Immediately Invoked Expression Function
// to avoid the pollution due to global scope

(function one() {
    console.log("DB connected");
})();    //immediately invoked

((name) => {
    console.log(`${name} , welcome to website`)
})("madhusudan")