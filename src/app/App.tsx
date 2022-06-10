import React from "react";
import "./App.css";
import { useCountStore } from "./countStore";
import { useUserStore } from "./userStore";

function Counter() {
  const count = useCountStore((state) => state.count);
  const increaseCount = useCountStore((state) => state.increaseCount);
  const decreaseCount = useCountStore((state) => state.decreaseCount);
  const increaseCount2x = useCountStore((state) => state.increaseCount2x);
  const clear = useCountStore((state) => state.clear);

  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={increaseCount}>Increase count</button>
      <button onClick={increaseCount2x}>Increase count 2x</button>
      <button onClick={decreaseCount}>Decrease count</button>
      <button onClick={clear}>Clear</button>
    </div>
  );
}

function App() {
  const fullName = useUserStore((state) => state.fullName);
  const firstName = useUserStore((state) => state.firstName);
  const lastName = useUserStore((state) => state.lastName);
  const setFirstName = useUserStore((state) => state.setFirstName);
  const setLastName = useUserStore((state) => state.setLastName);
  const submitName = useUserStore((state) => state.submitName);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    submitName(firstName, lastName);
  };

  const handleChangeFirstName = (e: React.FormEvent<HTMLInputElement>) => {
    setFirstName(e.currentTarget.value);
  };

  const handleChangeLasttName = (e: React.FormEvent<HTMLInputElement>) => {
    setLastName(e.currentTarget.value);
  };

  return (
    <div className="App">
      <Counter />
      <br />
      <br />
      <br />
      <br />
      <h1>Name: {fullName}</h1>
      <form onSubmit={(e) => handleSubmit(e)}>
        <div>
          <h3>Firstname</h3>
          <input
            type="text"
            value={firstName}
            onChange={(e) => handleChangeFirstName(e)}
          />
        </div>
        <div>
          <h3>Lastname</h3>
          <input
            type="text"
            value={lastName}
            onChange={(e) => handleChangeLasttName(e)}
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default App;
