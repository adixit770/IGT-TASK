import React from "react";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

function Pricing() {
  const [alignment, setAlignment] = React.useState("web");
  const [borderSeletced, setBorderSeletced] = React.useState(true);

  const handleChange = (event, newAlignment) => {
    setAlignment(newAlignment);
  };
  return (

   <>

    <div className="container">
      <div className="heading">
        <h4>Pricing Plan</h4>
        <h3>Choose your pricing policy</h3>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          background: "#F7F8FB;",
        }}
      >
        {" "}
        <ToggleButtonGroup
          className="toggel"
          color="standard"
          value={alignment}
          exclusive
          onChange={handleChange}
          aria-label="Platform"
        >
          <ToggleButton value="Monthly Plan">Monthly Plan</ToggleButton>
          <ToggleButton value="Annual Plan">Annual Plan</ToggleButton>
        </ToggleButtonGroup>
      </div>

      <div className="row" style={{ marginTop: "60px" }}>
        <div
          className={`col-md-6 mr-5 boxH ${
            borderSeletced == true ? "selectedBorder" : ""
          }`}
          onClick={() => setBorderSeletced(true)}
        >
          <div className="subHeading" style={{ marginLeft: "40px", marginBottom: "60px" }}>
            <h4 className="mb-3 mt-5">Free Plan</h4>
            <h6 className="mb-2 ">For Small teams or office</h6>
          </div>
          <div className="points ">
            <div className="icon">
              {" "}
              <CheckCircleIcon />{" "}
              <h6 className="ml-3">
                {" "}
                Ultimate access to all course, exercises and assessments
              </h6>
            </div>
            <div className="icon">
              {" "}
              <CheckCircleIcon />{" "}
              <h6 className="ml-3">
                Free acess for all kind of exercise corrections with downloads.
              </h6>
            </div>
            <div className="icon">
              {" "}
              <CheckCircleIcon />
              <h6 className="ml-3">
                Total assessment corrections with free download access system
              </h6>
            </div>
            <div className="icon">
              {" "}
              <CheckCircleIcon />
              <h6 className="ml-3">
                Unlimited download of courses on the mobile app contents
              </h6>
            </div>
            <div className="icon">
              {" "}
              <CheckCircleIcon />
              <h6 className="ml-3">
                Download and print courses and exercises in PDF
              </h6>
            </div>
          </div>
          <div style={{display:"flex",justifyContent:"center"}}>
            <button
              class="MuiButtonBase-root MuiIconButton-root MuiIconButton-sizeMedium css-av538e-MuiButtonBase-root-MuiIconButton-root"
              tabindex="0"
              type="button"
              aria-label="Open settings"
              data-mui-internal-clone-element="true"
            >
              <span
                class="TryFree"
                style={{
                  width: "210px",
                  height: "50px",
                  FlexShrink: "0",
                  alignItems: "center",
                  marginTop: "50px",
                }}
              >
                Subscribe Now
              </span>
              <span class="MuiTouchRipple-root css-8je8zh-MuiTouchRipple-root"></span>
            </button>
          </div>
        </div>
        <div
          className={`col-md-6 boxH ${
            borderSeletced == false ? "selectedBorder" : ""
          }`}
          onClick={() => setBorderSeletced(false)}
        >
          <div
            className="row"
            style={{ marginLeft: "40px", marginBottom: "58px" }}
          >
            <div className="col-md-6 subHeadingleft">
              <h4 className="mb-3 mt-4">Recommended</h4>
              <h3 className="mb-2 ">Premium</h3>
              <h6 className="mb-2">For startup enterprise</h6>
            </div>
            <div
              className="subHeadingRight col-md-6"
              style={{ paddingRight: "70px" }}
            >
              <h3 className="mt-5 mb-1"> Starting from</h3>
              <h1>49.99/mo</h1>
            </div>
          </div>
          <div className="points">
            <div className="icon">
              {" "}
              <CheckCircleIcon />{" "}
              <h6 className="ml-3">
                {" "}
                Ultimate access to all course, exercises and assessments
              </h6>
            </div>
            <div className="icon">
              {" "}
              <CheckCircleIcon />{" "}
              <h6 className="ml-3">
                Free acess for all kind of exercise corrections with downloads.
              </h6>
            </div>
            <div className="icon">
              {" "}
              <CheckCircleIcon />
              <h6 className="ml-3">
                Total assessment corrections with free download access system
              </h6>
            </div>
            <div className="icon">
              {" "}
              <CheckCircleIcon />
              <h6 className="ml-3">
                Unlimited download of courses on the mobile app contents
              </h6>
            </div>
            <div className="icon">
              {" "}
              <CheckCircleIcon />
              <h6 className="ml-3">
                Download and print courses and exercises in PDF
              </h6>
            </div>
          </div>
          <div style={{
                  
                  display: "flex",
                  justifyContent: "center",
                  
                }}>
            <button
              class="MuiButtonBase-root MuiIconButton-root MuiIconButton-sizeMedium css-av538e-MuiButtonBase-root-MuiIconButton-root"
              tabindex="0"
              type="button"
              aria-label="Open settings"
              data-mui-internal-clone-element="true"
            >
              <span
                class="TryFree align-items-center"
                style={{
                  width: "210px",
                  height: "50px",
                  FlexShrink: "0",
                 
                  marginTop: "20px",
                }}
              >
                Subscribe Now
              </span>
              <span class="MuiTouchRipple-root css-8je8zh-MuiTouchRipple-root"></span>
            </button>
          </div>
        </div>
      </div>
    </div>
    
    </>
  );
}

export default Pricing;
