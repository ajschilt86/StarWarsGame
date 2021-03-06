$(document).ready(function () {
    var char1 = {
        health: 120,
        attack: 12
    }

    var char2 = {
        health: 100,
        attack: 14
    }

    var char3 = {
        health: 150,
        attack: 8
    }

    var char4 = {
        health: 180,
        attack: 10
    }

    var wins = 0;
    var losses = 0;
    var themeSong = new Audio("assets/sounds/themeSong.mp3");
    var sound1 = new Audio("assets/sounds/sound1.mp3");
    var sound2 = new Audio("assets/sounds/sound2.mp3");
    var sound3 = new Audio("assets/sounds/sound3.mp3");
    $("#attackBtn").hide();
    $("#enemy").hide();
    $("#defend").hide();
    $("#fightSelect").hide();
    $("#charOneHp").html("HP: " + char1.health);
    $("#charTwoHp").html("HP: " + char2.health);
    $("#charThreeHp").html("HP: " + char3.health);
    $("#charFourHp").html("HP: " + char4.health);


    /////sounds////



    $("#play").on("click", function () {
        if (true) {
            themeSong.play();
        }
    });
    $("#pause").on("click", function () {
        if (true) {
            themeSong.pause();
        }
    });

    $("#sounds").on("click", function () {
        if (true) {
            var soundArray = [sound1, sound2, sound3];
            var sound = soundArray[Math.floor(Math.random() * soundArray.length)];
            for (var i = 0; i < soundArray.length; i++) {
                sound.play();
                
            }
        }
    });

    //reset//

    function reset() {

        char1 = {
            health: 120,
            attack: 12
        }

        char2 = {
            health: 100,
            attack: 14
        }

        char3 = {
            health: 150,
            attack: 8
        }

        char4 = {
            health: 180,
            attack: 10
        }

        pick = false;
        attacker = "";
        defender = "";
        defeated = [];
        $("#stats").empty();
        $("#stats").show();
        $("#charOneWrap, #charTwoWrap, #charThreeWrap, #charFourWrap").appendTo("#charChoice");
        $("#charOne, #charTwo, #charThree, #charFour").removeClass("newDefender");
        $("#charOne, #charTwo, #charThree, #charFour").show();
        $("#charOneWrap, #charTwoWrap, #charThreeWrap, #charFourWrap").show();
        $("#charOneHp, #charTwoHp, #charThreeHp, #charFourHp").show();
        $("#charOneHp").html("HP: " + char1.health);
        $("#charTwoHp").html("HP: " + char2.health);
        $("#charThreeHp").html("HP: " + char3.health);
        $("#charFourHp").html("HP: " + char4.health);
        $("#attackBtn").hide();
        $("#enemy").hide();
        $("#defend").hide();
        $("#fightSelect").hide();
        $("#charOneHp, #charTwoHp, #charThreeHp, #charFourHp").css("background-color", "green").css("width", "100%");
    }

    var pick = false;

    //choose a character and the rest go down as enemies

    var attacker = "";



    $("#charOne").on("click", function () {
        if (pick === false) {
            console.log(pick);
            console.log("#charOne");
            $("#charTwoWrap, #charThreeWrap, #charFourWrap").appendTo("#enemies");
            $("#charTwo, #charThree, #charFour").addClass("newDefender");
            $("#enemy").show();
            pick = true;
            attacker = char1;
        }
    });

    $("#charTwo").on("click", function () {
        if (pick === false) {
            console.log(pick);
            console.log("#charTwo");
            $("#charOneWrap, #charThreeWrap, #charFourWrap").appendTo("#enemies");
            $("#charOne, #charThree, #charFour").addClass("newDefender");
            $("#enemy").show();
            pick = true;
            attacker = char2;
        }
    });

    $("#charThree").on("click", function () {
        if (pick === false) {
            console.log(pick);
            console.log("#charThree");
            $("#charOneWrap, #charTwoWrap, #charFourWrap").appendTo("#enemies");
            $("#charOne, #charTwo, #charFour").addClass("newDefender");
            $("#enemy").show();
            pick = true;
            attacker = char3;
        }
    });

    $("#charFour").on("click", function () {
        if (pick === false) {
            console.log(pick);
            console.log("#charFour");
            $("#charOneWrap, #charTwoWrap, #charThreeWrap").appendTo("#enemies");
            $("#charOne, #charTwo, #charThree").addClass("newDefender");
            $("#enemy").show();
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

                $("#charOneWrap").appendTo("#defender");
                console.log("#enemies");
                defender = char1;
                $("#attackBtn").show();
                $("#defend").show();
            }
        }
    });

    $("#charTwo").on("click", function () {
        if (($("#charTwo").hasClass("newDefender")) === true) {
            if (defender === "") {
                console.log(pick);
                console.log("#charTwo");

                $("#charTwoWrap").appendTo("#defender");
                console.log("#enemies");
                defender = char2;
                $("#attackBtn").show();
                $("#defend").show();
            }
        }
    });

    $("#charThree").on("click", function () {
        if (($("#charThree").hasClass("newDefender")) === true) {
            if (defender === "") {
                console.log(pick);
                console.log("#charThree");

                $("#charThreeWrap").appendTo("#defender");
                console.log("#enemies");
                defender = char3;
                $("#attackBtn").show();
                $("#defend").show();
            }
        }
    });

    $("#charFour").on("click", function () {
        if (($("#charFour").hasClass("newDefender")) === true) {
            if (defender === "") {
                console.log(pick);
                console.log("#charFour");
                $("#charFourWrap").appendTo("#defender");
                console.log("#enemies");
                defender = char4;
                $("#attackBtn").show();
                $("#defend").show();
            }
        }
    });

    //attack enemy, adjust player/defender hp and attack
    var defeated = [];

    $("#attackBtn").on("click", function () {
        function attack() {
            Math.round(Math.random() * 20) + 1
        }
        if (defender != "") {
            defender.health = defender.health - attacker.attack;
            attacker.health = attacker.health - defender.attack;
            attacker.attack = attacker.attack + Math.round(Math.random() * 20);
            $("#stats").empty();
            // $("#stats").append("<div>Attacker Health: " + attacker.health + "</div>");
            $("#stats").append("<div>You did " + attacker.attack + " damage!</div>");
            //$("#stats").append("<div>Defender Health: " + defender.health + "</div>");
            $("#stats").append("<div>You recieved " + defender.attack + " damage!</div>");


            /////Defender HP//////
            if (defender === char1) {
                $("#charOneHp").html("HP: " + defender.health);
            }
            else if (defender === char2) {
                $("#charTwoHp").html("HP: " + defender.health);
            }
            else if (defender === char3) {
                $("#charThreeHp").html("HP: " + defender.health);
            }
            else if (defender === char4) {
                $("#charFourHp").html("HP: " + defender.health);
            }

            /////Attacker HP//////
            if (attacker === char1) {
                $("#charOneHp").html("HP: " + attacker.health);
            }
            else if (attacker === char2) {
                $("#charTwoHp").html("HP: " + attacker.health);
            }
            else if (attacker === char3) {
                $("#charThreeHp").html("HP: " + attacker.health);
            }
            else if (attacker === char4) {
                $("#charFourHp").html("HP: " + attacker.health);
            }

            ///////HP Colors///////
            if (char1.health <= 100) {
                $("#charOneHp").css("background-color", "yellow").css("width", "75%");
            }
            if (char2.health <= 80) {
                $("#charTwoHp").css("background-color", "yellow").css("width", "75%");
            }
            if (char3.health <= 130) {
                $("#charThreeHp").css("background-color", "yellow").css("width", "75%");
            }
            if (char4.health <= 160) {
                $("#charFourHp").css("background-color", "yellow").css("width", "75%");

            }

            if (char1.health <= 75) {
                $("#charOneHp").css("background-color", "orange").css("width", "50%");
            }
            if (char2.health <= 60) {
                $("#charTwoHp").css("background-color", "orange").css("width", "50%");
            }
            if (char3.health <= 80) {
                $("#charThreeHp").css("background-color", "orange").css("width", "50%");
            }
            if (char4.health <= 80) {
                $("#charFourHp").css("background-color", "orange").css("width", "50%");
            }

            if (char1.health <= 30) {
                $("#charOneHp").css("background-color", "red").css("width", "25%");
            }
            if (char2.health <= 30) {
                $("#charTwoHp").css("background-color", "red").css("width", "25%");
            }
            if (char3.health <= 30) {
                $("#charThreeHp").css("background-color", "red").css("width", "25%");
            }
            if (char4.health <= 30) {
                $("#charFourHp").css("background-color", "red").css("width", "25%");
            }
            //////Defender death///////
            if (defender.health <= 0) {
                if ((char1.health) <= 0) {
                    $("#charOne").hide();
                    $("#charOneWrap").hide();
                    defeated.push(char1)
                    $("#stats").text("Choose an Enemy!");
                }
                if ((char2.health) <= 0) {
                    $("#charTwo").hide();
                    $("#charTwoWrap").hide();
                    defeated.push(char2)
                    $("#stats").text("Choose an Enemy!");

                }
                if ((char3.health) <= 0) {
                    $("#charThree").hide();
                    $("#charThreeWrap").hide();
                    defeated.push(char3)
                    $("#stats").text("Choose an Enemy!");

                }
                if ((char4.health) <= 0) {
                    $("#charFour").hide();
                    $("#charFourWrap").hide();
                    defeated.push(char4)
                    $("#stats").text("Choose an Enemy!");
                }
                defender = "";

                for (var i = 0; i < defeated.length; i++) {
                    if (defeated.length === 6) {

                        wins++;
                        $("#wins").text("Wins: " + wins);
                        reset();
                    }
                    console.log(defeated);
                }
            }
            if (attacker.health <= 0) {

                losses++;
                $("#losses").text("Losses: " + losses);
                reset();
            }
            console.log(attacker);
            console.log(defender);
            console.log("defender.attack " + defender.attack);
            console.log("defender.health " + defender.health);
            console.log("attacker.attack " + attacker.attack);
            console.log("attacker.health " + attacker.health);
        }
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