import "./addUserInfo.css";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { registerUser } from "../../../../redux/actions/userActions.js";

 const AddUserInfo = () => {
   const dispatch = useDispatch();

   const {
     register,
     handleSubmit,
     trigger,
     formState: { errors },
     reset,
   } = useForm();

   const onSubmit = async (data) => {
     dispatch(registerUser(data));
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
             <label>Add new User name</label>
             <input
               type="text"
               placeholder="Enter User name"
               autoComplete="Off"
               className={`${errors.newUsername && "invalid"}`}
               {...register("newUsername", {
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
                 trigger("newUsername");
               }}
               onKeyUp={() => {
                 trigger("newUsername");
               }}
             />
           </div>
         </div>
         <div className="formGrp flex flex-column">
           <div>
             <label>New Password</label>
             <input
               type="password"
               placeholder="Enter Password"
               autoComplete="Off"
               className={`${errors.newPassword && "invalid"}`}
               {...register("newPassword", {
                 required: "Password is Required.",
               })}
               onBlur={() => {
                 trigger("newPassword");
               }}
               onKeyUp={() => {
                 trigger("newPassword");
               }}
             />
           </div>
         </div>
         <button type="submit" className="button_action">
           Add New User
         </button>
       </form>
     </>
   );
 };

export default AddUserInfo;
