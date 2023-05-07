
import React from 'react';
import NavBar from './Navabar';
import WebApp from './Webapp';
import LandingPage1 from './LandingPage1'
import LandingPage2 from './landingpage2';
// import DescriptionPage from './components/DescriptionPage';
import Footer from './footer';

function App() {
  return (
    <div>
      <NavBar />
      <LandingPage1 />
      <LandingPage2 />
      {/* <LandingPageTwo /> */}
      {/* <DescriptionPage /> */}
      <Footer />
    </div>
  );
}

export default App;

// import React from "react";
// import logo from "./logo.svg";
// import "./App.css";

// function App() {
//   const [data, setData] = React.useState(null);

//   React.useEffect(() => {
//     fetch("/api")
//       .then((res) => res.json())
//       .then((data) => setData(data.message));
//   }, []);

//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>{!data ? "Loading..." : data}</p>
//       </header>
//     </div>
//   );
// }

// export default App;