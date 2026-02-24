import MovieCard from "../components/MovieCard";
import { useState } from "react";
import "../css/Home.css"

function Home(){
    const [searchQuery , setSearchQueary] = useState("");
    
    const movies = [
        {id: 1, title: "Dude" , release_date: "2025"},
        {id: 2, title: "Bison" , release_date: "2025"},
        {id: 3, title: "Dragon" , release_date: "2024"},
        {id: 4, title: "LIK" , release_date: "2026"},
        {id: 5, title: "Sarvam Maya" , release_date: "2025"}
    ];

const handleSearch = (e) =>{
    e.preventDefault()
    alert(searchQuery)
    setSearchQueary("")    
}
    return <div className="home">
        <form onSubmit={handleSearch} className="search-form">
            <input 
                type="text" 
                placeholder="Search for movies...." 
                className="search-input"
                value={searchQuery}
                onChange={(e) => setSearchQueary(e.target.value)}
            />
            <button type="submit" className="searchbtn">Search</button>
        </form>
        <div className="movies-grid">
            {movies.map((movie) => 
                (
                <MovieCard movie={movie} key={movie.id} /> 
                )
            )}
        </div>
    </div>
}
export default Home