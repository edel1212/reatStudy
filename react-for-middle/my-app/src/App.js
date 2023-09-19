import {
  BrowserRouter as Router,
  //HashRouter as Router,  주소에 #이 붙는다
  Routes,
  Route,
  Switch,
} from "react-router-dom";
import Home from "./routes/Home";
import Detail from "./routes/Detail";

function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route path="/moive">
            <Detail />
          </Route>
          {/* exact사용 이유는 home경로를 정확하게 이해시키기 위함 */}
          <Route path="/" exact>
            <Home />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
