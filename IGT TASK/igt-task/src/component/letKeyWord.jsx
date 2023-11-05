import React from "react";

function LetKeyWord() {
  return (
    <div className=" py-5">
      <div className="heading "style={{marginBottom:"132px",marginTop:"66px"}} >
        <h4 >Whats the function</h4>
        <h3 >Let’s see how it works</h3>
      </div>
      <div className="bgcolor2"></div>
      <div className="row">
        <div className="col-md-3">
          <div className="footer">
         <img  className="arrow" src="assests/arrow.png" alt=""  /> 
            <img
              src="assests/Rounded Rectangle 528 copy.png"
              alt=""
              style={{
                position: "absolute",
                top: "0",
                right: "212px",
                zIndex: "-1",
              }}
            />
            <h1 className="my-4  LetworksHead">01</h1>
            <h3 className="LetworksInner mb-3">
              Set disbursement Instructions
            </h3>
            <h4 className="LetworksInner2 ">
              Get your blood tests delivered at <br /> home collect a sample
              from the <br /> your blood tests.
            </h4>
          </div>
        </div>
      
        <div className="col-md-3">
          {" "}
          <div className="footer">
          <img  className="arrow1" src="assests/arrow (1).png" alt=""  /> 

          <img
              src="assests/Rounded Rectangle 528 copy.png"
              alt=""
              style={{
                position: "absolute",
                top: "0",
                right: "212px",
                zIndex: "-1",
              }}
            />
            <h1 className="my-4 LetworksHead ">02</h1>
            <h3 className="LetworksInner  mb-3">
              Assembly retrieves funds from your account
            </h3>
            <h4 className="LetworksInner2">
              Get your blood tests delivered at <br /> home collect a sample
              from the <br /> your blood tests.
            </h4>
          </div>
        </div>
        <div className="col-md-3">
          {" "}
          <div className="footer">
          <img  className="arrow" src="assests/arrow.png" alt=""  /> 
          <img
              src="assests/Rounded Rectangle 528 copy.png"
              alt=""
              style={{
                position: "absolute",
                top: "0",
                right: "212px",
                zIndex: "-1",
              }}
            />
            <h1 className="my-4  LetworksHead">03</h1>
            <h3 className="LetworksInner  mb-3">
              Assembly initiates disbursement
            </h3>
            <h4 className="LetworksInner2">
              Get your blood tests delivered at <br /> home collect a sample
              from the <br /> your blood tests.
            </h4>
          </div>
        </div>
        <div className="col-md-3">
          {" "}
          <div className="footer">
          <img
              src="assests/Rounded Rectangle 528 copy.png"
              alt=""
              style={{
                position: "absolute",
                top: "0",
                right: "212px",
                zIndex: "-1",
              }}
            />
            <h1 className="my-4 LetworksHead">04</h1>
            <h3 className="LetworksInner  mb-3">
              Customer receives funds payment
            </h3>
            <h4 className="LetworksInner2">
              Get your blood tests delivered at <br /> home collect a sample
              from the <br /> your blood tests.
            </h4>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LetKeyWord;
