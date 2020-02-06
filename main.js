// super calculette fonctionnalités

const calculator = document.querySelector('.calculator');
const keys = calculator.querySelector('.calculator__keys');
const display = document.querySelector('.calculator__display');

keys.addEventListener('click', e => {
    if(e.target.matches('button')) {
        const key = e.target;
        const action = key.dataset.action;
        const keyContent = key.textContent;
        const displayedNum = display.textContent;
        const previousKeyType = calculator.dataset.previousKeyType;

        if(!action) {
            console.log('un chiffre a été tapé sur super calculette !!!');
            if(displayedNum === '0' || previousKeyType === 'operator') { 
                display.textContent = keyContent;
            } else {
                display.textContent = displayedNum + keyContent;
            }

        }
        if(
            action === 'add' ||
            action === 'substract' ||
            action === 'multiply' ||
            action === 'divide'
        ) {
            console.log('ceci est opérateurs !!!!!!!!!!');
            key.classList.add('is-depressed');
            //ajout attribut perso
            calculator.dataset.previousKeyType = 'operator';
            calculator.dataset.firstValue = displayedNum;
            calculator.dataset.operator = action;
        }

        //remove .is-depressed class from all keys
        Array.from(key.parentNode.children)
            .forEach(k => k.classList.remove('is-depressed'));

        if(action === 'decimal') {
            console.log('touche décimale');
            display.textContent = displayedNum + '.';
        } 
        if(action === 'clear') console.log('touche RAZ');
        if(action === 'calculate') {
            console.log('touche calculer !!!');
            const firstValue = calculator.dataset.firstValue;
            const secondValue =  displayedNum;
            const operator = calculator.dataset.operator;

            display.textContent = calculate(firstValue, operator, secondValue);
        } 

    }
})

const calculate = (n1, operator, n2) => {
    let result ='';

    if(operator === 'add') {
        result = parseFloat(n1) + parseFloat(n2);
    } else if (operator === 'substract') {
        result = parseFloat(n1) - parseFloat(n2);
    } else if (operator === 'multiply') {
        result = parseFloat(n1) * parseFloat(n2) ;
    } else if (operator === 'divide') {
        result = parseFloat(n1) / parseFloat(n2) ;
    }
    return result;
}