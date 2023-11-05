import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import AdbIcon from "@mui/icons-material/Adb";
import { colors } from "@mui/material";
// import { Player } from "video-react";
import Footer from "./footer";

const pages = ["Home", "Adversite", "Supports", "Contact"];
const settings = ["Profile", "Account", "Dashboard", "Logout"];

function ResponsiveAppBar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <div className="container">
      <AppBar position="relative">
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <img
              src="assests/Combined shape 16724.png"
              alt="no img"
              style={{ marginRight: "12px", color: "#02073E" }}
            />
            <Typography
              variant="h6"
              noWrap
              component="a"
              href="#app-bar-with-responsive-menu"
              sx={{
                mr: 2,
                display: { xs: "none", md: "flex" },
                fontFamily: "Poppins",
                fontWeight: "700 !important",
                letterSpacing: ".3rem",
                color: "#02073E",
                fontSize: "20px !important",
                textDecoration: "none",
                fontStyle: "Normal !important",
              }}
            >
              Landguru
            </Typography>

            <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                color="inherit"
              >
                <MenuIcon />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "left",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "left",
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{
                  display: { xs: "block", md: "none" },
                }}
              >
                {pages.map((page) => (
                  <MenuItem key={page} onClick={handleCloseNavMenu}>
                    <Typography textAlign="center">{page}</Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>
            {/* <img
              src="assests/Combined shape 16724.png"
              alt="no img"
              style={{ marginRight: "12px", color: "#02073E" }}
            /> */}
            <Typography
              variant="h5"
              noWrap
              component="a"
              href="#app-bar-with-responsive-menu"
              sx={{
                mr: 2,
                display: { xs: "flex", md: "none" },
                flexGrow: 1,
                fontFamily: "Poppins",
                fontWeight: "700 !important",
                letterSpacing: ".3rem",
                color: "#02073E",
                fontSize: "20px !important",
                textDecoration: "none",
                fontStyle: "Normal !important",
              }}
            >
              Landguru
            </Typography>
            <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
              {pages.map((page) => (
                <Button
                  key={page}
                  onClick={handleCloseNavMenu}
                  sx={{ my: 2, color: "white", display: "block" }}
                >
                  {page}
                </Button>
              ))}
            </Box>

            <Box sx={{ flexGrow: 0 }}>
              <Tooltip title="Open settings">
                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                  <span className="TryFree">Try For Free</span>
                </IconButton>
              </Tooltip>

              <Menu
                sx={{ mt: "45px" }}
                id="menu-appbar"
                anchorEl={anchorElUser}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                open={Boolean(anchorElUser)}
                onClose={handleCloseUserMenu}
              >
                {settings.map((setting) => (
                  <MenuItem key={setting} onClick={handleCloseUserMenu}>
                    <Typography textAlign="center">{setting}</Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
      <div className="heroSection"></div>

      <div className="row">
        <div className="col-md-6">
          <div style={{ paddingTop: "141px" }}>
            <div className="d-flex align-items-center">
              <img src="assests/.png" alt="no img" />
              <h6 className="mb-0 mx-2">Trused by over 4,332 students</h6>
            </div>
            <h1 className="heading">
              Learn Design <br />
              with Nia Matos
            </h1>
            <h3 className="subHeading">
              Get your blood tests delivered at let home collect sample <br />{" "}
              from the victory of the managments that supplies best <br />
              design system guidelines ever.
            </h3>
            <div className="position-relative">
              <input
                type="search"
                className="search"
                placeholder="Search Course Name"
              />
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 18 18"
                fill="none"
                style={{ position: "absolute", right: "76px", top: "28px" }}
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M17.7526 16.6973L13.4319 12.3769C14.5029 11.0704 15.1484 9.39783 15.1484 7.57526C15.1484 3.39407 11.7556 0 7.57427 0C3.38917 0 0 3.39407 0 7.57526C0 11.757 3.38917 15.15 7.57427 15.15C9.39719 15.15 11.0661 14.5075 12.3719 13.4371L16.6927 17.7537C16.9861 18.0473 17.4592 18.0473 17.7526 17.7537C18.0461 17.464 18.0461 16.9865 17.7526 16.6973ZM7.57427 13.6425C4.22539 13.6425 1.50385 10.9204 1.50385 7.57526C1.50385 4.22957 4.22539 1.50484 7.57427 1.50484C10.9194 1.50484 13.6447 4.22957 13.6447 7.57526C13.6447 10.9204 10.9194 13.6425 7.57427 13.6425Z"
                  fill="#02073E"
                />
              </svg>
            </div>
            <div className="d-flex icon" style={{ gap: "25px" }}>
              <h3 className="Sponsored">Sponsored by:</h3>
              <img
                src="assests/paypal.png"
                alt="no img"
                className="img-fluid"
                height={28}
                width={100}
              />
              <img
                src="assests/google.png"
                alt="no img"
                className="img-fluid"
                height={28}
                width={85}
              />
              <img
                src="assests/Dropbox_logo_2017.png"
                alt="no img"
                className="img-fluid"
                height={24}
                width={124}
              />
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <div
            style={{
              paddingTop: "86px",
              position: "relative",
              // height:"710px",
              // width:"575px"
            }}
          >
            <img
              src="assests/pattern.png"
              alt=""
              style={{ position: "absolute", right: "-74px", top: "56px" }}
            />
            <div className="borderYideo"></div>
            <div className="vert_video">
              <video width={545} height={680} controls style={{objectFit:"cover"}}>
                <source src="assests/video (1080p).mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default ResponsiveAppBar;
