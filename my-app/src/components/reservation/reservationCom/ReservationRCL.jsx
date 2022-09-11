import {
  CardTitle,
  Form,
  FormGroup,
  RadioBtn,
  ReservationRightCenterLeft,
} from "../reservationStyle.js";

import { title, countries } from "../../../helpers/data/reservationData.js";
import { useForm } from "react-hook-form";

const ReservationRCL = () => {
  const {
    register,
    handleSubmit,
    watch,
    trigger,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    reset();
  };

  const onError = (errors) => {
    console.log(errors);
  };

  return (
    <>
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
        {errors.title && <p className="errors">{errors.title.message}</p>}
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
        {errors.lastName && <p className="errors">{errors.lastName.message}</p>}
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
        {errors.email && <p className="errors">{errors.email.message}</p>}
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
            {...register("country", { required: "Country is Required" })}
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
        {errors.country && <p className="errors">{errors.country.message}</p>}
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
    </>
  );
};

export default ReservationRCL;
