import React from "react";

import { FormGroup } from "../reservationStyle.js";

import {
  roomCategory,
  beddingType,
  noOfRooms,
  mealPlan,
} from "../../../helpers/data/reservationData.js";

import { SelectOptions } from "../../common/index.jsx";
import { useForm } from "react-hook-form";

const ReservationRCR = () => {
  const {
    register,
    trigger,
    formState: { errors },
    reset,
  } = useForm();

  return (
    <>
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
            {...register("meal", { required: "Select type of Meal Plan!" })}
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
            placeholder="dd/mm/yyyy"
            name="check-in-date"
            reqired
          />
        </div>
      </FormGroup>
      <FormGroup className="flex flex-column">
        <div>
          <label>Check-Out:</label>
          <input
            type="date"
            placeholder="dd/mm/yyyy"
            name="check-out-date"
            reqired
          />
        </div>
      </FormGroup>
    </>
  );
};

export default ReservationRCR;
