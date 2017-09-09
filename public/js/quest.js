cs=0;
dev=0;
des=0;
ai=0;
pg=0;

arr=[];
mp=0;
qa=[["Are you interested in developing a template or a visually appealing system ?","The former","The Latter"],
	["Is devising a new more efficient method of sorting interesting to you ?","Yes","No"],
	["Does solving a real life problem interest you ?","Yes","No"],
	["Are you interested in making the Computer devise a solution based on patterns ?","Yes","No"],
	["Does you find the process of digitally colouring Black and white photos interesting ?","Yes","No"],
	["Which one would you choose ?","A design position with lower salary","A developer position with higher salary"],
	["Do you like solving puzzles ?","Yes","No"],
	["Do you want to prevent people who steal others' data in the Internet ? ","Yes","No"],
	["Do you like developing realistic models ?","Yes","No"],
	["Do you prefer automating routine tasks ?","Yes","No"]
];

function nextques()
{	
		if(mp>=9)
		{
			document.getElementById("but").style.visibility = "hidden";
			document.getElementById("sub").style.visibility = "visible";
			return;
		}
		answer=document.getElementsByName("q1");
		

		for( var i=0; i<1; i++){
			if(answer[i].checked){
				arr[qa[mp][0]]=qa[mp][i+1];

				if(mp==0)
				{
					if(i==0)
						dev++;
					else if(i==1)
						des++;
				}
				if(mp==1)
				{
					if(i==0)
						pg++;
				}
				if(mp==2)
				{
					if(i==0)
						pg++;
				}
				if(mp==3)
				{
					if(i==0)
						ai++;
				}
				if(mp==4)
				{
					if(i==0)
						des++;
				}
				if(mp==5)
				{
					if(i==0)
						des++;
					else
						dev++;
				}
				if(mp==6)
				{
					if(i==0)
						pg++;
				}
				if(mp==7)
				{
					if(i==0)
						cs++;
				}
				if(mp==8)
				{
					if(i==0)
						des++;
				}
				if(mp==9)
				{
					if(i==0)
						pg++;
				}


			}
			answer[i].checked=false;
		}

		
		    answer[0].checked=true;
		  
				console.log(arr);
				mp++;
		document.getElementById("quest").innerHTML = qa[mp][0];
		document.getElementById("lb1").innerHTML = qa[mp][1];
		document.getElementById("lb2").innerHTML = qa[mp][2];

		
		console.log(mp)

		if(mp>=9){
			document.getElementById("s1").style.visibility = "visible";
			document.getElementById("s3").style.visibility = "visible";
			console.log("mma");
		if(cs>=2)
		{
			
			document.getElementById("s1").innerHTML="CyberSecurity";
		}
		if(dev>=2)
		{
		
			document.getElementById("s1").innerHTML="Web Developing";
		}
		if(des>=2)
		{
	
			document.getElementById("s1").innerHTML="Designing";
		}
		if(ai>=2)
		{

			document.getElementById("s1").innerHTML="AI";
		}
		if(pg>=2)
		{

			document.getElementById("s1").innerHTML="Programming";
		}
	}

}



	  
	 


	
