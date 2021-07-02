const URL = "http://localhost:3000/Ninjas";
const firstTeam = [];
const secondTeam = [];
const clientsTeam = document.querySelector('#clients-team');
const enemiesTeam = document.querySelector('#enemy-team');
const li = document.createElement('li');

function grabbingNinjas() {
    fetch(URL)
    .then(resp => resp.json())
    .then(data => {
    teamPicker(data)
    });
};
grabbingNinjas()
function randomNumberGenerator(max) {
    return Math.floor(Math.random() * max);
};

function teamPicker(ninjas) {
    while (firstTeam.length <= 2) {
        const randomNinja = ninjas[randomNumberGenerator(ninjas.length)];
        firstTeam.push(randomNinja.Name)
    };
    while (secondTeam.length <= 2) {
        const randomEnemy = ninjas[randomNumberGenerator(ninjas.length)];
        secondTeam.push(randomEnemy.Name)
    };
};
