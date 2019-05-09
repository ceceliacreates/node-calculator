const operator = process.argv[2];

if (operator === 'algebra') {
    const expression = process.argv[3];
    const firstStop = expression.indexOf("x")
    //console.log(firstStop)
    const secondStop = expression.indexOf("=");
    const a = parseInt(expression.slice(0,firstStop));
    //console.log(a)
    const b = parseInt(expression.slice(firstStop + 2, secondStop));
    const c = parseInt(expression.slice(secondStop + 1));
    const x = (c - b)/a;
    console.log(x);
} 

else {
  const a = parseInt(process.argv[3]);
  const b = parseInt(process.argv[4]);
  calculate(operator, a, b);
}

function calculate(operator, a, b) {
  switch (operator) {
    case "add":
      console.log(a + b);
      break;
    case "subtract":
      console.log(a - b);
      break;
    case "multiply":
      console.log(a * b);
      break;
    case "divide":
      console.log(a / b);
      break;
    case "remainder":
      console.log(a % b);
      break;
    case "exp":
      console.log(Math.pow(a, b));
  }
}