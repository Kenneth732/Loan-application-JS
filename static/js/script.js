const loanForm = document.getElementById('loanForm');
const result = document.getElementById('result');
const summary = document.getElementById('summary');
const summaryList = document.getElementById('summaryList');

const applications = [];

loanForm.addEventListener('submit', function (event) {
    event.preventDefault();

    const fullName = document.getElementById('fullName').value;
    const loanAmount = parseInt(document.getElementById('loanAmount').value);
    const employmentStatus = document.getElementById('employmentStatus').value;
    const income = parseInt(document.getElementById('income').value);


});
