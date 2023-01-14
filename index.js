let a = [];
let b = [];
let result;
let add = false;
let subtract = false;
let multiply = false;
let divide = false;
let equal = false;
let display = document.getElementById("display");
let addButton = document.getElementById("add");
let subtractButton = document.getElementById("subtract");
let multiplyButton = document.getElementById("multiply");
let divideButton = document.getElementById("divide");
let oneButton = document.getElementById("one");
let twoButton = document.getElementById("two");
let threeButton = document.getElementById("three");
let fourButton = document.getElementById("four");
let fiveButton = document.getElementById("five");
let sixButton = document.getElementById("six");
let sevenButton = document.getElementById("seven");
let eightButton = document.getElementById("eight");
let nineButton = document.getElementById("nine");
let zeroButton = document.getElementById("zero");
let decimalButton = document.getElementById("decimal");
let clearButton = document.getElementById("clear");
let equalButton = document.getElementById("equal");
let operators = [add, subtract, multiply, divide, addButton, subtractButton, multiplyButton, divideButton]

//setting operator

addButton.onclick = () => {
    if (subtract === true && a.length !== 0 && add !== true) {
        subtractButton.classList.toggle("op-on")
        addButton.classList.toggle("op-on")
        equal = false
        add = true;
        subtract = false;
        multiply = false;
        divide = false;
    } else if (divide === true && a.length !== 0 && add !== true) {
        divideButton.classList.toggle("op-on")
        addButton.classList.toggle("op-on")
        equal = false
        add = true;
        subtract = false;
        multiply = false;
        divide = false;
    } else if (multiply === true && a.length !== 0 && add !== true) {
        multiplyButton.classList.toggle("op-on")
        addButton.classList.toggle("op-on")
        equal = false
        add = true;
        subtract = false;
        multiply = false;
        divide = false;
    } else if (a.length !== 0 && add !== true) {
        addButton.classList.toggle("op-on")
        equal = false
        add = true;
        subtract = false;
        multiply = false;
        divide = false;   
    }
};
subtractButton.onclick = () => {
    if (add === true && a.length !== 0 && subtract !== true) {
        addButton.classList.toggle("op-on")
        subtractButton.classList.toggle("op-on")
        equal = false
        add = false;
        subtract = true;
        multiply = false;
        divide = false;
    } else if (divide === true && a.length !== 0 && subtract !== true) {
        divideButton.classList.toggle("op-on")
        subtractButton.classList.toggle("op-on")
        equal = false
        add = false;
        subtract = true;
        multiply = false;
        divide = false;
    } else if (multiply === true && a.length !== 0 && subtract !== true) {
        multiplyButton.classList.toggle("op-on")
        subtractButton.classList.toggle("op-on")
        equal = false
        add = false;
        subtract = true;
        multiply = false;
        divide = false;
    } else if (a.length !== 0 && subtract !== true) {
        subtractButton.classList.toggle("op-on")
        equal = false
        add = false;
        subtract = true;
        multiply = false;
        divide = false;   
    }
};
multiplyButton.onclick = () => {
    if (subtract === true && a.length !== 0 && multiply !== true) {
        subtractButton.classList.toggle("op-on")
        multiplyButton.classList.toggle("op-on")
        equal = false
        add = false;
        subtract = false;
        multiply = true;
        divide = false;
    } else if (divide === true && a.length !== 0 && multiply !== true) {
        divideButton.classList.toggle("op-on")
        multiplyButton.classList.toggle("op-on")
        equal = false
        add = false;
        subtract = false;
        multiply = true;
        divide = false;
    } else if (add === true && a.length !== 0 && multiply !== true) {
        addButton.classList.toggle("op-on")
        multiplyButton.classList.toggle("op-on")
        equal = false
        add = false;
        subtract = false;
        multiply = true;
        divide = false;
    } else if (a.length !== 0 && multiply !== true) {
        multiplyButton.classList.toggle("op-on")
        equal = false
        add = false;
        subtract = false;
        multiply = true;
        divide = false;   
    }
};
divideButton.onclick = () => {
    if (subtract === true && a.length !== 0 && divide !== true) {
        subtractButton.classList.toggle("op-on")
        divideButton.classList.toggle("op-on")
        equal = false
        add = false;
        subtract = false;
        multiply = false;
        divide = true;
    } else if (add === true && a.length !== 0 && divide !== true) {
        addButton.classList.toggle("op-on")
        divideButton.classList.toggle("op-on")
        equal = false
        add = false;
        subtract = false;
        multiply = false;
        divide = true;
    } else if (multiply === true && a.length !== 0 && divide !== true) {
        multiplyButton.classList.toggle("op-on")
        divideButton.classList.toggle("op-on")
        equal = false
        add = false;
        subtract = false;
        multiply = false;
        divide = true;
    } else if (a.length !== 0 && divide !== true) {
        divideButton.classList.toggle("op-on")
        equal = false
        add = false;
        subtract = false;
        multiply = false;
        divide = true;   
    }
};

//pushing numbers to a or b

