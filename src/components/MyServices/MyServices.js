import React from "react";
import "./MyService.css";

const MyServices = () => {
  return (
    <div className="mt-5">
      <h1 className="text-center">My Services</h1>
      <div className="row my-3 mt-5 justify-content-center ">
        <div className="col-md-4 my-2 card2">
          <div className=" text-center">
            <div className="">
              <i className="bi bi-code fs-1"></i>{" "}
              <h5 className="card-title">Web Design</h5>
              <p>
                Modern and mobile-ready website that will help you reach all of
                your marketing.
              </p>
            </div>
          </div>
        </div>
        <div className="col-md-4 my-2 card2">
          <div className="text-center">
            <div className="">
              <i className="bi bi-code-slash fs-1"></i>{" "}
              <h5 className="card-title">Web Development</h5>
              <p>
                Modern and mobile-ready website that will help you reach all of
                your marketing.
              </p>
            </div>
          </div>
        </div>
        <div className="col-md-4 my-2 card2">
          <div className="text-center ">
            <div className="">
              <i className="bi bi-pen fs-1"></i>{" "}
              <h5 className="card-title">Content Writing</h5>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Dolore, laborum.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyServices;
