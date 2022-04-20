import { AmongUs } from "./components";
import { A } from "./components/A";

function App() {
  return (
    <>
      <div className="h-screen w-screen bg-[#0d0d0d]">
        <AmongUs />
        <main className="text-white absolute top-0 left-0 w-full h-full place-items-center hidden grid-cols-12 mx-auto">
          <div className="col-start-1 col-end-12 2xl:col-start-4 2xl:col-span-6">
            <div className="flex items-center flex-col gap-2">
              <div className="flex items-center">
                <A />
                <h1 className="text-3xl sm:text-6xl lg:text-7xl 2xl:text-8xl uppercase font-among">
                  mong us
                </h1>
              </div>
              <a
                className="font-among text-xl lg:text-2xl font-bold hover:text-red-600 transition-colors"
                href="https://store.steampowered.com/app/945360/Among_Us/"
              >
                Buy the game on steam
              </a>
            </div>
          </div>
        </main>
      </div>
    </>
  );
}

export default App;
