import "./App.css";
import PersonList from "./components/PersonList";
import PersonDetails from "./components/PersonDetails";
import ErrorBoundry from "./error-boundry/ErrorBoundry";


function App() {
  return (
    <div className="App">
      <ErrorBoundry>
        <PersonDetails />
        <PersonList />
      </ErrorBoundry>
    </div>
  );
}

export default App;
