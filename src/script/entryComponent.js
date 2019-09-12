//create html representation of journal entry
const webComponent = (item) => {
        return `
    <div class="jContainer">
    <h5><span>Date: ${item.date} </span> <span> Mood: ${item.mood} </span></h5>
    <p class="concept">Concepts Covered  ${item.concept} </p>
    <p>${item.content}</p>
    <div>
    `;
}

export default webComponent;