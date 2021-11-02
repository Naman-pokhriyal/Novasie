// Assigning button from html
const display = document.querySelector(".display");
const symbol = document.querySelector(".symbol");
const history = document.querySelector(".history");
const C = document.querySelector(".C");
const CE = document.querySelector(".CE");
const percent = document.querySelector(".percent");
const divide = document.querySelector(".divide");
const plus = document.querySelector(".plus");
const minus = document.querySelector(".minus");
const multi = document.querySelector(".multi");
const equal = document.querySelector(".equal");
const zero = document.querySelector(".zero");
const i = document.querySelector(".i");
const ii = document.querySelector(".ii");
const iii = document.querySelector(".iii");
const iv = document.querySelector(".iv");
const v = document.querySelector(".v");
const vi = document.querySelector(".vi");
const vii = document.querySelector(".vii");
const viii = document.querySelector(".viii");
const ix = document.querySelector(".ix");
const deci = document.querySelector(".deci");
const X = document.querySelector(".X");

// Adding event listeners to buttons
zero.addEventListener("click", addnum);
i.addEventListener("click", addnum);
ii.addEventListener("click", addnum);
iii.addEventListener("click", addnum);
iv.addEventListener("click", addnum);
v.addEventListener("click", addnum);
vi.addEventListener("click", addnum);
vii.addEventListener("click", addnum);
viii.addEventListener("click", addnum);
ix.addEventListener("click", addnum);
deci.addEventListener("click", addnum);
CE.addEventListener("click", clear);

C.addEventListener("click", del);

plus.addEventListener("click", calc);
minus.addEventListener("click", calc);
multi.addEventListener("click", calc);
divide.addEventListener("click", calc);
equal.addEventListener("click", calc);

// To check if it is the first number
var check = true;

// To store the symbol (or) Operator
var sym;

// To update number/Entering numbers in the calculator
function addnum(event) {
  const elm = event.target.innerText;
  if (display.innerText.indexOf(".") > -1 && elm == ".") return;
  if (display.innerText.length == 1 && parseInt(elm) < 10)
    display.innerText = display.innerText.replace("0", "");
  display.innerText += elm;
}

// TO calculate and excecute the operation
function calc(event) {
  var result = parseFloat(history.innerText);
  const num = parseFloat(display.innerText);
  if (check) {
    history.innerText = display.innerText;
    check = false;
  } else {
    console.log(sym);
    switch (sym) {
      case "+":
        result += num;
        break;
      case "-":
        result -= num;
        break;
      case "*":
        result *= num;
        break;
      case "/":
        result /= num;
        break;
    }
    history.innerText = result;
  }
  sym = event.target.innerText;
  if (sym == "=") {
    display.innerText = result;
    symbol.innerText = "";
    history.innerText = "";
    return;
  }
  symbol.innerText = sym;
  display.innerText = "0";
}

// Delete the last entered number
function del() {
  const elm = display.innerText;
  var str = elm.substring(0, elm.length - 1);
  display.innerText = str;
}

// Clear the calculator data
function clear() {
  check = true;
  display.innerText = "0";
  history.innerText = "";
  symbol.innerText = "";
}

/* The following code is for improving the code in the future [Work in progress] */

// const nums = [];
// var sym;
// function addnum(event) {
//   const elm = event.target.innerText;
//   if (display.innerText.indexOf(".") > -1 && elm == ".") return;
//   if (display.innerText.length == 1)
//     display.innerText = display.innerText.replace("0", "");
//   display.innerText += elm;
// }

// function calc(event) {
//   var result;
//   const elm = display.innerText;
//   nums.push(parseFloat(elm));
//   sym = event.target.innerText;
//   symbol.innerText = sym;
//   display.innerText = "";
//   if (nums.length < 2) {
//     history.innerText = nums;
//   } else {
//     switch (sym) {
//       case "+":
//         result = nums[-2] + nums[-1];
//         break;
//       case "-":
//         //   result -= num;
//         break;
//       case "*":
//         //   result *= num;
//         break;
//       case "/":
//         //   result /= num;
//         break;
//     }
//     console.log(result);
//     display.innerText = result;
//   }

//   console.log(nums[-2]);
// }
