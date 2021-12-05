// function newTask(title, description) {
//   const task = {
//     title : title,
//     description : description,
//     complete : false
//   }
//   return task;
// }

// function completeTask(task) {
//   task.complete = true;
// }

// function logTaskState(task) {
//   console.log(`${task.title} has${task.complete ? " " : " not "}been completed`);
// }


function newTask(title, description) {
  const task = {
    title : title,
    description : description,
    complete : false,
    logState : function() {
      console.log(`${this.title} has${this.complete ? " " : " not "}been completed`);
    },
    markCompleted : function() {
      this.complete = true;
    }
  }
  return task;
}

// DRIVER CODE BELOW

const task1 = newTask("Clean Cat Litter", "Take all the 💩 out of the litter box");
const task2 = newTask("Do Laundry", "😨");
const tasks = [task1, task2];

// logTaskState(task1); // Clean Cat Litter has not been completed
// completeTask(task1);
// logTaskState(task1); // Clean Cat Litter has been completed

// console.log(tasks);

task1.logState(); // Clean Cat Litter has not been completed
task1.markCompleted();
task1.logState(); // Clean Cat Litter has been completed

task1.title
task1.markCompleted();



