function displayAllWeapons() {
    console.log("Hi")
    // let targetColName = document.getElementById('weapon-names');
    // let targetColSub = document.getElementById('weapon-subs');
    // let targetColSpecial = document.getElementById('weapon-specials');
    // for (let i = 0; i < weapons.length; i++) {
    //     targetColName.innerHTML += `<span class="cell">${weapons[i].name}</span>`
    //     // console.log(weapons[i].name)
    //     targetColSub.innerHTML += `<span class="cell">${weapons[i].subWeapon}</span>`
    //     targetColSpecial.innerHTML += `<span class="cell">${weapons[i].specialWeapon}</span>`
    // }
    let mainGrid = document.getElementById('main-grid');
    for (let i = 0; i < weapons.length; i++) {
        mainGrid.innerHTML += `<div class="row">
                                 <span class="cell2">${weapons[i].name}</span>
                                 <img class="small-icon" src="${weapons[i].icon}">
                                 <span class="cell2">${weapons[i].subWeapon}</span>
                                 <img class="small-icon" src="${weapons[i].subIcon}"</span>
                                 <span class="cell2">${weapons[i].specialWeapon}</span>
                                 <img class="small-icon" src="${weapons[i].specialIcon}"</span>
                               </div>`
    }
}

displayAllWeapons();