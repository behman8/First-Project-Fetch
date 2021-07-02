document.addEventListener("DOMContentLoaded", () => {
    const URL = "http://localhost:3000/Ninjas";
    const teamButton = document.querySelector('#team-gatherer');
    const clientsTeam = document.querySelector('#clients-team');
    const enemiesTeam = document.querySelector('#enemy-team');
    const li1 = document.createElement('li');
    const li2 = document.createElement('li');
    const li3 = document.createElement('li');
    const li4 = document.createElement('li');
    const li5 = document.createElement('li');
    const li6 = document.createElement('li');
    const firstTeam = [];
    const secondTeam = [];
    const winOrLoseButton = document.querySelector('#total-value');
    const h2 = document.querySelector('#h2');

    function grabbingNinjas() {
        fetch(URL)
        .then(resp => resp.json())
        .then(data => {
        teamPicker(data);
        });
    };
    grabbingNinjas()
    function randomNumberGenerator(max) {
        return Math.floor(Math.random() * max);
    };

    function teamPicker(ninjas) {
        teamButton.addEventListener("click", event => {
            while (firstTeam.length <= 2) {
                const randomNinja = ninjas[randomNumberGenerator(ninjas.length)];
                firstTeam.push(randomNinja);
            };
            li1.innerHTML = firstTeam[0].Name;
            li2.innerHTML = firstTeam[1].Name;
            li3.innerHTML = firstTeam[2].Name;
            clientsTeam.append(li1,li2,li3);
            while (secondTeam.length <= 2) {
                const randomEnemy = ninjas[randomNumberGenerator(ninjas.length)];
                secondTeam.push(randomEnemy);
            };
            li4.innerHTML = secondTeam[0].Name;
            li5.innerHTML = secondTeam[1].Name;
            li6.innerHTML = secondTeam[2].Name;
            enemiesTeam.append(li4,li5,li6);
        });
    };
    winOrLoseButton.addEventListener('click', event => {
        let clientTotal = 0;
        let enemyTotal = 0;
        firstTeam.forEach(ninja => clientTotal += ninja.Value);
        secondTeam.forEach(ninja => enemyTotal += ninja.Value);
        clientTotal > enemyTotal ? h2.innerText = 'You Win!' : h2.innerText = 'Enemy Wins!';
    });
});