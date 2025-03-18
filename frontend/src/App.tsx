import "./App.css";
import BowlerList from "./BowlerList.tsx";

function Welcome() {
  return (
    <>
      <h1>Bowler List</h1>
      <h2>
        This page displays a list of the bowlers that bowl at this bowling place
        and all of their information.
      </h2>
    </>
  );
}

function App() {
  return (
    <>
      <Welcome />
      <BowlerList />
    </>
  );
}

export default App;
