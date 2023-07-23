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

    // Simple eligibility check
    if (loanAmount > 0 && income >= 1000) {
        result.textContent = `Congratulations, ${fullName}! Your loan application is approved.`;
        applications.push({
            fullName,
            loanAmount,
            employmentStatus,
            income,
            status: 'Approved'
        });
    } else {
        result.textContent = 'Sorry, your loan application is not approved at this time.';
        applications.push({
            fullName,
            loanAmount,
            employmentStatus,
            income,
            status: 'Rejected'
        });
    }

    updateSummary();
    loanForm.reset();
});

function updateSummary() {
    summaryList.innerHTML = '';

}
