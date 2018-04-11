var winningnumber = Math.trunc(Math.random() * 100);
for(var coins = 100; coins > 0; coins--) {
    var gamble = Math.trunc(Math.random() * 100);
    if (winningnumber == gamble){
        var winnings = Math.floor(Math.random() * 50) + 51;
        coins = coins + winnings
        console.log(winningnumber,gamble);
        console.log("You won!");
        console.log("Winnings:",winnings)
        console.log("Total coins:",coins)
        break;
    }
    else{
        console.log(winningnumber,gamble);
        console.log("You Lost!");
    }

}

