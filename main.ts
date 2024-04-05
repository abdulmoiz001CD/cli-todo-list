#! /usr/bin/env node

import { Console } from "console";
import inquirer from "inquirer";

let todos:any[] =[];



const addQues = await inquirer.prompt([{
    message:"What Do You Want to add in Your List",type:"input",name:"nameAddQues"},
]);

    todos.push(addQues.nameAddQues);

    todos.forEach((element) => {
        console.log(element)});



    

const main = async () => {
    let condition = true;

   while(condition){
    const askQuestion = await inquirer.prompt({
        message:"What Do You Want",type:"list",name:"task",
        choices:["Add More","Delete Task","Edit Task","Exit Task"]
    });

   
    
   switch(askQuestion.task){
     case "Add More":
     await addTask();
     break;
     
     case "Delete Task":
     await deleteTask();
     break;
     
    
     case "Edit Task":
     await editTask();
     break;

     
     case "Exit Task":
     condition = false;

    
        console.log(`Your List item is Here`);
        
        todos.forEach((element) => {
            console.log(element);
        });
        
   
     console.log("Exiting.....");
     break;


     default:
        console.log(`Please Select Valid Option`);
     

   }
};
}



const addTask = async () => {
    const askAddTask = await inquirer.prompt({
     message:"What Do You To Add In Your Todo List",name:"index",type:"input"
    });
 
    const Index = (askAddTask.index);

    todos.push(Index)
    console.log(`Task Add Succesfully`)
    
    todos.forEach((name) => {
        console.log(name)
    });

    };



 const deleteTask = async () => {
    const askDeleteTask = await inquirer.prompt({
        message:`what Task You Want Delete In Your Todo List ,Tell Only Index Number`,type:"input",name:"index"
    });

    const Index = parseInt(askDeleteTask.index);

    if(!isNaN(Index) && Index >= 0 && Index < todos.length){
 
        todos.splice(Index,1)
        console.log(`Delete Succesfully`);
        todos.forEach(element => {
           
            console.log(element);
        });

    }
    else{
        console.log("Write Valid Index Number")
    }
 };




 const editTask = async () => {
    const askEditTask = await inquirer.prompt([{
        message:"Tell me  Only Index Number You want to edit",type:"input",name:"index"
    },

{
        message:"What Do You Want To Edit in Your Todo List",type:"input",name:"addIndex"

}])

const Index = parseInt(askEditTask.index);

if(!isNaN(Index) && Index>=0 && Index < todos.length){
  

    todos.splice(Index,1,askEditTask.addIndex)
    
    console.log(`Edit Succesfully`);
    todos.forEach((element) => {
       
        console.log(element)
    });





}else{
    console.log(`Write Valid Index Number`)
}


 }

main();








