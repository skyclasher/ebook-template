	$(function () {
			$('#chapter2').slickQuiz({json: {
					"info": {
						"name":    "",
						"main":    "",
						"results": "<h5>Your Result</h5>",
						"level1":  "Excellent, you are good",
						"level2":  "Good job",
						"level3":  "Try Harder",
						"level4":  "Need more reading",
						"level5":  "Better read those notes given" // no comma here
					},
					"questions": [
						{ // Question 1 - Multiple Choice, Single True Answer
							"q": "What is Layout?",
							"a": [
								{"option": "The fundamental soul of a man-made creation",         "correct": false},
								{"option": "The contextual of the important content",    		  "correct": false},
								{"option": "The arrangement of elements (content) on a page",     "correct": true} // no comma here
							],
							"correct": "<p><span>Correct</span></p>",
							"incorrect": "<p><span>Incorrect</span></p>" // no comma here
						},
						{ // Question 2 - Multiple Choice, Multiple True Answers, Select Any false for disable multiple answer
							"q": "What is Design?",
							"a": [
								{"option": "The arrangement of elements (content) on a page",            "correct": false},
								{"option": "The fundamental soul of a man-made creation",  				 "correct": true},
								{"option": "The contextual of the important content",					 "correct": false} // no comma here
							],
							"select_any": false,
							"correct": "<p><span>Correct</span></p>",
							"incorrect": "<p><span>Incorrect</span></p>" // no comma here
						},
						{ // Question 3 - Multiple Choice, Multiple True Answers, Select All
							"q": "What is Gutters?",
							"a": [
								{"option": "The inside margins or blank space between two facing pages",          	 "correct": true},
								{"option": "The blank space between two columns of text",    						 "correct": false},
								{"option": "The gap between pages and the column", 	 								 "correct": false}// no comma here
							],
							"correct": "<p><span>Correct</span></p>",
							"incorrect": "<p><span>Incorrect</span></p>" // no comma here
						},
						{ // Question 4
							"q": "What is Alley?",
							"a": [
								{"option": "The inside margins or blank space between two facing pages",      "correct": false},
								{"option": "The blank space between two columns of text",  					  "correct": true},
								{"option": "The gap between pages and the column",    						  "correct": false}// no comma here
							],
							"correct": "<p><span>Correct</span></p>",
							"incorrect": "<p><span>Incorrect</span></p>" // no comma here
						},
						{ // Question 5
							"q": "Which art elements is true?",
							"a": [
								{"option": "vector,line,shape,</br>space&depth,texture,value",  		 "correct": false},
								{"option": "colour,line,shape,</br>space&depth,texture,value",   	 "correct": true},
								{"option": "colour,line,shape,</br>space&depth,texture,quantity",     "correct": false}// no comma here
							],
							"correct": "<p><span>Correct</span></p>",
							"incorrect": "<p><span>Incorrect</span></p>" // no comma here
						},
						{ // Question 6
							"q": "Which primary colour is true?",
							"a": [
								{"option": "green,red,blue",  			 "correct": false},
								{"option": "red,blue,yellow", 	 		 "correct": true},
								{"option": "red,black,white",  			 "correct": false}// no comma here
							],
							"correct": "<p><span>Correct</span></p>",
							"incorrect": "<p><span>Incorrect</span></p>" // no comma here
						},		
						{ // Question 7
							"q": "Colour also called as?",
							"a": [
								{"option": "hue",  			"correct": true},
								{"option": "hes", 	  		"correct": false},
								{"option": "heu",  			"correct": false}// no comma here
							],
							"correct": "<p><span>Correct</span></p>",
							"incorrect": "<p><span>Incorrect</span></p>" // no comma here
						},		
						{ // Question 8
							"q": "Which type of colour is true?",
							"a": [
								{"option": "warm,cool",  			"correct": true},
								{"option": "spicy,sour", 	 		"correct": false},
								{"option": "hot,freeze",  			"correct": false}// no comma here
							],
							"correct": "<p><span>Correct</span></p>",
							"incorrect": "<p><span>Incorrect</span></p>" // no comma here
						},
						{ // Question 9
							"q": "What is line?",
							"a": [
								{"option": "A form with width and length, but no depth.",  		"correct": true},
								{"option": "A form of ruler and pencil", 	 					"correct": false},
								{"option": "A form of straight line",  							"correct": false}// no comma here
							],
							"correct": "<p><span>Correct</span></p>",
							"incorrect": "<p><span>Incorrect</span></p>" // no comma here
						},		
						{ // Question 10
							"q": "Types of shape?",
							"a": [
								{"option": "Rectangle Shapes",    "correct": false},
								{"option": "Texture Shapes",      "correct": false},
								{"option": "Geometric Shapes",    "correct": true} // no comma here
							],
							"correct": "<p><span>Correct</span></p>",
							"incorrect": "<p><span>Incorrect</span></p>" // no comma here
						} // no comma here
					]			
			}});

			$('#chapter1').slickQuiz({json: {
					"info": {
						"name":    "",
						"main":    "",
						"results": "<h5>Your Result</h5>",
						"level1":  "Excellent, you are good",
						"level2":  "Good job",
						"level3":  "Try Harder",
						"level4":  "Need more reading",
						"level5":  "Better read those notes given" // no comma here
					},
					"questions": [
						{ // Question 1 - Multiple Choice, Single True Answer
							"q": "What is Desktop Publishing?",
							"a": [
								{"option": "Process of making the computer desktop and specific types of software to arranged the desktop in the computer",      "correct": false},
								{"option": "Process of publishing desktop design to make commercial marketing to easier the consumer",    						 "correct": false},
								{"option": "Process of using the computer and specific types of software to combine text and graphics to produce documents",     "correct": true},
								{"option": "Process of editing or making computer program or software for the consumer",  										 "correct": false} // no comma here
							],
							"correct": "<p><span>Correct</span></p>",
							"incorrect": "<p><span>Incorrect</span></p>" // no comma here
						},
						{ // Question 2 - Multiple Choice, Multiple True Answers, Select Any false for disable multiple answer
							"q": "Relevant software to be use for desktop publishing?",
							"a": [
								{"option": "Adobe Acrobat",              "correct": false},
								{"option": "Adobe Illustrator",  		 "correct": true},
								{"option": "Adobe Media Encoder",		 "correct": false},
								{"option": "Adobe Photoshop", 			 "correct": true} // no comma here
							],
							"select_any": false,
							"correct": "<p><span>Correct</span></p>",
							"incorrect": "<p><span>Incorrect</span></p>" // no comma here
						},
						{ // Question 3 - Multiple Choice, Multiple True Answers, Select All
							"q": "Relevant hardware to be use for desktop publishing?",
							"a": [
								{"option": "Camera",          	 "correct": true},
								{"option": "Hard Disk Drive",    "correct": false},
								{"option": "Laser Printer", 	 "correct": true},
								{"option": "Scanner",       	 "correct": true} // no comma here
							],
							"correct": "<p><span>Correct</span></p>",
							"incorrect": "<p><span>Incorrect</span></p>" // no comma here
						},
						{ // Question 4
							"q": "What is Copyright?",
							"a": [
								{"option": "A right to copy something for individual purpose",    "correct": false},
								{"option": "A form of protection provided to the authors of original works",     "correct": true},
								{"option": "Copy - pasting files or word in text editor",      "correct": false}// no comma here
							],
							"correct": "<p><span>Correct</span></p>",
							"incorrect": "<p><span>Incorrect</span></p>" // no comma here
						},
						{ // Question 5
							"q": "Example of Copyright?",
							"a": [
								{"option": "Foods",    "correct": false},
								{"option": "Films",    "correct": true},
								{"option": "Water",    "correct": false}// no comma here
							],
							"correct": "<p><span>Correct</span></p>",
							"incorrect": "<p><span>Incorrect</span></p>" // no comma here
						},
						{ // Question 6
							"q": "Advantages of printed elements?",
							"a": [
								{"option": "Need a piece of an update",  			  "correct": false},
								{"option": "Seek to present as much information", 	  "correct": true},
								{"option": "fast",  								  "correct": false}// no comma here
							],
							"correct": "<p><span>Correct</span></p>",
							"incorrect": "<p><span>Incorrect</span></p>" // no comma here
						},		
						{ // Question 7
							"q": "Advantages of electronic media?",
							"a": [
								{"option": "Need a piece of an update",  			  "correct": true},
								{"option": "Seek to present as much information", 	  "correct": false},
								{"option": "slow",  								  "correct": false}// no comma here
							],
							"correct": "<p><span>Correct</span></p>",
							"incorrect": "<p><span>Incorrect</span></p>" // no comma here
						},		
						{ // Question 8
							"q": "Career opportunities in Desktop Publishing?",
							"a": [
								{"option": "Become a Graphic Designer",  	"correct": true},
								{"option": "Become a sailor captain", 	 	"correct": false},
								{"option": "Become a carpenter",  			"correct": false}// no comma here
							],
							"correct": "<p><span>Correct</span></p>",
							"incorrect": "<p><span>Incorrect</span></p>" // no comma here
						},
						{ // Question 9
							"q": "Usage of photoshop?",
							"a": [
								{"option": "Edit images",  		"correct": true},
								{"option": "Edit videos", 	 	"correct": false},
								{"option": "Edit sounds",  		"correct": false}// no comma here
							],
							"correct": "<p><span>Correct</span></p>",
							"incorrect": "<p><span>Incorrect</span></p>" // no comma here
						},		
						{ // Question 10
							"q": "Does Copyright protect ideas?",
							"a": [
								{"option": "Yes",    "correct": false},
								{"option": "No",     "correct": true} // no comma here
							],
							"correct": "<p><span>Correct</span></p>",
							"incorrect": "<p><span>Incorrect</span></p>" // no comma here
						} // no comma here
					]			
			}});
			
			$('#test1').slickQuiz({json: {
					"info": {
						"name":    "",
						"main":    "",
						"results": "<h5>Your Result</h5>",
						"level1":  "Excellent, you will got A+ for FP322",
						"level2":  "Good job, A`s is in your hand",
						"level3":  "Need to Try Harder, just a little more reading",
						"level4":  "Need more reading, you don't want to get B`s below right?",
						"level5":  "Seriously? This is test bro. READ more!" // no comma here
					},
					"questions": [
						{ // Question 1 
							"q": "What is Desktop Publishing?",
							"a": [
								{"option": "Process of making the computer desktop and specific types of software to arranged the desktop in the computer",      "correct": false},
								{"option": "Process of publishing desktop design to make commercial marketing to easier the consumer",    						 "correct": false},
								{"option": "Process of using the computer and specific types of software to combine text and graphics to produce documents",     "correct": true},
								{"option": "Process of editing or making computer program or software for the consumer",  										 "correct": false} // no comma here
							],
							"correct": "<p><span>Correct</span></p>",
							"incorrect": "<p><span>Incorrect</span></p>" // no comma here
						},
						{ // Question 2 
							"q": "Which primary colour is true?",
							"a": [
								{"option": "green,red,blue",  			 "correct": false},
								{"option": "red,blue,yellow", 	 		 "correct": true},
								{"option": "red,black,white",  			 "correct": false}// no comma here
							],
							"correct": "<p><span>Correct</span></p>",
							"incorrect": "<p><span>Incorrect</span></p>" // no comma here
						},
						{ // Question 3 
							"q": "What is Layout?",
							"a": [
								{"option": "The fundamental soul of a man-made creation",         "correct": false},
								{"option": "The contextual of the important content",    		  "correct": false},
								{"option": "The arrangement of elements (content) on a page",     "correct": true} // no comma here
							],
							"correct": "<p><span>Correct</span></p>",
							"incorrect": "<p><span>Incorrect</span></p>" // no comma here
						},
						{ // Question 4
							"q": "What is Copyright?",
							"a": [
								{"option": "A right to copy something for individual purpose",    "correct": false},
								{"option": "A form of protection provided to the authors of original works",     "correct": true},
								{"option": "Copy - pasting files or word in text editor",      "correct": false}// no comma here
							],
							"correct": "<p><span>Correct</span></p>",
							"incorrect": "<p><span>Incorrect</span></p>" // no comma here
						},
						{ // Question 5
							"q": "Which art elements is true?",
							"a": [
								{"option": "vector,line,shape,</br>space&depth,texture,value",  		 "correct": false},
								{"option": "colour,line,shape,</br>space&depth,texture,value",   	 "correct": true},
								{"option": "colour,line,shape,</br>space&depth,texture,quantity",     "correct": false}// no comma here
							],
							"correct": "<p><span>Correct</span></p>",
							"incorrect": "<p><span>Incorrect</span></p>" // no comma here
						},
						{ // Question 6
							"q": "What is Design?",
							"a": [
								{"option": "The arrangement of elements (content) on a page",            "correct": false},
								{"option": "The fundamental soul of a man-made creation",  				 "correct": true},
								{"option": "The contextual of the important content",					 "correct": false} // no comma here
							],
							"select_any": false,
							"correct": "<p><span>Correct</span></p>",
							"incorrect": "<p><span>Incorrect</span></p>" // no comma here
						},		
						{ // Question 7
							"q": "Colour also called as?",
							"a": [
								{"option": "hue",  			"correct": true},
								{"option": "hes", 	  		"correct": false},
								{"option": "heu",  			"correct": false}// no comma here
							],
							"correct": "<p><span>Correct</span></p>",
							"incorrect": "<p><span>Incorrect</span></p>" // no comma here
						},		
						{ // Question 8
							"q": "Career opportunities in Desktop Publishing?",
							"a": [
								{"option": "Become a Graphic Designer",  	"correct": true},
								{"option": "Become a sailor captain", 	 	"correct": false},
								{"option": "Become a carpenter",  			"correct": false}// no comma here
							],
							"correct": "<p><span>Correct</span></p>",
							"incorrect": "<p><span>Incorrect</span></p>" // no comma here
						},
						{ // Question 9
							"q": "Usage of photoshop?",
							"a": [
								{"option": "Edit images",  		"correct": true},
								{"option": "Edit videos", 	 	"correct": false},
								{"option": "Edit sounds",  		"correct": false}// no comma here
							],
							"correct": "<p><span>Correct</span></p>",
							"incorrect": "<p><span>Incorrect</span></p>" // no comma here
						},
						{ // Question 10
							"q": "This image is called as?</br> <img src=\"../picture/test/1.png\" style=\" padding-left: 30px;\">",
							"a": [
								{"option": "Tool Palettes",   	  "correct": true},
								{"option": "Brushes tool selector",    "correct": false},
								{"option": "Menu Bar",    "correct": false},
								{"option": "Swatch",     "correct": false} // no comma here
							],
							"correct": "<p><span>Correct</span></p>",
							"incorrect": "<p><span>Incorrect</span></p>" // no comma here
						},	
						{ // Question 11
							"q": "This image is called as?</br> <img src=\"../picture/test/2.png\" style=\" padding-left: 30px;\">",
							"a": [
								{"option": "Tool Palettes",   	  "correct": false},
								{"option": "Brushes tool selector",    "correct": false},
								{"option": "Menu Bar",    "correct": false},
								{"option": "Swatch",     "correct": true} // no comma here
							],
							"correct": "<p><span>Correct</span></p>",
							"incorrect": "<p><span>Incorrect</span></p>" // no comma here
						},	
						{ // Question 12
							"q": "This image is called as?</br> <img src=\"../picture/test/3.png\" style=\" padding-left: 30px;\">",
							"a": [
								{"option": "Tool Palettes",   	  "correct": false},
								{"option": "Brushes tool selector",    "correct": true},
								{"option": "Menu Bar",    "correct": false},
								{"option": "Swatch",     "correct": false} // no comma here
							],
							"correct": "<p><span>Correct</span></p>",
							"incorrect": "<p><span>Incorrect</span></p>" // no comma here
						},	
						{ // Question 13
							"q": "This image is called as?</br> <img src=\"../picture/test/4.png\" style=\" padding-left: 30px;\">",
							"a": [
								{"option": "Tool Palettes",   	  "correct": false},
								{"option": "Brushes tool selector",    "correct": false},
								{"option": "Menu Bar",    "correct": true},
								{"option": "Swatch",     "correct": false} // no comma here
							],
							"correct": "<p><span>Correct</span></p>",
							"incorrect": "<p><span>Incorrect</span></p>" // no comma here
						},
						{ // Question 14
							"q": "what tools are used to make the image below?</br> <img src=\"../picture/test/5.png\" style=\" padding-left: 30px;\">",
							"a": [
								{"option": "Shape tool, Area type tool",   			 "correct": true},
								{"option": "Pencil tool, Type on path tool", 	     "correct": false},
								{"option": "Line tool, Type on path tool",    		 "correct": false},
								{"option": "Paint brush tool, Type on path tool",    "correct": false} // no comma here
							],
							"correct": "<p><span>Correct</span></p>",
							"incorrect": "<p><span>Incorrect</span></p>" // no comma here
						},
						{ // Question 15
							"q": "what tools are used to make the image below?</br> <img src=\"../picture/test/6.png\" width=\"300px\" style=\" padding-left: 30px;\">",
							"a": [
								{"option": "Shape tool, Area type tool",   			 "correct": false},
								{"option": "Pencil tool, Type on path tool", 	     "correct": true},
								{"option": "Line tool, Type on path tool",    		 "correct": false},
								{"option": "Paint brush tool, Type on path tool",    "correct": false} // no comma here
							],
							"correct": "<p><span>Correct</span></p>",
							"incorrect": "<p><span>Incorrect</span></p>" // no comma here
						},	
						{ // Question 16
							"q": "This image is called as?</br> <img src=\"../picture/test/7.png\" width=\"300px\" style=\" padding-left: 30px;\">",
							"a": [
								{"option": "Multiple",   	 "correct": false},
								{"option": "Gradient", 	     "correct": true},
								{"option": "Swatch",    	 "correct": false},
								{"option": "Coloured box",   "correct": false} // no comma here
							],
							"correct": "<p><span>Correct</span></p>",
							"incorrect": "<p><span>Incorrect</span></p>" // no comma here
						},
						{ // Question 17
							"q": "What is Texture Design?",
							"a": [
								{"option": "The actual surface or visual appearance of a design",   	 "correct": true},
								{"option": "A recognizable motif regularly repeated", 	 			     "correct": false},
								{"option": "The feels of a surface or things",    						 "correct": false},
								{"option": "A copy of shapes",   										 "correct": false} // no comma here
							],
							"correct": "<p><span>Correct</span></p>",
							"incorrect": "<p><span>Incorrect</span></p>" // no comma here
						},		
						{ // Question 18
							"q": "What is Pattern Design?",
							"a": [
								{"option": "The actual surface or visual appearance of a design",   	 "correct": false},
								{"option": "A recognizable motif regularly repeated", 	 			     "correct": true},
								{"option": "The feels of a surface or things",    						 "correct": false},
								{"option": "A copy of shapes",   										 "correct": false} // no comma here
							],
							"correct": "<p><span>Correct</span></p>",
							"incorrect": "<p><span>Incorrect</span></p>" // no comma here
						},	
						{ // Question 19
							"q": "X and Y is called as:-</br> <img src=\"../picture/test/8.png\" style=\" padding-left: 30px;\">",
							"a": [
								{"option": "X=Fill Y=Border",   		"correct": false},
								{"option": "X=Border Y=Fill", 	 		"correct": true},
								{"option": "X=Colour Y=Border",    		"correct": false},
								{"option": "X=Border Y=Colour",   		"correct": false} // no comma here
							],
							"correct": "<p><span>Correct</span></p>",
							"incorrect": "<p><span>Incorrect</span></p>" // no comma here
						},						
						{ // Question 20
							"q": "Adobe Photoshop is using pixel drawing program while Adobe Illustrator using vector.</br>Is the statement above is true?",
							"a": [
								{"option": "Yes",    "correct": true},
								{"option": "No",     "correct": false} // no comma here
							],
							"correct": "<p><span>Correct</span></p>",
							"incorrect": "<p><span>Incorrect</span></p>" // no comma here
						} // no comma here
					]			
			}});
		});		