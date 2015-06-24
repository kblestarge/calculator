function myFunction(id){

	var output = document.getElementById('output');
	var currentVal = document.getElementById('output').innerHTML;

	if(id == "="){

		//evaluate the currentValue string
		var answer = eval(currentVal);
		output.innerHTML = answer;

	}else if(id == "clear"){

		//clear the output area
		output.innerHTML = "";

	}else{

		//Concatenate the current Value and the button's value
		output.innerHTML = currentVal + id;
		var newTotal = currentVal + id;

	}
}

var main = function() {

	//Key press functionality

	$("body").keydown(function(e) {
    	if(e.keyCode == 46 || e.keyCode == 8) { //delete, backspace
    		myFunction('clear');
    	}else if(e.keyCode == 48 || e.keyCode == 96) { //0
    		myFunction(0);
    	}else if(e.keyCode == 49 || e.keyCode == 97) { //1
    		myFunction(1);
    	}else if(e.keyCode == 50 || e.keyCode == 98) { //2
    		myFunction(2);
    	}else if(e.keyCode == 51 || e.keyCode == 99) { //3
    		myFunction(3);
    	}else if(e.keyCode == 52 || e.keyCode == 100) { //4
    		myFunction(4);
    	}else if(e.keyCode == 53 || e.keyCode == 101) { //5
    		myFunction(5);
    	}else if(e.keyCode == 54 || e.keyCode == 102) { //6
    		myFunction(6);
    	}else if(e.keyCode == 55 || e.keyCode == 103) { //7
    		myFunction(7);
    	}else if(e.keyCode == 56 || e.keyCode == 104) { //8
    		myFunction(8);
    	}else if(e.keyCode == 57 || e.keyCode == 105) { //9
    		myFunction(9);
    	}else if(e.keyCode == 107) { //+, how do I get this to work above the = sign?
    		myFunction('+');
    	}else if(e.keyCode == 109 || e.keyCode == 189) { //-
    		myFunction('-');
    	}else if(e.keyCode == 111) { ///
    		myFunction('/');
    	}else if(e.keyCode == 106) { //*
    		myFunction('*');
    	}else if(e.keyCode == 110) { //.
    		myFunction('.');
    	}else if(e.keyCode == 13 || e.keyCode == 187) { //=, enter
    		myFunction('=');
    	}
	});

}

$(document).ready(main());