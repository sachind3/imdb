const API_KEY = process.env.API_KEY;
import Results from "@/components/Results";

async function getMovies(searchTerm) {
  const res = await fetch(
    `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${searchTerm}&language=en-US&include_adult=false`,
    { next: { revalidate: 10000 } }
  );
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  const data = await res.json();
  return data?.results;
}

const SearchPage = async ({ params }) => {
  const searchTerm = params.searchTerm;
  const results = await getMovies(searchTerm);
  return (
    <div>
      {results && results.length === 0 && (
        <h1 className="text-center pt-6">No results found</h1>
      )}

      {results && <Results results={results} />}
    </div>
  );
};
export default SearchPage;
