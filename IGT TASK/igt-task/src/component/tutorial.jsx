import axios from "axios";
import React, { useEffect, useState } from "react";
import ReactStars from "react-rating-stars-component";
import VisibilityIcon from "@mui/icons-material/Visibility";
import ReactCarousel, { AFTER, CENTER, BEFORE } from "react-carousel-animated";
import "react-carousel-animated/dist/style.css";
function Tutorial() {
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
  return (
    <div className="row" style={{ marginTop: "232px" }}>
      <div className="col-md-8 tutorial">
      <div className="multCard ">
      <ReactCarousel
    carouselConfig={{
        transform: {
            rotateY: {
                [BEFORE]: () => "rotateY(25deg)",
                [CENTER]: () => "rotateY(0deg)",
                [AFTER]: () => "rotateY(-25deg)",
            },
        },
    }}
    itemBackgroundStyle={{
        backgroundColor: "#ece4db",
        borderRadius: "5px",
        boxShadow: "8px 12px 14px -6px black",
    }}
    containerBackgroundStyle={{
        filter: "blur(7px)",
        
    }}
    carouselHeight="476px"
>
{reviews?.map((list) => {
            return (

              <div className="col-md-4">
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
    
</ReactCarousel>;
      
    </div>



      </div>
      <div className="col-md-4 TutorialLeft">
        <h6>Free tutorial</h6>
        <h1 className="mb-4">More than thousand of free tutorial upload every weeks</h1>
        <h4>
          Get your tests delivered at let home collect sample from the victory
          of the managments that supplies best design system guidelines ever.
          Get your tests delivered at let home collect sample.
        </h4>
        <button class="explore">Explore details</button>
      </div>
    </div>
  );
}

export default Tutorial;
