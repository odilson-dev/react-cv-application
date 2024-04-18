import "./App.css";
import EducationalExperience from "./components/EducationalExperience";
import GeneralInformation from "./components/GeneralInformation";
import PracticalExperience from "./components/PracticalExperience";

function App() {
  return (
    <div className="app">
      <GeneralInformation className="box" />
      <EducationalExperience className="box" />
      <PracticalExperience className="box" />
    </div>
  );
}
export default App;
