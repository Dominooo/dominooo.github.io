var playerNum; //number of players.
var player1;
var player2;
var player3;


var legendObject = {
  "1" : {"name": "Wraith", "chance":10, "difficulty":2, "image":"./images/legends/wraith.png"},
  "2" : {"name": "Mirage", "chance":10, "difficulty":4, "image":"./images/legends/mirage.png"},
  "3" : {"name": "Octane", "chance":5, "difficulty":8, "image":"./images/legends/octane.png"},
  "4" : {"name": "Revenant", "chance":15, "difficulty":1, "image":"./images/legends/revenant.png"},
  "5" : {"name": "Gibralter", "chance":15, "difficulty":1, "image":"./images/legends/gibralter.png"},
  "6" : {"name": "Caustic", "chance":25, "difficulty":3, "image":"./images/legends/caustic.png"},
  "7" : {"name": "Wattson", "chance":10, "difficulty":3, "image":"./images/legends/wattson.png"},
  "8" : {"name": "Lifeline", "chance":10, "difficulty":1, "image":"./images/legends/lifeline.png"},
  "9" : {"name": "Loba", "chance":10, "difficulty":5, "image":"./images/legends/loba.png"},
  "10" : {"name": "Bloodhound", "chance":10, "difficulty":2, "image":"./images/legends/bloodhound.png"},
  "11" : {"name": "Pathfinder", "chance":10, "difficulty":1, "image":"./images/legends/pathfinder.png"},
  "12" : {"name": "Crypto", "chance":10, "difficulty":10, "image":"./images/legends/crypto.png"},
  "13" : {"name": "Bangalore", "chance":10, "difficulty":5, "image":"./images/legends/bangalore.png"}
}

var gunObject = {
  "1" : {"name": "Kraber", "chance":1, "difficulty":5, "image":"./images/guns/Kraber_SR.png"},
  "2" : {"name": "Sentinel", "chance":1, "difficulty":4, "image":"./images/guns/Sentinel.png"},
  "3" : {"name": "Longbow", "chance":2, "difficulty":3, "image":"./images/guns/Longbow_DRM_SR.png"},
  "4" : {"name": "Triple Take", "chance":2, "difficulty":3, "image":"./images/guns/Tripple_Take_SR.png"},
  "5" : {"name": "Charge Rifle", "chance":1, "difficulty":4, "image":"./images/guns/Charge_Rifle.png"},
  "6" : {"name": "Hemlok", "chance":3, "difficulty":3, "image":"./images/guns/Hemlok_Burst_AR.png"},
  "7" : {"name": "Flatline", "chance":3, "difficulty":4, "image":"./images/guns/Flatline_AR.png"},
  "8" : {"name": "G7 Scout", "chance":3, "difficulty":2, "image":"./images/guns/G7_Scout_SR.png"},
  "9" : {"name": "R-301", "chance":3, "difficulty":4, "image":"./images/guns/R-301_Carabine_AR.png"},
  "10" : {"name": "HAVOC", "chance":2, "difficulty":4, "image":"./images/guns/Havoc_Rifle_AR.png"},
  "11" : {"name": "Devotion", "chance":1, "difficulty":5, "image":"./images/guns/Devotion_LMG.png"},
  "12" : {"name": "Spitfire", "chance":3, "difficulty":3, "image":"./images/guns/Spitfire_LMG.png"},
  "13" : {"name": "L-STAR", "chance":1, "difficulty":3, "image":"./images/guns/L-Star.png"},
  "14" : {"name": "Prowler", "chance":3, "difficulty":2, "image":"./images/guns/Prowler_Burst_SMG.png"},
  "15" : {"name": "R-99", "chance":3, "difficulty":3, "image":"./images/guns/R-99_SMG.png"},
  "16" : {"name": "Alternator", "chance":1, "difficulty":5, "image":"./images/guns/Alternator_SMG.png"},
  "17" : {"name": "Mastiff", "chance":1, "difficulty":3, "image":"./images/guns/Mastiff_SG.png"},
  "18" : {"name": "EVA-8", "chance":2, "difficulty":4, "image":"./images/guns/EVA-8_Auto_SG.png"},
  "19" : {"name": "Peacekeeper", "chance":2, "difficulty":5, "image":"./images/guns/PeaceKeeper_SG.png"},
  "20" : {"name": "Mozambique", "chance":2, "difficulty":8, "image":"./images/guns/Mozambique_SG.png"},
  "21" : {"name": "Wingman", "chance":3, "difficulty":4, "image":"./images/guns/Wingman_Pistol.png"},
  "22" : {"name": "RE-45 Auto", "chance":3, "difficulty":4, "image":"./images/guns/RE-45_Pistol.png"},
  "23" : {"name": "P2020", "chance":2, "difficulty":4, "image":"./images/guns/P2020_Pistol.png"},
  "24" : {"name": "Any sniper", "chance":5, "difficulty":2, "image":"./images/guns/any_sniper.png"},
  "25" : {"name": "Any AR", "chance":5, "difficulty":2, "image":"./images/guns/any_AR.png"},
  "26" : {"name": "Any LMG", "chance":5, "difficulty":2, "image":"./images/guns/any_LMG.png"},
  "27" : {"name": "Any SMG", "chance":5, "difficulty":2, "image":"./images/guns/any_SMG.png"},
  "28" : {"name": "Any shotgun", "chance":5, "difficulty":3, "image":"./images/guns/any_SG.png"},
  "29" : {"name": "Any pistol", "chance":5, "difficulty":2, "image":"./images/guns/any_pistol.png"},
  "30" : {"name": "Any gun", "chance":20, "difficulty":1, "image":"./images/guns/any.png"},
  "31" : {"name": "Fists", "chance":2, "difficulty":10, "image":"./images/guns/fists.png"}
}

