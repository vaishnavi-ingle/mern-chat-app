import "./App.css";
import Homepage from "./Pages/Homepage";
import { Route, Switch  } from "react-router-dom";
import Chatpage from "./Pages/Chatpage";

import AIChatIcon from "./components/AIChatIcon";

function App() {
  return (
    <div className="App">
      <Switch>
      <Route path="/" component={Homepage} exact />
      <Route path="/chats" component={Chatpage} />
      <Route path="/" component={AIChatIcon} exact />
      </Switch>
      <AIChatIcon />
    </div>
  );
}

export default App;
