import React from "react";
import Rating from "@mui/material/Rating";
import Stack from "@mui/material/Stack";

const VisitorExpSlider = (props) => {
  const { image1, image2, title, para1, starValue, name, countryName } = props;

  return (
    <>
      <div className="visitorExp-slider-wrapper flex absolute-center">
        <div className="visitorExp-slider-left ">
          <img src={image1} alt="" className="visitorExp-image-background" />
          <img src={image2} alt="" className="visitorExp-image" />
        </div>
        <div className="visitorExp-slider-right">
          <h4 className="visitorExp-slider-title flex ai-center">
            <Stack spacing={1}>
              <Rating
                name="half-rating"
                size="mediam"
                defaultValue={starValue}
                precision={0.5}
                style={{ marginRight: 5 }}
              />
            </Stack>
            {title}
          </h4>
          <p className="visitorExp-slider-para">{para1}</p>
          <h5>{name}</h5>
          <p className="visitorExp-slider-countryName">{countryName}</p>
        </div>
      </div>
    </>
  );
};

export default VisitorExpSlider;
