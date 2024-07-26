//object literal

const mySym = Symbol("key1")

const JsUser = {
    name: "madhusudan",
    [mySym] : "mySymbol",             //symbol as key
    age : 18,
    email : "madhusudan@google.com",
    location : "nashik",
    isLoggedIn : false,
    lastLoginDays : ["Monday", "Saturday"]
}

console.log(JsUser);
// console.log(JsUser.name);
// console.log(JsUser["email"]);
console.log(JsUser[mySym]);            //printing symbol


JsUser.greetings = function() {
    console.log("Hello JS user")
}

JsUser.greetings2 = function() {
    console.log(`Hello JS user ${this.name}`);
}

console.log(JsUser.greetings());
console.log(JsUser.greetings2());
