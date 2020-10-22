// let found: boolean = true;
// let grade: number = 80.2;
// let firstName: string = "Donna";
// let lastName: string = 'Morse';
// console.log(found);
// console.log("The grade is " + grade);
// console.log("Hi " + firstName + " " + lastName);
// console.log(`Hi ${firstName} ${lastName}`);
let reviews: number[] = [5, 5, 4.5, 1, 3];
let total: number = 0;
// for (let i=0; i < reviews.length; i++) {
//     console.log(reviews[i]);
//     total += reviews[i];
// }
for (let i of reviews)
{
    console.log(i);
    total=total+i;
}
let average: number = total / reviews.length;
console.log("Review average = " + average);