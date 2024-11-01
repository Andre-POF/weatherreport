import Toparea from "./views/Toparea.jsx";
import { InputProvider } from "./contexts/InputContext.jsx";

function App() {
  return (
    <>
      <InputProvider>
        <main className="w-3/4 flex justify-start m-auto p-6 flex-col items-start">
          <section>
            <Toparea />
          </section>
          <section>Hero</section>
          <section>Favourite Cities</section>
        </main>
      </InputProvider>
    </>
  );
}

export default App;
