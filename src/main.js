//index.js
//npm run build (babel)

let log = console.log;

/*
############### async function with await ####################
############### fetch                     ####################
*/


async function getUsers() {
    let url = 'https://jsonplaceholder.typicode.com/users/';

    let resp = await fetch(url);
    log(resp);
    
    let data = await resp.json();
    log(data)
};


/*
############### Object Destructuring ####################
*/
function destructor() {
    let obj = {
        a: 1,
        b: 2,
        c: 3,
        d: 4
    }

    let arr = ['bob', 'tina', 'louise', 'linda'];

    //let a1 = arr [0];
    //let a2 = arr [1];
    let [a1, a2, ...rest] = arr;
    log(a1);
    log(rest);
    let [gene, , ted] = arr;
    log(gene, ted);

    //let ({a, b} = obj);
    //console.log(a, d)
    ({
        a: x,
        b: y,
        w: w1 = 7
    } = obj);
    log(x, y, w1);
}

/*
############### es6 method shorthand in objects (shallow) ####################
*/
function sayHello() {
    //If !primitive then it is an Object
    let obj1 = {
        tina: 'hello Jimmy Junior',
        jimmy: 'hi Tina'
    }

    let obj2 = obj1;
    log(obj1, obj2);
    //two references to the same object

    obj2.tina = 'goodbye Jimmy Junior';
    log(obj1, obj2);

    let obj4 = JSON.parse(JSON.stringify(obj1));
    log(obj4);
}
//this is an actual copy

document.addEventListener('DOMContentLoaded', init);

function init() {
    getUsers();
    //error, babel can't convert it
    //destructor();
    sayHello();
    alert("Assignment 1 - Babel");
}
