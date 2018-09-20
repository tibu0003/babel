'use strict';

//index.js
//npm run build (babel)

var log = console.log;

/*
############### async function with await ####################
############### fetch                     ####################
*/

async function getUsers() {
    var url = 'https://jsonplaceholder.typicode.com/users/';

    var resp = await fetch(url);
    log(resp);

    var data = await resp.json();
    log(data);
};

/*
############### Object Destructuring ####################
*/
function destructor() {
    var obj = {
        a: 1,
        b: 2,
        c: 3,
        d: 4
    };

    var arr = ['bob', 'tina', 'louise', 'linda'];

    //let a1 = arr [0];
    //let a2 = arr [1];
    var a1 = arr[0],
        a2 = arr[1],
        rest = arr.slice(2);

    log(a1);
    log(rest);
    var gene = arr[0],
        ted = arr[2];

    log(gene, ted);

    //let ({a, b} = obj);
    //console.log(a, d)
    x = obj.a;
    y = obj.b;
    var _obj$w = obj.w;
    w1 = _obj$w === undefined ? 7 : _obj$w;

    log(x, y, w1);
}

/*
############### es6 method shorthand in objects (shallow) ####################
*/
function sayHello() {
    //If !primitive then it is an Object
    var obj1 = {
        tina: 'hello Jimmy Junior',
        jimmy: 'hi Tina'
    };

    var obj2 = obj1;
    log(obj1, obj2);
    //two references to the same object

    obj2.tina = 'goodbye Jimmy Junior';
    log(obj1, obj2);

    var obj4 = JSON.parse(JSON.stringify(obj1));
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