var armorObject = {
  "1" : {"name": "Gray armor only", "chance":10, "difficulty":4, "image":"./images/armor/gray.png"},
  "2" : {"name": "Blue armor only", "chance":10, "difficulty":5, "image":"./images/armor/blue.png"},
  "3" : {"name": "Purple armor only", "chance":10, "difficulty":6, "image":"./images/armor/purple.png"},
  "4" : {"name": "Gold armor only", "chance":5, "difficulty":8, "image":"./images/armor/gold.png"},
  "5" : {"name": "Up to blue armor", "chance":15, "difficulty":3, "image":"./images/armor/upto-blue.png"},
  "6" : {"name": "Up to purple armor", "chance":15, "difficulty":2, "image":"./images/armor/upto-purple.png"},
  "7" : {"name": "Any armor", "chance":25, "difficulty":1, "image":"./images/armor/any.png"},
  "8" : {"name": "No armor", "chance":10, "difficulty":10, "image":"./images/armor/none.png"}
}

var helmetObject = {
  "1" : {"name": "Gray helmet only", "chance":10, "difficulty":4, "image":"./images/helmets/gray.png"},
  "2" : {"name": "Blue helmet only", "chance":10, "difficulty":5, "image":"./images/helmets/blue.png"},
  "3" : {"name": "Purple helmet only", "chance":10, "difficulty":6, "image":"./images/helmets/purple.png"},
  "4" : {"name": "Gold helmet only", "chance":5, "difficulty":8, "image":"./images/helmets/gold.png"},
  "5" : {"name": "Up to blue helmet", "chance":15, "difficulty":3, "image":"./images/helmets/upto_blue.png"},
  "6" : {"name": "Up to purple helmet", "chance":15, "difficulty":2, "image":"./images/helmets/upto_purple.png"},
  "7" : {"name": "Any helmet", "chance":25, "difficulty":1, "image":"./images/helmets/any.png"},
  "8" : {"name": "No helmet", "chance":10, "difficulty":10, "image":"./images/helmets/none.png"}
}

