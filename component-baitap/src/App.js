import Homepage from "./components/Ex1/Homepage";
import Index from "./components/Ex2/Index";

function App() {
  return (
    <div className="App">
      <h1 style={{ fontSize: 100 }} className="text-center text-danger">Bài 1</h1>
      <Homepage />
      <h1 style={{ fontSize: 100 }} className="text-center text-danger">Bài 2</h1>
      <Index />
    </div>
  );
}

export default App;
