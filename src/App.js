import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import Land from "./components/pages/Land";
import About from "./components/pages/About";
import Faq from "./components/pages/Faq";
//import ForgotPassword from "./components/ForgotPassword";
//import ResetPassword from "./components/ResetPassword";
import Terms from "./components/pages/Terms";
// import { Test } from "./testingForms";
import MainUserpage from './components/reducer/Userpage/MainUserpage';
import { SignUp } from "./components/pages/SignUp";

import Default from "./components/pages/Default";
import ContactUs from "./components/pages/ContactUs";
import UploadDoc from "./components/reducer/Userpage/modal/UploadDoc";






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
            <Route exact path="/contact" component={ContactUs} />
            <Route exact path="/terms" component={Terms} />

            <Route exact path="/login" component={SignUp} />

            <Route exact path="/userpage" component={MainUserpage} />
            <Route exact path="/contact" component={ContactUs} />

            <Route exact path="/doc" component={UploadDoc} />



            <Route component={Default} />


          </Switch>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
