import hero from '../assets/hero-image.jpg'

import { Button } from "primereact/button";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <div>
        <div className="grid grid-nogutter surface-section text-800">
          <div className="col-12 md:col-6 p-6 text-center md:text-left flex align-items-center">
            <section>
              <span className="block text-6xl font-bold mb-1">
                Create the screens
              </span>
              <div className="text-6xl text-primary font-bold mb-3">
                your visitors deserve to see
              </div>
              <p className="mt-0 mb-4 text-700 line-height-3">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
              <Link to='employee'>
                <Button
                  icon="pi pi-send"
                  aria-label="Learn More"
                  type="button"
                  className="p-button p-component mr-3 p-button-raised"
                >
                  <span className="p-button-label p-c px-2">
                    Proceed to Dashboard
                  </span>
                  <span
                    role="presentation"
                    className="p-ink"
                    style={{ height: "127.344px", width: "127.344px" }}
                  />
                </Button>
              </Link>
              <Button
                aria-label="Live Demo"
                type="button"
                className="p-button p-component p-button-outlined"
              >
                <span className="p-button-label p-c">Know More</span>
                <span
                  role="presentation"
                  className="p-ink"
                  style={{ height: "120.542px", width: "120.542px" }}
                />
              </Button>
            </section>
          </div>
          <div className="col-12 md:col-6 overflow-hidden">
            <img
              src={hero}
              alt="hero"
              className="w-12 block md:h-full"
              style={{
                clipPath: "polygon(8% 0px, 100% 0%, 100% 100%, 0px 100%)",
              }}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