oneButton.onclick = () => {
    if (add === false && subtract === false && multiply === false && divide === false && equal === false) {
        a.push(1);
        display.innerHTML = a.join('');
    } else if (equal === false) {
        b.push(1);
        display.innerHTML = b.join('');

    } 
};
twoButton.onclick = () => {
    if (add === false && subtract === false && multiply === false && divide === false && equal === false) {
        a.push(2);
        display.innerHTML = a.join('');
    } else if (equal === false) {
        b.push(2);
        display.innerHTML = b.join('');

    } 
};
threeButton.onclick = () => {
    if (add === false && subtract === false && multiply === false && divide === false && equal === false) {
        a.push(3);
        display.innerHTML = a.join('');
    } else if (equal === false) {
        b.push(3);
        display.innerHTML = b.join('');

    } 
};
fourButton.onclick = () => {
    if (add === false && subtract === false && multiply === false && divide === false && equal === false) {
        a.push(4);
        display.innerHTML = a.join('');
    } else if (equal === false) {
        b.push(4);
        display.innerHTML = b.join('');

    } 
};
fiveButton.onclick = () => {
    if (add === false && subtract === false && multiply === false && divide === false && equal === false) {
        a.push(5);
        display.innerHTML = a.join('');
    } else if (equal === false) {
        b.push(5);
        display.innerHTML = b.join('');

    } 
};
sixButton.onclick = () => {
    if (add === false && subtract === false && multiply === false && divide === false && equal === false) {
        a.push(6);
        display.innerHTML = a.join('');
    } else if (equal === false) {
        b.push(6);
        display.innerHTML = b.join('');

    } 
};
sevenButton.onclick = () => {
    if (add === false && subtract === false && multiply === false && divide === false && equal === false) {
        a.push(7);
        display.innerHTML = a.join('');
    } else if (equal === false) {
        b.push(7);
        display.innerHTML = b.join('');

    } 
};
eightButton.onclick = () => {
    if (add === false && subtract === false && multiply === false && divide === false && equal === false) {
        a.push(8);
        display.innerHTML = a.join('');
    } else if (equal === false) {
        b.push(8);
        display.innerHTML = b.join('');

    } 
};
nineButton.onclick = () => {
    if (add === false && subtract === false && multiply === false && divide === false && equal === false) {
        a.push(9);
        display.innerHTML = a.join('');
    } else if (equal === false) {
        b.push(9);
        display.innerHTML = b.join('');

    } 
};
zeroButton.onclick = () => {
    if (add === false && subtract === false && multiply === false && divide === false && equal === false) {
        a.push(0);
        display.innerHTML = a.join('');
    } else if (equal === false) {
        b.push(0);
        display.innerHTML = b.join('');

    } 
};
decimalButton.onclick = () => {
    if (add === false && subtract === false && multiply === false && divide === false && !a.includes(".") && a.length > 0 && equal === false) {
        a.push(".");
        display.innerHTML = a.join('');
    } else if (add !== false || subtract !== false || multiply !== false || divide !== false) {
       if (!b.includes(".") && b.length > 0 && equal === false) {
        b.push(".");
        display.innerHTML = b.join('');
       }
    }
};

//calculating numbers

equalButton.onclick = () => {
    if (a !== [] && b!== [] && add === true) {
        addButton.classList.toggle("op-on")
        equal = true
        result = Number(a.join('')) + Number(b.join(''))
        b = []
        display.innerHTML = result
        result = String(result)
        a = result.split('')
        b = []
        add = false
    } else if (a !== [] && b!== [] && subtract === true) {
        subtractButton.classList.toggle("op-on")
        equal = true
        result = Number(a.join('')) - Number(b.join(''))
        b = []
        display.innerHTML = result
        result = String(result)
        a = result.split('')
        b = []
        subtract = false
    } else if (a !== [] && b!== [] && multiply === true) {
        multiplyButton.classList.toggle("op-on")
        equal = true
        result = Number(a.join('')) * Number(b.join(''))
        b = []
        display.innerHTML = result
        result = String(result)
        a = result.split('')
        b = []
        multiply = false
    }else if (a !== [] && b!== [] && divide === true) {
        divideButton.classList.toggle("op-on")
        equal = true
        result = Number(a.join('')) / Number(b.join(''))
        b = []
        display.innerHTML = result
        result = String(result)
        a = result.split('')
        b = []
        divide = false
    }

}

clearButton.onclick = () => {
    if (add === true) {
        addButton.classList.toggle("op-on")
        equal = false
        a = [];
        b = [];
        result = '';
        add = false;
        subtract = false;
        multiply = false;
        divide = false;
        display.innerHTML = ''
    } else if (subtract === true) {
        subtractButton.classList.toggle("op-on")
        equal = false
        a = [];
        b = [];
        result = '';
        add = false;
        subtract = false;
        multiply = false;
        divide = false;
        display.innerHTML = ''
    } else if (multiply === true) {
        multiplyButton.classList.toggle("op-on")
        equal = false
        a = [];
        b = [];
        result = '';
        add = false;
        subtract = false;
        multiply = false;
        divide = false;
        display.innerHTML = ''
    } else if (divide === true) {
        divideButton.classList.toggle("op-on")
        equal = false
        a = [];
        b = [];
        result = '';
        add = false;
        subtract = false;
        multiply = false;
        divide = false;
        display.innerHTML = ''
    } else 
    equal = false
    a = [];
    b = [];
    result = '';
    add = false;
    subtract = false;
    multiply = false;
    divide = false;
    display.innerHTML = ''
}

