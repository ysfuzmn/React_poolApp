
import React from "react";
import { useParams, Link } from "react-router-dom"; // Import Link from react-router-dom
import pollsData from "../Data/pollsData";

const PollDetails = () => {
  const { companyId } = useParams();
  const company = pollsData.find((c) => c.id === parseInt(companyId, 10));

  if (!company) {
    return <div>Company not found</div>;
  }

  return (
    <div>
      <h2>{company.company} Polls</h2>
      <ul>
        {company.polls.map((poll) => (
          <li key={poll.id}>
            <Link to={`/polls/${poll.id}`}>{poll.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PollDetails;
