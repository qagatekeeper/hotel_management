import "./addForm.css";
import { useForm } from "react-hook-form";
import {
  beddingType,
  roomCategory,
} from "../../../../../helpers/data/reservationData";
import { useDispatch } from "react-redux";
import { createRoom } from "../../../../../redux/actions/roomAction.js";

const AddForm = () => {
  const dispatch = useDispatch();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = async (data) => {
    // console.log(data);
    dispatch(createRoom(data));
    console.log(data);
    reset();
  };

  const onError = (errors) => {
    console.log(errors);
  };
  return (
    <div>
      <div className="add-room-form-wrapper">
        <div className="add-room-form-top">ADD NEW ROOM</div>
        <div className="add-room-bottom">
          <form
            onSubmit={handleSubmit(onSubmit, onError)}
            method="post"
            className="add-room-form"
          >
            <div className="add-room-formGroup">
              <lable>Type Of Room *</lable>
              <select
                {...register("addRoomType", {
                  required: "Room Type is Required",
                })}
              >
                <option value="" selected></option>
                {roomCategory.map((item, index) => (
                  <option value={item} key={index}>
                    {item}
                  </option>
                ))}
              </select>
              {errors.addRoomType && (
                <p className="errors">{errors.addRoomType.message}</p>
              )}
            </div>
            <div className="add-room-formGroup">
              <lable>Bedding Type</lable>
              <select
                {...register("bedType", {
                  required: "Bed Type is Required",
                })}
              >
                <option value="" selected></option>
                {beddingType.map((item, index) => (
                  <option value={item} key={index}>
                    {item}
                  </option>
                ))}
              </select>
              {errors.bedType && (
                <p className="errors">{errors.bedType.message}</p>
              )}
            </div>
            <input
              type="submit"
              name="submit"
              value="Add New"
              className="button_action"
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddForm;
