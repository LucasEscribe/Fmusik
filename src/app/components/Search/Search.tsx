import { useState } from 'react';

function Search() {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(event.target.value);
  };

  const handleSearchSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // Perform search logic here
    console.log('Search Query:', searchQuery);
  };

  return (
    <form onSubmit={handleSearchSubmit}>
      <input type="text" value={searchQuery} onChange={handleSearchChange} placeholder="Search..." />
      <button type="submit">Buscar</button>
    </form>
  );
}

export default Search;
