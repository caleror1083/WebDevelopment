	$(document).ready(function()
    {
        var possibleWords = ["florence", "paris", "madrid", "rome", "singapore", "dubai", "new york city", 
                            "shanghai", "london", "tokyo", "sydney", "toronto", "beijing", "moscow",
                            "johannesburg", "istanbul", "warsaw", "jakarta", "kuala lumpur", "mexico city",
                            "hong kong", "chicago", "seoul", "los angeles", "mumbai"]
		const maxGuess = 10
		var pauseGame = false
		var guessedLetters = []
		var guessingWord = []
		var wordToMatch
		var numGuess
		var wins = 0

		resetGame()
		document.onkeypress = function (event)    // Wait for key press
		    {
                // Make sure key pressed is an alpha character
                if (isAlpha(event.key) && !pauseGame)
				    {
                        checkForLetter(event.key.toUpperCase())
                    }
    		}

		function checkForLetter(letter)    // Game Functions - check if letter is in word & process
			{
				var foundLetter = false
				var correctSound = document.createElement("audio")
				correctSound.setAttribute("src", "assets/sounds/stairs.mp3")
				
				// Search string for letter
        		for (var i = 0, j = wordToMatch.length; i < j; i++)
					{
            			if (letter === wordToMatch[i])
							{
                				guessingWord[i] = letter
                				foundLetter = true
                				correctSound.play()
                
								// If guessing word matches random word
                				if (guessingWord.join("") === wordToMatch)
									{
										wins++    // Increment # of wins
                    					pauseGame = true
                    					updateDisplay()
                    					setTimeout(resetGame,5000)
                					}
            				}
        			}

        		if (!foundLetter)
					{
						if (!guessedLetters.includes(letter))    // Check if inccorrect guess is already on the list
							{
								guessedLetters.push(letter)    // Add incorrect letter to guessed letter list
								numGuess--    // Decrement the number of remaining guesses
            				}
            			if (numGuess === 0)
							{
								guessingWord = wordToMatch.split()    // Display word before reseting game
                				pauseGame = true
                				setTimeout(resetGame, 5000)
            				}
        			}
        		updateDisplay()
    		}

		function isAlpha(ch)    // Check if key pressed is between A-Z or a-z
			{
				return /^[A-Z]$/i.test(ch);
			}

		function resetGame()
			{
				numGuess = maxGuess
				pauseGame = false
				wordToMatch = possibleWords[Math.floor(Math.random() * possibleWords.length)].toUpperCase()    // Get a new word
				console.log(wordToMatch)

				guessedLetters = []    // Reset word arrays
				guessingWord = []

				for (var i = 0, j = wordToMatch.length; i < j; i++)    // Reset the guessed word
					{
						if (wordToMatch[i] === " ")    // Put a space instead of an underscore between multi words
							{
								guessingWord.push(" ")
							}
						else
							{
								guessingWord.push("_")
							}
					}
				updateDisplay()    // Update the Display
			}

		function updateDisplay ()
			{
				document.getElementById("totalWins").innerText = wins
				document.getElementById("currentWord").innerText = guessingWord.join("")
				document.getElementById("remainingGuesses").innerText = numGuess
				document.getElementById("guessedLetters").innerText =  guessedLetters.join(" ")
			}
	})