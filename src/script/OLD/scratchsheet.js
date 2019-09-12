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
