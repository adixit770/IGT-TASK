import React from "react";

function Footer() {
  return (
    <div className="container py-5">
      <div className=""style={{display:"flex",justifyContent:"center",alignItems:"center" ,flexDirection:"column"}}>
        <h1 className="text-center footerHeading">Ready to learn design <br /> with Nia Matos</h1>
        <button
          class="MuiButtonBase-root MuiIconButton-root MuiIconButton-sizeMedium css-av538e-MuiButtonBase-root-MuiIconButton-root mt-5 mb-5"
          tabindex="0"
          type="button"
          aria-label="Open settings"
          data-mui-internal-clone-element="true"
          
        >
          <span class="TryFree" style={{width:"200px "}}>Start Learning Today</span>
          <span class="MuiTouchRipple-root css-8je8zh-MuiTouchRipple-root"></span>
        </button>
      </div>
      <div className="row">
        <div className="col-md-3">
          <div className="footer">
            <h4 className="my-4 ">About Us</h4>
            <ul>
              <li>Support Center</li>
              <li>Customer Support</li>
              <li>About Us</li>
              <li>Copyright</li>
              <li>Popular Campaign</li>
            </ul>
          </div>
        </div>
        <div className="col-md-3">
          {" "}
          <div className="footer">
            <h4 className="my-4 ">Our Information</h4>
            <ul>
              <li> Return Policy</li>
              <li> Privacy Policy</li>
              <li>Terms & Conditions</li>
              <li>Site Map</li>
              <li>Store Hours</li>
            </ul>
          </div>
        </div>
        <div className="col-md-3">
          {" "}
          <div className="footer">
            <h4 className="my-4 ">My Account</h4>
            <ul>
              <li> Press inquiries</li>
              <li>Social media</li>
              <li>directories</li>
              <li>Images & B-roll</li>
              <li>Permissions</li>
            </ul>
          </div>
        </div>
        <div className="col-md-3">
          {" "}
          <div className="footer">
            <h4 className="my-4 ">Policy</h4>
            <ul>
              <li> Application security</li>
              <li>Software principles</li>
              <li>Unwanted software policy</li>
              <li>Responsible supply chain</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
