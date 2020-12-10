import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import Land from "./components/Land";
import About from "./components/About";
import Faq from "./components/Faq";
// import ForgotPassword from "./components/F";
//import ResetPassword from "./components/ResetPassword";
import Terms from "./components/Terms";
import { Test } from './testingForms';

import Login from "./components/SignUp-Login";
import "bootstrap/dist/css/bootstrap.min.css";
import ContactUs from "./components/ContactUs";


function App() {
  return (
    <Router>
      <div className="App">

        <Header />

        <div>
          <Switch>
            <Route exact path="/">
              <Land />
            </Route>
            <Route exact path="/about-us" component={About} />
            <Route exact path="/faq" component={Faq} />
            <Route exact path="/terms" component={Terms} />
            
            <Route exact path="/login" component={Login} />

            <Route exact path="/forgot" component={ForgotPassword} />
            <Route exact path="/reset" component={ResetPassword} />
            <Route exact path="/search" component={SearchResult} />
            <Route exact path="/contact" component={ContactUs} />

            {/* <Route exact path="/forgot" component={ForgotPassword} /> */}
            {/* <Route exact path="/reset" component={ResetPassword} /> */}
            {/* <Route exact path="/search" component={SearchResult} /> */}

          </Switch>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