var personalObject = {
  "1" : {"name": "You can only carry one extra mag of ammo for each gun you are carrying", "chance":10, "difficulty":5, "image":""},
  "2" : {"name": "You cannot use ziplines", "chance":10, "difficulty":3, "image":""},
  "3" : {"name": "You cannot open doors but you may kick them open.", "chance":3, "difficulty":1, "image":""},
  "4" : {"name": "You cannot open pods", "chance":10, "difficulty":5, "image":""},
  "5" : {"name": "If you open a death box you must swap one of your guns for one of theirs. This overrides your gun rules.", "chance":10, "difficulty":5, "image":""},
  "6" : {"name": "You must occasionally do an enemy ping. You are not allowed to communicate to your team if it is real or not.", "chance":10, "difficulty":2, "image":""},
  "7" : {"name": "Shield cells only. No batteries for you.", "chance":10, "difficulty":5, "image":""},
  "8" : {"name": "No knock down shields for you.", "chance":10, "difficulty":4, "image":""},
  "9" : {"name": "No backpacks for you.", "chance":10, "difficulty":8, "image":""},
  "10" : {"name": "No attachments for any of your guns.", "chance":8, "difficulty":1, "image":""},
  "11" : {"name": "I'm so sorry. You must crouch everywhere you walk. Clambering, balloons, and zips are allowed.", "chance":10, "difficulty":10, "image":""},
  "12" : {"name": "If you have a scope on your gun, you must do a 360 before firing the first bullet in your clip", "chance":10, "difficulty":6, "image":""},
  "13" : {"name": "Respect the Dead: No looting bodies.", "chance":10, "difficulty":8, "image":""},
  "14" : {"name": "Every time you go up a balloon you must keep shooting until you reach the top", "chance":10, "difficulty":7, "image":""},
  "15" : {"name": "Lazy Looter: You cannot loot care package.", "chance":10, "difficulty":3, "image":""},
  "16" : {"name": "You are not allowed to carry or throw grenades.", "chance":10, "difficulty":5, "image":""},
  "17" : {"name": "The first gun you find, no matter type is the only weapon you can use for the game. This overrides your gun rules.", "chance":10, "difficulty":7, "image":""},
  "18" : {"name": "Grounded: You can only loot the bottom story/floor of any building/house/structure.", "chance":10, "difficulty":4, "image":""},
  "19" : {"name": "You cannot shoot at someone until they start shooting at you.", "chance":10, "difficulty":8, "image":""},
  "20" : {"name": "You are not allowed to ping.", "chance":10, "difficulty":3, "image":""},
  "21" : {"name": "You must unbind your sprint key this game.", "chance":8, "difficulty":1, "image":""},
  "22" : {"name": "You must turn down the master game volume to zero.", "chance":10, "difficulty":7, "image":""},
  "23" : {"name": "No-scoping only.", "chance":10, "difficulty":7, "image":""},
  "24" : {"name": "Every grenade you see, you must pick up and immediately throw it.", "chance":10, "difficulty":6, "image":""},
  "25" : {"name": "You must fire three warning shots before engaging an enemy team.", "chance":10, "difficulty":5, "image":""},
  "26" : {"name": "You MUST pick up every Ultimate accelerant you find, but you cannot use or drop them. Drop something to make space.", "chance":10, "difficulty":7, "image":""},
  "27" : {"name": "Laid to rest: If a squad mate is fully killed YOU cannot resurrect them.", "chance":10, "difficulty":5, "image":""},
  "28" : {"name": "Before resurrecting a teammate you must drop ALL of your gear. It's off limits to anyone on your team.", "chance":10, "difficulty":7, "image":""},
  "29" : {"name": "Flightmaster: You must use every redeploy balloon you see.", "chance":10, "difficulty":4, "image":""},
  "30" : {"name": "Take the role of hypeman. You need to be commentating on everyone elses moves.", "chance":10, "difficulty":2, "image":""},
  "31" : {"name": "LUCKY!!! No special rules!", "chance":10, "difficulty":1, "image":""},
  "32" : {"name": "Gray backpack only", "chance":10, "difficulty":2, "image":""},
  "33" : {"name": "Isolation: Mute discord and game.", "chance":10, "difficulty":10, "image":""},
  "34" : {"name": "Dictator: You decide where the team goes. Reprimand any teammate that forgets to call you Sir.", "chance":10, "difficulty":2, "image":""}
}

