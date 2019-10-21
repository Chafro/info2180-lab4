document.getElementsByTagName("button")[0].onclick = squares;
var state = 0;
var gstatus=[];
var move_count=0;


function squares() {
	for (var number = 3; number <= 11; number++) {
  		document.getElementsByTagName("div")[number].setAttribute("class", "square"); 
  		document.getElementsByTagName("div")[number].innerHTML="";
  		document.getElementById("status").innerHTML="Move your mouse over a square and click to play an X or an O.";
		document.getElementById("status").setAttribute("class", "");

  }
  move_count=0;
  state = 0;
  gstatus=[2,2,2,2,2,2,2,2,2];
}
function play(num){
	if (document.getElementsByTagName("div")[num].className != "square O" && document.getElementsByTagName("div")[num].className != "square X"){
		update_array(num-3);
		addXorO(num);
	}
}
function update_array(num){
	gstatus[num]=state;

}
function addXorO(num){
	if (move_count<9) {
		if (state==0){
			document.getElementsByTagName("div")[num].setAttribute("class", "square X");
			document.getElementsByTagName("div")[num].innerHTML="X";
			wincheck(state);	
			state=1;
			move_count++;
		}
		else{
			if (state==1) {
				document.getElementsByTagName("div")[num].setAttribute("class", "square O");
				document.getElementsByTagName("div")[num].innerHTML="O";
				wincheck(state);	
				state=0;
				move_count++;
			}
		}
		

	}
}
document.getElementsByTagName("div")[3].onclick =function(){play(3)};
document.getElementsByTagName("div")[4].onclick =function(){play(4)};
document.getElementsByTagName("div")[5].onclick =function(){play(5)};
document.getElementsByTagName("div")[6].onclick =function(){play(6)};
document.getElementsByTagName("div")[7].onclick =function(){play(7)};
document.getElementsByTagName("div")[8].onclick =function(){play(8)};
document.getElementsByTagName("div")[9].onclick =function(){play(9)};
document.getElementsByTagName("div")[10].onclick =function(){play(10)};
document.getElementsByTagName("div")[11].onclick =function(){play(11)};

function wincheck(stat){
	if (gstatus[0]=== stat && gstatus[4]===stat && gstatus[8]=== stat && gstatus[0]!=2 && gstatus[4]!=2 && gstatus[8]!=2){
		move_count=9;
		win(stat);	
	}else{
		if (gstatus[0]=== stat && gstatus[1]=== stat && gstatus[2]=== stat && gstatus[0]!=2 && gstatus[1]!=2 && gstatus[2]!=2){
			move_count=9;
			win(stat);
		}else{
			if (gstatus[0]=== stat && gstatus[3]=== stat && gstatus[6]=== stat && gstatus[0]!=2 && gstatus[3]!=2 && gstatus[6]!=2){
				move_count=9;
				win(stat);
			}else{
				if (gstatus[1]=== stat && gstatus[4]=== stat && gstatus[7]=== stat && gstatus[1]!=2 && gstatus[4]!=2 && gstatus[7]!=2){
					move_count=9;
					win(stat);
				}else{
					if (gstatus[2]=== stat && gstatus[5]=== stat && gstatus[8]=== stat && gstatus[2]!=2 && gstatus[5]!=2 && gstatus[8]!=2){
						move_count=9;
						win(stat);
					}else{
						if (gstatus[3]=== stat && gstatus[4]=== stat && gstatus[5]=== stat && gstatus[3]!=2 && gstatus[4]!=2 && gstatus[5]!=2){
							move_count=9;
							win(stat);
						}else{
							if (gstatus[6]=== stat && gstatus[7]=== stat && gstatus[8]=== stat && gstatus[6]!=2 && gstatus[7]!=2 && gstatus[8]!=2){
								move_count=9;
								win(stat);
							}else{
								if (gstatus[6]=== stat && gstatus[4]=== stat && gstatus[2]=== stat && gstatus[6]!=2 && gstatus[4]!=2 && gstatus[2]!=2){
									move_count=9;
									win(stat);
								}
							}
						}
					}
				}
			}
		}	
	} 
}
function win(stat){
	if (stat==0) {
		document.getElementById("status").innerHTML="Congratulations! X is the Winner!";
		document.getElementById("status").setAttribute("class", "you-won");
	}
	else{
		document.getElementById("status").innerHTML="Congratulations! O is the Winner!";
		document.getElementById("status").setAttribute("class", "you-won");
	}
}