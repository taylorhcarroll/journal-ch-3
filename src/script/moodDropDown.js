import API from "./journalAPI.js";

//this js file dynamically populates the mood
//drop down based on the mood in my resource array from database.json

const dropdown = {
    moodDropdown: () => {
        API.getMoods().then(moods => {
            console.log(moods);
            const moodDropdown = document.querySelectorAll("#moody")
            moodDropdown.forEach(element => {
                moods.forEach(mood => {
                element.innerHTML += `<option id="mood-${mood.id}">${mood.name}</option>`;
            });
        });
    });
}
};
export default dropdown;