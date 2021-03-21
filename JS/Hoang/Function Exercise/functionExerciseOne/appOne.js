// Exercise 1

(function () {
    window.addEventListener('DOMContentLoaded', (event) => {
        function executeScript() {
            const testUser = {
                studentNo: 123456,
                name: 'Test User',
                age: Math.floor(Math.random() * 100 + 1)
            }

            let newRow = document.createElement('tr');
            newRow.innerHTML =
                `
            <td>${testUser.studentNo}</td>
            <td>${testUser.name}</td>
            <td>${testUser.age}</td>
            `
            document.getElementById('tableBody').appendChild(newRow);
        };
        executeScript()
    });

})();