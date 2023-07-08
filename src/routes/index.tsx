import { component$ } from "@builder.io/qwik";
import { Link, type DocumentHead } from "@builder.io/qwik-city";
import PageLogo from "~/components/page-logo";

//import Counter from "~/components/starter/counter/counter";
//import Hero from "~/components/starter/hero/hero";
//import Infobox from "~/components/starter/infobox/infobox";
//import Header from "~/components/starter/header/header";

export default component$(() => {
  return (  
    <>      
     <section> 
     <h1>Buscador de Peliculas</h1>
      <PageLogo/>
      <Link class="link" href="/movies" title="Buscador de peliculas"> Click para acceder a buscador...!!! </Link>        
     </section>
     <footer class="footer">
            <h4 style="color: #292929;">&#169; 2023 - Walter Gomez - FullStack Developer</h4>
        </footer>  
    </>
  );
});

export const head: DocumentHead = {
  title: "APP-MOVIES",
  meta: [
    {
      name: "description",
      content: "APP para buscar Peliculas",
    },
  ],
};
