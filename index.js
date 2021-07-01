const URL = "http://localhost:3000/Ninjas"

fetch(URL)
.then(resp => resp.json())
.then(data => {
    const clientTeam = document.querySelector('#clients-team');
    const enemyTeam = document.querySelector("#enemy-team");
    const teamMember = `$`
    console.log(enemyTeam)
})