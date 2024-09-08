function woodCalculator(chairNUmber, tableNUmber, bedNumber){
    const chairWood = 3;
    const tableWood = 10;
    const bedWood = 50;

    const allChairWood = chairWood * chairNUmber;
    const allTableWood = tableWood * tableNUmber;
    const allBedWood = bedWood * bedNumber;

    const totalWood = allBedWood + allChairWood + allTableWood;

    return totalWood;
}

const wood = woodCalculator(0,0,1);
console.log('wood needed', wood);