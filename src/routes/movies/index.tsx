import { component$, useSignal, useStylesScoped$, useVisibleTask$ } from "@builder.io/qwik";
import { Link, type DocumentHead, Form, routeAction$ } from "@builder.io/qwik-city";
import  styles from "./style.css?inline";
//import Counter from "~/components/starter/counter/counter";
//import Hero from "~/components/starter/hero/hero";
//import Infobox from "~/components/starter/infobox/infobox";
//import Header from "~/components/starter/header/header";

const  movieApiKey = "3e78671a";

type Movie ={
    Title : string;
    Year : string;
    imdbID: string;
    Type: string;
    Poster: string;
}

export const useGetMovies = routeAction$(async (values) =>{
    const url = `http://www.omdbapi.com/?apikey=${movieApiKey}&s=${values.search}`;
    const res = await fetch(url);
    const data = await res.json();
    const list = data.Search as Movie[];

    return{
        movies: list, 
    }
});


export default component$(() => {
    useStylesScoped$(styles);
    const defaultMovie = useSignal("bourne");   
    const movies = useGetMovies();

    useVisibleTask$(() =>{
        document.querySelector("button")?.click();
    })
  return (  
    <>      
     <div class="grid">  
        <header class="header" style="color: #292929;">
            <Link href="/">volver a incio</Link>
            <h3 style="color: #292929;">Página para buscar peliculas</h3>
            <Form class="header-form" action={movies}>
                <input class="header-input" name="search" type="text" value={defaultMovie.value} />
                <button class="link">buscar peliculas</button>
            </Form>
        </header>
        <main class="main">
            {movies.value?.movies ?
               <ul class="movies">
                {movies.value.movies.map((movie) =>(
                    <li key={movie.imdbID} class="movie">
                        <img src={movie.Poster} alt={movie.Title} width="220" height="300"/>
                        <p>{movie.Title}</p>

                    </li> 
                ))}
               </ul>   
            : <p>No se encontraron Peliculas</p>}
        </main>
        <footer class="footer">
            <h4 style="color: #292929;">&#169; 2023 - Walter Gomez - FullStack Developer</h4>
        </footer>  
     </div>
    </>
  );
});

export const head: DocumentHead = {
  title: "buscador de peliulas",
  meta: [
    {
      name: "description",
      content: "APP para buscar Peliculas",
    },
  ],
};
