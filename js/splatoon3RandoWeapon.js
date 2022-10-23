const weapons = [
    {name : "Sploosh-o-matic"}, {name : "Splattershot Jr."}, {name :"Splash-o-matic"}, {name : "Aerospray MG"}, {name : "Splattershot"}, {name : ".52 Gal"}, {name : "N-ZAP '85"}, {name : "Splattershot Pro"}, {name : ".96 Gal"},{name : "Jet Squelcher"}, {name : "Luna Blaster"}, {name : "Blaster"}, {name : "Range Blaster"}, {name : "Clash Blaster"}, {name : "Rapid Blaster"}, {name : "Rapid Blaster Pro"}, {name : "L-3 Nozzlenose"}, {name : "H-3 Nozzlenose"}, {name : "Squeezer"}, {name : "Carbon Roller"}, {name : "Splat Roller"}, {name : "Dynamo Roller"}, {name : "Flingza Roller"}, {name : "Inkbrush"}, {name : "Octobrush"}, {name : "Classic Squiffer"},{name : "Splat Charger"}, {name : "Splatterscope"}, {name : "E-Liter 4K"}, {name : "E-liter 4K Scope"}, {name : "Bamboozler 14 Mk I"}, {name : "Goo Tuber"}, {name : "Slosher"}, {name : "Tri-Slosher"},{name : "Sloshing Machine"}, {name : "Bloblobber"}, {name : "Explosher"}, {name : "Mini Splatling"}, {name : "Heavy Splattling"}, {name : "Hydra Splatling"}, {name : "Ballpoint Splatling"}, {name : "Nautilus 47"},{name : "Dapple Dualies"}, {name : "Splat Dualies"}, {name : "Glooga Dualies"}, {name : "Dualie Squelchers"}, {name : "Dark Tetra Dualies"}, {name : "Splat Brella"}, {name : "Tenta Brella"}, {name : "Undercover Brella"}, {name : "Tri-Stringer"}, {name : "REEF-LUX 450"}, {name : "Splatana Stamper"}, {name : "Splatana Wiper"}
];

function randoWeapon() {
    
    let randoNum = Math.floor(Math.random() * (weapons.length));
    let weaponName = weapons[randoNum].name;
    // console.log(randoNum);
    // return weapons[randoNum].name;
    // console.log(weaponName)
    document.querySelector('#weapon-name').innetHTML = "";
    document.querySelector('#weapon-name').innerText = weaponName;
}


document.querySelector('#get-random').addEventListener('click', randoWeapon);
// console.log(randoWeapon());