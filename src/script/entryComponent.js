//create html representation of journal entry
const webComponent = (item) => {
        return `
    <div class="jContainer">
    <h5><span>Date: ${item.date} </span> <span> Mood: ${item.mood} </span></h5>
    <p class="concept">Concepts Covered  ${item.concept} </p>
    <p>${item.content}</p>
    <button type="button" id="deleteEntry--${item.id}">Delete Entry</button>
    <div>
    `;
}

export default webComponent;