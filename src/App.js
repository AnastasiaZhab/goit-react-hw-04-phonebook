import Phonebook from "./components/Phonebook";
import s from "./App.module.css";

const App = () => {
  return (
    <div className={s.container}>
      <Phonebook />
    </div>
  );
};

export default App;
