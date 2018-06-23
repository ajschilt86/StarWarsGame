$(document).ready(function () {
    var char1 = {
        health: 100,
        attack: 5
    }

    var char2 = {
        health: 150,
        attack: 5
    }

    var char3 = {
        health: 200,
        attack: 5
    }

    var char4 = {
        health: 250,
        attack: 5
    }

    var wins = 0;
    var loss = 0;

    //reset//

    function reset() {

        char1 = {
            health: 100,
            attack: 5
        }

        char2 = {
            health: 150,
            attack: 5
        }

        char3 = {
            health: 200,
            attack: 5
        }

        char4 = {
            health: 250,
            attack: 5
        }

        pick = false;
        attacker = "";
        defender = "";
        defeated = [];
        $("#stats").empty();
        $("#charOne, #charTwo, #charThree, #charFour").appendTo("#charChoice");
        $("#charOne, #charTwo, #charThree, #charFour").removeClass("newDefender");
        $("#charOne, #charTwo, #charThree, #charFour").show();
    }

    var pick = false;

    //choose a character and the rest go down as enemies

    var attacker = "";

    $("#attackBtn").hide();

    $("#charOne").on("click", function () {
        if (pick === false) {
            console.log(pick);
            console.log("#charOne");
            $("#charTwo, #charThree, #charFour").appendTo("#enemies");
            $("#charTwo, #charThree, #charFour").addClass("newDefender");
            pick = true;
            attacker = char1;
        }
    });

    $("#charTwo").on("click", function () {
        if (pick === false) {
            console.log(pick);
            console.log("#charTwo");
            $("#charOne, #charThree, #charFour").appendTo("#enemies");
            $("#charOne, #charThree, #charFour").addClass("newDefender");
            pick = true;
            attacker = char2;
        }
    });

    $("#charThree").on("click", function () {
        if (pick === false) {
            console.log(pick);
            console.log("#charThree");
            $("#charOne, #charTwo, #charFour").appendTo("#enemies");
            $("#charOne, #charTwo, #charFour").addClass("newDefender");
            pick = true;
            attacker = char3;
        }
    });

    $("#charFour").on("click", function () {
        if (pick === false) {
            console.log(pick);
            console.log("#charFour");
            $("#charOne, #charTwo, #charThree").appendTo("#enemies");
            $("#charOne, #charTwo, #charThree").addClass("newDefender");
            pick = true;
            attacker = char4;
        }
    });

    //pick an enemy, goes down to defender
    var defender = "";

    $("#charOne").on("click", function () {
        if (($("#charOne").hasClass("newDefender")) === true) {
            if (defender === "") {
                console.log(pick);
                console.log("#charOne");
                $("#charOne").appendTo("#defender");
                console.log("#enemies");
                defender = char1;
                $("#attackBtn").show();
            }
        }
    });

    $("#charTwo").on("click", function () {
        if (($("#charTwo").hasClass("newDefender")) === true) {
            if (defender === "") {
                console.log(pick);
                console.log("#charTwo");
                $("#charTwo").appendTo("#defender");
                console.log("#enemies");
                defender = char2;
                $("#attackBtn").show();
            }
        }
    });

    $("#charThree").on("click", function () {
        if (($("#charThree").hasClass("newDefender")) === true) {
            if (defender === "") {
                console.log(pick);
                console.log("#charThree");
                $("#charThree").appendTo("#defender");
                console.log("#enemies");
                defender = char3;
                $("#attackBtn").show();
            }
        }
    });

    $("#charFour").on("click", function () {
        if (($("#charFour").hasClass("newDefender")) === true) {
            if (defender === "") {
                console.log(pick);
                console.log("#charFour");
                $("#charFour").appendTo("#defender");
                console.log("#enemies");
                defender = char4;
                $("#attackBtn").show();
            }
        }
    });

    //attack enemy, adjust player/defender hp and attack

    var defeated = [];

    $("#attackBtn").on("click", function () {

        defender.health = defender.health - attacker.attack;
        attacker.health = attacker.health - defender.attack;

        attacker.attack = attacker.attack + Math.round(Math.random() * 20);
        $("#stats").empty();        
        // $("#stats").append("<div>Attacker Health: " + attacker.health + "</div>");
        $("#stats").append("<div>Attacker Attack: " + attacker.attack + "</div>");
        //$("#stats").append("<div>Defender Health: " + defender.health + "</div>");
        $("#stats").append("<div>Defender Attack: " + defender.attack + "</div>");
        

        if (defender.health <= 0) {

            if ((char1.health) <= 0) {
                $("#charOne").hide();
                defeated.push(char1)
                $("#stats").text("Choose an Enemy!"); 
            }
            if ((char2.health) <= 0) {
                $("#charTwo").hide();
                defeated.push(char2)
                $("#stats").text("Choose an Enemy!"); 

            }
            if ((char3.health) <= 0) {
                $("#charThree").hide();
                defeated.push(char3)
                $("#stats").text("Choose an Enemy!"); 

            }
            if ((char4.health) <= 0) {
                $("#charFour").hide();
                defeated.push(char4)
                $("#stats").text("Choose an Enemy!"); 
            }
            defender = "";

            for (var i = 0; i < defeated.length; i++) {
                if (defeated.length === 6) {
                    reset();
                    wins++;
                    $("#wins").text("Wins: " + wins);
                }
                console.log(defeated);
            }

        }
        if (attacker.health <= 0) {
            reset();
            losses++;
            $("#losses").text("Losses: " + losses);
        }
        console.log(attacker);
        console.log(defender);
        console.log("defender.attack " + defender.attack);
        console.log("defender.health " + defender.health);
        console.log("attacker.attack " + attacker.attack);
        console.log("attacker.health " + attacker.health);


        console.log("defender.health " + defender.health);
        console.log("attacker.attack " + attacker.attack);
        console.log("attacker.health " + attacker.health);
    });














    //create objects
    //display 4 characters
    //choose a character and the rest go down as enemies
    //pick an enemy, goes down to defender
    //attack enemy, enemy damage is set, player damage increases each hit
    //defeated enemy, goes away
    //pick new enemy//
    //attack enemy with progressive damage
    //defeated enemy, goes away
    //pick new enemy//
    //win/lose game//

});

