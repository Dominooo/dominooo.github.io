var playerNum; //number of players.
var player1;
var player2;
var player3;

var legendObject = {
  "0" : {"name": "Wraith", "chance":1, "difficulty":8, "image":"./images/legends/wraith.png"},
  "1" : {"name": "Mirage", "chance":1, "difficulty":9, "image":"./images/legends/mirage.png"},
  "2" : {"name": "Octane", "chance":1, "difficulty":10, "image":"./images/legends/octane.png"},
  "3" : {"name": "Revenant", "chance":1, "difficulty":8, "image":"./images/legends/revenant.png"},
  "4" : {"name": "Gibralter", "chance":1, "difficulty":8, "image":"./images/legends/gibralter.png"},
  "5" : {"name": "Caustic", "chance":1, "difficulty":9, "image":"./images/legends/caustic.png"},
  "6" : {"name": "Wattson", "chance":1, "difficulty":9, "image":"./images/legends/wattson.png"},
  "7" : {"name": "Lifeline", "chance":1, "difficulty":8, "image":"./images/legends/lifeline.png"},
  "8" : {"name": "Loba", "chance":1, "difficulty":9, "image":"./images/legends/loba.png"},
  "9" : {"name": "Bloodhound", "chance":1, "difficulty":8, "image":"./images/legends/bloodhound.png"},
  "10" : {"name": "Pathfinder", "chance":1, "difficulty":8, "image":"./images/legends/pathfinder.png"},
  "11" : {"name": "Crypto", "chance":1, "difficulty":10, "image":"./images/legends/crypto.png"},
  "12" : {"name": "Bangalore", "chance":1, "difficulty":9, "image":"./images/legends/bangalore.png"}
}

var gunObject = {
  "0" : {"name": "Fists", "type":"none", "chance":1, "difficulty":10, "image":"./images/guns/fists.png"},
  "1" : {"name": "Kraber", "type":"shotgun", "chance":1, "difficulty":5, "image":"./images/guns/Kraber_SR.png"},
  "2" : {"name": "Sentinel", "type":"sniper", "chance":3, "difficulty":4, "image":"./images/guns/Sentinel.png"},
  "3" : {"name": "Longbow", "type":"sniper", "chance":3, "difficulty":3, "image":"./images/guns/Longbow_DRM_SR.png"},
  "4" : {"name": "Triple Take", "type":"sniper", "chance":3, "difficulty":3, "image":"./images/guns/Tripple_Take_SR.png"},
  "5" : {"name": "Charge Rifle", "type":"sniper", "chance":3, "difficulty":4, "image":"./images/guns/Charge_Rifle.png"},
  "6" : {"name": "Hemlok", "type":"ar", "chance":3, "difficulty":3, "image":"./images/guns/Hemlok_Burst_AR.png"},
  "7" : {"name": "Flatline", "type":"ar", "chance":3, "difficulty":4, "image":"./images/guns/Flatline_AR.png"},
  "8" : {"name": "G7 Scout", "type":"ar", "chance":3, "difficulty":2, "image":"./images/guns/G7_Scout_SR.png"},
  "9" : {"name": "R-301", "type":"ar", "chance":3, "difficulty":4, "image":"./images/guns/R-301_Carabine_AR.png"},
  "10" : {"name": "HAVOC", "type":"ar", "chance":3, "difficulty":4, "image":"./images/guns/Havoc_Rifle_AR.png"},
  "11" : {"name": "Devotion", "type":"lmg", "chance":1, "difficulty":5, "image":"./images/guns/Devotion_LMG.png"},
  "12" : {"name": "Spitfire", "type":"lmg", "chance":3, "difficulty":3, "image":"./images/guns/Spitfire_LMG.png"},
  "13" : {"name": "L-STAR", "type":"lmg", "chance":3, "difficulty":3, "image":"./images/guns/L-Star.png"},
  "14" : {"name": "Prowler", "type":"smg", "chance":3, "difficulty":2, "image":"./images/guns/Prowler_Burst_SMG.png"},
  "15" : {"name": "R-99", "type":"smg", "chance":3, "difficulty":3, "image":"./images/guns/R-99_SMG.png"},
  "16" : {"name": "Alternator", "type":"smg", "chance":3, "difficulty":5, "image":"./images/guns/Alternator_SMG.png"},
  "17" : {"name": "Mastiff", "type":"shotgun", "chance":3, "difficulty":3, "image":"./images/guns/Mastiff_SG.png"},
  "18" : {"name": "EVA-8", "type":"shotgun", "chance":3, "difficulty":4, "image":"./images/guns/EVA-8_Auto_SG.png"},
  "19" : {"name": "Peacekeeper", "type":"shotgun", "chance":1, "difficulty":5, "image":"./images/guns/PeaceKeeper_SG.png"},
  "20" : {"name": "Mozambique", "type":"shotgun", "chance":1, "difficulty":8, "image":"./images/guns/Mozambique_SG.png"},
  "21" : {"name": "Wingman", "type":"pistol", "chance":3, "difficulty":4, "image":"./images/guns/Wingman_Pistol.png"},
  "22" : {"name": "RE-45 Auto", "type":"pistol", "chance":3, "difficulty":4, "image":"./images/guns/RE-45_Pistol.png"},
  "23" : {"name": "P2020", "type":"pistol", "chance":3, "difficulty":4, "image":"./images/guns/P2020_Pistol.png"},
  "24" : {"name": "Any sniper", "type":"sniper", "chance":10, "difficulty":2, "image":"./images/guns/any_sniper.png"},
  "25" : {"name": "Any AR", "type":"ar", "chance":10, "difficulty":2, "image":"./images/guns/any_AR.png"},
  "26" : {"name": "Any LMG", "type":"lmg", "chance":10, "difficulty":2, "image":"./images/guns/any_LMG.png"},
  "27" : {"name": "Any SMG", "type":"smg", "chance":10, "difficulty":2, "image":"./images/guns/any_SMG.png"},
  "28" : {"name": "Any shotgun", "type":"shotgun", "chance":10, "difficulty":3, "image":"./images/guns/any_SG.png"},
  "29" : {"name": "Any pistol", "type":"pistol", "chance":10, "difficulty":2, "image":"./images/guns/any_pistol.png"},
  "30" : {"name": "Any gun", "type":"any", "chance":5, "difficulty":1, "image":"./images/guns/any.png"}
  
}

