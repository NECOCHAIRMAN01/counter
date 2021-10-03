const counterBtn = (btn) =>{
    let counter = parsefloat(counterTxt.textContent);
    
    // Increase and Decrease Counter
    if (btn === "-") {
        counter -= 1;
    }
    else if (btn === "+") {
        counter += 1;
    }
    else{
        counter = 0;
    }

    counterTxt.textContent = counter

    // Change Counter Background
    if (counter < 0) {
        counterTxt.style.backgroundColor = '#F05454';
    }
    else if (counter === 0) {
        counterTxt.style.backgroundColor = '#00848F';

    }
    else{
        counterTxt.style.backgroundColor = '#7BBEEB';
    }
}