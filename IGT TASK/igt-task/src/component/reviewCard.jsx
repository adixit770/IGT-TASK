import React, { useEffect, useState } from "react";
import ReactStars from "react-rating-stars-component";
import { render } from "react-dom"
import VisibilityIcon from "@mui/icons-material/Visibility";
import axios from "axios";
import Carousel from "react-multi-carousel";

const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      slidesToSlide: 3, // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 2, // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
  };

function ReviewCard() {
  const [reviews, setReviews] = useState([]);
  const getReview = async () => {
    try {
      const data = await axios.get("http://localhost:8008/api/getReviewUser");
      setReviews(data.data.data);

    } catch (error) {}
  };
  useEffect(() => {
    getReview(); 
  }, []);
  const ratingChanged = (newRating) => {
    console.log(newRating);
  };
console.log("reviews",reviews);

  return (
    <>
      <div
        className="mainCard"
        style={{
          paddingTop: "327px",
          marginBottom: "173px",
        }}
      >
        <div className="textCard text-center">
          <h4>Quality features</h4>
          <h3>Tutorials that people love most</h3>
        </div>
        <div className="row">
        <Carousel responsive={responsive}>
          {reviews?.map((list) => {
            return (

              <div className="col-md-4">
                {/* <Slider /> */}
                <div className="tutorialCard">
                  <div>
                    <img
                      src={`http://localhost:8008/api/userReview/${list.reviewImage}`}
                      alt="no img found"
                      style={{
                        height: "205px",
                        width: "100%",
                        objectFit: "cover",
                      }}
                      className="mx-2"
                    />
                  </div>
                  <div className="cardDetails">
                    <div className=" d-flex align-items-center mb-2">
                      <div className="rating">
                        {" "}
                        <ReactStars
                          count={5}
                          // onChange={ratingChanged}

                          size={24}
                          activeColor="#ffd700"
                          value={list.reviewStart}
                        />
                      </div>
                      <h6 className="mb-0 mx-2" style={{ color: "#B5C3CB" }}>
                        {list.reviewStart} (392 reviews)
                      </h6>
                    </div>
                    <h6 className="title">{list?.reviewTitle}</h6>
                    <div
                      className="d-flex align-items-center"
                      style={{ color: "#B5C3CB" }}
                    >
                      <VisibilityIcon />
                      <h6 className="mx-0 ms-2 mb-0 watched">
                        {list.studentWatch} students watched
                      </h6>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
          </Carousel>;
        </div>

        <div className="coreFeature  ">
          <div className="bgColor"></div>
          <div className="row">
            <div className="col-md-7 position-relative">
              <div className="leftcoreFeature">
                <div className="d-flex gap45">
                  <div className="featursCard">
                    <h3 className="orange">80K+</h3>
                    <h4>We have more than students</h4>
                  </div>
                  <div className="featursCard box2">
                    <h3 className="danger">150+</h3>
                    <h4>Free online tutorials videos avaialble</h4>
                  </div>
                </div>
                <div className="d-flex gap45">
                  <div className="featursCard">
                    <h3 className="pink">90+</h3>
                    <h4>Daily updated blog post maintain</h4>
                  </div>
                  <div className="featursCard box4">
                    <h3 className="blue">& 3M</h3>
                    <h4>Job posted everydays with qualification</h4>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-5">
              <div className="rightcoreFeature">
                <h6>Core features</h6>
                <h2>
                  Smart Jackpots <br /> that you may love this <br /> anytime &
                  anywhere
                </h2>
                <span>
                  Get your tests delivered at let home collect sample from the
                  victory of the managments that supplies best design system
                  guidelines ever. Get your tests delivered at let home collect
                  sample.
                </span>
              </div>
              <button className="explore">Explore details</button>
            </div>
          </div>
        </div>
      </div>
      <div className="PopularDesigningCourse">
        <div className="startPoint mb-5 ">
          <h4>Quality features</h4>
          <h2 className="text-center">Popular Designing Course</h2>
        </div>
        <div className="row mt-5">
          <div className="col-md-1">
            <div
              style={{
                width: "90px",
                height: "90px",
                flexShrink: "0",
                background: " rgb(255 244 232)",
                display: "flex",
                justifyContent: "center",
                borderRadius: "50px",
                alignItems: "center",
                // marginRight: "40px",
                marginTop: "52px",
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="31"
                height="31"
                viewBox="0 0 31 31"
                fill="none"
              >
                <path
                  d="M3.11314 31C2.23519 31 1.52338 30.2882 1.52338 29.4102V1.58968C1.52338 0.711734 2.23519 0 3.11314 0L28.9465 14.3076C28.9465 14.3076 30.1388 15.4999 28.9465 16.6923C27.7542 17.8846 3.11314 31 3.11314 31Z"
                  fill="#EF9E48"
                />
              </svg>
            </div>
          </div>
          <div className="col-md-9">
            <div className="d-flex ml-5">
              <div>
                <div
                  className="d-flex mt-3 mb-2"
                  style={{ justifyContent: "start", alignItems: "center" }}
                >
                  <div>
                    {" "}
                    <ReactStars
                      count={5}
                      size={24}
                      activeColor="#ffd700"
                      value={4}
                    />{" "}
                  </div>
                  <div>
                    {" "}
                    <h6 className="mb-0 mx-2" style={{ color: "#B5C3CB" }}>
                      5.0 (392 reviews)
                    </h6>
                  </div>
                  <div>
                    {" "}
                    <VisibilityIcon />
                  </div>
                  <div>
                    {" "}
                    <h6 className="mx-0 ms-2 mb-0 watched">
                      2538 students watched
                    </h6>
                  </div>
                </div>
                <h3 className="mb-2">
                  Professional graphic design tutorial full course with exercise
                  file
                </h3>
                <h6 className="mb-2">
                  Get your tutorials delivered at let home collect sample from
                  the victory of the managments.
                </h6>
              </div>
            </div>
          </div>
          <div className="col-md-2">
            <div
              className="btnGreen"
              style={{ color: "white", background: "#3FDBB1" }}
            >
              7 Video Classes | 4 hrs
            </div>
          </div>
        </div>

        <div className="row mt-5">
          <div className="col-md-1">
            <div
              style={{
                width: "90px",
                height: "90px",
                flexShrink: "0",
                background: " rgb(255 244 232)",
                display: "flex",
                justifyContent: "center",
                borderRadius: "50px",
                alignItems: "center",
                // marginRight: "40px",
                marginTop: "52px",
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="31"
                height="31"
                viewBox="0 0 31 31"
                fill="none"
              >
                <path
                  d="M3.11314 31C2.23519 31 1.52338 30.2882 1.52338 29.4102V1.58968C1.52338 0.711734 2.23519 0 3.11314 0L28.9465 14.3076C28.9465 14.3076 30.1388 15.4999 28.9465 16.6923C27.7542 17.8846 3.11314 31 3.11314 31Z"
                  fill="#EF9E48"
                />
              </svg>
            </div>
          </div>
          <div className="col-md-9">
            <div className="d-flex ml-5">
              <div>
                <div
                  className="d-flex mt-3 mb-2"
                  style={{ justifyContent: "start", alignItems: "center" }}
                >
                  <div>
                    {" "}
                    <ReactStars
                      count={5}
                      size={24}
                      activeColor="#ffd700"
                      value={4}
                    />{" "}
                  </div>
                  <div>
                    {" "}
                    <h6 className="mb-0 mx-2" style={{ color: "#B5C3CB" }}>
                      5.0 (392 reviews)
                    </h6>
                  </div>
                  <div>
                    {" "}
                    <VisibilityIcon />
                  </div>
                  <div>
                    {" "}
                    <h6 className="mx-0 ms-2 mb-0 watched">
                      2538 students watched
                    </h6>
                  </div>
                </div>
                <h3 className="mb-2">
                  Professional graphic design tutorial full course with exercise
                  file
                </h3>
                <h6 className="mb-2">
                  Get your tutorials delivered at let home collect sample from
                  the victory of the managments.
                </h6>
              </div>
            </div>
          </div>
          <div className="col-md-2">
            <div
              className="btnGreen"
              style={{ color: "white", background: "#3FDBB1" }}
            >
              7 Video Classes | 4 hrs
            </div>
          </div>
        </div>

        <div className="row mt-5">
          <div className="col-md-1">
            <div
              style={{
                width: "90px",
                height: "90px",
                flexShrink: "0",
                background: " rgb(255 244 232)",
                display: "flex",
                justifyContent: "center",
                borderRadius: "50px",
                alignItems: "center",
                // marginRight: "40px",
                marginTop: "52px",
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="31"
                height="31"
                viewBox="0 0 31 31"
                fill="none"
              >
                <path
                  d="M3.11314 31C2.23519 31 1.52338 30.2882 1.52338 29.4102V1.58968C1.52338 0.711734 2.23519 0 3.11314 0L28.9465 14.3076C28.9465 14.3076 30.1388 15.4999 28.9465 16.6923C27.7542 17.8846 3.11314 31 3.11314 31Z"
                  fill="#EF9E48"
                />
              </svg>
            </div>
          </div>
          <div className="col-md-9">
            <div className="d-flex ml-5">
              <div>
                <div
                  className="d-flex mt-3 mb-2"
                  style={{ justifyContent: "start", alignItems: "center" }}
                >
                  <div>
                    {" "}
                    <ReactStars
                      count={5}
                      size={24}
                      activeColor="#ffd700"
                      value={4}
                    />{" "}
                  </div>
                  <div>
                    {" "}
                    <h6 className="mb-0 mx-2" style={{ color: "#B5C3CB" }}>
                      5.0 (392 reviews)
                    </h6>
                  </div>
                  <div>
                    {" "}
                    <VisibilityIcon />
                  </div>
                  <div>
                    {" "}
                    <h6 className="mx-0 ms-2 mb-0 watched">
                      2538 students watched
                    </h6>
                  </div>
                </div>
                <h3 className="mb-2">
                  Professional graphic design tutorial full course with exercise
                  file
                </h3>
                <h6 className="mb-2">
                  Get your tutorials delivered at let home collect sample from
                  the victory of the managments.
                </h6>
              </div>
            </div>
          </div>
          <div className="col-md-2">
            <div
              className="btnGreen"
              style={{ color: "white", background: "#3FDBB1" }}
            >
              7 Video Classes | 4 hrs
            </div>
          </div>
        </div>

        <div className="row mt-5">
          <div className="col-md-1">
            <div
              style={{
                width: "90px",
                height: "90px",
                flexShrink: "0",
                background: " rgb(255 244 232)",
                display: "flex",
                justifyContent: "center",
                borderRadius: "50px",
                alignItems: "center",
                // marginRight: "40px",
                marginTop: "52px",
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="31"
                height="31"
                viewBox="0 0 31 31"
                fill="none"
              >
                <path
                  d="M3.11314 31C2.23519 31 1.52338 30.2882 1.52338 29.4102V1.58968C1.52338 0.711734 2.23519 0 3.11314 0L28.9465 14.3076C28.9465 14.3076 30.1388 15.4999 28.9465 16.6923C27.7542 17.8846 3.11314 31 3.11314 31Z"
                  fill="#EF9E48"
                />
              </svg>
            </div>
          </div>
          <div className="col-md-9">
            <div className="d-flex ml-5">
              <div>
                <div
                  className="d-flex mt-3 mb-2"
                  style={{ justifyContent: "start", alignItems: "center" }}
                >
                  <div>
                    {" "}
                    <ReactStars
                      count={5}
                      size={24}
                      activeColor="#ffd700"
                      value={4}
                    />{" "}
                  </div>
                  <div>
                    {" "}
                    <h6 className="mb-0 mx-2" style={{ color: "#B5C3CB" }}>
                      5.0 (392 reviews)
                    </h6>
                  </div>
                  <div>
                    {" "}
                    <VisibilityIcon />
                  </div>
                  <div>
                    {" "}
                    <h6 className="mx-0 ms-2 mb-0 watched">
                      2538 students watched
                    </h6>
                  </div>
                </div>
                <h3 className="mb-2">
                  Professional graphic design tutorial full course with exercise
                  file
                </h3>
                <h6 className="mb-2">
                  Get your tutorials delivered at let home collect sample from
                  the victory of the managments.
                </h6>
              </div>
            </div>
          </div>
          <div className="col-md-2">
            <div
              className="btnGreen"
              style={{ color: "white", background: "#3FDBB1" }}
            >
              7 Video Classes | 4 hrs
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ReviewCard;
