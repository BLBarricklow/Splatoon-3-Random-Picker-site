function displayAllWeapons() {
    console.log("Hi")
    let targetColName = document.getElementById('weapon-names');
    let targetColSub = document.getElementById('weapon-subs');
    let targetColSpecial = document.getElementById('weapon-specials');
    for (let i = 0; i < weapons.length; i++) {
        targetColName.innerHTML += `<span class="cell">${weapons[i].name}</span>`
        // console.log(weapons[i].name)
        targetColSub.innerHTML += `<span class="cell">${weapons[i].subWeapon}</span>`
        targetColSpecial.innerHTML += `<span class="cell">${weapons[i].specialWeapon}</span>`
    }
}

displayAllWeapons();