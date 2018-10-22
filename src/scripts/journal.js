// Journal Data
const journalEntries = [
    {
        date: "07/24/2018",
        concept: "Array methods",
        entry: "We learned about 4 different array methods today. forEach made sense, but the others still confuse me.",
        mood: "Happy"
    },
    {
        date: "07/26/2018",
        concept: "Array methods",
        entry: "Seems like I forgot everything I learned.",
        mood: "Sad"
    },
    {
        date: "07/28/2018",
        concept: "Manipulating the DOM",
        entry: "Couldn't get anything to work right.",
        mood: "Angry"
    }
]

/*
    Purpose: To create, and return, a string template that
    represents a single journal entry object as HTML

    Arguments: journalEntry (object)
*/

// the following targets the article the new journal entry will be appended to 
const entryList = document.querySelector('#entryLog')
// the following function creates the html structure for the new entry
// journalEntry argument references the object properties in journalEntries array of objects
const makeJournalEntryComponent = (journalEntry) => {
    return`
    <h2>${journalEntry.date}: ${journalEntry.concept}</h2>
    <p>${journalEntry.entry}</p>
    <p>Mood for the day: ${journalEntry.mood}</p>
    `
}
// the following function loops through the journalEntries array and the entry argument references the journalEntry from the makeJournalEntryComponent function
journalEntries.forEach((entry) => {
    let newEntry = document.createElement('div');   
    let entryContents = makeJournalEntryComponent(entry);
    newEntry.innerHTML = entryContents;
    entryList.appendChild(newEntry);
})