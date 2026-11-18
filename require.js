let Studentname = "STUDENT NAME: Okhifo Judith";
let Age = "STUDENT AGE 21";
let course = "STUDENT COURSE :Backend Development";
let isregistered = "is registered: true";

console.log(Studentname)
console.log(Age)
console.log(course)
console.log(isregistered)


// Part 2
let assignment1 = 40;
let assignment2 = 50;

let totalscore = assignment1 + assignment2
console.log("total score", totalscore)

let averageScore = totalscore/2
console.log("averagescore", averageScore)

// part 3
let grade;
if(averageScore>= 70){
grade = "A"

}else if (averageScore >=60){
    grade ="B"
} else if(averageScore >= 50){
    grade = "C"
} else if (averageScore>= 40){
    grade = "D"
}else {
    grade = "F"
}
console.log("Grade:", grade)
 
// part 4
let languages =["Javascript", "Phython", "Java", "PHP", "C#"];
languages.push("C++")
console.log(languages)

 languages.pop()
console.log(languages);

newlanguage = languages.unshift("Go")
console.log(newlanguage)

 languages.unshift
console.log(languages)

totallength= languages.length 
console.log("total length:", totallength)

// part 5
let numbers = [10, 20, 30, 40, 50]
let sliced = numbers.slice(2, 6)
console.log("sliced numbers:", sliced)
numbers.splice(1, 0, "Fronted", "Backend")
console.log("spliced", numbers)

// part 6
const student= {
Name : "Okhifo Judith",
Age: 21,
Course: "Backend Development",
Level: "Beginner"
}
console.log("Name:", student.Name)
console.log("Course:", student.Course)
console.log("Level:", student.Level)
