
import React from "react";
import { useParams } from "react-router-dom";
import pollsData from "../Data/pollsData";

const CompanyList = () => {
  const { pollId } = useParams();
  const poll = pollsData.flatMap((company) => company.polls).find((p) => p.id === parseInt(pollId, 10));

  if (!poll) {
    return <div>Poll not found</div>;
  }

  return (
    <div>
      <h2>{poll.title} Results</h2>
      <p>Candidate A: {poll.results.candidateA}%</p>
      <p>Candidate B: {poll.results.candidateB}%</p>
    </div>
  );
};

export default CompanyList;
