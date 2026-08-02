import { BrowserRouter as Router } from "react-router-dom";
import OnyxPortfolio from "./OnyxPortfolio";
import { Analytics } from "@vercel/analytics/react";

const App = () => {
  return (
    <Router>
      <OnyxPortfolio />
      <Analytics />
    </Router>
  );
};

export default App;
