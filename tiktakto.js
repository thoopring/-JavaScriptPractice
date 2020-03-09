var 바디 = document.body;
var 테이블 = document.createElement('table');
var 칸들 = [];
var 줄들 = [];
var 턴 = 'X';
var 다참 = false;

var 비동기콜백 = function(이벤트){
    console.log('몇칸?');
    console.log(이벤트.target);             // 칸
    console.log(이벤트.target.parentNode);  // 줄
    console.log(이벤트.target.parentNode.parentNode);  // 테이블
    var 몇줄 = 줄들.indexOf(이벤트.target.parentNode);
    console.log('몇줄', 몇줄);
    var 몇칸 = 칸들[몇줄].indexOf(이벤트.target);
    console.log('몇칸', 몇칸);

    if(칸들[몇줄][몇칸].textContent !== ''){
        // 칸이 이미 채워져 있는가
        console.log('빈칸이 아닙니다.');
    }else{
        console.log('빈칸입니다.')
        칸들[몇줄][몇칸].textContent = 턴;
        // 세칸 다 채워졌나?
    
        for(var k = 0; k < 3; k +=1)
        {
            for(var d = 0; d < 3; d +=1)
            {
                console.log('칸들',k,d,'--',칸들[k][d].textContent === 턴)
            }

        }
        
    if((칸들[몇줄][0] === 턴) && (칸들[몇줄][1] === 턴) && (칸들[몇줄][2] === 턴))
    {
        다참 = treu;
    }

    if((칸들[0][몇칸] === 턴) && (칸들[1][몇칸] === 턴) && (칸들[2][몇칸] === 턴))
    {
        다참 = treu;
    }

    if(몇줄 - 몇칸 === 0 || Math.abs(몇줄 - 몇칸) === 2){
        if(칸들[0][0].textContent === 턴 
            && 칸들[1][1].textContent === 턴 
            && 칸들[2][2].textContent === 턴){
                다참 = true;
            }
    }
    console.log('다참',다참);
    if(다참){
        console.log(턴 + '님이 승리!');
    }   

        if(턴 === 'X'){
            턴 = 'O';
        }else{
            턴 = 'X';
        }
    }
    
};

for(var i = 1; i <= 3; i+=1){
    var 줄 = document.createElement('tr');
    줄들.push(줄);
    console.log('줄들',줄들);
    칸들.push([]);
    for(var j = 1; j <=3; j +=1){
        var 칸 = document.createElement('td');
        칸.addEventListener('click', 비동기콜백);
        칸들[i - 1].push(칸);
        줄.appendChild(칸);
    }
    테이블.appendChild(줄);
}
바디.appendChild(테이블);
console.log('줄들',줄들,'칸들',칸들);