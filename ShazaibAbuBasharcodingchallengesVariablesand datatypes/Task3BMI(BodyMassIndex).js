const MarkHeight = 10;
const MarkMask = 230;
const JohnHeight = 2;
const JohnMask = 390;
const MarkBMI = MarkMask / MarkHeight ** 2;
const JohnBMI = JohnMask / JohnHeight ** 2;
let markHigherBMI; // Create a new variable to store the comparison result

if (MarkBMI > JohnBMI) {
  markHigherBMI = true;
} else {
  markHigherBMI = false;
}

if (markHigherBMI) {
  console.log(`Mark has a BMI greater than John`);
} else {
  console.log(`Mark has a BMI less than John`);
}
