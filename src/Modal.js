import React, { useState, useContext } from "react";
import VotingContext from "./VotingContext";

const Modal = ({ onClose }) => {
  const { addVote } = useContext(VotingContext);
  const [voterName, setVoterName] = useState("");
  const [monitorName, setMonitorName] = useState("");

  const handleVote = () => {
    addVote(voterName, monitorName);
    onClose();
  };

  return (
    <div className="modal">
      <div className="modal-content">
        <h2>Cast Your Vote</h2>
        <label>
          Your Name:
          <input
            type="text"
            value={voterName}
            onChange={(e) => setVoterName(e.target.value)}
          />
        </label>
        <label>
          Choose Monitor:
          <select
            value={monitorName}
            onChange={(e) => setMonitorName(e.target.value)}
          >
            <option value="">Select a student</option>
            <option value="Student A">Student A</option>
            <option value="Student B">Student B</option>
            <option value="Student C">Student C</option>
          </select>
        </label>
        <button onClick={handleVote}>Vote</button>
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
};

export default Modal;
