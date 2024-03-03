import React, { useState } from "react";
import CountdownTimer from "./countdownTimer";
import Search from "./Search/Search";
import Spinner from "../components/Spinner/Spinner";
import companies from "../Data/companiesData";
import { Link } from 'react-router-dom';


const PollList = () => {
  const [searchedCity, setSearchedCity] = useState('İstanbul');
  const [isLoading, setIsLoading] = useState(false);
  const [cityExists, setCityExists] = useState(true); 

  const handleSearch = (city) => {
    setIsLoading(true); 
    setTimeout(() => {
      const cityExists = companies.some(company => company.city.toLowerCase() === city.toLowerCase());
      if (!cityExists) {
        setCityExists(false); 
        setIsLoading(false); 
        return; 
      }

      setCityExists(true); 
      setSearchedCity(city);
      setIsLoading(false); 
    }, 2000); 
  };

  const partyColors = {
    "AKP-MHP": "text-yellow-500",
    CHP: "text-red-600",
    İYİP: "text-yellow-500",
    DEM: "text-purple-800",
    TİP: "text-red-600",
    ZP: "text-red-600",
    YRP: "text-red-600",
  };

  const filteredCompanies = searchedCity
    ? companies.filter((company) => company.city.toLowerCase().includes(searchedCity.toLowerCase()))
    : companies;

  const groupedCandidates = {};
  filteredCompanies.forEach((company) => {
    company.mayors.forEach((mayor) => {
      if (!groupedCandidates[mayor.party]) {
        groupedCandidates[mayor.party] = [];
      }
      const mayorExists = groupedCandidates[mayor.party].some(existingMayor => existingMayor.name === mayor.name);
      if (!mayorExists) {
        groupedCandidates[mayor.party].push({
          name: mayor.name,
          profilePicture: mayor.profilePicture,
        });
      }
    });
  });

  return (
    <div className="container p-4 md:p-12 mt-12 md:mt-24">
      <Search  onCitySearch={handleSearch} />
      {isLoading ? (
        <Spinner />
      ) : (
        <div>
          <h1 className="text-2xl md:text-3xl"> 31 Mart 2024</h1>
          {cityExists ? (

            <div>
              <h2 className="text-xl md:text-3xl mb-2 md:mb-4 font-bold"><span className="underline">{searchedCity}</span> için Son Anket Sonuçları</h2>
              <CountdownTimer />
              
              <div className="bg-white w-full p-2 md:p-4 mt-4 md:mt-8 ml-auto shadow-md rounded">
                <div className="flex-wrap md:flex-nowrap justify-around">
                  {filteredCompanies.map((company, index) => (
                    <div key={index} className="flex flex-col items-center mb-4 md:mb-0">
                    <Link to={`/company/${company.name}`} className="flex font-bold mt-5 text-blue-600 hover:text-blue-800 hover:underline">{company.name} ↩</Link>
                      <span className= "date flex mb-5">({company.date})</span>
                      <div className="results flex flex-wrap justify-center gap-16">
                        {company.mayors.map((mayor, mayorIndex) => (
                          <div key={mayorIndex} className="flex flex-col items-center mr-4">
                            <img src={mayor.profilePicture} alt={mayor.name} className="w-8 h-8 rounded-full" style={{ fontSize: '0.75rem' }} />
                            <span className={`flex text-center small-text`}>{mayor.name}</span> 
                            <span className={`flex text-center small-text ${partyColors[mayor.party]}`}>{mayor.party}</span>
                            <div className="results flex flex-wrap justify-center">
                              <span className="mt-2">{company.results[mayorIndex]}</span>
                            </div>
                          </div>
                        ))}
                            <hr className="w-full my-1 border-gray-300" /> 
                      </div>
                    </div>
                  ))}
                </div>
              </div>   


            </div>

          ) : (
            <p className="text-red-500 mt-4 md:mt-8">Girdiğiniz şehire ait veri bulunamadı. Lütfen tekrar deneyiniz.</p>
          )}
        </div>
      )}
    </div>
  );
};

export default PollList;
