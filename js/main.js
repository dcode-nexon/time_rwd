let numbers = document.querySelectorAll(".screen span");
const [am, pm] = document.querySelectorAll(".screen em");

setInterval(()=>{		
	const times = setTime();

	times.forEach((item, index)=> getTime(item, index));	
},1000);


function setTime(){
	let hr2 = null;
	let now = new Date();
	let hr = now.getHours();
	let min = now.getMinutes();
	let sec = now.getSeconds();

	if(hr > 12){
		hr2 = hr-12;
		pm.classList.add('on');
		am.classList.remove('on');
	}else{
		hr2 = hr;
		am.classList.add('on');
		pm.classList.remove('on');
	}  
	return [hr2, min, sec];
}

function getTime(num,index){
	if(num<10) num = "0"+num;
	numbers[index].innerText = num;
}
















