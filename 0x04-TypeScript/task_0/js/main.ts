// Write an interface named Student that accepts the following elements: firstName(string), lastName(string), age(number), and location(string)
// Create two students, and create an array named studentsList containing the two variables
// Using Vanilla Javascript, render a table and for each elements in the array, append a new row to the table
// Each row should contain the first name of the student and the location

interface Student {
  firstName: string;
  lastName: string;
  location: string;
  age: number;
}

const stud1: Student = {
  firstName: "sheja",
  lastName: "emeric",
  location: "huye",
  age: 21,
};

const stud2: Student = {
  firstName: "habi",
  lastName: "junior",
  location: "musanze",
  age: 23,
};

const arr: Student[] = [stud1, stud2];

const table = document.createElement("table");

arr.forEach((item) => {
  const row = document.createElement("tr");
  const name = document.createElement("td");
  const location = document.createElement("td");
  name.innerText = item.lastName;
  location.innerText = item.location;
  row.appendChild(name);
  row.appendChild(location);
  table.appendChild(row);
});

const body = document.appendChild(table);
