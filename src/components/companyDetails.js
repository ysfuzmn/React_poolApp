import React from "react";
import { useParams } from "react-router-dom";
import companies from "../Data/companiesData";

const partyColors = {
  "AKP-MHP": "text-yellow-500",
  CHP: "text-red-600",
  İYİP: "text-yellow-500",
  DEM: "text-purple-800",
  TİP: "text-red-600",
  ZP: "text-red-600",
  YRP: "text-red-600",
};

const CompanyPollResults = () => {
  const { companyName } = useParams();

  const filteredCompanies = companies.filter(
    (company) => company.name.toLowerCase() === companyName.toLowerCase()
  );

  if (filteredCompanies.length === 0) {
    return <div>Company not found</div>;
  }
  const currentCompanyName = filteredCompanies[0].name; 

  return (
    <div className="container p-4 md:p-12 mt-12 md:mt-24">
      
      <h1 className="text-2xl md:text-3xl mb-4 font-bold">{currentCompanyName} şirketinin bütün Anket Sonuçları</h1>

      {filteredCompanies.map((company, index) => (
        <div  className="bg-white w-full p-2 md:p-4 mt-4 md:mt-8 ml-auto shadow-md rounded">
          
          <span className= "date flex  text-center justify-center">{company.city}</span>
          <span className= "date flex mb-5 text-center justify-center">({company.date})</span>
          
          <div key={index} className="flex-wrap md:flex-nowrap justify-around flex">
            
            {company.mayors.map((mayor, mayorIndex) => (
              <div key={mayorIndex} className="flex flex-col items-center mr-4">
                <img
                  src={mayor.profilePicture}
                  alt={mayor.name}
                  className="w-8 h-8 rounded-full"
                  style={{ fontSize: "0.75rem" }}
                />
                <span className={`flex text-center small-text`}>{mayor.name}</span>
                <span className={`flex text-center small-text ${partyColors[mayor.party]}`}>{mayor.party}</span>
                <div className="results flex flex-wrap justify-center">
                  <span className="mt-2">{company.results[mayorIndex]}</span>
                </div>
                
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default CompanyPollResults;
