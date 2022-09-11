import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useForm } from "react-hook-form";
import { createReservationAction } from "../../redux/actions/reservationActions.js";

import {
  ReservationWrapper,
  ReservationLeft,
  ReservationRight,
  ReservationRightTop,
  ReservationRightCenter,
  ReservationRightBottom,
  ReservationRightCenterLeft,
  CardTitle,
  ReservationRightCenterRight,
  Form,
  FormGroup,
  RadioBtn,
} from "./reservationStyle.js";
import ReservationLeftSide from "./reservationCom/reservationLeftSide.jsx";
import {
  title,
  countries,
  roomCategory,
  beddingType,
  noOfRooms,
  mealPlan,
} from "../../helpers/data/reservationData.js";
import Button from "react-bootstrap/Button";

const Reservation = () => {
  const [val, setVal] = useState();
  const dispatch = useDispatch();

  useEffect(() => {
    setVal(Math.floor(100000000 + Math.random() * 900000000));
  }, []);

  const {
    register,
    handleSubmit,
    trigger,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = async (data) => {
    dispatch(createReservationAction(data));
    reset();
  };

  const onError = (errors) => {
    console.log(errors);
  };

  return (
    <ReservationWrapper className="flex">
      <ReservationLeft>
        <ReservationLeftSide />
      </ReservationLeft>
      <ReservationRight>
        <ReservationRightTop>
          <h1>RESERVATION</h1>
        </ReservationRightTop>
        <ReservationRightCenter
          className="flex"
          style={{ marginRight: "100px", marginBottom: "1.5rem" }}
        >
          <Form onSubmit={handleSubmit(onSubmit, onError)}>
            <ReservationRightCenterLeft className="flex flex-column">
              <CardTitle>PERSONAL INFORMATION</CardTitle>
              <FormGroup className="flex flex-column">
                <div>
                  <lable>Title*:</lable>
                  <select
                    {...register("title", { required: "Title is Required" })}
                    onBlur={() => {
                      trigger("title");
                    }}
                  >
                    <option value="" selected>
                      --Select Title--
                    </option>
                    {title.map((item, index) => (
                      <option value={item} key={index}>
                        {item}
                      </option>
                    ))}
                  </select>
                </div>
                {errors.title && (
                  <p className="errors">{errors.title.message}</p>
                )}
              </FormGroup>
              <FormGroup className="flex flex-column">
                <div>
                  <label>First Name:</label>
                  <input
                    type="text"
                    placeholder="First name"
                    autoComplete="Off"
                    className={`${errors.firstName && "invalid"}`}
                    {...register("firstName", {
                      required: "FirstName is Required.",
                      minLength: {
                        value: 3,
                        message: "FirstName must have atleast 3 characters.",
                      },
                      pattern: {
                        value: /^[a-zA-Z0-9]+$/g, // only letters, numbers
                        message: "Spacial characters are not allowed.",
                      },
                    })}
                    onBlur={() => {
                      trigger("firstName");
                    }}
                    onKeyUp={() => {
                      trigger("firstName");
                    }}
                  />
                </div>
                {errors.firstName && (
                  <p className="errors">{errors.firstName.message}</p>
                )}
              </FormGroup>
              <FormGroup className="flex flex-column">
                <div>
                  <label>Last Name*:</label>
                  <input
                    type="text"
                    placeholder="LastName name"
                    autoComplete="Off"
                    className={`${errors.lastName && "invalid"}`}
                    {...register("lastName", {
                      required: "LastName is Required.",
                      minLength: {
                        value: 3,
                        message: "LastName must have atleast 3 characters.",
                      },
                      pattern: {
                        value: /^[a-zA-Z0-9]+$/g, // only letters, numbers
                        message: "Spacial characters are not allowed.",
                      },
                    })}
                    onBlur={() => {
                      trigger("lastName");
                    }}
                    onKeyUp={() => {
                      trigger("lastName");
                    }}
                  />
                </div>
                {errors.lastName && (
                  <p className="errors">{errors.lastName.message}</p>
                )}
              </FormGroup>
              <FormGroup className="flex flex-column">
                <div>
                  <label>Email*:</label>
                  <input
                    type="email"
                    placeholder="Email"
                    autoComplete="Off"
                    className={`${errors.email && "invalid"}`}
                    {...register("email", {
                      required: "Email is Required",
                      pattern: {
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                        message: "Invalid Email address",
                      },
                    })}
                    onBlur={() => {
                      trigger("email");
                    }}
                    onKeyUp={() => {
                      trigger("email");
                    }}
                  />
                </div>
                {errors.email && (
                  <p className="errors">{errors.email.message}</p>
                )}
              </FormGroup>
              <FormGroup className="flex flex-column">
                <div className="radio">
                  <label>Nationality*:</label>
                  <RadioBtn className="flex absolute-center">
                    <input
                      type="radio"
                      value="india"
                      {...register("nationality", {
                        required: "Nationality is Required",
                      })}
                    />
                    <span>India</span>
                  </RadioBtn>
                  <RadioBtn className="flex absolute-center">
                    <input
                      type="radio"
                      value="non-india"
                      {...register("nationality", {
                        required: "Nationality is Required",
                      })}
                    />
                    <span>Non-India</span>
                  </RadioBtn>
                </div>
                {errors.nationality && (
                  <p className="errors">{errors.nationality.message}</p>
                )}
              </FormGroup>
              <FormGroup className="flex flex-column">
                <div>
                  <lable>Passport Country*:</lable>
                  <select
                    {...register("country", {
                      required: "Country is Required",
                    })}
                    onBlur={() => {
                      trigger("country");
                    }}
                  >
                    <option value="" selected>
                      --Select Country--
                    </option>
                    {countries.map((item, index) => (
                      <option value={item} key={index}>
                        {item}
                      </option>
                    ))}
                  </select>
                </div>
                {errors.country && (
                  <p className="errors">{errors.country.message}</p>
                )}
              </FormGroup>
              <FormGroup className="flex flex-column">
                <div>
                  <label>Phone Number:</label>
                  <input
                    type="text"
                    placeholder="Phone Number"
                    autoComplete="Off"
                    className={`${errors.phoneNumber && "invalid"}`}
                    {...register("phoneNumber", {
                      required: "PhoneNumber is Required",
                      pattern: {
                        value:
                          /^\s*(?:\+?(\d{1,3}))?[-. (]*(\d{3})[-. )]*(\d{3})[-. ]*(\d{4})(?: *x(\d+))?\s*$/,
                        message: "Invalid Phone Number",
                      },
                    })}
                    onBlur={() => {
                      trigger("phoneNumber");
                    }}
                    onKeyUp={() => {
                      trigger("phoneNumber");
                    }}
                  />
                </div>
                {errors.phoneNumber && (
                  <p className="errors">{errors.phoneNumber.message}</p>
                )}
              </FormGroup>
              {/* <ReservationRCL className="form-inside" /> */}
            </ReservationRightCenterLeft>
            <ReservationRightCenterRight className="flex flex-column">
              <CardTitle>RESERVATION INFORMATION</CardTitle>
              <FormGroup className="flex flex-column">
                <div>
                  <lable>Type Of Room*:</lable>
                  <select
                    {...register("room", { required: "Select type of Room!" })}
                    onBlur={() => {
                      trigger("room");
                    }}
                  >
                    <option value="" selected>
                      --Select Room Category--
                    </option>
                    {roomCategory.map((item, index) => (
                      <option value={item} key={index}>
                        {item}
                      </option>
                    ))}
                  </select>
                </div>
                {errors.room && <p className="errors">{errors.room.message}</p>}
              </FormGroup>
              <FormGroup className="flex flex-column">
                <div>
                  <lable>Bedding Type*:</lable>
                  <select
                    {...register("bed", { required: "Select type of Bed!" })}
                    onBlur={() => {
                      trigger("bed");
                    }}
                  >
                    <option value="" selected>
                      --Select Bed Size--
                    </option>
                    {beddingType.map((item, index) => (
                      <option value={item} key={index}>
                        {item}
                      </option>
                    ))}
                  </select>
                </div>
                {errors.bed && <p className="errors">{errors.bed.message}</p>}
              </FormGroup>
              <FormGroup className="flex flex-column">
                <div>
                  <lable>No.of Rooms*:</lable>
                  <select
                    {...register("roomNumber", {
                      required: "Select numbers of Room!",
                    })}
                    onBlur={() => {
                      trigger("roomNumber");
                    }}
                  >
                    <option value="" selected>
                      --Select No. of Rooms--
                    </option>
                    {noOfRooms.map((item, index) => (
                      <option value={item} key={index}>
                        {item}
                      </option>
                    ))}
                  </select>
                </div>
                {errors.roomNumber && (
                  <p className="errors">{errors.roomNumber.message}</p>
                )}
              </FormGroup>
              <FormGroup className="flex flex-column">
                <div>
                  <lable>Meal Plan*:</lable>
                  <select
                    {...register("meal", {
                      required: "Select type of Meal Plan!",
                    })}
                    onBlur={() => {
                      trigger("meal");
                    }}
                  >
                    <option value="" selected>
                      --Select Meal Plan--
                    </option>
                    {mealPlan.map((item, index) => (
                      <option value={item} key={index}>
                        {item}
                      </option>
                    ))}
                  </select>
                </div>
                {errors.meal && <p className="errors">{errors.meal.message}</p>}
              </FormGroup>
              <FormGroup className="flex flex-column">
                <div>
                  <label>Check-In:</label>
                  <input
                    type="date"
                    className={`${errors.checkInDate && "invalid"}`}
                    {...register("checkInDate", {
                      required: "CheckInDate is Required.",
                    })}
                    onBlur={() => {
                      trigger("checkInDate");
                    }}
                  />
                </div>
                {errors.checkInDate && (
                  <p className="errors">{errors.checkInDate.message}</p>
                )}
              </FormGroup>
              <FormGroup className="flex flex-column">
                <div>
                  <label>Check-Out:</label>
                  <input
                    type="date"
                    className={`${errors.checkOutDate && "invalid"}`}
                    {...register("checkOutDate", {
                      required: "CheckOutDate is Required.",
                    })}
                    onBlur={() => {
                      trigger("checkOutDate");
                    }}
                  />
                </div>
                {errors.checkOutDate && (
                  <p className="errors">{errors.checkOutDate.message}</p>
                )}
              </FormGroup>
              {/* <ReservationRCR className="form-inside" /> */}
            </ReservationRightCenterRight>
            <ReservationRightBottom>
              <h1>HUMAN VERIFICATION</h1>
              <h2>Type Below this code {val}</h2>
              <p>Enter the random code</p>
              <div className="flex gap-1">
                <FormGroup>
                  <input
                    type="text"
                    placeholder="Verification Code"
                    autoComplete="Off"
                    className={`${errors.verificationCode && "invalid"}`}
                    {...register("verificationCode", {
                      required: "VerificationCode is Required.",
                      validate: (value) =>
                        value === `${val}` || "VerificationCode is not a valid",
                    })}
                    onBlur={() => {
                      trigger("verificationCode");
                    }}
                    onKeyUp={() => {
                      trigger("verificationCode");
                    }}
                  />
                  {errors.verificationCode && (
                    <p className="errors">{errors.verificationCode.message}</p>
                  )}
                </FormGroup>

                <Button type="submit" name="submit" className="button_action">
                  Sumbit
                </Button>
              </div>
            </ReservationRightBottom>
          </Form>
        </ReservationRightCenter>
      </ReservationRight>
    </ReservationWrapper>
  );
};

export default Reservation;
