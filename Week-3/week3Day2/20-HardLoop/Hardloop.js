var myFarm = ["chickens", "pigs", "cows", "horses", "ostriches"];

for (var i =0; i < myFarm.length; i++) {
    console.log(myFarm[i]);
    if(myFarm[i][0] ==="c" || myFarm[i][0] ==="o") {
        alert("Starts with 'c' or 'o'!")
    }
}