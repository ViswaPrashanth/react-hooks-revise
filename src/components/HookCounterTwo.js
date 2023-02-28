import React, { useState } from "react";

const HookCounterTwo = () => {
  const [name, setName] = useState({ firstname: "", lastname: "" });
  return (
    <div>
      <form>
        <input type="text" value={name.firstname} onChange={e => setName({...name, firstname : e.target.value})} />
        <input type="text" value={name.lastname} onChange={e => setName({...name, lastname : e.target.value})}/>
        <h1>Firstname - {name.firstname}</h1>
        <h1>Lastname - {name.lastname}</h1>
      </form>
      <h1>{JSON.stringify(name)}</h1>
    </div>
  );
};

export default HookCounterTwo;