// user input triggers this function to start the RNG process.
function apexRng() {
    getNumberOfPlayers();
    setPlayers(); 
    differentLegends();
}

function printPlayers() {
  console.log(player1);
  console.log(player2);
  console.log(player3);
  if (playerNum >= 1) {
    $("#player1name").html(player1.name)
    $("#player1legend").html(player1.legend)
    $("#player1gun1").html(player1.gun1)
    $("#player1gun2").html(player1.gun2)
    $("#player1armor").html(player1.armor)
    $("#player1helmet").html(player1.helmet)
    $("#player1personal").html(player1.personal)
    $("#player1image").attr("src", player1.legendimage)
    $("#player1helmetimage").attr("src", player1.helmetimage)
    $("#player1armorimage").attr("src", player1.armorimage)
    $("#player1gun1image").attr("src", player1.gun1image)
    $("#player1gun2image").attr("src", player1.gun2image)
    // $("#player1difficulty").html(player1.difficulty)
    ldbar = new ldBar("#player1bar", {
      "data-fill-background":'#f00', 
      "data-fill": '#f00',
      "data-duration": "2000"
    });
    ldbar.set(player1.difficulty/.5);
  }
  if (playerNum >= 2) {
    $("#player2name").html(player2.name)
    $("#player2legend").html(player2.legend)
    $("#player2gun1").html(player2.gun1)
    $("#player2gun2").html(player2.gun2)
    $("#player2armor").html(player2.armor)
    $("#player2helmet").html(player2.helmet)
    $("#player2personal").html(player2.personal)
    $("#player2image").attr("src", player2.legendimage)
    $("#player2helmetimage").attr("src", player2.helmetimage)
    $("#player2armorimage").attr("src", player2.armorimage)
    $("#player2gun1image").attr("src", player2.gun1image)
    $("#player2gun2image").attr("src", player2.gun2image)
    // $("#player2difficulty").html(player2.difficulty)
    ldbar = new ldBar("#player2bar", {
      "data-fill-background":'#f00', 
      "data-fill": '#f00',
      "data-duration": "2000"
    });
    ldbar.set(player2.difficulty/.5);
  }
  if (playerNum == 3) {
    $("#player3name").html(player3.name)
    $("#player3legend").html(player3.legend)
    $("#player3gun1").html(player3.gun1)
    $("#player3gun2").html(player3.gun2)
    $("#player3armor").html(player3.armor)
    $("#player3helmet").html(player3.helmet)
    $("#player3personal").html(player3.personal)
    $("#player3image").attr("src", player3.legendimage)
    $("#player3helmetimage").attr("src", player3.helmetimage)
    $("#player3armorimage").attr("src", player3.armorimage)
    $("#player3gun1image").attr("src", player3.gun1image)
    $("#player3gun2image").attr("src", player3.gun2image)
    // $("#player3difficulty").html(player3.difficulty)
    ldbar = new ldBar("#player3bar", {
      "data-fill-background":'#f00', 
      "data-fill": '#f00',
      "data-duration": "2000"
    });
    ldbar.set(player3.difficulty/.5);
  }
  //difficulty test
  setTimeout(function(){ $(".ldBar-label").fadeTo("fast", 1) }, 300);
}

