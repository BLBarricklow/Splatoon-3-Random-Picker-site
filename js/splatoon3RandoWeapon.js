

function randoWeapon() {
    
    let randoNum = Math.floor(Math.random() * (weapons.length));
    let weaponName = weapons[randoNum].name;
    let weaponIcon = weapons[randoNum].icon;
    let subWeapon = weapons[randoNum].subWeapon;
    let subWeaponIcon = weapons[randoNum].subIcon;
    let specialWeapon = weapons[randoNum].specialWeapon;
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

    document.querySelector('#unlock-level').innetHTML = "";
    document.querySelector('#unlock-level').innerText = unlockLevel;
}


document.querySelector('#get-random').addEventListener('click', randoWeapon);
// console.log(randoWeapon());

const weapons = [
    {name : "Sploosh-o-matic", subWeapon: "Curling Bomb", specialWeapon: "Ultra Stamp", unlockLvl: 9, icon: "assets/images/weaponIcons/splooshomatic.png", subIcon: "assets/images/subWeaponIcons/curlingbomb.png"}, 
    {name : "Splattershot Jr.", subWeapon: "Splat Bomb", specialWeapon: "Big Bubbler", unlockLvl: 1, icon: "assets/images/weaponIcons/splattershotjr.png", subIcon: "assets/images/subWeaponIcons/splatbomb.png"}, 
    {name :"Splash-o-matic", subWeapon: "Burst Bomb", specialWeapon: "Crab Tank", unlockLvl: 16, icon: "assets/images/weaponIcons/splashomatic.png", subIcon: "assets/images/subWeaponIcons/burstbomb.png"}, 
    {name : "Aerospray MG", subWeapon: "Fizzy Bomb", specialWeapon: "Reefslider", unlockLvl: 5, icon: "assets/images/weaponIcons/aerospraymg.png", subIcon: "assets/images/subWeaponIcons/fizzybomb.png"}, 
    {name : "Splattershot", subWeapon: "Suction Bomb", specialWeapon: "Trizooka", unlockLvl: 2, icon: "assets/images/weaponIcons/splattershot.png", subIcon: "assets/images/subWeaponIcons/suctionbomb.png"}, 
    {name : ".52 Gal", subWeapon: "Splash Wall", specialWeapon: "Killer Wail 5.1", unlockLvl: 11, icon: "assets/images/weaponIcons/52gal.png", subIcon: "assets/images/subWeaponIcons/splashwall.png"}, 
    {name : "N-ZAP '85", subWeapon: "Suction Bomb", specialWeapon: "Tacticooler", unlockLvl: 6, icon: "assets/images/weaponIcons/nzap85.png", subIcon: "assets/images/subWeaponIcons/suctionbomb.png"}, 
    {name : "Splattershot Pro", subWeapon: "Angle Shooter", specialWeapon: "Crab Tank", unlockLvl: 9, icon: "assets/images/weaponIcons/splattershotpro.png", subIcon: "assets/images/subWeaponIcons/angleshooter.png"}, 
    {name : ".96 Gal", subWeapon: "Sprinkler", specialWeapon: "Ink Vac", unlockLvl: 17, icon: "assets/images/weaponIcons/96gal.png", subIcon: "assets/images/subWeaponIcons/sprinkler.png"},
    {name : "Jet Squelcher", subWeapon: "Angle Shooter", specialWeapon: "Ink Vac", unlockLvl: 15, icon: "assets/images/weaponIcons/jetsquelcher.png", subIcon: "assets/images/subWeaponIcons/angleshooter.png"}, 
    {name : "Luna Blaster", subWeapon: "Splat Bomb", specialWeapon: "Zipcaster", unlockLvl: 13, icon: "assets/images/weaponIcons/lunablaster.png", subIcon: "assets/images/subWeaponIcons/splatbomb.png"}, 
    {name : "Blaster", subWeapon: "Autobomb", specialWeapon: "Big Bubbler", unlockLvl: 3, icon: "assets/images/weaponIcons/blaster.png", subIcon: "assets/images/subWeaponIcons/autobomb.png"}, 
    {name : "Range Blaster", subWeapon: "Suction Bomb", specialWeapon: "Wave Breaker", unlockLvl: 11, icon: "assets/images/weaponIcons/rangeblaster.png", subIcon: "assets/images/subWeaponIcons/suctionbomb.png"}, 
    {name : "Clash Blaster", subWeapon: "Splat Bomb", specialWeapon: "Trizooka", unlockLvl: 22, icon: "assets/images/weaponIcons/clashblaster.png", subIcon: "assets/images/subWeaponIcons/splatbomb.png"}, 
    {name : "Rapid Blaster", subWeapon: "Ink Mine", specialWeapon: "Triple Inkstrike", unlockLvl: 7, icon: "assets/images/weaponIcons/rapidblaster.png", subIcon: "assets/images/subWeaponIcons/inkmine.png"}, 
    {name : "Rapid Blaster Pro", subWeapon: "Toxic Mist", specialWeapon: "Ink Vac", unlockLvl: 26, icon: "assets/images/weaponIcons/rapidblasterpro.png", subIcon: "assets/images/subWeaponIcons/toxicmist.png"}, 
    {name : "L-3 Nozzlenose", subWeapon: "Curling Bomb", specialWeapon: "Crab Tank", unlockLvl: 13, icon: "assets/images/weaponIcons/l3nozzlenose.png", subIcon: "assets/images/subWeaponIcons/curlingbomb.png"}, 
    {name : "H-3 Nozzlenose", subWeapon: "Point Sensor", specialWeapon: "Tacticooler", unlockLvl: 24, icon: "assets/images/weaponIcons/h3nozzlenose.png", subIcon: "assets/images/subWeaponIcons/pointsensor.png"}, 
    {name : "Squeezer", subWeapon: "Splash Wall", specialWeapon: "Trizooka", unlockLvl: 19, icon: "assets/images/weaponIcons/squeezer.png", subIcon: "assets/images/subWeaponIcons/splashwall.png"}, 
    {name : "Carbon Roller", subWeapon: "Autobomb", specialWeapon: "Zipcaster", unlockLvl: 6, icon: "assets/images/weaponIcons/carbonroller.png", subIcon: "assets/images/subWeaponIcons/autobomb.png"}, 
    {name : "Splat Roller", subWeapon: "Curling Bomb", specialWeapon: "Big Bubbler", unlockLvl: 2, icon: "assets/images/weaponIcons/splatroller.png", subIcon: "assets/images/subWeaponIcons/curlingbomb.png"}, 
    {name : "Dynamo Roller", subWeapon: "Sprinkler", specialWeapon: "Tacticooler", unlockLvl: 12, icon: "assets/images/weaponIcons/dynamoroller.png", subIcon: "assets/images/subWeaponIcons/sprinkler.png"}, 
    {name : "Flingza Roller", subWeapon: "Ink Mine", specialWeapon: "Tenta Missiles", unlockLvl: 20, icon: "assets/images/weaponIcons/flingzaroller.png", subIcon: "assets/images/subWeaponIcons/inkmine.png"}, 
    {name : "Inkbrush", subWeapon: "Splat Bomb", specialWeapon: "Killer Wail 5.1", unlockLvl: 7, icon: "assets/images/weaponIcons/inkbrush.png", subIcon: "assets/images/subWeaponIcons/splatbomb.png"}, 
    {name : "Octobrush", subWeapon: "Suction Bomb", specialWeapon: "Zipcaster", unlockLvl: 4, icon: "assets/images/weaponIcons/octobrush.png", subIcon: "assets/images/subWeaponIcons/suctionbomb.png"}, 
    {name : "Classic Squiffer", subWeapon: "Point Sensor", specialWeapon: "Big Bubbler", unlockLvl: 8, icon: "assets/images/weaponIcons/classicsquiffer.png", subIcon: "assets/images/subWeaponIcons/pointsensor.png"},
    {name : "Splat Charger", subWeapon: "Splat Bomb", specialWeapon: "Ink Vac", unlockLvl: 2, icon: "assets/images/weaponIcons/splatcharger.png", subIcon: "assets/images/subWeaponIcons/splatbomb.png"}, 
    {name : "Splatterscope", subWeapon: "Splat Bomb", specialWeapon: "Ink Vac", unlockLvl: 10, icon: "assets/images/weaponIcons/splatterscope.png", subIcon: "assets/images/subWeaponIcons/splatbomb.png"}, 
    {name : "E-Liter 4K", subWeapon: "Ink Mine", specialWeapon: "Wave Breaker", unlockLvl: 18, icon: "assets/images/weaponIcons/eliter4k.png", subIcon: "assets/images/subWeaponIcons/inkmine.png"}, 
    {name : "E-liter 4K Scope", subWeapon: "Ink Mine", specialWeapon: "Wave Breaker", unlockLvl: 27, icon: "assets/images/weaponIcons/eliter4kscope.png", subIcon: "assets/images/subWeaponIcons/inkmine.png"}, 
    {name : "Bamboozler 14 Mk I", subWeapon: "Autobomb", specialWeapon: "Killer Wail 5.1", unlockLvl: 23, icon: "assets/images/weaponIcons/bamboozler14mki.png", subIcon: "assets/images/subWeaponIcons/autobomb.png"}, 
    {name : "Goo Tuber", subWeapon: "Torpedo", specialWeapon: "Tenta Missiles", unlockLvl: 25, icon: "assets/images/weaponIcons/gootuber.png", subIcon: "assets/images/subWeaponIcons/torpedo.png"}, 
    {name : "Slosher", subWeapon: "Splat Bomb", specialWeapon: "Triple Inkstrike", unlockLvl: 3, icon: "assets/images/weaponIcons/slosher.png", subIcon: "assets/images/subWeaponIcons/splatbomb.png"}, 
    {name : "Tri-Slosher", subWeapon: "Toxic Mist", specialWeapon: "Inkjet", unlockLvl: 10, icon: "assets/images/weaponIcons/trislosher.png", subIcon: "assets/images/subWeaponIcons/toxicmist.png"},
    {name : "Sloshing Machine", subWeapon: "Fizzy Bomb", specialWeapon: "Booyah Bomb", unlockLvl: 14, icon: "assets/images/weaponIcons/sloshingmachine.png", subIcon: "assets/images/subWeaponIcons/fizzybomb.png"}, 
    {name : "Bloblobber", subWeapon: "Sprinkler", specialWeapon: "Ink Storm", unlockLvl: 19, icon: "assets/images/weaponIcons/bloblobber.png", subIcon: "assets/images/subWeaponIcons/sprinkler.png"}, 
    {name : "Explosher", subWeapon: "Point Sensor", specialWeapon: "Ink Storm", unlockLvl: 29, icon: "assets/images/weaponIcons/explosher.png", subIcon: "assets/images/subWeaponIcons/pointsensor.png"}, 
    {name : "Mini Splatling", subWeapon: "Burst Bomb", specialWeapon: "Ultra Stamp", unlockLvl: 12, icon: "assets/images/weaponIcons/minisplattling.png", subIcon: "assets/images/subWeaponIcons/burstbomb.png"}, 
    {name : "Heavy Splattling", subWeapon: "Sprinkler", specialWeapon: "Wave Breaker", unlockLvl: 4, icon: "assets/images/weaponIcons/heavysplattling.png", subIcon: "assets/images/subWeaponIcons/sprinkler.png"}, 
    {name : "Hydra Splatling", subWeapon: "AutoBomb", specialWeapon: "Booyah Bomb", unlockLvl: 20, icon: "assets/images/weaponIcons/hydrasplattling.png", subIcon: "assets/images/subWeaponIcons/autobomb.png"}, 
    {name : "Ballpoint Splatling", subWeapon: "Fizzy Bomb", specialWeapon: "Inkjet", unlockLvl: 30, icon: "assets/images/weaponIcons/ballpointsplattling.png", subIcon: "assets/images/subWeaponIcons/fizzybomb.png"}, 
    {name : "Nautilus 47", subWeapon: "Point Sensor", specialWeapon: "Ink Storm", unlockLvl: 28, icon: "assets/images/weaponIcons/nautilus47.png", subIcon: "assets/images/subWeaponIcons/pointsensor.png"},
    {name : "Dapple Dualies", subWeapon: "Squid Beakon", specialWeapon: "Tacticooler", unlockLvl: 14, icon: "assets/images/weaponIcons/dappledualies.png", subIcon: "assets/images/subWeaponIcons/beakon.png"}, 
    {name : "Splat Dualies", subWeapon: "Suction Bomb", specialWeapon: "Crab Tank", unlockLvl: 3, icon: "assets/images/weaponIcons/splatdualies.png", subIcon: "assets/images/subWeaponIcons/suctionbomb.png"}, 
    {name : "Glooga Dualies", subWeapon: "Splash Wall", specialWeapon: "Booyah Bomb", unlockLvl: 21, icon: "assets/images/weaponIcons/gloogadualies.png", subIcon: "assets/images/subWeaponIcons/splashwall.png"}, 
    {name : "Dualie Squelchers", subWeapon: "Splat Bomb", specialWeapon: "Wave Breaker", unlockLvl: 8, icon: "assets/images/weaponIcons/dualiesquelchers.png", subIcon: "assets/images/subWeaponIcons/splatbomb.png"}, 
    {name : "Dark Tetra Dualies", subWeapon: "Autobomb", specialWeapon: "Reefslider", unlockLvl: 17, icon: "assets/images/weaponIcons/darktetradualies.png", subIcon: "assets/images/subWeaponIcons/autobomb.png"}, 
    {name : "Splat Brella", subWeapon: "Sprinkler", specialWeapon: "Triple Inkstrike", unlockLvl: 5, icon: "assets/images/weaponIcons/splatbrella.png", subIcon: "assets/images/subWeaponIcons/sprinkler.png"}, 
    {name : "Tenta Brella", subWeapon: "Squid Beakon", specialWeapon: "Ink Vac", unlockLvl: 16, icon: "assets/images/weaponIcons/tentabrella.png", subIcon: "assets/images/subWeaponIcons/beakon.png"}, 
    {name : "Undercover Brella", subWeapon: "Ink Mine", specialWeapon: "Reefslider", unlockLvl: 18, icon: "assets/images/weaponIcons/undercoverbrella.png", subIcon: "assets/images/subWeaponIcons/inkmine.png"}, 
    {name : "Tri-Stringer", subWeapon: "Toxic Mist", specialWeapon: "Killer Wail 5.1", unlockLvl: 4, icon: "assets/images/weaponIcons/tristringer.png", subIcon: "assets/images/subWeaponIcons/toxicmist.png"}, 
    {name : "REEF-LUX 450", subWeapon: "Curling Bomb", specialWeapon: "Tenta Missiles", unlockLvl: 10, icon: "assets/images/weaponIcons/reeflux450.png", subIcon: "assets/images/subWeaponIcons/curlingbomb.png"}, 
    {name : "Splatana Stamper", subWeapon: "Burst Bomb", specialWeapon: "Zipcaster", unlockLvl: 15, icon: "assets/images/weaponIcons/splatanastamper.png", subIcon: "assets/images/subWeaponIcons/burstbomb.png"}, 
    {name : "Splatana Wiper", subWeapon: "Torpedo", specialWeapon: "Ultra Stamp", unlockLvl: 5, icon: "assets/images/weaponIcons/splatanawiper.png", subIcon: "assets/images/subWeaponIcons/torpedo.png"}
];