var armorObject = {
  "0" : {"name": "Gray armor only", "chance":5, "difficulty":4, "image":"./images/armor/gray.png"},
  "1" : {"name": "Blue armor only", "chance":10, "difficulty":5, "image":"./images/armor/blue.png"},
  "2" : {"name": "Purple armor only", "chance":5, "difficulty":6, "image":"./images/armor/purple.png"},
  "3" : {"name": "Gold armor only", "chance":3, "difficulty":8, "image":"./images/armor/gold.png"},
  "4" : {"name": "Up to blue armor", "chance":20, "difficulty":3, "image":"./images/armor/upto-blue.png"},
  "5" : {"name": "Up to purple armor", "chance":15, "difficulty":2, "image":"./images/armor/upto-purple.png"},
  "6" : {"name": "Any armor", "chance":5, "difficulty":1, "image":"./images/armor/any.png"},
  "7" : {"name": "No armor", "chance":3, "difficulty":20, "image":"./images/armor/none.png"}
}

var helmetObject = {
  "0" : {"name": "Gray helmet only", "chance":5, "difficulty":4, "image":"./images/helmets/gray.png"},
  "1" : {"name": "Blue helmet only", "chance":10, "difficulty":5, "image":"./images/helmets/blue.png"},
  "2" : {"name": "Purple helmet only", "chance":5, "difficulty":6, "image":"./images/helmets/purple.png"},
  "3" : {"name": "Gold helmet only", "chance":3, "difficulty":8, "image":"./images/helmets/gold.png"},
  "4" : {"name": "Up to blue helmet", "chance":20, "difficulty":3, "image":"./images/helmets/upto_blue.png"},
  "5" : {"name": "Up to purple helmet", "chance":15, "difficulty":2, "image":"./images/helmets/upto_purple.png"},
  "6" : {"name": "Any helmet", "chance":5, "difficulty":1, "image":"./images/helmets/any.png"},
  "7" : {"name": "No helmet", "chance":3, "difficulty":10, "image":"./images/helmets/none.png"}
}

