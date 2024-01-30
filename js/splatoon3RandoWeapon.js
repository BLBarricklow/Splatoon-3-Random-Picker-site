document.querySelector('#get-random').addEventListener('click', randoWeapon);

function randoWeapon() {
    
    let randoNum = Math.floor(Math.random() * (weapons.length));
    let weaponName = weapons[randoNum].name;
    let weaponIcon = weapons[randoNum].icon;
    let subWeapon = weapons[randoNum].subWeapon;
    let subWeaponIcon = weapons[randoNum].subIcon;
    let specialWeapon = weapons[randoNum].specialWeapon;
    let specialWeaponIcon = weapons[randoNum].specialIcon;
    let unlockLevel = weapons[randoNum].unlockLvl;

    document.querySelector('#weapon-name').innetHTML = "";
    document.querySelector('#weapon-name').innerText = weaponName;

    document.querySelector('#weapon-icon').src = "#";
    document.querySelector('#weapon-icon').src = weaponIcon;

    document.querySelector('#sub-weapon').innetHTML = "";
    document.querySelector('#sub-weapon').innerText = subWeapon;

    document.querySelector('#sub-weapon-icon').src = "";
    document.querySelector('#sub-weapon-icon').src = subWeaponIcon;

    document.querySelector('#special-weapon').innetHTML = "";
    document.querySelector('#special-weapon').innerText = specialWeapon;

    document.querySelector('#special-weapon-icon').src = "";
    document.querySelector('#special-weapon-icon').src = specialWeaponIcon;

    document.querySelector('#unlock-level').innetHTML = "";
    document.querySelector('#unlock-level').innerText = unlockLevel;
}