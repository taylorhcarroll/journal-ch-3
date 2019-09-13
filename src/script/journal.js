import API from "./journalAPI.js";
import injectDOM from "./entriesDOM.js";
import dropdown from "./moodDropDown.js";

console.log("If you can see this your journal JS file is properly linked.")

dropdown.moodDropdown();

//this makes sure we have journal entries on the page when it loads  
API.getJournalEntries().then(data => injectDOM.addToDom(data));



//add event listener for submit button
document.querySelector("#saveButton")
	.addEventListener("click", event => {
		// declare variables from form values
		let dateInput = document.querySelector("#date").value;
		let moodInput = document.querySelector("#mood").value;
		let conceptsInput = document.querySelector("#concept").value;
        let entryInput = document.querySelector("#content").value;
        //check if fields are empty
        if (entryInput === "") {
			window.alert("You haven't written anything");
		} else if (moodInput === "") {
			window.alert("Please tell me how you're feeling today");
		} else if (conceptsInput === "") {
			window.alert("What did you learn that day?");
		} else if (dateInput === "") {
			window.alert("What day did you learn this?");
		} else {
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
                    //clears entry log to be repopulated by the database with the new entry//
                    document.querySelector("#entryLog").innerHTML = ""
                    API.getJournalEntries()
                    //take data and add to DOM
                    .then(data => injectDOM.addToDom(data));
                    })


}})

//delete button to remove entries from json db and refresh DOM//
const resultsContainer =  document.querySelector("#entryLog").addEventListener("click", (event) => {
    if (event.target.id.startsWith("deleteEntry--")) {
        //extract entry ID from button ID//
        console.log(event, event.target.id.split("--")[1])
        document.querySelector("#entryLog").innerHTML = "";
        API.deleteEntry(event.target.id.split("--")[1])
            .then(() => {
                //clear entryLog then populate with current db//
                API.getJournalEntries().then(data => injectDOM.addToDom(data));
                
            })
    } else if (event.target.id.startsWith("editEntry")) {
        console.log("edit", event.target.id.split("--")[1])
        editForm(event.target.id.split("--")[1]) 
    }
})