var personalObject = {
  "0" : {"name": "You must intentionally down yourself with a grenade, afterward you may remove your helmet restriction.", "chance":10, "difficulty":2, "image":""},
  "1" : {"name": "You can only carry one extra mag of ammo for each gun you are carrying, but you can allow one teammate to swap their gun slot for a wingman.", "chance":5, "difficulty":5, "image":""},
  "2" : {"name": "You cannot use ziplines, but you can use an RE-45 until you find one of the guns you are looking for.", "chance":5, "difficulty":3, "image":""},
  "3" : {"name": "You cannot open doors but you may kick them open. Kick open 10 unique doors to veto your gun slot 2 rule.", "chance":10, "difficulty":1, "image":""},
  "4" : {"name": "You cannot open pods. You can use any shotgun until the first ring closes though.", "chance":5, "difficulty":7, "image":""},
  "5" : {"name": "If you open a death box you must swap one of your guns for one of theirs. This overrides your gun slot 1 rules.", "chance":5, "difficulty":5, "image":""},
  "6" : {"name": "You must occasionally do an enemy ping. You are not allowed to communicate to your team if it is real or not.", "chance":10, "difficulty":2, "image":""},
  "7" : {"name": "Shield cells only. No batteries for you. Collect 20 to reset your gun slot 2 rule.", "chance":5, "difficulty":5, "image":""},
  "8" : {"name": "No knock down shields for you, but you can veto one teammate's helmet rules.", "chance":10, "difficulty":3, "image":""},
  "9" : {"name": "No backpacks for you, but you can veto one teammate's armor rules.", "chance":5, "difficulty":7, "image":""},
  "10" : {"name": "No attachments for any of your guns. Feel free to wear whatever armor/helmet you want though. (Overrides armor and helmet rules)", "chance":2, "difficulty":9, "image":""},
  "11" : {"name": "I'm so sorry. You must crouch everywhere you walk. Clambering, balloons, and zips are allowed. ALL your other rules are overridden.", "chance":1, "difficulty":100, "image":""},
  "12" : {"name": "If you have a scope on your gun, you must do a 360 before firing the first bullet in your clip. You are allowed to wear current armor tier, AND the next tier higher.", "chance":5, "difficulty":6, "image":""},
  "13" : {"name": "Respect the Dead: No looting bodies. Allow one teammate to add purple armor to their allowed armor pool.", "chance":5, "difficulty":5, "image":""},
  "14" : {"name": "Every time you go up a balloon you must keep shooting until you reach the top", "chance":10, "difficulty":2, "image":""},
  "15" : {"name": "Lazy Looter: You cannot loot care package or enter locked vaults, but you can use a P2020 until you find the gun you are looking for.", "chance":5, "difficulty":5, "image":""},
  "16" : {"name": "You are not allowed to carry or throw grenades. Feel free to use ANY sniper until the first circle closes though.", "chance":5, "difficulty":5, "image":""},
  "17" : {"name": "The first gun you find, no matter type is now your gun slot 1 weapon. This overrides your gun slot 1 rules.", "chance":10, "difficulty":3, "image":""},
  "18" : {"name": "Grounded: You can only loot the bottom story/floor of any building/house/structure.", "chance":10, "difficulty":4, "image":""},
  "19" : {"name": "You cannot shoot at someone until they start shooting at you. You may veto 1 teammate's gun 1 rule.", "chance":2, "difficulty":8, "image":""},
  "20" : {"name": "You are not allowed to ping, but you can use an Alternator until you find a gun you are looking for.", "chance":5, "difficulty":4, "image":""},
  "21" : {"name": "You must unbind your sprint key this game. You are also allowed to wear ANY armor. (Overrides armor rule)", "chance":3, "difficulty":6, "image":""},
  "22" : {"name": "You must turn down the master game volume to 10%, but you can use any gun as your primary. (Overrides gun slot 1 rule)", "chance":5, "difficulty":6, "image":""},
  "23" : {"name": "No-scoping only, but can veto a rule for 1 teammate.", "chance":5, "difficulty":9, "image":""},
  "24" : {"name": "Every grenade you see, you must pick up and immediately throw it. Gain the next tier higher in your helmet pool.", "chance":5, "difficulty":7, "image":""},
  "25" : {"name": "You must fire three warning shots before engaging an enemy team. For every kill you get you may veto 1 rule on your team.", "chance":5, "difficulty":6, "image":""},
  "26" : {"name": "You MUST pick up but not use EVERY Ultimate Accelerant you find. Also reset your gun slot 2 rule.", "chance":5, "difficulty":7, "image":""},
  "27" : {"name": "Laid to rest: If a squad mate is fully killed YOU cannot resurrect them.", "chance":5, "difficulty":5, "image":""},
  "28" : {"name": "Before resurrecting a teammate you must permanantly discard ALL of your gear. It's available to your newly spawned teammate if they can use it though.", "chance":5, "difficulty":7, "image":""},
  "29" : {"name": "Flightmaster: Use 3 unique redeployment balloons and you veto a rule of your choice for a teammate.", "chance":10, "difficulty":4, "image":""},
  "30" : {"name": "If you get a kill you may swap 1 gun with any teammate.", "chance":10, "difficulty":2, "image":""},
  "31" : {"name": "LUCKY!!! No special rules!", "chance":5, "difficulty":1, "image":""},
  "32" : {"name": "Gray backpack only, however you may use ANY gun for the first minute of the game.", "chance":10, "difficulty":2, "image":""},
  "33" : {"name": "Dictator: You decide where the team goes. Reprimand any teammate that forgets to call you Sir.", "chance":10, "difficulty":2, "image":""}
  
}

