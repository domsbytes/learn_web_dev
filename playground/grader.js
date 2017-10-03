function average(test_scores){
var sum=0;
    for(i=0; i<test_scores.length; i++){
        sum += test_scores[i];
    }
    var result =  Math.round(sum/test_scores.length);
    return result;
}

var scores=[90, 98, 89, 100, 100, 86, 94];
console.log(average(scores));

var scores2 =[40, 65, 77, 82, 80, 54, 73, 63, 95, 49 ];
console.log(average(scores2));