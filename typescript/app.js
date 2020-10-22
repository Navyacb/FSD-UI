// let found: boolean = true;
// let grade: number = 80.2;
// let firstName: string = "Donna";
// let lastName: string = 'Morse';
// console.log(found);
// console.log("The grade is " + grade);
// console.log("Hi " + firstName + " " + lastName);
// console.log(`Hi ${firstName} ${lastName}`);
var reviews = [5, 5, 4.5, 1, 3];
var total = 0;
for (var i = 0; i < reviews.length; i++) {
    console.log(reviews[i]);
    total += reviews[i];
}
var average = total / reviews.length;
console.log("Review average = " + average);