var objArr = [legendObject, gunObject, armorObject, helmetObject, personalObject];
var legendArray = [];
var gunArray = [];
var armorArray = [];
var helmetArray = [];
var personalArray = [];
var nameArr = [legendArray, gunArray, armorArray, helmetArray, personalArray];


// user input triggers this function to start the RNG process.
function apexRng() {
    getNumberOfPlayers();
    createOddsTable();
    setPlayers(); 
    differentLegends();
}

function createOddsTable() {
  for(var i = 0; i < objArr.length; i++) {
    arrName = nameArr[i];
    createWeightedArr(objArr[i], arrName);
  }
}

function createWeightedArr(obj, arrName) {
  // how many properties do we need to loop through
  var objCount = countProperties(obj);
  // loop through each property
  for(var i = 0; i <= objCount; i++) {
    var times = obj[i].chance;
      // for as many chances as the property has, push it to the current array that lives on the global scope.
      for(var j = 0; j <= times; j++) {
        arrName.push(obj[i]);   
    }
  }
};

function printPlayers() {
  // console.log(player1);
  // console.log(player2);
  // console.log(player3);
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
    ldbar = new ldBar("#player1bar", {
      "data-fill-background":'#f00', 
      "data-fill": '#f00',
      "data-duration": "2000"
    });
    ldbar.set(player1.difficulty/1);
    $("#player1difficulty").html(player1.score)
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
    ldbar = new ldBar("#player2bar", {
      "data-fill-background":'#f00', 
      "data-fill": '#f00',
      "data-duration": "2000"
    });
    ldbar.set(player2.difficulty/1);
    $("#player2difficulty").html(player2.score)
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
    ldbar = new ldBar("#player3bar", {
      "data-fill-background":'#f00', 
      "data-fill": '#f00',
      "data-duration": "2000"
    });
    ldbar.set(player3.difficulty/1);
    $("#player3difficulty").html(player3.score)
  }
  //difficulty test
  // setTimeout(function(){ $(".ldBar-label").fadeTo("fast", 1) }, 300);
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
        player2.legend = legendArray[getRandomInt(1,legendArray.length)].name
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
        player2.legend = legendArray[getRandomInt(1,legendArray.length)].name
      }
      if (player2.legend == player3.legend) {
        player3.legend = legendArray[getRandomInt(1,legendArray.length)].name
      }
    }
  }
  
  else {
    //continue
    printPlayers()
  }
}

