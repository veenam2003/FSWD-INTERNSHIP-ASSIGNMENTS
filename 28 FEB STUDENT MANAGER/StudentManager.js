const prompt = require("prompt-sync")();

let students = [];

let count = Number(prompt("Enter number of students: "));

for (let i = 0; i < count; i++) {
    let name = prompt("Enter student name: ");

    let marks = [];
    for (let j = 0; j < 3; j++) {
        marks.push(Number(prompt("Enter mark " + (j + 1) + ": ")));
    }

    students.push({ name: name, marks: marks });
}

function calculateAverage(marks) {
    let sum = 0;
    for (let i = 0; i < marks.length; i++) {
        sum += marks[i];
    }
    return sum / marks.length;
}

students.forEach(student => {
    let avg = calculateAverage(student.marks);
    console.log(student.name + " Average: " + avg);
});