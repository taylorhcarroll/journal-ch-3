console.log("If you can see this your data JS file is properly linked.")
//API station

//function to push input to database.json//
const API = {
    getMood: () => {
        return fetch("http://localhost:8088/mood")
        .then(response => response.json())
    },
    getJournalEntries: () => {
        return fetch("http://localhost:8088/journalArray")
        .then(response => 
            response.json()
        );
    },
    saveJournalEntry: () => {
        return fetch("http://localhost:8088/journalArray", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(entry)
        });
    },
    deleteEntry: () => {
        return fetch(`http://localhost:8088/journalArray${entryId}`, {
            method: "DELETE"
        })        
    },
};

export default API



// export default API;

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



//example code to capture user input//
// document.querySelector("#saveEntry").addEventListener("click", event => {
//     let conceptInput = document.querySelector("#conceptsCovered").value
    

//     let journalEntryHolder = document.querySelector("#ourBirthdayList")
//     let newHTMLString = `HTML ELEMENTS`
//     journalEntryHolder.innerHTML += newHTMLString
// })

// /// html generator
// const HTMLGenerator = (object) => {
//     return `
//     <h2>${object.name}</h2>
//     <p>${object.birthday}</p>`
// }

// /// object builder
// let objectBuilder = (nameValue, birthdayValue) => {
//     let object = {
//         name: nameValue,
//         birthday: birthdayValue
//     }
//     return object
// }

// //example code to capture user input//
// document.querySelector("#saveEntry").addEventListener("click", event => {
//     let nameInput = document.querySelector("#conceptsCovered").value
    

//     let birthdayHolder = document.querySelector("#ourBirthdayList")
//     let newHTMLString = `HTML ELEMENTS`
//     journalEntryHolder.innerHTML += newHTMLString(objectBuilder(nameInput, birthdayInput))
// })
