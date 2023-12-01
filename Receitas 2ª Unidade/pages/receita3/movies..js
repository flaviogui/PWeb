import { useState } from 'react';


export default function Movies({ data: initialData }) {
  const [searchTerm, setSearchTerm] = useState('');
  const [data, setData] = useState(initialData); 

  const handleSearch = async () => {
    try {
      const apiUrl = `http://www.omdbapi.com/?apikey=16a58b53`;

      const searchParams = new URLSearchParams();
      if (searchTerm) searchParams.set('s', searchTerm);

      const res = await fetch(`${apiUrl}&${searchParams.toString()}`);
      const newData = await res.json();

      if (newData.Search && newData.Search.length > 0) {
        setData(newData);
      } else {
        console.log('Nenhum resultado encontrado para a pesquisa.');
      }
    } catch (error) {
      console.error('Erro ao buscar dados:', error);
    }
  };

  return (
    <div>
      <div>
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Digite a palavra-chave de pesquisa"
        />
        <button onClick={handleSearch}>Pesquisar</button>
      </div>

      <div>
        {data?.Search ? (
          data.Search.map((movie, index) => (
            <div key={index}>
              <p>{movie.Title} --- {movie.Year}</p>
              <img src={movie.Poster} width={100} alt={`Poster ${movie.Title}`} />
            </div>
          ))
        ) : (
          <p>Nenhum resultado encontrado.</p>
        )}
      </div>
    </div>
  );
}



export async function getServerSideProps(context) {
  try {
    const res = await fetch(`http://www.omdbapi.com/?apikey=16a58b53&s=avengers`);
    const data = await res.json();

    return {
      props: {
        data,
      },
    };
  } catch (error) {
    console.error('Erro ao obter dados do servidor:', error);
    return {
      props: {
        data: { Search: [] },
      },
    };
  }
}
