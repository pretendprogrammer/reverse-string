function reverseString(str) {
  // Create an empty array in which to house the final value to be returned by the function
  let output = [];
  // Iterate over an array-representation of the input string
  Array.from(str).forEach((char) => {
    // Add it to the beginning of our output array
    output.unshift(char);
  });
  // Return final output value after iteration is complete
  return output.join("");
}

if (require.main === module) {
  console.log("Expecting: 'yellow'");
  console.log("=>", reverseString("wolley"));
  console.log("Expecting: 'azzip'");
  console.log("=>", reverseString("pizza"));
  // add your own tests in here
  console.log("Expecting: 'ih'");
  console.log("=>", reverseString("hi"));

  console.log("");

  console.log("Expecting: 'ybabtac'");
  console.log("=>", reverseString("catbaby"));
}

module.exports = reverseString;
