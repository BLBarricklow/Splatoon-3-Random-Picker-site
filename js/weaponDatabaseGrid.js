document.querySelector('#show').addEventListener('click', displayAllWeapons);

function test() {
    console.log("hi")
}

function displayAllWeapons() {
    console.log("Hi")
    let targetGrid = document.getElementById('main-grid');
    for (let i = 0; i < weapons.length; i++) {
        targetGrid.innerHTML += `<div>${weapons[i].name} ${weapons[i].subWeapon} ${weapons[i].specialWeapon}</div>`
    }
}