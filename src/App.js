import "./App.css";
import Homepage from "./pages/Homepage";
import LoginModal from "./pages/LoginModal.tsx";
import RegisterModal from "./pages/RegisterModal.tsx";

function App() {
  return (
    <div className="App">
      <LoginModal />
      <RegisterModal />
    </div>
  );
}

export default App;
