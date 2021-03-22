(function () {

    let numberOfUsers = document.getElementById("numOfUsers");
    let generateUsers = document.getElementById("generateUsers");

    const users = [
        {
            name: {
                title: "mr",
                first: "brad",
                last: "c",
            },
            location: {
                street: "9278 new road",
                city: "kilcoole",
                state: "waterford",
                postcode: "93027"
            },
            email: "brad.gibson@example.com",
            phone: "011-962-7516",
            picture: {
                large: "https://randomuser.me/api/portraits/men/75.jpg",
                medium: "https://randomuser.me/api/portraits/med/men/75.jpg",
                thumbnail: "https://randomuser.me/api/portraits/thumb/men/75.jpg",
            },
        }];

    function executeScript() {
        fetch(`https://randomuser.me/api/?results=${numberOfUsers.value}`)
            .then((res) => res.json())
            .then((userData) => userData.results.forEach(addUsers));
    }

    function addUsers(user) {
        const newEl = document.createElement("div");
        newEl.className = "user";
        newEl.innerHTML = `
        <div class="user-card-img">
        <img
            src="${user.picture.large}"
            alt="${user.name.first} ${user.name.last}"
          />
        </div>
        <div class="user-card-footer">
        <h2>${user.name.first} ${user.name.last}</h2>
        <p>${user.location.city}, ${user.location.state}</p>
        <p>${user.phone}</p>
        <p>${user.email}</p>
        </div>`;
        document.getElementById("user-lists").appendChild(newEl);
    }

    numberOfUsers.addEventListener('keyup', function (event) {
        if (event.keyCode === 13) {
            generateUsers.click();
        }
    });

    generateUsers.addEventListener("click", function () {
        executeScript();
        document.getElementById("user-lists").innerHTML = "";
        numberOfUsers.value = "";
    });
})();