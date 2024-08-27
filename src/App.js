import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/header/header";
import Footer from "./components/footer/footer";
import Home from "./pages/home/Home";
import About from "./pages/about/About";
import NotFound from "./pages/error/NotFound";
import CardsDetails from "./components/common/cardsDetails/CardsDetails";

/**
La fonction App est le point d'entrée principal de l'application.
Elle retourne le contenu principal de l'application, qui est encapsulé dans une balise BrowserRouter.
Le composant Routes définit un conteneur pour les routes de l'application et contient plusieurs composants enfants Route.
@returns le contenu principal de l'application c'est-à-dire la page home.
*/

function App() {
    return ( 
        <BrowserRouter>
            <Header></Header>
            <Routes>
                <Route path="/kasa/"element={<Home />}></Route>
                <Route path="/kasa/about"element={<About />}></Route>
                <Route path="/kasa/logs/:id"element={<CardsDetails/>} />
                <Route path="*" element={<NotFound />} />
            </Routes>   
            <Footer></Footer>
        </BrowserRouter>
    );
}


export default App;