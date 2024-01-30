
const weapons = [
    // {name : "", subWeapon: "", specialWeapon: "", unlockLvl: "", icon: "assets/images/weaponIcons/", subIcon: "assets/images/subWeaponIcons/", specialIcon: "assets/images/specialWeaponIcons/"}
    {name : "Sploosh-o-matic", subWeapon: "Curling Bomb", specialWeapon: "Ultra Stamp", unlockLvl: 9, icon: "assets/images/weaponIcons/splooshomatic.png", subIcon: "assets/images/subWeaponIcons/curlingbomb.png", specialIcon: "assets/images/specialWeaponIcons/booyahbomb.png"}, 
    {name : "Splattershot Jr.", subWeapon: "Splat Bomb", specialWeapon: "Big Bubbler", unlockLvl: 1, icon: "assets/images/weaponIcons/splattershotjr.png", subIcon: "assets/images/subWeaponIcons/splatbomb.png", specialIcon: "assets/images/specialWeaponIcons/bigbubbler.png"}, 
    {name :"Splash-o-matic", subWeapon: "Burst Bomb", specialWeapon: "Crab Tank", unlockLvl: 16, icon: "assets/images/weaponIcons/splashomatic.png", subIcon: "assets/images/subWeaponIcons/burstbomb.png", specialIcon: "assets/images/specialWeaponIcons/crabtank.png"}, 
    {name : "Aerospray MG", subWeapon: "Fizzy Bomb", specialWeapon: "Reefslider", unlockLvl: 5, icon: "assets/images/weaponIcons/aerospraymg.png", subIcon: "assets/images/subWeaponIcons/fizzybomb.png", specialIcon: "assets/images/specialWeaponIcons/reefslider.png"}, 
    {name : "Splattershot", subWeapon: "Suction Bomb", specialWeapon: "Trizooka", unlockLvl: 2, icon: "assets/images/weaponIcons/splattershot.png", subIcon: "assets/images/subWeaponIcons/suctionbomb.png", specialIcon: "assets/images/specialWeaponIcons/trizooka.png"}, 
    {name : ".52 Gal", subWeapon: "Splash Wall", specialWeapon: "Killer Wail 5.1", unlockLvl: 11, icon: "assets/images/weaponIcons/52gal.png", subIcon: "assets/images/subWeaponIcons/splashwall.png", specialIcon: "assets/images/specialWeaponIcons/killerwail51.png"}, 
    {name : "N-ZAP '85", subWeapon: "Suction Bomb", specialWeapon: "Tacticooler", unlockLvl: 6, icon: "assets/images/weaponIcons/nzap85.png", subIcon: "assets/images/subWeaponIcons/suctionbomb.png", specialIcon: "assets/images/specialWeaponIcons/tacticooler.png"}, 
    {name : "Splattershot Pro", subWeapon: "Angle Shooter", specialWeapon: "Crab Tank", unlockLvl: 9, icon: "assets/images/weaponIcons/splattershotpro.png", subIcon: "assets/images/subWeaponIcons/angleshooter.png", specialIcon: "assets/images/specialWeaponIcons/crabtank.png"}, 
    {name : ".96 Gal", subWeapon: "Sprinkler", specialWeapon: "Ink Vac", unlockLvl: 17, icon: "assets/images/weaponIcons/96gal.png", subIcon: "assets/images/subWeaponIcons/sprinkler.png", specialIcon: "assets/images/specialWeaponIcons/inkvac.png"},
    {name : "Jet Squelcher", subWeapon: "Angle Shooter", specialWeapon: "Ink Vac", unlockLvl: 15, icon: "assets/images/weaponIcons/jetsquelcher.png", subIcon: "assets/images/subWeaponIcons/angleshooter.png", specialIcon: "assets/images/specialWeaponIcons/inkvac.png"}, 
    {name : "Luna Blaster", subWeapon: "Splat Bomb", specialWeapon: "Zipcaster", unlockLvl: 13, icon: "assets/images/weaponIcons/lunablaster.png", subIcon: "assets/images/subWeaponIcons/splatbomb.png", specialIcon: "assets/images/specialWeaponIcons/zipcaster.png"}, 
    {name : "Blaster", subWeapon: "Autobomb", specialWeapon: "Big Bubbler", unlockLvl: 3, icon: "assets/images/weaponIcons/blaster.png", subIcon: "assets/images/subWeaponIcons/autobomb.png", specialIcon: "assets/images/specialWeaponIcons/bigbubbler.png"}, 
    {name : "Range Blaster", subWeapon: "Suction Bomb", specialWeapon: "Wave Breaker", unlockLvl: 11, icon: "assets/images/weaponIcons/rangeblaster.png", subIcon: "assets/images/subWeaponIcons/suctionbomb.png", specialIcon: "assets/images/specialWeaponIcons/wavebreaker.png"}, 
    {name : "Clash Blaster", subWeapon: "Splat Bomb", specialWeapon: "Trizooka", unlockLvl: 22, icon: "assets/images/weaponIcons/clashblaster.png", subIcon: "assets/images/subWeaponIcons/splatbomb.png", specialIcon: "assets/images/specialWeaponIcons/trizooka.png"}, 
    {name : "Rapid Blaster", subWeapon: "Ink Mine", specialWeapon: "Triple Inkstrike", unlockLvl: 7, icon: "assets/images/weaponIcons/rapidblaster.png", subIcon: "assets/images/subWeaponIcons/inkmine.png", specialIcon: "assets/images/specialWeaponIcons/tripleinkstrike.png"}, 
    {name : "Rapid Blaster Pro", subWeapon: "Toxic Mist", specialWeapon: "Ink Vac", unlockLvl: 26, icon: "assets/images/weaponIcons/rapidblasterpro.png", subIcon: "assets/images/subWeaponIcons/toxicmist.png", specialIcon: "assets/images/specialWeaponIcons/inkvac.png"}, 
    {name : "L-3 Nozzlenose", subWeapon: "Curling Bomb", specialWeapon: "Crab Tank", unlockLvl: 13, icon: "assets/images/weaponIcons/l3nozzlenose.png", subIcon: "assets/images/subWeaponIcons/curlingbomb.png", specialIcon: "assets/images/specialWeaponIcons/crabtank.png"}, 
    {name : "H-3 Nozzlenose", subWeapon: "Point Sensor", specialWeapon: "Tacticooler", unlockLvl: 24, icon: "assets/images/weaponIcons/h3nozzlenose.png", subIcon: "assets/images/subWeaponIcons/pointsensor.png", specialIcon: "assets/images/specialWeaponIcons/tacticooler.png"}, 
    {name : "Squeezer", subWeapon: "Splash Wall", specialWeapon: "Trizooka", unlockLvl: 19, icon: "assets/images/weaponIcons/squeezer.png", subIcon: "assets/images/subWeaponIcons/splashwall.png", specialIcon: "assets/images/specialWeaponIcons/trizooka.png"}, 
    {name : "Carbon Roller", subWeapon: "Autobomb", specialWeapon: "Zipcaster", unlockLvl: 6, icon: "assets/images/weaponIcons/carbonroller.png", subIcon: "assets/images/subWeaponIcons/autobomb.png", specialIcon: "assets/images/specialWeaponIcons/zipcaster.png"}, 
    {name : "Splat Roller", subWeapon: "Curling Bomb", specialWeapon: "Big Bubbler", unlockLvl: 2, icon: "assets/images/weaponIcons/splatroller.png", subIcon: "assets/images/subWeaponIcons/curlingbomb.png", specialIcon: "assets/images/specialWeaponIcons/bigbubbler.png"}, 
    {name : "Dynamo Roller", subWeapon: "Sprinkler", specialWeapon: "Tacticooler", unlockLvl: 12, icon: "assets/images/weaponIcons/dynamoroller.png", subIcon: "assets/images/subWeaponIcons/sprinkler.png", specialIcon: "assets/images/specialWeaponIcons/tacticooler.png"}, 
    {name : "Flingza Roller", subWeapon: "Ink Mine", specialWeapon: "Tenta Missiles", unlockLvl: 20, icon: "assets/images/weaponIcons/flingzaroller.png", subIcon: "assets/images/subWeaponIcons/inkmine.png", specialIcon: "assets/images/specialWeaponIcons/tentamissiles.png"}, 
    {name : "Inkbrush", subWeapon: "Splat Bomb", specialWeapon: "Killer Wail 5.1", unlockLvl: 7, icon: "assets/images/weaponIcons/inkbrush.png", subIcon: "assets/images/subWeaponIcons/splatbomb.png", specialIcon: "assets/images/specialWeaponIcons/killerwail51.png"}, 
    {name : "Octobrush", subWeapon: "Suction Bomb", specialWeapon: "Zipcaster", unlockLvl: 4, icon: "assets/images/weaponIcons/octobrush.png", subIcon: "assets/images/subWeaponIcons/suctionbomb.png", specialIcon: "assets/images/specialWeaponIcons/zipcaster.png"}, 
    {name : "Classic Squiffer", subWeapon: "Point Sensor", specialWeapon: "Big Bubbler", unlockLvl: 8, icon: "assets/images/weaponIcons/classicsquiffer.png", subIcon: "assets/images/subWeaponIcons/pointsensor.png", specialIcon: "assets/images/specialWeaponIcons/bigbubbler.png"},
    {name : "Splat Charger", subWeapon: "Splat Bomb", specialWeapon: "Ink Vac", unlockLvl: 2, icon: "assets/images/weaponIcons/splatcharger.png", subIcon: "assets/images/subWeaponIcons/splatbomb.png", specialIcon: "assets/images/specialWeaponIcons/inkvac.png"}, 
    {name : "Splatterscope", subWeapon: "Splat Bomb", specialWeapon: "Ink Vac", unlockLvl: 10, icon: "assets/images/weaponIcons/splatterscope.png", subIcon: "assets/images/subWeaponIcons/splatbomb.png", specialIcon: "assets/images/specialWeaponIcons/inkvac.png"}, 
    {name : "E-Liter 4K", subWeapon: "Ink Mine", specialWeapon: "Wave Breaker", unlockLvl: 18, icon: "assets/images/weaponIcons/eliter4k.png", subIcon: "assets/images/subWeaponIcons/inkmine.png", specialIcon: "assets/images/specialWeaponIcons/wavebreaker.png"}, 
    {name : "E-liter 4K Scope", subWeapon: "Ink Mine", specialWeapon: "Wave Breaker", unlockLvl: 27, icon: "assets/images/weaponIcons/eliter4kscope.png", subIcon: "assets/images/subWeaponIcons/inkmine.png", specialIcon: "assets/images/specialWeaponIcons/wavebreaker.png"}, 
    {name : "Bamboozler 14 Mk I", subWeapon: "Autobomb", specialWeapon: "Killer Wail 5.1", unlockLvl: 23, icon: "assets/images/weaponIcons/bamboozler14mki.png", subIcon: "assets/images/subWeaponIcons/autobomb.png", specialIcon: "assets/images/specialWeaponIcons/killerwail51.png"}, 
    {name : "Goo Tuber", subWeapon: "Torpedo", specialWeapon: "Tenta Missiles", unlockLvl: 25, icon: "assets/images/weaponIcons/gootuber.png", subIcon: "assets/images/subWeaponIcons/torpedo.png", specialIcon: "assets/images/specialWeaponIcons/tentamissiles.png"}, 
    {name : "Slosher", subWeapon: "Splat Bomb", specialWeapon: "Triple Inkstrike", unlockLvl: 3, icon: "assets/images/weaponIcons/slosher.png", subIcon: "assets/images/subWeaponIcons/splatbomb.png", specialIcon: "assets/images/specialWeaponIcons/tripleinkstrike.png"}, 
    {name : "Tri-Slosher", subWeapon: "Toxic Mist", specialWeapon: "Inkjet", unlockLvl: 10, icon: "assets/images/weaponIcons/trislosher.png", subIcon: "assets/images/subWeaponIcons/toxicmist.png", specialIcon: "assets/images/specialWeaponIcons/inkjet.png"},
    {name : "Sloshing Machine", subWeapon: "Fizzy Bomb", specialWeapon: "Booyah Bomb", unlockLvl: 14, icon: "assets/images/weaponIcons/sloshingmachine.png", subIcon: "assets/images/subWeaponIcons/fizzybomb.png", specialIcon: "assets/images/specialWeaponIcons/booyahbomb.png"}, 
    {name : "Bloblobber", subWeapon: "Sprinkler", specialWeapon: "Ink Storm", unlockLvl: 19, icon: "assets/images/weaponIcons/bloblobber.png", subIcon: "assets/images/subWeaponIcons/sprinkler.png", specialIcon: "assets/images/specialWeaponIcons/inkstorm.png"}, 
    {name : "Explosher", subWeapon: "Point Sensor", specialWeapon: "Ink Storm", unlockLvl: 29, icon: "assets/images/weaponIcons/explosher.png", subIcon: "assets/images/subWeaponIcons/pointsensor.png", specialIcon: "assets/images/specialWeaponIcons/inkstorm.png"}, 
    {name : "Mini Splatling", subWeapon: "Burst Bomb", specialWeapon: "Ultra Stamp", unlockLvl: 12, icon: "assets/images/weaponIcons/minisplatling.png", subIcon: "assets/images/subWeaponIcons/burstbomb.png", specialIcon: "assets/images/specialWeaponIcons/ultrastamp.png"}, 
    {name : "Heavy Splatling", subWeapon: "Sprinkler", specialWeapon: "Wave Breaker", unlockLvl: 4, icon: "assets/images/weaponIcons/heavysplatling.png", subIcon: "assets/images/subWeaponIcons/sprinkler.png", specialIcon: "assets/images/specialWeaponIcons/wavebreaker.png"}, 
    {name : "Hydra Splatling", subWeapon: "AutoBomb", specialWeapon: "Booyah Bomb", unlockLvl: 20, icon: "assets/images/weaponIcons/hydrasplatling.png", subIcon: "assets/images/subWeaponIcons/autobomb.png", specialIcon: "assets/images/specialWeaponIcons/booyahbomb.png"}, 
    {name : "Ballpoint Splatling", subWeapon: "Fizzy Bomb", specialWeapon: "Inkjet", unlockLvl: 30, icon: "assets/images/weaponIcons/ballpointsplatling.png", subIcon: "assets/images/subWeaponIcons/fizzybomb.png", specialIcon: "assets/images/specialWeaponIcons/inkjet.png"}, 
    {name : "Nautilus 47", subWeapon: "Point Sensor", specialWeapon: "Ink Storm", unlockLvl: 28, icon: "assets/images/weaponIcons/nautilus47.png", subIcon: "assets/images/subWeaponIcons/pointsensor.png", specialIcon: "assets/images/specialWeaponIcons/inkstorm.png"},
    {name : "Dapple Dualies", subWeapon: "Squid Beakon", specialWeapon: "Tacticooler", unlockLvl: 14, icon: "assets/images/weaponIcons/dappledualies.png", subIcon: "assets/images/subWeaponIcons/squidbeakon.png", specialIcon: "assets/images/specialWeaponIcons/tacticooler.png"}, 
    {name : "Splat Dualies", subWeapon: "Suction Bomb", specialWeapon: "Crab Tank", unlockLvl: 3, icon: "assets/images/weaponIcons/splatdualies.png", subIcon: "assets/images/subWeaponIcons/suctionbomb.png", specialIcon: "assets/images/specialWeaponIcons/crabtank.png"}, 
    {name : "Glooga Dualies", subWeapon: "Splash Wall", specialWeapon: "Booyah Bomb", unlockLvl: 21, icon: "assets/images/weaponIcons/gloogadualies.png", subIcon: "assets/images/subWeaponIcons/splashwall.png", specialIcon: "assets/images/specialWeaponIcons/booyahbomb.png"}, 
    {name : "Dualie Squelchers", subWeapon: "Splat Bomb", specialWeapon: "Wave Breaker", unlockLvl: 8, icon: "assets/images/weaponIcons/dualiesquelchers.png", subIcon: "assets/images/subWeaponIcons/splatbomb.png", specialIcon: "assets/images/specialWeaponIcons/wavebreaker.png"}, 
    {name : "Dark Tetra Dualies", subWeapon: "Autobomb", specialWeapon: "Reefslider", unlockLvl: 17, icon: "assets/images/weaponIcons/darktetradualies.png", subIcon: "assets/images/subWeaponIcons/autobomb.png", specialIcon: "assets/images/specialWeaponIcons/reefslider.png"}, 
    {name : "Splat Brella", subWeapon: "Sprinkler", specialWeapon: "Triple Inkstrike", unlockLvl: 5, icon: "assets/images/weaponIcons/splatbrella.png", subIcon: "assets/images/subWeaponIcons/sprinkler.png", specialIcon: "assets/images/specialWeaponIcons/tripleinkstrike.png"}, 
    {name : "Tenta Brella", subWeapon: "Squid Beakon", specialWeapon: "Ink Vac", unlockLvl: 16, icon: "assets/images/weaponIcons/tentabrella.png", subIcon: "assets/images/subWeaponIcons/squidbeakon.png", specialIcon: "assets/images/specialWeaponIcons/inkvac.png"}, 
    {name : "Undercover Brella", subWeapon: "Ink Mine", specialWeapon: "Reefslider", unlockLvl: 18, icon: "assets/images/weaponIcons/undercoverbrella.png", subIcon: "assets/images/subWeaponIcons/inkmine.png", specialIcon: "assets/images/specialWeaponIcons/reefslider.png"}, 
    {name : "Tri-Stringer", subWeapon: "Toxic Mist", specialWeapon: "Killer Wail 5.1", unlockLvl: 4, icon: "assets/images/weaponIcons/tristringer.png", subIcon: "assets/images/subWeaponIcons/toxicmist.png", specialIcon: "assets/images/specialWeaponIcons/killerwail51.png"}, 
    {name : "REEF-LUX 450", subWeapon: "Curling Bomb", specialWeapon: "Tenta Missiles", unlockLvl: 10, icon: "assets/images/weaponIcons/reeflux450.png", subIcon: "assets/images/subWeaponIcons/curlingbomb.png", specialIcon: "assets/images/specialWeaponIcons/tentamissiles.png"}, 
    {name : "Splatana Stamper", subWeapon: "Burst Bomb", specialWeapon: "Zipcaster", unlockLvl: 15, icon: "assets/images/weaponIcons/splatanastamper.png", subIcon: "assets/images/subWeaponIcons/burstbomb.png", specialIcon: "assets/images/specialWeaponIcons/zipcaster.png"}, 
    {name : "Splatana Wiper", subWeapon: "Torpedo", specialWeapon: "Ultra Stamp", unlockLvl: 5, icon: "assets/images/weaponIcons/splatanawiper.png", subIcon: "assets/images/subWeaponIcons/torpedo.png", specialIcon: "assets/images/specialWeaponIcons/ultrastamp.png"},
    {name : "Custom Splattershot Jr.", subWeapon: "Torpedo", specialWeapon: "Wave Breaker", unlockLvl: "6", icon: "assets/images/weaponIcons/customsplattershotjr.png", subIcon: "assets/images/subWeaponIcons/torpedo.png", specialIcon: "assets/images/specialWeaponIcons/wavebreaker.png"},
    {name : "Aerospray RG", subWeapon: "Sprinkler", specialWeapon: "Booyah Bomb", unlockLvl: "18", icon: "assets/images/weaponIcons/aerosprayrg.png", subIcon: "assets/images/subWeaponIcons/sprinkler.png", specialIcon: "assets/images/specialWeaponIcons/booyahbomb.png"},
    {name : "Tentatek Splattershot", subWeapon: "Splat Bomb", specialWeapon: "Triple Inkstrike", unlockLvl: "10", icon: "assets/images/weaponIcons/tentateksplattershot.png", subIcon: "assets/images/subWeaponIcons/splatbomb.png", specialIcon: "assets/images/specialWeaponIcons/tripleinkstrike.png"},
    {name : "Forge Splattershot Pro", subWeapon: "Suction Bomb", specialWeapon: "Booyah Bomb", unlockLvl: "20", icon: "assets/images/weaponIcons/forgesplattershotpro.png", subIcon: "assets/images/subWeaponIcons/suctionbomb.png", specialIcon: "assets/images/specialWeaponIcons/booyahbomb.png"},
    {name : "Splattershot Nova", subWeapon: "Point Sensor", specialWeapon: "Killer Wail 5.1", unlockLvl: "8", icon: "assets/images/weaponIcons/splattershotnova.png", subIcon: "assets/images/subWeaponIcons/pointsensor.png", specialIcon: "assets/images/specialWeaponIcons/killerwail51.png"},
    {name : "Luna Blaster Neo", subWeapon: "Fizzy Bomb", specialWeapon: "Ultra Stamp", unlockLvl: "24", icon: "assets/images/weaponIcons/lunablasterneo.png", subIcon: "assets/images/subWeaponIcons/fizzybomb.png", specialIcon: "assets/images/specialWeaponIcons/ultrastamp.png"},
    {name : "Carbon Roller Deco", subWeapon: "Burst Bomb", specialWeapon: "Trizooka", unlockLvl: "22", icon: "assets/images/weaponIcons/carbonrollerdeco.png", subIcon: "assets/images/subWeaponIcons/burstbomb.png", specialIcon: "assets/images/specialWeaponIcons/trizooka.png"},
    {name : "Big Swig Roller", subWeapon: "Splash Wall", specialWeapon: "Ink Vac", unlockLvl: "16", icon: "assets/images/weaponIcons/bigswigroller.png", subIcon: "assets/images/subWeaponIcons/splashwall.png", specialIcon: "assets/images/specialWeaponIcons/inkvac.png"},
    {name : "Inkbrush Nouveau", subWeapon: "Ink Mine", specialWeapon: "Ultra Stamp", unlockLvl: "15", icon: "assets/images/weaponIcons/inkbrushnouveau.png", subIcon: "assets/images/subWeaponIcons/inkmine.png", specialIcon: "assets/images/specialWeaponIcons/ultrastamp.png"},
    {name : "Snipewriter 5H", subWeapon: "Sprinkler", specialWeapon: "Tacticooler", unlockLvl: "14", icon: "assets/images/weaponIcons/snipewriter.png", subIcon: "assets/images/subWeaponIcons/sprinkler.png", specialIcon: "assets/images/specialWeaponIcons/tacticooler.png"},
    {name : "Slosher Deco", subWeapon: "Angle Shooter", specialWeapon: "Zipcaster", unlockLvl: "12", icon: "assets/images/weaponIcons/slosherdeco.png", subIcon: "assets/images/subWeaponIcons/angleshooter.png", specialIcon: "assets/images/specialWeaponIcons/zipcaster.png"},
    {name : "Zink Mini Splatling", subWeapon: "Toxic Mist", specialWeapon: "Big Bubbler", unlockLvl: "25", icon: "assets/images/weaponIcons/zinkminisplatling.png", subIcon: "assets/images/subWeaponIcons/toxicmist.png", specialIcon: "assets/images/specialWeaponIcons/bigbubbler.png"},
    {name : "Dapple Dualies Nouveau", subWeapon: "Torpedo", specialWeapon: "Reefslider", unlockLvl: "26", icon: "assets/images/weaponIcons/dappledualiesnouveau.png", subIcon: "assets/images/subWeaponIcons/torpedo.png", specialIcon: "assets/images/specialWeaponIcons/reefslider.png"},
    {name : "Neo Sploosh-o-matic", subWeapon: "Squid Beakon", specialWeapon: "Killer Wail 5.1", unlockLvl: "13", icon: "assets/images/weaponIcons/neosplooshomatic.png", subIcon: "assets/images/subWeaponIcons/squidbeakon.png", specialIcon: "assets/images/specialWeaponIcons/killerwail51.png"},
    {name : "Neo Splash-o-matic", subWeapon: "Suction Bomb", specialWeapon: "Triple Inkstrike", unlockLvl: "21", icon: "assets/images/weaponIcons/neosplashomatic.png", subIcon: "assets/images/subWeaponIcons/suctionbomb.png", specialIcon: "assets/images/specialWeaponIcons/tripleinkstrike.png"},
    {name : "N-ZAP '89", subWeapon: "Autobomb", specialWeapon: "Super Chump", unlockLvl: "11", icon: "assets/images/weaponIcons/nzap89.png", subIcon: "assets/images/subWeaponIcons/autobomb.png", specialIcon: "assets/images/specialWeaponIcons/superchump.png"},
    {name : ".96 Gal Deco", subWeapon: "Splash Wall", specialWeapon: "Kraken Royale", unlockLvl: "23", icon: "assets/images/weaponIcons/96galdeco.png", subIcon: "assets/images/subWeaponIcons/splashwall.png", specialIcon: "assets/images/specialWeaponIcons/krakenroyale.png"},
    {name : "Custom Jet Squelcher", subWeapon: "Toxic Mist", specialWeapon: "Ink Storm", unlockLvl: "20", icon: "assets/images/weaponIcons/customjetsquelcher.png", subIcon: "assets/images/subWeaponIcons/toxicmist.png", specialIcon: "assets/images/specialWeaponIcons/inkstorm.png"},
    {name : "Clash Blaster Neo", subWeapon: "Curling Bomb", specialWeapon: "Super Chump", unlockLvl: "25", icon: "assets/images/weaponIcons/clashblasterneo.png", subIcon: "assets/images/subWeaponIcons/curlingbomb.png", specialIcon: "assets/images/specialWeaponIcons/superchump.png"},
    {name : "Rapid Blaster Deco", subWeapon: "Torpedo", specialWeapon: "Inkjet", unlockLvl: "10", icon: "assets/images/weaponIcons/rapidblasterdeco.png", subIcon: "assets/images/subWeaponIcons/torpedo.png", specialIcon: "assets/images/specialWeaponIcons/inkjet.png"},
    {name : "L-3 Nozzlenose D", subWeapon: "Burst Bomb", specialWeapon: "Ultra Stamp", unlockLvl: "19", icon: "assets/images/weaponIcons/l3nozzlenosed.png", subIcon: "assets/images/subWeaponIcons/burstbomb.png", specialIcon: "assets/images/specialWeaponIcons/ultrastamp.png"},
    {name : "Krak-On Splat Roller", subWeapon: "Squid Beakon", specialWeapon: "Kraken Royale", unlockLvl: "7", icon: "assets/images/weaponIcons/krakonsplatroller.png", subIcon: "assets/images/subWeaponIcons/squidbeakon.png", specialIcon: "assets/images/specialWeaponIcons/krakenroyale.png"},
    {name : "Z+F Splat Charger", subWeapon: "Splash Wall", specialWeapon: "Triple Inkstrike", unlockLvl: "9", icon: "assets/images/weaponIcons/zfsplatcharger.png", subIcon: "assets/images/subWeaponIcons/splashwall.png", specialIcon: "assets/images/specialWeaponIcons/tripleinkstrike.png"},
    {name : "Z+F Splatterscope", subWeapon: "Splash Wall", specialWeapon: "Triple Inkstrike", unlockLvl: "15", icon: "assets/images/weaponIcons/zfsplatterscope.png", subIcon: "assets/images/subWeaponIcons/splashwall.png", specialIcon: "assets/images/specialWeaponIcons/tripleinkstrike.png"},
    {name : "Tri-Slosher Nouveau", subWeapon: "Fizzy Bomb", specialWeapon: "Tacticooler", unlockLvl: "17", icon: "assets/images/weaponIcons/trisloshernouveau.png", subIcon: "assets/images/subWeaponIcons/fizzybomb.png", specialIcon: "assets/images/specialWeaponIcons/tacticooler.png"},
    {name : "Annaki Splattershot Nova", subWeapon: "Ink Mine", specialWeapon: "Inkjet", unlockLvl: "12", icon: "assets/images/weaponIcons/annakisplattershotnova.png", subIcon: "assets/images/subWeaponIcons/inkmine.png", specialIcon: "assets/images/specialWeaponIcons/inkjet.png"},
    {name : "Rapid Blaster Pro Deco", subWeapon: "Angle Shooter", specialWeapon: "Killer Wail 5.1", unlockLvl: "29", icon: "assets/images/weaponIcons/rapidblasterprodeco.png", subIcon: "assets/images/subWeaponIcons/angleshooter.png", specialIcon: "assets/images/specialWeaponIcons/killerwail51.png"},
    {name : "S-BLAST '92", subWeapon: "Sprinkler", specialWeapon: "Reefslider", unlockLvl: "20", icon: "assets/images/weaponIcons/sblast92.png", subIcon: "assets/images/subWeaponIcons/sprinkler.png", specialIcon: "assets/images/specialWeaponIcons/reefslider.png"},
    {name : "H-3 Nozzlenose D", subWeapon: "Splash Wall", specialWeapon: "Big Bubbler", unlockLvl: "27", icon: "assets/images/weaponIcons/h3nozzlenosed.png", subIcon: "assets/images/subWeaponIcons/splashwall.png", specialIcon: "assets/images/specialWeaponIcons/bigbubbler.png"},
    {name : "Big Swig Roller Express", subWeapon: "Angle Shooter", specialWeapon: "Ink Storm", unlockLvl: "18", icon: "assets/images/weaponIcons/bigswigrollerexpress.png", subIcon: "assets/images/subWeaponIcons/angleshooter.png", specialIcon: "assets/images/specialWeaponIcons/inkstorm.png"},
    {name : "Painbrush", subWeapon: "Curling Bomb", specialWeapon: "Wave Breaker", unlockLvl: "14", icon: "assets/images/weaponIcons/painbrush.png", subIcon: "assets/images/subWeaponIcons/curlingbomb.png", specialIcon: "assets/images/specialWeaponIcons/wavebreaker.png"},
    {name : "Heavy Splatling Deco", subWeapon: "Point Sensor", specialWeapon: "Kraken Royale", unlockLvl: "15", icon: "assets/images/weaponIcons/heavysplatlingdeco.png", subIcon: "assets/images/subWeaponIcons/pointsensor.png", specialIcon: "assets/images/specialWeaponIcons/krakenroyale.png"},
    {name : "Custom Dualie Squelchers", subWeapon: "Squid Beakon", specialWeapon: "Super Chump", unlockLvl: "16", icon: "assets/images/weaponIcons/customdualiesquelchers.png", subIcon: "assets/images/subWeaponIcons/squidbeakon.png", specialIcon: "assets/images/specialWeaponIcons/superchump.png"},
    {name : "Light Tetra Dualies", subWeapon: "Sprinkler", specialWeapon: "Zipcaster", unlockLvl: "24", icon: "assets/images/weaponIcons/lighttetradualies.png", subIcon: "assets/images/subWeaponIcons/sprinkler.png", specialIcon: "assets/images/specialWeaponIcons/zipcaster.png"},
    {name : "Tenta Sorella Brella", subWeapon: "Ink Mine", specialWeapon: "Trizooka", unlockLvl: "22", icon: "assets/images/weaponIcons/tentasorellabrella.png", subIcon: "assets/images/subWeaponIcons/inkmine.png", specialIcon: "assets/images/specialWeaponIcons/trizooka.png"},
    {name : "Splatana Wiper Deco", subWeapon: "Squid Beakon", specialWeapon: "Tenta Missiles", unlockLvl: "10", icon: "assets/images/weaponIcons/splatanawiperdeco.png", subIcon: "assets/images/subWeaponIcons/squidbeakon.png", specialIcon: "assets/images/specialWeaponIcons/tentamissiles.png"},
    {name : "Octobrush Nouveau", subWeapon: "Squid Beakon", specialWeapon: "Ink Storm", unlockLvl: "9", icon: "assets/images/weaponIcons/octobrushnouveau.png", subIcon: "assets/images/subWeaponIcons/squidbeakon.png", specialIcon: "assets/images/specialWeaponIcons/inkstorm.png"},
    {name : "Inkline Tri-Stringer", subWeapon: "Sprinkler", specialWeapon: "Super Chump", unlockLvl: "11", icon: "assets/images/weaponIcons/inklinetristringer.png", subIcon: "assets/images/subWeaponIcons/sprinkler.png", specialIcon: "assets/images/specialWeaponIcons/superchump.png"},
    {name : "Heavy Edit Splatling", subWeapon: "Curling Bomb", specialWeapon: "Tacticooler", unlockLvl: "13", icon: "assets/images/weaponIcons/heavyeditsplatling.png", subIcon: "assets/images/subWeaponIcons/curlingbomb.png", specialIcon: "assets/images/specialWeaponIcons/tacticooler.png"},
    {name : "Dread Wringer", subWeapon: "Suction Bomb", specialWeapon: "Reefslider", unlockLvl: "15", icon: "assets/images/weaponIcons/dreadwringer.png", subIcon: "assets/images/subWeaponIcons/suctionbomb.png", specialIcon: "assets/images/specialWeaponIcons/reefslider.png"},
    {name : "Gold Dynamo Roller", subWeapon: "Splat Bomb", specialWeapon: "Super Chump", unlockLvl: "17", icon: "assets/images/weaponIcons/golddynamoroller.png", subIcon: "assets/images/subWeaponIcons/splatbomb.png", specialIcon: "assets/images/specialWeaponIcons/superchump.png"},
    {name : "Sorella Brella", subWeapon: "Autobomb", specialWeapon: "Inkjet", unlockLvl: "19", icon: "assets/images/weaponIcons/sorellabrella.png", subIcon: "assets/images/subWeaponIcons/autobomb.png", specialIcon: "assets/images/specialWeaponIcons/inkjet.png"},
    {name : "Sloshing Machine Neo", subWeapon: "Point Sensor0", specialWeapon: "Trizooka", unlockLvl: "21", icon: "assets/images/weaponIcons/sloshingmachineneo.png", subIcon: "assets/images/subWeaponIcons/pointsensor.png", specialIcon: "assets/images/specialWeaponIcons/trizooka.png"},
    {name : "Bloblobber Deco", subWeapon: "Angle Shooter", specialWeapon: "Kraken Royal", unlockLvl: "23", icon: "assets/images/weaponIcons/bloblobberdeco.png", subIcon: "assets/images/subWeaponIcons/angleshooter.png", specialIcon: "assets/images/specialWeaponIcons/krakenroyal.png"},
    {name : "Custom Goo Tuber", subWeapon: "Fizzy Bomb", specialWeapon: "Ultra Stamp", unlockLvl: "28", icon: "assets/images/weaponIcons/customgootuber.png", subIcon: "assets/images/subWeaponIcons/fizzybomb.png", specialIcon: "assets/images/specialWeaponIcons/ultrastamp.png"},
    {name : "Ballpoint Splatling Nouveau", subWeapon: "Ink Mine", specialWeapon: "Inkvac", unlockLvl: "30", icon: "assets/images/weaponIcons/ballpointsplatlingnouveau.png", subIcon: "assets/images/subWeaponIcons/inkmine.png", specialIcon: "assets/images/specialWeaponIcons/inkvac.png"},
    {name : "Neo Splatana Stamper", subWeapon: "Toxic Mist", specialWeapon: "Crab Tank", unlockLvl: "20", icon: "assets/images/weaponIcons/neosplatanastamper.png", subIcon: "assets/images/subWeaponIcons/toxicmist.png", specialIcon: "assets/images/specialWeaponIcons/crabtank.png"},
    {name : "REEF-LUX 450 Deco", subWeapon: "Splash Wall", specialWeapon: "Reefslider", unlockLvl: "12", icon: "assets/images/weaponIcons/reeflux450deco.png", subIcon: "assets/images/subWeaponIcons/splashwall.png", specialIcon: "assets/images/specialWeaponIcons/reefslider.png"},
    {name : "Undercover Sorella Brella", subWeapon: "Torpedo", specialWeapon: "Splattercolor Screen", unlockLvl: "23", icon: "assets/images/weaponIcons/undercoversorellabrella.png", subIcon: "assets/images/subWeaponIcons/torpedo.png", specialIcon: "assets/images/specialWeaponIcons/splattercolorscreen.png"},
    {name : "Enperry Splat Dualies", subWeapon: "Curling Bomb", specialWeapon: "Triple Splashdown", unlockLvl: "10", icon: "assets/images/weaponIcons/enperrysplatdualies.png", subIcon: "assets/images/subWeaponIcons/curlingbomb.png", specialIcon: "assets/images/specialWeaponIcons/triplesplashdown.png"},
    {name : "Snipewriter 5B", subWeapon: "Splash Wall", specialWeapon: "Ink Storm", unlockLvl: "19", icon: "assets/images/weaponIcons/snipewriter5b.png", subIcon: "assets/images/subWeaponIcons/splashwall.png", specialIcon: "assets/images/specialWeaponIcons/inkstorm.png"},
    {name : "Foil Squeezer", subWeapon: "Autobomb", specialWeapon: "Splattercolor Screen", unlockLvl: "25", icon: "assets/images/weaponIcons/foilsqueezer.png", subIcon: "assets/images/subWeaponIcons/autobomb.png", specialIcon: "assets/images/specialWeaponIcons/splattercolorscreen.png"},
    {name : "S-BLAST '91", subWeapon: "Burst Bomb", specialWeapon: "Booyah Bomb", unlockLvl: "27", icon: "assets/images/weaponIcons/sblast91.png", subIcon: "assets/images/subWeaponIcons/burstbomb.png", specialIcon: "assets/images/specialWeaponIcons/booyahbomb.png"},
    {name : "Custom Blaster", subWeapon: "Point Sensor", specialWeapon: "Triple Splashdown", unlockLvl: "8", icon: "assets/images/weaponIcons/customblaster.png", subIcon: "assets/images/subWeaponIcons/pointsensor.png", specialIcon: "assets/images/specialWeaponIcons/triplesplashdown.png"}
];