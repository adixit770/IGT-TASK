import * as React from "react";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import ResponsiveAppBar from './component/navbar';
import ReviewCard from './component/reviewCard';
import Footer from './component/footer';
import Pricing from './component/pricing';
import LetKeyWord from './component/letKeyWord';
import CustomizedAccordions from './component/accordion';
import Tutorial from './component/tutorial';
import 'react-multi-carousel/lib/styles.css';

function App() {
  return (
    <div className="container">
    <ResponsiveAppBar/>
    <ReviewCard/>
    <LetKeyWord/>
    <Pricing/>
    <Tutorial/>
    <CustomizedAccordions/>
    <Footer/>
  
    </div>
  );
}

export default App;
