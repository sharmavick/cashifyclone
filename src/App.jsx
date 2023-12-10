import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Navbar from "./component/Navbar";
import Banner from "./component/Banner";
import OurService from "./component/OurService";
import ProductCard from "./component/ProductCard";
import cards from "./data/product.json";
import SellDevice from "./component/SellDevice";
import Accordian from "./component/Accordian";
import Login from "./page/Login";
import Scroller from "./component/Scroller";
import Store from "./component/Store";
import Explore from "./component/Explore";
import Review from "./component/Review";
import Footer from "./component/Footer";

function App() {
  return (
    <>
      <Navbar />
      <Banner />
      <OurService />
      <SellDevice/>
      <ProductCard product={cards} />
      <Store/>
      {/* <Accordian/> */}
      {/* <Login/> */}
    
      <Explore />
      <Review/>
        <Scroller/>
        <Footer/>
    </>
  );
}

export default App;
