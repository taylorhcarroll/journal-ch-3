//from main js//

// defines the empty array removed as this now lives in database.json
// const journalArray = [];

// example j entry
// let journalEntry = {
//     journalMood: "confused",
//     journalDate: "08/29/2019",
//     conceptsCovered: "pushing to DOM",
//     content: "this is a test to be pushed to the array",

// };
// // console.log(journalEntry);

// this defines the function addEntry and specifies to push the argument into ther array
// function addEntry(item) {
//     journalArray.push(item);
// }

// this calls the function you just defined on line 19 adds the journal entry to the journal array
// addEntry(journalEntry);

// console logs to confirm you can see the array
// console.log(journalArray);

// this links the entry log div to now = the journal container
// const journalContainer = document.querySelector(".entryLog");

// //this calls the array
// journalArray.forEach(item => {
//     let jContent = `
//     <div class="jContainer">
//         <h5>${item.journalDate} Feeling: ${item.journalMood}</h5>
//         <h5>${item.conceptsCovered}</h5>
//         <p>${item.content}</p>
//     </div>
// `;
//     journalContainer.innerHTML += jContent;
// })


// this fetches the array from database.json

// journalArray.forEach(item => {
//     let jContent = `
//     <div class="jContainer">
//         <h5>${item.journalDate} Feeling: ${item.journalMood}</h5>
//         <h5>${item.conceptsCovered}</h5>
//         <p>${item.content}</p>
//     </div>
// `;
//     journalContainer.innerHTML += jContent;
// })

// fetch("http://localhost:3000/journalArray") // Fetch from the API
//     .then(response => response.json())  // Parse as JSON
//     .then(entries => {
//         //console.table makes the information look way better//
//         // console.table(parsedResponse)
//         entries.forEach(item => {
//             let jContent = `
//             <div class="jContainer">
//                 <h5>${item.date} Feeling: ${item.mood}</h5>
//                 <h5>${item.concept}</h5>
//                 <p>${item.content}</p>
//             </div>
//         `;
//             journalContainer.innerHTML += jContent;
//     });
// });



//save to DB
			// API.saveJournalEntry(totalEntry);
			//inject at the top of the journal entry container
			

// API.getJournalEntries()
// 	//sort entries
// 	.then(data => data.sort((a, b) => parseFloat(b.id) - parseFloat(a.id)))
// 	//take data and add to DOM
// 	.then(data => injectDOM.addToDom(data));

// //create new journal entry and add to the DOM
// const newJournalEntry = document
// 	//add event listener for button
// 	.querySelector(".button1")
// 	.addEventListener("click", event => {
// 		//declare variables to form value - REFACTOR
// 		// let dateInput = document.querySelector("#journalDate").value;
// 		// let moodInput = document.querySelector("#mood").value;
// 		// let conceptsInput = document.querySelector("#concepts").value;
// 		// let entryInput = document.querySelector("#entry").value;
// 		// //check if the fields are empty
// 		// if (entryInput === "") {
// 		// 	window.alert("FILL OUT THE FORM");
// 		// } else if (moodInput === "") {
// 		// 	window.alert("YOU NEED TO PICK A MOOD");
// 		// } else if (conceptsInput === "") {
// 		// 	window.alert("WHAT ABOUT THE CONCEPTS???");
// 		// } else if (dateInput === "") {
// 		// 	window.alert("YEAH YOU NEED A DATE TOO");
// 		// } else {
// 			//create object
// 			const totalEntry = {
// 				date: dateInput,
// 				mood: moodInput,
// 				concepts: conceptsInput,
// 				text: entryInput
// 			};
// 			console.log(totalEntry);
// 			//save to DB
// 			API.saveJournalEntry(totalEntry);
// 			//inject at the top of the journal entry container
// 			injectDOM.addEntToDom(totalEntry);
// 			//clear text input fields
// 			document.getElementById("journalDate").value = "";
// 			document.getElementById("mood").value = "";
// 			document.getElementById("concepts").value = "";
// 			document.getElementById("entry").value = "";
// 			//open modal validating submission - declare vars REFACTOR with ERROR?
// 			let modal = document.getElementById("myModal");
// 			let span = document.getElementsByClassName("close")[0];
// 			modal.style.display = "block";
// 			//click on close button or anywhere on the window to close modal
// 			span.onclick = () => {
// 				modal.style.display = "none";
// 			};
// 			window.onclick = function(event) {
// 				if (event.target == modal) {
// 					modal.style.display = "none";
// 				}
// 			};
// 		}
// 	);

