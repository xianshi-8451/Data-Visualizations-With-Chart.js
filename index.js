function findAgeGroups(arr){
    let ageGroup = [];
    for(let i =0; i<arr.length; i++){
        ageGroup.push(arr[i].age_group);
    }
    let age = new Set(ageGroup);
    return Array.from(age).reverse();
}

function findMortalityCategory(arr){
    let mortalities = [];
    for(let i =0; i<arr.length; i++){
        mortalities.push(arr[i].apr_risk_of_mortality);
    }
    let mortality = new Set(mortalities);
    mortalities = Array.from(mortality);
    //rearranging the array
    let pos = mortalities[1];
    let pos2 = mortalities[2];
    mortalities[1] = pos2;
    mortalities[2] = mortalities[0];
    mortalities[0] = pos;
    return mortalities;
}
function countPerCategoryForAll(ageGroups, mortalityArr, data){
    let mortalityFreq = {};
    let sorted = [];
    let finalArr = [];
    for(let j = 0; j<ageGroups.length; j++) {
        let ageGroup=ageGroups[j];
    for(let i = 0; i<data.length; i++){
        let mortality = data[i]["apr_risk_of_mortality"];
        if(data[i]["age_group"]==ageGroup){
        if(mortality in mortalityFreq){
            mortalityFreq[mortality] += 1;
        }else{
            mortalityFreq[mortality]=1;
        }
        }
    };
    for(let mortality in mortalityFreq){
        sorted.push(mortalityFreq[mortality]);
        mortalityFreq[mortality]=0;
    };
    finalArr.push(sorted);
    sorted=[];
    };
    return finalArr;
}

function countPerCategoryForMale(ageGroups, mortalityArr, data){
    let mortalityFreq = {};
    let sorted = [];
    let finalArr = [];
    for(let j = 0; j<ageGroups.length; j++) {
        let ageGroup=ageGroups[j];
    for(let i = 0; i<data.length; i++){
        let mortality = data[i]["apr_risk_of_mortality"];
        if(data[i]["age_group"]==ageGroup && data[i]["gender"]==="M"){
        if(mortality in mortalityFreq){
            mortalityFreq[mortality] += 1;
        }else{
            mortalityFreq[mortality]=1;
        }
        }
    };
    for(let mortality in mortalityFreq){
        sorted.push(mortalityFreq[mortality]);
        mortalityFreq[mortality]=0;
    };
    finalArr.push(sorted);
    sorted=[];
    };
    return finalArr;
}

function countPerCategoryForFemale(arrAll, arrMale){
    let sorted = [];
    let finalArr = [];
    for(let i = 0; i<arrAll.length; i++){
        for(let j = 0; j<arrMale[i].length; j++){
            sorted.push(arrAll[i][j] - arrMale[i][j]);
        }
        finalArr.push(sorted);
        sorted=[];
    }
    return finalArr;
}

function findRace(arr){
    let raceGroup = [];
    for(let i =0; i<arr.length; i++){
        raceGroup.push(arr[i].race);
    }
    let race = new Set(raceGroup);
    return Array.from(race);
}

function findCancer(arr){
    let cancerGroup = [];
    for(let i =0; i<arr.length; i++){
        cancerGroup.push(arr[i].ccs_diagnosis_description);
    }
    let cancer = new Set(cancerGroup);
    return Array.from(cancer);
}

function countCancerPerRace(raceGroups, data){
    let count = 0;
    let sorted = [];
    for(let j = 0; j<raceGroups.length; j++) {
        let raceGroup=raceGroups[j];
    for(let i = 0; i<data.length; i++){
        let cancer = "Cancer of pancreas";
        if(data[i]["race"]==raceGroup && data[i]["ccs_diagnosis_description"]===cancer){
            count++;
        }
    };
    sorted.push(count);
    count=0;
    };
    return sorted;
};

//Using it for data verification purposes 
function counting(data){
    count = 0;
    for(let j=0; j<data.length; j++){
        if(data[j]["race"]==="Multi-racial" && data[j]["ccs_diagnosis_description"]==="Cancer of pancreas"){
            count++;
        }
    }
}

function countCancerPerEmergency(cancerGroups, data){
    let count=0;
    let sorted = [];
    for(let j = 0; j<cancerGroups.length; j++) {
        let cancerGroup=cancerGroups[j];
    for(let i = 0; i<data.length; i++){
        let visit = "Emergency";
        if(data[i]["ccs_diagnosis_description"]==cancerGroup && data[i]["type_of_admission"]===visit){
            count++;
        }
    };
    sorted.push([cancerGroup, count]);
    count=0;
    };
    sorted.sort(function(a, b) {
    return b[1] - a[1];
});
    sorted = sorted.slice(0,5);
    return sorted;

}

function sortedCancerLabel(arr){
    let labels=[];
    for(let i=0; i<arr.length; i++){
        labels.push(arr[i][0])
    }
    return labels;
}

function sortedCancerData(arr){
    let visits=[];
    for(let i=0; i<arr.length; i++){
        visits.push(arr[i][1])
    }
    return visits;
}