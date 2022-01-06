const main = document.querySelector("main");
let numbers = document.querySelectorAll(".screen span");
let btns = document.querySelectorAll("nav span");
const [am, pm] = document.querySelectorAll(".screen em");
let hr = null;


setInterval(()=>{		
	let now = new Date();
	hr = now.getHours();	

	const data = [
		{condition: hr>=5 && hr<11, name: "morning"},
		{condition: hr>=11 && hr<16, name: "afternoon"},
		{condition: hr>=16 && hr<19, name: "evening"},
		{condition: hr>=19 || hr<5, name: "night"}
	]

	data.forEach((item,index)=>{
		if(item.condition){
			main.className='';
			main.classList.add(item.name);
			for(let btn of btns) btn.classList.remove("on");
			btns[index].classList.add("on");
		}
	})

	if(main.classList.contains("afternoon")){
		main.classList.add('dark_text');
	}else{
		main.classList.remove("dark_text");
	}
	/*
	if(hr>=5 && hr<11 ){
		main.className='';
		main.classList.add("morning");
	} 
	if(hr>=11 && hr<16){
		main.className='';
		main.classList.add("afternoon");
	} 
	if(hr>=16 && hr<19){
		main.className='';
		main.classList.add("evening");
	} 
	if(hr>=19){
		main.className='';
		main.classList.add("night");
	}
	*/
	

	const times = setTime(now);

	times.forEach((item, index)=> getTime(item, index));	
},1000);



function setTime(now){
	let hr2 = null;
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