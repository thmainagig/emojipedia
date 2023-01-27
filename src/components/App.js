import React from "react";
import Entry from "./Entry";
import emojipedia from "./emojipedia";

function createEntry(entryterms){
  return(
    <Entry key={entryterms.id} emoji={entryterms.emoji} name={entryterms.name} description={entryterms.meaning} />
  );
}
function App() {
  return (
    <div>
      <h1>
        <span>emojipedia</span>
      </h1>

      <dl className="dictionary">
      {emojipedia.map(createEntry)}
      </dl>
    </div>
  );
}

export default App;
