let numbers = document.querySelectorAll(".screen span");

//1초마다 반복실행
setInterval(()=>{	
	//setTimes를 호출에 tiems변수에 배열 리턴 (hr, min, sec)
	const times = setTime();

	//배열안의 hr, min, sec을 반복 돌면서 
	//getTime함수 호출하여 숫자가 한자리이면 앞에 0을 추가
	times.forEach((item, index)=> getTime(item, index));	
},1000);

//시간 값을로부터 각각 시간, 분, 초를 구해서 배열로 리턴
function setTime(){
	let now = new Date();
	let hr = now.getHours();
	let min = now.getMinutes();
	let sec = now.getSeconds();
	return [hr, min, sec];
}

//첫번째 인수로 수정할 숫자를 받고
//두번째 인수로 변경할 numbers항목의 순서를 전달받음
function getTime(num,index){
	if(num<10) num = "0"+num;
	numbers[index].innerText = num;
}
















