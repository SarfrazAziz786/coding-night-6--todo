#!/usr/bin/env node
import inquirer from "inquirer";
// Array
// let fruitChat = ["Banana" , "Apple" , "Orange"];
// //push
// fruitChat.push ("kiwi");
// console.log(fruitChat);
// fruitChat.pop();
// console.log(fruitChat);
// fruitChat = fruitChat.concat()
//loop
//while loop
// let i = 0;
// while(i <= 30){
//     console.log(i);
//     i++
// }
let todos = [];
let condition = true;
while (condition) {
    let todoList = await inquirer.prompt([
        {
            name: "todo",
            type: "input",
            message: "What you want to add in your todos?",
        },
        {
            name: "admore",
            type: "confirm",
            message: "Do you want to add more?",
            default: "false",
        }, //default false  loop stoping condition
    ]);
    todos.push(todoList.todo);
    condition = todoList.admore;
    console.log(todos);
}
