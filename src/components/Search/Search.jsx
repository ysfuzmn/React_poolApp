import React, { useState } from 'react';
import cities from '../../Data/cities';

const Search = ({ onCitySearch }) => {
    const [searchTerm, setSearchTerm] = useState('');
    const [searchResults, setSearchResults] = useState([]);
    const [error, setError] = useState(false);

    const handleSearch = (e) => {
        const term = e.target.value;
        setSearchTerm(term);

        if (term.length >= 3) {
            const results = cities.filter((city) =>
                city.toLowerCase().includes(term.toLowerCase())
            );
            setSearchResults(results);
            setError(false);
        } else {
            setSearchResults([]);
            setError(true);
        }
    };

    const handleResultClick = (result) => {
        setSearchTerm(result);
        setSearchResults([]);
    };

    return (
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
            <div className='search' style={{
                position: 'relative',
                backgroundColor: 'transparent',
                padding: '2rem',
                border: '1px solid #e2e8f0',
                borderRadius: '0.375rem',
                boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
                marginBottom: '2rem',
                top: '-50px',
                

            }}>
                <input
                    type="text"
                    placeholder="Şehir Ara..."
                    value={searchTerm}
                    onChange={handleSearch}
                    style={{
                        width: '400px',
                        padding: '1rem',
                        outline: 'none',
                        height: '5px',
                        backgroundColor: 'transparent',
                        borderBottom: '1px solid #cbd5e0',
                        borderColor: error ? 'red' : '#cbd5e0' // Set border color based on error state
                    }}
                />
                <button
                    style={{
                        position: 'static',
                        right: '0.5rem',
                        top: '0.5rem',
                        bottom: '0',
                        height: '2.5rem',
                        width: '5rem',
                        margin: '0.5rem',
                        
                        backgroundColor: '#4299e1',
                        justifyItems : 'center',

                        color: '#ffffff',
                        borderRadius: '0.375rem',
                        ':hover': {
                            backgroundColor: '#3185ce',
                        },
                        ':focus': {
                            outline: 'none',
                        },
                        
                    }}
                    onClick={() => onCitySearch(searchTerm)}
                >
                    Ara
          </button>

                {searchResults.length > 0 && (
                    <div style={{ marginTop: '1rem', maxHeight: '300px', overflowY: 'auto' }}>
                        <ul style={{ listStyleType: 'none', padding: '0', margin: '0' }}>
                            {searchResults.map((result, index) => (
                                <li
                                    key={index}
                                    style={{ padding: '0.5rem 0', cursor: 'pointer', color: '#4a5568' }}
                                    onClick={() => handleResultClick(result)}
                                >
                                    {result}
                                </li>
                            ))}
                        </ul>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Search;
