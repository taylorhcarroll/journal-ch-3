import API from "./journalAPI";

//this js file dynamically populates the mood
//drop down based on the mood in my resource array from database.json

const dropdown = {
    makeMoodDropDown: () => {
        API.getMood().then(moods => {
            console.log(moods);
            const moodDropdown = document.querySelectorAll("#mood-Input")
            moodDropdown.forEach(element => {
                element.innerHTML += `<option id="mood-${mood.id}">${mood.name}</option>`
            });
        });
    }
}

export default dropdown;