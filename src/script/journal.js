console.log("If you can see this your journal JS file is properly linked.")
import API from "/src/scripts/journalAPI.js";
import injectDOM from "/src/scripts/entriesDOM.js";

// //retrieve journal entries from JSON
API.getJournalEntries()
    //take data and add to DOM
    .then(data => injectDOM.addToDom(data));

//create new journal entry and add to the DOM
const makeJournalEntry = (date, mood, concept, content) => {
    const newJournalEntry = {
        date: name,
        mood: mood.name,
        concept: concept.name,
        content: content.name
    }
    return newJournalEntry
}

	//add event listener for button
	.querySelector(".button")
	.addEventListener("click", event => {
		// declare variables to form value
		let dateInput = document.querySelector("#date").value;
		let moodInput = document.querySelector("#mood").value;
		let conceptsInput = document.querySelector("#concept").value;
		let entryInput = document.querySelector("#content").value; 
        //create object
        const completedForm = {
    				date: dateInput,
    				mood: moodInput,
    				concept: conceptsInput,
                    content: entryInput 
        }
                    console.log(completedForm)
                    API.saveJournalEntry(completedForm)
                    .then( () => {
                        document.querySelector(".entryLog").innerHTML = ""})
                    .then( () => {
                        API.getJournalEntries()
                        //take data and add to DOM
                        .then(data => injectDOM.addToDom(data));})


},)



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
