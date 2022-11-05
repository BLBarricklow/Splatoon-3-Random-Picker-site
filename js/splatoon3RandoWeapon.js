

function randoWeapon() {
    
    let randoNum = Math.floor(Math.random() * (weapons.length));
    let weaponName = weapons[randoNum].name;
    let subWeapon = weapons[randoNum].subWeapon;
    let specialWeapon = weapons[randoNum].specialWeapon;
    let unlockLevel = weapons[randoNum].unlockLvl;

    document.querySelector('#weapon-name').innetHTML = "";
    document.querySelector('#weapon-name').innerText = weaponName;

    document.querySelector('#sub-weapon').innetHTML = "";
    document.querySelector('#sub-weapon').innerText = subWeapon;

    document.querySelector('#special-weapon').innetHTML = "";
    document.querySelector('#special-weapon').innerText = specialWeapon;

    document.querySelector('#unlock-level').innetHTML = "";
    document.querySelector('#unlock-level').innerText = unlockLevel;
}


document.querySelector('#get-random').addEventListener('click', randoWeapon);
// console.log(randoWeapon());

const weapons = [
    {name : "Sploosh-o-matic", subWeapon: "Curling Bomb", specialWeapon: "Ultra Stamp", unlockLvl: 9}, 
    {name : "Splattershot Jr.", subWeapon: "Splat Bomb", specialWeapon: "Big Bubbler", unlockLvl: 1}, 
    {name :"Splash-o-matic", subWeapon: "Burst Bomb", specialWeapon: "Crab Tank", unlockLvl: 16}, 
    {name : "Aerospray MG", subWeapon: "Fizzy Bomb", specialWeapon: "Reefslider", unlockLvl: 5}, 
    {name : "Splattershot", subWeapon: "Suction Bomb", specialWeapon: "Trizooka", unlockLvl: 2}, 
    {name : ".52 Gal", subWeapon: "Splash Wall", specialWeapon: "Killer Wail 5.1", unlockLvl: 11}, 
    {name : "N-ZAP '85", subWeapon: "Suction Bomb", specialWeapon: "Tacticooler", unlockLvl: 6}, 
    {name : "Splattershot Pro", subWeapon: "Angle Shooter", specialWeapon: "Crab Tank", unlockLvl: 9}, 
    {name : ".96 Gal", subWeapon: "Sprinkler", specialWeapon: "Ink Vac", unlockLvl: 17},
    {name : "Jet Squelcher", subWeapon: "Angle Shooter", specialWeapon: "Ink Vac", unlockLvl: 15}, 
    {name : "Luna Blaster", subWeapon: "Splat Bomb", specialWeapon: "Zipcaster", unlockLvl: 13}, 
    {name : "Blaster", subWeapon: "Autobomb", specialWeapon: "Big Bubbler", unlockLvl: 3}, 
    {name : "Range Blaster", subWeapon: "Suction Bomb", specialWeapon: "Wave Breaker", unlockLvl: 11}, 
    {name : "Clash Blaster", subWeapon: "Splat Bomb", specialWeapon: "Trizooka", unlockLvl: 22}, 
    {name : "Rapid Blaster", subWeapon: "Ink Mine", specialWeapon: "Triple Inkstrike", unlockLvl: 7}, 
    {name : "Rapid Blaster Pro", subWeapon: "Toxic Mist", specialWeapon: "Ink Vac", unlockLvl: 26}, 
    {name : "L-3 Nozzlenose", subWeapon: "Curling Bomb", specialWeapon: "Crab Tank", unlockLvl: 13}, 
    {name : "H-3 Nozzlenose", subWeapon: "Point Sensor", specialWeapon: "Tacticooler", unlockLvl: 24}, 
    {name : "Squeezer", subWeapon: "Splash Wall", specialWeapon: "Trizooka", unlockLvl: 19}, 
    {name : "Carbon Roller", subWeapon: "Autobomb", specialWeapon: "Zipcaster", unlockLvl: 6}, 
    {name : "Splat Roller", subWeapon: "Curling Bomb", specialWeapon: "Big Bubbler", unlockLvl: 2}, 
    {name : "Dynamo Roller", subWeapon: "Sprinkler", specialWeapon: "Tacticooler", unlockLvl: 12}, 
    {name : "Flingza Roller", subWeapon: "Ink Mine", specialWeapon: "Tenta Missiles", unlockLvl: 20}, 
    {name : "Inkbrush", subWeapon: "Splat Bomb", specialWeapon: "Killer Wail 5.1", unlockLvl: 7}, 
    {name : "Octobrush", subWeapon: "Suction Bomb", specialWeapon: "Zipcaster", unlockLvl: 4}, 
    {name : "Classic Squiffer", subWeapon: "Point Sensor", specialWeapon: "Big Bubbler", unlockLvl: 8},
    {name : "Splat Charger", subWeapon: "Splat Bomb", specialWeapon: "Ink Vac", unlockLvl: 2}, 
    {name : "Splatterscope", subWeapon: "Splat Bomb", specialWeapon: "Ink Vac", unlockLvl: 10}, 
    {name : "E-Liter 4K", subWeapon: "Ink Mine", specialWeapon: "Wave Breaker", unlockLvl: 18}, 
    {name : "E-liter 4K Scope", subWeapon: "Ink Mine", specialWeapon: "Wave Breaker", unlockLvl: 27}, 
    {name : "Bamboozler 14 Mk I", subWeapon: "Autobomb", specialWeapon: "Killer Wail 5.1", unlockLvl: 23}, 
    {name : "Goo Tuber", subWeapon: "Torpedo", specialWeapon: "Tenta Missiles", unlockLvl: 25}, 
    {name : "Slosher", subWeapon: "Splat Bomb", specialWeapon: "Triple Inkstrike", unlockLvl: 3}, 
    {name : "Tri-Slosher", subWeapon: "Toxic Mist", specialWeapon: "Inkjet", unlockLvl: 10},
    {name : "Sloshing Machine", subWeapon: "Fizzy Bomb", specialWeapon: "Booyah Bomb", unlockLvl: 14}, 
    {name : "Bloblobber", subWeapon: "Sprinkler", specialWeapon: "Ink Storm", unlockLvl: 19}, 
    {name : "Explosher", subWeapon: "Point Sensor", specialWeapon: "Ink Storm", unlockLvl: 29}, 
    {name : "Mini Splatling", subWeapon: "Burst Bomb", specialWeapon: "Ultra Stamp", unlockLvl: 12}, 
    {name : "Heavy Splattling", subWeapon: "Sprinkler", specialWeapon: "Wave Breaker", unlockLvl: 4}, 
    {name : "Hydra Splatling", subWeapon: "AutoBomb", specialWeapon: "Booyah Bomb", unlockLvl: 20}, 
    {name : "Ballpoint Splatling", subWeapon: "Fizzy Bomb", specialWeapon: "Inkjet", unlockLvl: 30}, 
    {name : "Nautilus 47", subWeapon: "Point Sensor", specialWeapon: "Ink Storm", unlockLvl: 28},
    {name : "Dapple Dualies", subWeapon: "Squid Beakon", specialWeapon: "Tacticooler", unlockLvl: 14}, 
    {name : "Splat Dualies", subWeapon: "Suction Bomb", specialWeapon: "Crab Tank", unlockLvl: 3}, 
    {name : "Glooga Dualies", subWeapon: "Splash Wall", specialWeapon: "Booyah Bomb", unlockLvl: 21}, 
    {name : "Dualie Squelchers", subWeapon: "Splat Bomb", specialWeapon: "Wave Breaker", unlockLvl: 8}, 
    {name : "Dark Tetra Dualies", subWeapon: "Autobomb", specialWeapon: "Reefslider", unlockLvl: 17}, 
    {name : "Splat Brella", subWeapon: "Sprinkler", specialWeapon: "Triple Inkstrike", unlockLvl: 5}, 
    {name : "Tenta Brella", subWeapon: "Squid Beakon", specialWeapon: "Ink Vac", unlockLvl: 16}, 
    {name : "Undercover Brella", subWeapon: "Ink Mine", specialWeapon: "Reefslider", unlockLvl: 18}, 
    {name : "Tri-Stringer", subWeapon: "Toxic Mist", specialWeapon: "Killer Wail 5.1", unlockLvl: 4}, 
    {name : "REEF-LUX 450", subWeapon: "Curling Bomb", specialWeapon: "Tenta Missiles", unlockLvl: 10}, 
    {name : "Splatana Stamper", subWeapon: "Burst Bomb", specialWeapon: "Zipcaster", unlockLvl: 15}, 
    {name : "Splatana Wiper", subWeapon: "Torpedo", specialWeapon: "Ultra Stamp", unlockLvl: 5}
];