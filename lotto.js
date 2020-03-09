// var 후보군 = Array(45); // []

// var 필 = 후보군.fill();

// // 필.forEach(function(요소, 인덱스) {
// //     // 필[인덱스] = 인덱스 + 1;
// //     console.log(요소,인덱스 + 1);

// // })

// var 맵 = 필.map(function(요소,인덱스){
//     return 인덱스 + 1;
// });

var 후보군 = Array(45)
    .fill()
    .map(function(요소, 인덱스){
        return 인덱스 + 1;
});

var 셔플 = [];
while(후보군.length > 0){
    var 이동값 = 후보군.splice(Math.floor(Math.random() * 후보군.length),1)[0];
    셔플.push(이동값)
}

var 보너스 = 셔플[셔플.length -1];
var 당첨숫자들 = 셔플.slice(0,6);
console.log('당첨숫자', 당첨숫자들.sort(function (p,c) {return p - c}), '보너스', 보너스);

var 결과창 = document.getElementById('결과창');

for (var i = 0; i < 당첨숫자들.length; i +=1){

    // setTimeout(function 비동기콜백함수(){   
    //     var 공 = document.createElement('div');
    //     공.textContent = 당첨숫자들[i];
    //     결과창.appendChild(공);
    // }, 1000);
    var 공 = document.createElement('div');
    공.textContent = 당첨숫자들[i];
    공.style.display = 'inline-block';
    공.style.border = '1px solid black';
    공.style.borderRadius = '10px';
    공.style.width = '25px';
    공.style.height = '25px';
    공.style.textAlign = 'center';
    공.style.marginRight = '5px';
    공.style.background = 'red';
    결과창.appendChild(공);
}

var 보너스칸 = document.getElementsByClassName('보너스')[0];
var 보너스공 = document.createElement('div');
보너스공.textContent = 보너스;
보너스칸.appendChild(보너스공);

