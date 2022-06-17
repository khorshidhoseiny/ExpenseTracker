import "./App.css";
import ExpenseApp from "./component/ExpenseApp";
import { ToastProvider } from "react-toast-notifications";
import Typewriter from "typewriter-effect";

function App() {
  return (
    <div className="App">
      <ToastProvider>
        <header className="headerText">
        <Typewriter
          options={{
            strings: [
              "Expense Tracker",
            ],
            autoStart: true,
            loop: true,
          }}
        />
         
        </header>
        <ExpenseApp />
      </ToastProvider>
    </div>
  );
}

export default App;
