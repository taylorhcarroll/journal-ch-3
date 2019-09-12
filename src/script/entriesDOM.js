console.log("If you can see this your entriesDOM JS file is properly linked.")


import webComponent from "/src/scripts/entryComponent.js";


const injectDOM = (journalObj) => {
    document.querySelector(".entryLog").innerHTML += webComponent(journalObj)
}

// const injectDOM = {

//     addToDom:(entries) => {
//         console.log("add to dom called")
//     entries.forEach(item => {
//         console.log(item)
//         //this links the entry log div to now = the journal container
//         const journalContainer = document.querySelector(".entryLog");
//         journalContainer.innerHTML += webComponent.entryHTML(item);   
//         })
//     }, 
//     //inject
//     addEntToDom: function(entry) {
//     const journalContainer = document.querySelector(".entryLog");
//     journalContainer.innerHTML += 
//         webComponent.entryHTML(entry)
// },
export default injectDom 