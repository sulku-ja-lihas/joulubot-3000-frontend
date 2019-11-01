import React, { useState } from "react";
import DatePicker from "react-datepicker";

import { sendEvent } from "./services/api";

const Home = props => {
  const [date, setDate] = useState(new Date());
  const [story, setStory] = useState("");
  const [task, setTask] = useState("");

  const handleSubmit = () => {
    sendEvent({ date, story, task }).then(e => console.log(e));
  };

  return (
    <div className="container mx-auto">
      <form className="w-full max-w-lg" onSubmit={handleSubmit}>
        <DatePicker selected={date} onChange={date => setDate(date)} />
        <textarea value={story} onChange={e => setStory(e.target.value)} />
        <select
          className="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline"
          id="grid-state"
          value={task}
          onChange={e => setTask(e.target.value)}
        >
          <option value="task1">Tehtävä 1</option>
          <option value="task2">Tehtävä 2</option>
          <option value="task3">Tehtävä 3</option>
        </select>
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Luo
        </button>
      </form>
    </div>
  );
};

export default Home;
