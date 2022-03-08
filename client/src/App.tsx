import "./App.css";

function App() {
  const handleFile = (e) => {
    console.log(e.target.files[0]);
  };
  return (
    <div className="App">
      <input
        type="file"
        name="file"
        onChange={(e) => {
          handleFile(e);
        }}
      ></input>
      <button type="button">upload</button>
    </div>
  );
}

export default App;
