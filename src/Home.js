import React from "react";

import { finishRaffle, startRaffle } from "./services/api";

const Home = props => {
  return (
    <div className="container mx-auto">
      <button
        type="submit"
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        onClick={() => startRaffle()}
      >
        Start raffle!
      </button>
      <button
        type="submit"
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        onClick={() => finishRaffle()}
      >
        Finish raffle!
      </button>
    </div>
  );
};

export default Home;
