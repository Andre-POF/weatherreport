import Toparea from "./views/Toparea.jsx";
import { InputProvider } from "./contexts/InputContext.jsx";
import Hero from "./views/Hero.jsx";
import "./App.css";
import FavouriteCities from "./views/FavouriteCities.jsx";
function App() {
  return (
    <>
      <InputProvider>
        <main className="w-3/4 flex justify-start m-auto p-6 flex-col items-start">
          <Toparea />
          <Hero />
          <FavouriteCities />
        </main>
      </InputProvider>
    </>
  );
}

export default App;
