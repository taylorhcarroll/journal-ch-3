//create html representation of journal entry
const webComponent = {
    entryHTML: function(item) {
        return `
    <div class="jContainer">
    <h5><span>Date: ${item.date} </span> <span> Mood: ${item.mood} </span></h5>
    <p class="concept">Concepts Covered  ${item.concept} </p>
    <p>${item.content}</p>
    <button type="button" id="deleteEntry--${item.id}">Delete Entry</button>
    <button type="button" id="editEntry--${item.id}">Edit Entry</button>
    <div>
    `;

    },
    formHTML: function() {
        return `<h3>Journal Entry</h3>
        <form action="">
           <article>
           <fieldset>
              <label for="journalDate">Date of entry</label>
              <input type="date" name="journalDate" id="date" required>
           </fieldset>
           <fieldset>
                 <label for="conceptsCovered">Concepts Covered</label>
                 <input type="text" name="conceptsCovered" id="concept" required>
           </fieldset>
           <fieldset>
                 <label for="journalEntry">Journal Entry</label>
                 <textarea type="text" name="journalEntry" id="content" required> </textarea>
           </fieldset>
           <fieldset>
                 <label for="journalMood">Mood for the day</label>
                 <select type="text" name="journalMood" id="mood">
                          <optgroup id="mood-Input">
                             <option disabled value="default">Select Your Mood</option>
                          </optgroup> 
                 </select> 
           </fieldset>
           <button class="button" id="saveButton" type="Button">Submit</button>
        </article>
        </form>`
    }
};

export default webComponent;



// `
//         <h3>Journal Entry</h3>
//             <fieldset>
//                <label for="journalDate">Date of entry</label>
//                <input type="date" name="journalDate" id="date" required>
//             </fieldset>
//             <fieldset>
//                   <label for="conceptsCovered">Concepts Covered</label>
//                   <input type="text" name="conceptsCovered" id="concept" required>
//             </fieldset>
//             <fieldset>
//                   <label for="journalEntry">Journal Entry</label>
//                   <textarea type="text" name="journalEntry" id="content" required> </textarea>
//             </fieldset>
//             <fieldset>
//                   <label for="journalMood">Mood for the day</label>
//                   <select type="text" name="journalMood" id="mood">
//                            <optgroup id="mood-Input">
//                               <option disabled value="default">Select Your Mood</option>
//                            </optgroup> 
//                   </select> 
//             </fieldset>
//             <button class="button" id="saveButton" type="Button">Submit</button>
//             `