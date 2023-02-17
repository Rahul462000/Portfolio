import React from "react";
import Sdata from "./SData";
import Card from "./Card";

const Service = () => {
  return (
    <>
      <div className="my-5">
        <h1 className="text-center">Our Services</h1>
      </div>
      <div className="container-fluid mb-5 ">
        <div className="row">
          <div className="col-10 mx-auto">
            <div className="row gy-4">
              {/* we will be using .map method to make it show 6 times */}
              {
                Sdata.map((val,ind) =>{
                  return <Card 
                  key={ind}
                  imgrsc = {val.imgsrc}
                  title = {val.title}
                  />
                })
              }
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Service;
