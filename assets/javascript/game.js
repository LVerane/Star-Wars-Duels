var characters = [
    char1 = { name: "Darth Vader", attackPoints: 6, counterAttackPoints: 10, health: 150, isChosen: false},
    char2 = { name: "Han Solo", attackPoints: 8, counterAttackPoints: 11, health: 105, isChosen: false},
    char3 = { name: "Obi Wan", attackPoints: 4, counterAttackPoints: 9, health: 200, isChosen: false},
    char4 = { name: "Master Yoda", attackPoints: 5, counterAttackPoints: 8, health: 175, isChosen: false},
]

function reset() {
    var allChar = $(".character");
    $("#images").append(allChar);
    heroChosen = false;
    enemyChosen = false;
    defeatedEnemies = [];
    heroAttack = 0;
    characters = [
        char1 = { name: "Darth Vader", attackPoints: 6, counterAttackPoints: 10, health: 150, isChosen: false},
        char2 = { name: "Han Solo", attackPoints: 8, counterAttackPoints: 11, health: 105, isChosen: false},
        char3 = { name: "Obi Wan", attackPoints: 4, counterAttackPoints: 9, health: 200, isChosen: false},
        char4 = { name: "Master Yoda", attackPoints: 5, counterAttackPoints: 8, health: 175, isChosen: false},
    ];
    $("#defeated").html(defeatedEnemies);
    $("#heroName").html("-");
    $("#enemyName").html("-");
    $("#enemyHealth").html("-");
    $("#heroHealth").html("-");
    $("#instructions").html("Click on an image to choose your hero!");

}

var heroChosen = false;
var enemyChosen = false;
var defeatedEnemies = [];
var heroAttack = 0;

var selectedHero;
var selectedEnemy;

var win = 0;
var loss = 0;

var heroImg;
var enemyImg;

$(document).ready(function () {

    reset();

    $(".character").on("click", function () {
        if (heroChosen === false) {
            for (i = 0; i < characters.length; i++) {
                if (characters[i].name === $(this).attr("data-character")) {
                    characters[i].isChosen = true;
                    selectedHero = characters[i];
                    $("#heroName").html(selectedHero.name);

                    heroChosen = true;
                    $("#instructions").html("Click on an image to choose your enemy!")
                                        
                    heroImg = $(this);
                    $("#hero").append(heroImg);
                    $("#heroHealth").html(selectedHero.health)
                }
            }
        } else {
            for (i = 0; i < characters.length; i++) {
                if (characters[i].name === $(this).attr("data-character") && characters[i].isChosen === false && enemyChosen === false) {
                    characters[i].isChosen = true;
                    selectedEnemy = characters[i];
                    $("#enemyName").html(selectedEnemy.name);

                    enemyChosen = true;
                    $("#instructions").html("Click on the Attack button to fight!")

                    enemyImg = $(this);
                    $("#enemy").append(enemyImg);
                    $("#enemyHealth").html(selectedEnemy.health)
                    $("#attack").attr("hidden", false);
                }
            }
        }

    });

    $("#attack").on("click", function () {
        if (heroChosen === true && enemyChosen === true && selectedEnemy.health > 0 && selectedHero.health > 0) {

            heroAttack = heroAttack + selectedHero.attackPoints
            selectedEnemy.health = selectedEnemy.health - heroAttack
            $("#enemyHealth").html(selectedEnemy.health)

            selectedHero.health = selectedHero.health - selectedEnemy.counterAttackPoints
            $("#heroHealth").html(selectedHero.health)

            if (selectedHero.health < 1) {
                loss++
                $("#losses").html(loss);
                $("#instructions").html("You lost! Click on the Restart button to play a new game!")
                $("#attack").attr("hidden", true);
            } else if (selectedEnemy.health < 1) {
                enemyChosen = false;
                defeatedEnemies.push(selectedEnemy.name + "<br>")
                $("#enemyHealth").html("-")
                $("#defeated").html(defeatedEnemies);
                $("#defeatedImg").append(enemyImg);
                $("#instructions").html("Click on an image to choose your enemy!")
                $("#enemyName").html("-");
                if (defeatedEnemies.length === 3) {
                    win++;
                    $("#wins").html(win);
                    $("#instructions").html("You won! Click on the Restart button to play a new game!")
                    $("#attack").attr("hidden", true);
                }
            }
        }
    });

    $("#reset").on("click", function () {
        reset();
    });

});