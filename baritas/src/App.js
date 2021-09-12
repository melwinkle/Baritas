import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
       
        <div className="FormApp">
        <h3>SIGN IN</h3>
          <form>
            <label>
              <input type="text" name="username" placeholder="Username" />
            </label>
            <br></br>
            <label>
              <input type="password" name="password" placeholder="Password"/>
            </label>
            <br></br>
            <button class="subbut" type="submit">Sign In</button>
            
          </form>
        </div>
        
      </header>
    </div>
  );
}

export default App;
