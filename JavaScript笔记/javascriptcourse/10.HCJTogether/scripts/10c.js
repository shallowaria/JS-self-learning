let calculation = localStorage.getItem('calculation') || '';

    displayCalculation();

    function updateCalculation(value) {
        calculation += value;
        console.log(calculation);
        saveCalculation();
    }

    function saveCalculation() {
        displayCalculation();
        localStorage.setItem('calculation', calculation);
    }

    document.getElementById('prev').textContent = calculation;

    function displayCalculation() {
        document.querySelector('.js-calculation').innerHTML = calculation;
    }