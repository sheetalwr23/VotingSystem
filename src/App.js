import React, { useContext, useState } from "react";
import { VotingProvider } from "./VotingContext";
import VotingContext from "./VotingContext";
import "./App.css";
import Modal from "./Modal";

function App() {
  const { votes, addVote } = useContext(VotingContext);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [voterName, setVoterName] = useState("");
  const [monitorName, setMonitorName] = useState("");

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleVote = () => {
    addVote(voterName, monitorName);
    setVoterName("");
    setMonitorName("");
    closeModal();
  };

  return (
    <div className="App">
      <h1>Class Monitor Vote</h1>
      <button onClick={openModal}>Add Vote</button>
      {isModalOpen && <Modal onClose={closeModal} />}

      <h2>Votes:</h2>
      <ul>
        <li>
          Student A: {votes["Student A"] ? votes["Student A"].length : 0} votes
          {votes["Student A"] && (
            <ul>
              {votes["Student A"].map((voter, index) => (
                <li key={index}>{voter}</li>
              ))}
            </ul>
          )}
        </li>
        <li>
          Student B: {votes["Student B"] ? votes["Student B"].length : 0} votes
          {votes["Student B"] && (
            <ul>
              {votes["Student B"].map((voter, index) => (
                <li key={index}>{voter}</li>
              ))}
            </ul>
          )}
        </li>
        <li>
          Student C: {votes["Student C"] ? votes["Student C"].length : 0} votes
          {votes["Student C"] && (
            <ul>
              {votes["Student C"].map((voter, index) => (
                <li key={index}>{voter}</li>
              ))}
            </ul>
          )}
        </li>
      </ul>
    </div>
  );
}

export default function AppWrapper() {
  return (
    <VotingProvider>
      <App />
    </VotingProvider>
  );
}
