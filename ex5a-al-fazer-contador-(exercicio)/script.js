 const button = document.querySelector('#button');
 let value = 1;
 
 button.addEventListener('click', () => {
    num.textContent = `${value}`;
    value += 1;

    if (value%2 == 0) {
        num.style.backgroundColor = 'red';
    } else {
        num.style.backgroundColor = 'green';
    }
    })