// //sorting oldest first by ID
// document.querySelector(".reverse").addEventListener("click", event => {
// 	API.getJournalEntries()
// 		.then(data => data.sort((a, b) => parseFloat(a.id) - parseFloat(b.id)))
// 		.then(data => injectDOM.RefreshDOM(data));
// });

// //sorting by newest entries first
// document.querySelector(".normal").addEventListener("click", event => {
// 	API.getJournalEntries()
// 		.then(data => data.sort((a, b) => parseFloat(b.id) - parseFloat(a.id)))
// 		.then(data => injectDOM.RefreshDOM(data));
// });

// //rest any filters
// document.querySelector(".resetFilter").addEventListener("click", event => {
// 	API.getJournalEntries()
// 		.then(data => data.sort((a, b) => parseFloat(b.id) - parseFloat(a.id)))
// 		.then(data => injectDOM.RefreshDOM(data));
// });

// //filter by mood
// document.querySelector("#moodSelector").addEventListener("input", event => {
// 	API.getJournalEntries()
// 		.then(data => data.sort((a, b) => parseFloat(b.id) - parseFloat(a.id)))
// 		.then(data =>
// 			injectDOM.filterMood(data, document.querySelector("#moodSelector").value)
// 		);
// });

// //search entries and post results

// document
// 	.querySelector("#searchEntries")
// 	.addEventListener("keypress", function(e) {
// 		if (e.key === "Enter") {
// 			API.getJournalEntries()
// 				.then(data => data.sort((a, b) => parseFloat(b.id) - parseFloat(a.id)))
// 				.then(data =>
// 					injectDOM.searchEntries(
// 						data,
// 						document.querySelector("#searchEntries").value
// 					)
// 				);
// 		}
// 	});


// create new journal entry and add to the DOM
// const makeJournalEntry = (date, mood, concept, content) => {
//     const newJournalEntry = {
//         date: name,
//         mood: mood.name,
//         concept: concept.name,
//         content: content.name
//     }
//     return newJournalEntry
//







//////IGNORE THIS IS SCRATCH NOTES//////

/*
    Purpose: To create, and return, a string template that
    represents a single journal entry object as HTML

    Arguments: journalEntry (object)
*/
// const makeJournalEntryComponent = (journalEntry) => {
//     // Create your own HTML structure for a journal entry
//     return `
//     <div class="student">
//     <h1 class="xx-large failing">${journalEntry.concept}</h1>
//     <section class="bordered dashed section--padded">${journalEntry.date}</section>
//     <aside class="pushRight">${journalEntry.mood}</aside>
// </div> `
// }

/*
    Purpose: To render all journal entries to the DOM

    Arguments: entries (array of objects)
*/



// const renderJournalEntries = (entries) => {

// }

// // Invoke the render function
// renderJournalEntries(journalEntries)

// API.getJournalEntries().then(data => addToDom(data));

// document.querySelector(".button1").addEventListener("click", event => {
//     let dateInput = document.querySelector("#date").value;
//     let dateInput = document.querySelector("#mood").value;
//     let dateInput = document.querySelector("#concepts").value;
//     let dateInput = document.querySelector("#entry").value;
//     console.log(dateInput, moodInput, conceptsInput, entryInput);

// });
