console.log("You are appreciated.");

function printCLXChallenge() {
  //initialize for loop on [1 - 100]
  for (let i = 1; i <= 100; i++) {
    //Multiples of 3 or 5 print CLXDTC
    if (i % 3 === 0 && i % 5 === 0) {
      console.log("CLXDTC");
      //Multiples of 5 print DTC
    } else if (i % 5 === 0) {
      console.log("DTC");
      //Multiples of 3 print CLX
    } else if (i % 3 === 0) {
      console.log("CLX");
      //Default print i
    } else {
      console.log(i);
    }
  }
}

printCLXChallenge();
