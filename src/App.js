import "./App.css";
import Users from "./components/Users";
import ReducerUser from "./components/ReducerUser";
import AsyncUser from "./components/AsyncUsers";

function App() {
  return (
    <div className="App">
      {/* <Users /> */}
      <AsyncUser />
      <br />
      {/* <ReducerUser /> */}
    </div>
  );
}

export default App;
