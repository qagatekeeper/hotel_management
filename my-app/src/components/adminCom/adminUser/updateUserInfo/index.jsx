import "./updateUserInfo.css";
import { useDispatch } from "react-redux";
import { useForm } from "react-hook-form";
import { updateUser } from "../../../../redux/actions/userActions";

const UpdateUserInfo = ({ theUser }) => {
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    trigger,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = async (data) => {
    console.log(data);
    const id = theUser._id;
    dispatch(updateUser(data, id));
    reset();
  };

  const onError = (errors) => {
    console.log(errors);
  };
  return (
    <>
      <form method="post" onSubmit={handleSubmit(onSubmit, onError)}>
        <div className="formGrp flex flex-column">
          <div>
            <label>Change User name</label>
            <input
              type="text"
              placeholder="Enter User name"
              autoComplete="Off"
              defaultValue={theUser.username}
              className={`${errors.newuser && "invalid"}`}
              {...register("newuser", {
                required: "UserName is Required.",
                minLength: {
                  value: 3,
                  message: "UserName must have atleast 3 characters.",
                },
                pattern: {
                  value: /^[a-zA-Z0-9]+$/g, // only letters, numbers
                  message: "Spacial characters are not allowed.",
                },
              })}
              onBlur={() => {
                trigger("newuser");
              }}
              onKeyUp={() => {
                trigger("newuser");
              }}
            />
          </div>
        </div>
        <div className="formGrp flex flex-column">
          <div>
            <label>Change Password</label>
            <input
              type="text"
              placeholder="Enter Password"
              autoComplete="Off"
              defaultValue={theUser.showPassword}
              className={`${errors.newpassword && "invalid"}`}
              {...register("newpassword", {
                required: "Password is Required.",
              })}
              onBlur={() => {
                trigger("newpassword");
              }}
              onKeyUp={() => {
                trigger("newpassword");
              }}
            />
          </div>
        </div>
        <button type="submit" className="button_action">
          Update User
        </button>
      </form>
    </>
  );
};

export default UpdateUserInfo;
