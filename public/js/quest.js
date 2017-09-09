arr=[];
mp=0;
qa=[["q00","opt1","opt2","opt3","opt4"],
	["q01","opt1","opt2","opt3","opt4"],
	["q02","opt1","opt2","opt3","opt4"],
	["q03","opt1","opt2","opt3","opt4"],
	["q04","opt1","opt2","opt3","opt4"],
	["q05","opt1","opt2","opt3","opt4"],
	["q06","opt1","opt2","opt3","opt4"],
	["q07","opt1","opt2","opt3","opt4"],
	["q08","opt1","opt2","opt3","opt4"],
	["q09","opt1","opt2","opt3","opt4"],
	["q0q","opt1","opt2","opt3","opt4"],
	["q0w","opt1","opt2","opt3","opt4"],
	["q0e","opt1","opt2","opt3","opt4"],
	["q0r","opt1","opt2","opt3","opt4"],
	["q0t","opt1","opt2","opt3","opt4"],
	["q0y","opt1","opt2","opt3","opt4"]
];

function nextques()
{	
	

	
	
		if(mp>=19)
		{
			document.getElementById("but").style.visibility = "hidden";
			document.getElementById("sub").style.visibility = "visible";
			return;
		}
		answer=document.getElementsByName("q1");
		

		for( var i=0; i<3; i++){
			if(answer[i].checked)
				arr[qa[mp][0]]=qa[mp][i+1];
			answer[i].checked=false;
		}
		    answer[0].checked=true;
		  
				console.log(arr);
				mp++;
		document.getElementById("quest").innerHTML = qa[mp][0];
		document.getElementById("lb1").innerHTML = qa[mp][1];
		document.getElementById("lb2").innerHTML = qa[mp][2];
		document.getElementById("lb3").innerHTML = qa[mp][3];
		document.getElementById("lb4").innerHTML = qa[mp][4];
		
		
}



	  
	 


	
