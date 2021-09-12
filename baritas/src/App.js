import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
       
        <div className="FormApp">
        <h3>BARITAS SIGN IN</h3>
          <form action="/cashier/process_order.html">
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