//loop through the number of players and dynamically set player objects for them via the constructor function below
// function setPlayers() {
//   for(var i = 1; i <= playerNum; i++) {
//       var legend = getRandomInt(0,countProperties(legendObject));
//       var gun1 = getRandomInt(0,countProperties(gunObject));
//       var gun2 = getRandomInt(0,countProperties(gunObject));
//       var armor = getRandomInt(0,countProperties(armorObject));
//       var helmet = getRandomInt(0,countProperties(helmetObject));
//       var personal = getRandomInt(0,countProperties(personalObject));
//       var difficulty = legendObject[legend].difficulty + gunObject[gun1].difficulty + gunObject[gun2].difficulty + armorObject[armor].difficulty + helmetObject[helmet].difficulty + personalObject[personal].difficulty;
//       var score = legendObject[legend].difficulty * ((gunObject[gun1].difficulty * gunObject[gun2].difficulty) + (gunObject[gun1].difficulty * gunObject[gun2].difficulty)) * ((armorObject[armor].difficulty * helmetObject[helmet].difficulty) + (armorObject[armor].difficulty * helmetObject[helmet].difficulty)) * personalObject[personal].difficulty;
//       if (i == 1) {
//         player1 = new Player(legendObject[legend].name, legendObject[legend].image, gunObject[gun1].name, gunObject[gun1].image, gunObject[gun2].name, gunObject[gun2].image, armorObject[armor].name, armorObject[armor].image, helmetObject[helmet].name, helmetObject[helmet].image, personalObject[personal].name, $("#player"+i).val(), difficulty, score);
//       }
//       if (i == 2) {
//         player2 = new Player(legendObject[legend].name, legendObject[legend].image, gunObject[gun1].name, gunObject[gun1].image, gunObject[gun2].name, gunObject[gun2].image, armorObject[armor].name, armorObject[armor].image, helmetObject[helmet].name, helmetObject[helmet].image, personalObject[personal].name, $("#player"+i).val(), difficulty, score);
//       }
//       if (i == 3) {
//         player3 = new Player(legendObject[legend].name, legendObject[legend].image, gunObject[gun1].name, gunObject[gun1].image, gunObject[gun2].name, gunObject[gun2].image, armorObject[armor].name, armorObject[armor].image, helmetObject[helmet].name, helmetObject[helmet].image, personalObject[personal].name, $("#player"+i).val(), difficulty, score);
//       }
    
//   }
// }

function setPlayers() {
  for(var i = 1; i <= playerNum; i++) {
      var legend = getRandomInt(0,legendArray.length);
      var gun1 = getRandomInt(0,gunArray.length);
      var gun2 = getRandomInt(0,gunArray.length);
      var armor = getRandomInt(0,armorArray.length);
      var helmet = getRandomInt(0,helmetArray.length);
      var personal = getRandomInt(0,personalArray.length);
      var difficulty = (legendArray[legend].difficulty + ((gunArray[gun1].difficulty * gunArray[gun2].difficulty)) + (armorArray[armor].difficulty * helmetArray[helmet].difficulty)) * personalArray[personal].difficulty;
      var score = (legendArray[legend].difficulty + ((gunArray[gun1].difficulty * gunArray[gun2].difficulty)) + (armorArray[armor].difficulty * helmetArray[helmet].difficulty)) * personalArray[personal].difficulty;

      if (i == 1) {
        
        if (gunArray[gun1].name == gunArray[gun2].name) {
          setPlayers();
        } else {
          player1 = new Player(legendArray[legend].name, legendArray[legend].image, gunArray[gun1].name, gunArray[gun1].image, gunArray[gun2].name, gunArray[gun2].image, armorArray[armor].name, armorArray[armor].image, helmetArray[helmet].name, helmetArray[helmet].image, personalArray[personal].name, $("#player"+i).val(), difficulty, score);
        }
      }
      if (i == 2) {
        
        if (gunArray[gun1].name == gunArray[gun2].name) {
          setPlayers();
        } else {
          player2 = new Player(legendArray[legend].name, legendArray[legend].image, gunArray[gun1].name, gunArray[gun1].image, gunArray[gun2].name, gunArray[gun2].image, armorArray[armor].name, armorArray[armor].image, helmetArray[helmet].name, helmetArray[helmet].image, personalArray[personal].name, $("#player"+i).val(), difficulty, score);
        }
      }
      if (i == 3) {
        
        if (gunArray[gun1].name == gunArray[gun2].name) {
          setPlayers();
        } else {
          player3 = new Player(legendArray[legend].name, legendArray[legend].image, gunArray[gun1].name, gunArray[gun1].image, gunArray[gun2].name, gunArray[gun2].image, armorArray[armor].name, armorArray[armor].image, helmetArray[helmet].name, helmetArray[helmet].image, personalArray[personal].name, $("#player"+i).val(), difficulty, score);
        }
      }
    
  }
}

// player constructor function
function Player(legend, legendimage, gun1, gun1image, gun2, gun2image, armor, armorimage, helmet, helmetimage, personal, name, difficulty, score) {
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
  this.score = score;
}

// get the number of items in an object
function countProperties(obj) {
    var count = 0;
    for(var prop in obj) {
        if(obj.hasOwnProperty(prop))
            ++count;
    }
    return (count - 1);
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