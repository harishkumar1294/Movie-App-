import MovieCard from "../components/MovieCard"

function Home(){
    const movies = [
        {id: 1, title: "Dude" , release_date: "2025"},
        {id: 2, title: "Bison" , release_date: "2025"},
        {id: 3, title: "Dragon" , release_date: "2024"},
        {id: 4, title: "LIK" , release_date: "2026"},
        {id: 5, title: "Sarvam Maya" , release_date: "2025"}
    ];
    return <div className="home">
        <div className="movies-grid">
            {movies.map((movie) => (
                <MovieCard movie={movie} key={movie.id} />
            ))}
        </div>
    </div>
}
export default Home