


let hour=document.getElementById("hour");
let min=document.getElementById("minutes");
let sec=document.getElementById("second");

let hr=0;
let mn=0;
let sc=0;
let timer;


function stopping(){
	 clearInterval(timer);
}

function playing(){
	clearInterval(timer);
	timer=setInterval(function(){
		
		sc++;
		if(sc<10)
		{
			sec.innerHTML="0"+sc;
		}
		else if(sc<60)
		{
			sec.innerHTML=sc;
		}
		else
		{
			sc=0;
			sec.innerHTML="00";
			mn++;
			if(mn<10)
			{
				min.innerHTML="0"+mn;
			}
			else if(mn<60)
			{
				min.innerHTML=mn;
			}
			else
			{
				 mn=0;
				 min.innerHTML="00";
				 hr++;
			     if(hr<10)
			     {
				     hour.innerHTML="0"+hr;
			     }
			     else
			     {
				     min.innerHTML=hr;
			     } 
			}
			
		} 
		
	},1000)
}

function restart(){
	
	clearInterval(timer);
	hr=0;
	sc=0;
	mn=0;
	sec.innerHTML = "00";
	hour.innerHTML = "00";
	min.innerHTML = "00";
	playing();
}


//setInterval(playing,1000);
