import React, { createContext, useState, useEffect } from "react";

const VotingContext = createContext();

export const VotingProvider = ({ children }) => {
  const [votes, setVotes] = useState({});
  const [voters, setVoters] = useState([]);
  const apiUrl =
    "https://crudcrud.com/api/2c48083323764025a08a44f9a4917c82/votes";

  useEffect(() => {
    fetchVotes();
  }, []);

  const fetchVotes = async () => {
    try {
      const response = await fetch(apiUrl);
      if (!response.ok) {
        throw new Error("Failed to fetch data");
      }
      const data = await response.json();
      setVotes(data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const addVote = async (voterName, monitorName) => {
    try {
      const response = await fetch(apiUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ voterName, monitorName }),
      });
      if (!response.ok) {
        throw new Error("Failed to add vote");
      }
      setVotes((prevVotes) => ({
        ...prevVotes,
        [monitorName]: [...(prevVotes[monitorName] || []), voterName],
      }));
      setVoters((prevVoters) => [...prevVoters, { voterName, monitorName }]);
    } catch (error) {
      console.error("Error adding vote:", error);
    }
  };

  return (
    <VotingContext.Provider value={{ votes, voters, addVote }}>
      {children}
    </VotingContext.Provider>
  );
};

export default VotingContext;
