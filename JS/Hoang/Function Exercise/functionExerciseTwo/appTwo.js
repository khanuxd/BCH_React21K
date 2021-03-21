// Exercise 2

(function () {
    window.addEventListener('DOMContentLoaded', (event) => {

        // unsorted array of user object

        const users = getUsers();

        // Making the age into Ascending order

        document.getElementById('ascending-sort').addEventListener('click', event => {

            // Sort the age by oldest order

            // const sortedUsers = users.sort((a, b) => b.age - a.age);

            // another method other than sort() method

            const sortedUsers = ascSortUsers(users);
            renderTable(sortedUsers);
        });

        // Making the age into Ascending order

        document.getElementById('descending-sort').addEventListener('click', event => {

            // Sort the age by oldest order

            // const sortedUsers = users.sort((a, b) => b.age - a.age);

            // another method other than sort() method

            const sortedUsers = desSortUsers(users);
            renderTable(sortedUsers);
        });

        renderTable(users)

        // users.forEach(user => addUser(user));

        const oldestPerson = getOldest(users);

        console.log(`The oldest person is ${oldestPerson.name} ${oldestPerson.age}`);
    })
})()

// sorting users age Ascendingly

function ascSortUsers(userObjs) {
    for (i = 0; i < userObjs.length - 1; i++) {
        for (j = i + 1; j < userObjs.length; j++) {
            if (userObjs[i].age > userObjs[j].age) {
                let temp = userObjs[j]
                userObjs[j] = userObjs[i];
                userObjs[i] = temp;
            }
        }
    }
    return userObjs;
}

// sorting users age Descendingly

function desSortUsers(userObjs) {
    for (i = 0; i < userObjs.length - 1; i++) {
        for (j = i + 1; j < userObjs.length; j++) {
            if (userObjs[i].age < userObjs[j].age) {
                let temp = userObjs[j]
                userObjs[j] = userObjs[i];
                userObjs[i] = temp;
            }
        }
    }
    return userObjs;
}

// req 6: sorting numbers of the table

function renderTable(userObj) {

    // clear the table body
    document.getElementById('tableBody').innerHTML = '';

    // iterate through the userObj array, for each of them call the addUser

    userObj.forEach(user => {
        addUser(user);
    })
}

// Req 4: Getting the oldest person

function getOldest(userObjects) {

    let oldest = userObjects[0];

    for (let i = 1; i < userObjects.length; i++) {
        if (userObjects[i].age > oldest.age) {
            oldest = userObjects[i];
        }
    }
    return oldest;
}

// Req 2, 3, 5

// expects an array of userObj as input
// add a new row to the table for each user objects

function addUser(userObj) {

    let newRow = document.createElement('tr');
    newRow.innerHTML =
        `
    <td>${userObj.studentNo}</td>
    <td>${userObj.name}</td>
    <td>${userObj.age}</td>
    <td>${userObj.studentNo > 0}</td>
    `
    document.getElementById('tableBody').appendChild(newRow);
};

// Req 1: adding the provided function

function getUsers() {
    return [{
        studentNo: -1,
        name: 'Hagrid',
        age: 65
    },
    {
        studentNo: 123,
        name: 'harry',
        age: 15
    },
    {
        studentNo: 135,
        name: 'Hermione',
        age: 17
    },
    {
        studentNo: -1,
        name: 'Snape',
        age: 55
    },
    {
        studentNo: 234,
        name: 'Ron',
        age: 16
    }]
};