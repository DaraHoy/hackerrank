/*Objective
In this challenge, we're getting started with conditional statements. Check out the Tutorial tab for learning materials and an instructional video!

Task
Given an integer, n, perform the following conditional actions:

If n is odd, print Weird
If n is even and in the inclusive range of 2 to 5, print Not Weird
If n is even and in the inclusive range of 6 to 20, print Weird
If n is even and greater than 20, print Not Weird
Complete the stub code provided in your editor to print whether or not n is weird.

Input Format

A single line containing a positive integer, n.

Constraints

1 <= n <= 100

Output Format

Print Weird if the number is weird; otherwise, print Not Weird.

Sample Input / Output
3 => Weird
*/

function main(n) {
    //var N = parseInt(readLine());
    if (n % 2 !== 0) {
        console.log("Weird");
    }
    else if (n % 2 === 0 && n >= 2 && n <= 5) {
        console.log("Not Weird");
    }
    else if (n % 2 === 0 && n >= 6 && n <= 20) {
        console.log("Weird");
    }
    else if (n % 2 === 0 && n > 20) {
        console.log("Not Weird");
    }
}
