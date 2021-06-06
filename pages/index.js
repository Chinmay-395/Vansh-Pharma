import AboutUs from "../components/AboutUs";
import Carousel from "../components/carousel/Carousel";
import Footer from "../components/Footer";
import { Navbar } from "../components/Navbar";
import Services from "../components/Services";
import WwdComponent from "../components/WwdComponent";

export default function Home() {
  return (
    <div className="grid grid-row">
      {/* ROW-1: THE NAVBAR COMPONENT */}
      <div className="bg-green-400 sticky top-0 z-50">
        <Navbar />
      </div>
      {/* ROW-2: THE CAROUSEL COMPONENT */}
      <div className="">
        <Carousel />
      </div>
      {/* ROW-3 WHAT DO U NEED COMPONENT */}
      <div id="home" className="pt-8">
        <div className="container mx-auto">
          <div className="grid grid-col-1 my-4 md:grid-col-4">
            <div className="">
              <div className="separator p-5 mx-auto">
                <span className="text-5xl p-2">What We Do</span>
              </div>
            </div>
            <WwdComponent />
          </div>
        </div>
      </div>
      {/* ROW-3 Services */}
      <div id="services" className="pt-8">
        <div className="grid grid-col-1 my-4">
          <div className="container mx-auto">
            <div className="separator p-5 mx-auto">
              <span className="text-5xl p-2">Pharmacy Service</span>
            </div>
          </div>

          <Services />
        </div>
      </div>
      {/* Row-4 About-US */}
      <div id="aboutus" className="pt-8">
        <div className="grid grid-col-1 my-4">
          <div className="container mx-auto">
            <div className="">
              <div className="separator p-5 mx-auto">
                <span className="text-5xl p-2">About Us</span>
              </div>
            </div>

            <AboutUs />
          </div>
        </div>
      </div>
      {/* Footer */}
      <div id="footer" className="bg-green-400 ">
        <Footer />
      </div>
    </div>
  );
}