// Make sure players don't tet the same legend to play as
function differentLegends() {
  if(playerNum == 2) {
    if(player1.legend != player2.legend) {
      //continue
      printPlayers()

    } else {
      // reset 2
      if (player1.legend == player2.legend) {
        player2.legend = legendObject[getRandomInt(1,countProperties(legendObject))].name
      }
      //rerun the legend check
      differentLegends();
    }
  }
  
  else if(playerNum == 3) {
    if(player1.legend != player2.legend && player2.legend != player3.legend && player3.legend != player1.legend) {
      //continue
      printPlayers()
    } else {
      //reset 2 or 3
      if (player1.legend == player2.legend) {
        player2.legend = legendObject[getRandomInt(1,countProperties(legendObject))].name
      }
      if (player2.legend == player3.legend) {
        player3.legend = legendObject[getRandomInt(1,countProperties(legendObject))].name
      }
    }
  }
  
  else {
    //continue
    printPlayers()
  }
}

//loop through the number of players and dynamically set player objects for them via the constructor function below
function setPlayers() {
  for(var i = 1; i <= playerNum; i++) {
      var legend = getRandomInt(1,countProperties(legendObject));
      var gun1 = getRandomInt(1,countProperties(gunObject));
      var gun2 = getRandomInt(1,countProperties(gunObject));
      var armor = getRandomInt(1,countProperties(armorObject));
      var helmet = getRandomInt(1,countProperties(helmetObject));
      var personal = getRandomInt(1,countProperties(personalObject));
      var difficulty = legendObject[legend].difficulty + gunObject[gun1].difficulty + gunObject[gun2].difficulty + armorObject[armor].difficulty + helmetObject[helmet].difficulty + personalObject[personal].difficulty;
    
      if (i == 1) {
        player1 = new Player(legendObject[legend].name, legendObject[legend].image, gunObject[gun1].name, gunObject[gun1].image, gunObject[gun2].name, gunObject[gun2].image, armorObject[armor].name, armorObject[armor].image, helmetObject[helmet].name, helmetObject[helmet].image, personalObject[personal].name, $("#player"+i).val(), difficulty);
      }
      if (i == 2) {
        player2 = new Player(legendObject[legend].name, legendObject[legend].image, gunObject[gun1].name, gunObject[gun1].image, gunObject[gun2].name, gunObject[gun2].image, armorObject[armor].name, armorObject[armor].image, helmetObject[helmet].name, helmetObject[helmet].image, personalObject[personal].name, $("#player"+i).val(), difficulty);
      }
      if (i == 3) {
        player3 = new Player(legendObject[legend].name, legendObject[legend].image, gunObject[gun1].name, gunObject[gun1].image, gunObject[gun2].name, gunObject[gun2].image, armorObject[armor].name, armorObject[armor].image, helmetObject[helmet].name, helmetObject[helmet].image, personalObject[personal].name, $("#player"+i).val(), difficulty);
      }
    
  }

}

// player constructor function
function Player(legend, legendimage, gun1, gun1image, gun2, gun2image, armor, armorimage, helmet, helmetimage, personal, name, difficulty) {
  this.legend = legend;
  this.legendimage = legendimage;
  this.gun1 = gun1;
  this.gun1image = gun1image;
  this.gun2 = gun2;
  this.gun2image = gun2image;
  this.armor = armor;
  this.armorimage = armorimage;
  this.helmet = helmet;
  this.helmetimage = helmetimage;
  this.personal = personal;
  this.name = name;
  this.difficulty = difficulty;
}

// get the number of items in an object
function countProperties(obj) {
    var count = 0;
    for(var prop in obj) {
        if(obj.hasOwnProperty(prop))
            ++count;
    }
    return count;
}

// get a random int in a range
function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// count the number of inputs and set the number of players.
function getNumberOfPlayers() {
  if($('#player1').val()) {
     playerNum = 1;
  }
  if($('#player2').val()) {
     playerNum++;
  }
  if($('#player3').val()) {
     playerNum++;
  }
}