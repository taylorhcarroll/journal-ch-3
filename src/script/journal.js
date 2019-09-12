import API from "./journalAPI.js";
import injectDOM from "./entriesDOM.js";
import dropdown from "./moodDropDown.js";

console.log("If you can see this your journal JS file is properly linked.")

dropdown.moodDropdown();

//this makes sure we have journal entries on the page when it loads  
API.getJournalEntries()
        //sort entries here later
    .then(data =>
    injectDOM.addToDom(data));



//add event listener for submit button
const addEntry = document.querySelector(".button")
	.addEventListener("click", event => {
		// declare variables to form value
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
                        document.querySelector(".entryLog").innerHTML = ""})
                    .then( () => {
                        API.getJournalEntries()
                        //take data and add to DOM
                        .then(data => injectDOM.addToDom(data));})


}})
