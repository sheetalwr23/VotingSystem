import React, { createContext, useState } from "react";

// Create a Context for the voting system
const VotingContext = createContext();

// Create a Provider component
export const VotingProvider = ({ children }) => {
  const [votes, setVotes] = useState({});

  const addVote = (voterName, monitorName) => {
    setVotes((prevVotes) => ({
      ...prevVotes,
      [monitorName]: [...(prevVotes[monitorName] || []), voterName],
    }));
  };

  return (
    <VotingContext.Provider value={{ votes, addVote }}>
      {children}
    </VotingContext.Provider>
  );
};

export default VotingContext;
