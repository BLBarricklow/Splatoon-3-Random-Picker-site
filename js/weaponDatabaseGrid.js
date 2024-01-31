function displayAllWeapons() {
    console.log("Hi")
    let targetGrid = document.getElementById('main-grid');
    for (let i = 0; i < weapons.length; i++) {
        targetGrid.getElementById('#weapon-names').innerHTML += `<span class="cell">${weapons[i].name}</span>`
        targetGrid.getElementById('#weapon-subs').innerHTML += `<span class="cell">${weapons[i].subWeapon}</span>`
        targetGrid.getElementById('#weapon-specials').innerHTML += `<span class="cell">${weapons[i].specialWeapon}</span>`
    }
}

displayAllWeapons();