var quizJSON = {
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
                {"option": "vector,line,shape,space&depth,texture,value",  		 "correct": false},
                {"option": "colour,line,shape,space&depth,texture,value",   	 "correct": true},
                {"option": "colour,line,shape,space&depth,texture,quantity",     "correct": false}// no comma here
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
}; 