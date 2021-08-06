// Game States
// "WIN" - Player robot has defeated all enemy-robots
//    * Fight all enemy-robots
//    * Defeat each enemy-robot
// "LOSE" - Player robot's health is zero or less

var playerName = window.prompt("What is your robot's name?");
var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 10;

// You can also log multiple values at once like this
console.log(playerName, playerAttack, playerHealth);

var enemyHealth = 50;
var enemyAttack = 12;

var fight = function (enemyName) {
	console.log("enemyName parameter value : " + enemyName + " passed to the fight function.");
	// Alert players that they're starting the round
	window.alert("Welcome to Robot Gladiators!");
	var promptFight = window.prompt("Would you like to FIGHT or SKIP this battle? Enter FIGHT or SKIP TO CHOSE.");

	if (promptFight === "fight" || promptFight === "FIGHT") {
		//Subtract playerAttack from enemyHealth to update enemyHealth
		enemyHealth = enemyHealth - playerAttack;

		// Log a resulting message to the console to confirm that it worked
		console.log(
			playerName + " attacked " + enemyName + ". " + enemyName + " now has " + enemyHealth + " health remaing."
		);

		// check enemy's health
		if (enemyHealth <= 0) {
			window.alert(enemyName + " has died>");
		} else {
			window.alert(enemyName + " still has " + enemyHealth + " health left.");
		}

		// Subtract enemyAttack from playerHealth to update playerHealth
		playerHealth = playerHealth - enemyAttack;

		// Log a resulting message to the console to confirm that it worked
		console.log(
			enemyName + " attacked " + playerName + ". " + playerName + " now has " + playerHealth + " health remaining."
		);

		// check player's health
		if (playerHealth <= 0) {
			window.alert(playerName + " has died!");
		} else {
			window.alert(playerName + " still has " + playerHealth + " health left.");
		}
	} else if (promptFight === "skip" || promptFight === "SKIP") {
		// confirm player wants to skip
		var confirmSkip = window.confirm("Are you sure you'd like to quit?");

		// if yes (true), leave fight
		if (confirmSkip) {
			window.alert(playerName + " has decided to skip this fight. Goodbye!");
			// subtract money from playerMoney for skipping
			playerMoney = playerMoney - 2;
		}
		// if no (false), ask question again by running fight() again
		else {
			fight();
		}
	} else {
		window.alert("You need to choose a valid option. Try again!");
	}
};

var enemyNames = ["Roborto", "Amy Android", "Robo Trumble"];
for (var i = 0; i < enemyNames.length; i++) {
	console.log("enemyNames[i]: " + enemyNames[i] + " before calling fight function.");
	fight(enemyNames[i]);
}
