import styled from "styled-components";

export const ReservationWrapper = styled.div`
  width: 100vw;
  height: auto;
`;

export const ReservationLeft = styled.div`
  flex: 1;
  background: var(--bg-reservation-left);
  width: 100%;
  height: auto;
`;

export const ReservationNavigationToHome = styled.div`
  padding: 1rem;
  display: flex;
  border-bottom: 1px solid rgba(255, 255, 255, 0.2);

  i {
    color: var(--white);
    font-size: 1rem;
    font-weight: normal;
  }

  h3 {
    color: var(--white);
    font-size: 0.8rem;
    letter-spacing: 1px;
    font-family: "Lato", sans-serif;
    font-weight: normal;
    margin-left: 20px;
    text-transform: capitalize;
  }
`;

export const ReservationRight = styled.div`
  flex: 4.5;
  padding: 3rem 2rem;
  height: auto;
  background: var(--bg-reservation-right);
`;

export const ReservationRightTop = styled.div`
  h1 {
    color: var(--c-text);
    font-size: 36px;
    padding-bottom: 20px;
    border-bottom: 1px solid rgba(0, 0, 0, 0.1);
    line-height: 1.2rem;
    font-family: "Lato", sans-serif;
    font-weight: 500;
    margin-bottom: 2rem;
  }
`;

export const ReservationRightCenter = styled.div`
  gap: 2rem;
  /* flex-wrap: wrap; */
`;

export const ReservationRightCenterLeft = styled.div`
  /* width: 100%; */
  /* padding: 1rem; */
  height: max-content;
  /* flex: 1; */
  border: 1px solid var(--color-link-blue);
  border-radius: 5px;
  /* gap: 1rem; */
  background-color: var(--white);
`;

export const Form = styled.form`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem;
`;

export const FormGroup = styled.div`
  text-align: start;
  gap: 0rem;
  padding: 0rem 1rem 0.5rem;

  div {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
  }
  .radio {
    display: flex;
    flex-direction: row;
  }

  label {
    font-size: 0.8rem;
    font-weight: bold;
    line-height: 1.1rem;
    letter-spacing: 2px;
  }

  select,
  input {
    height: 37px;
    width: 100%;
    padding: 6px 12px;
    letter-spacing: 1px;
    background: transparent;
    border: 1px solid rgba(0, 0, 0, 0.2);
    color: rgba(0, 0, 0, 0.8);
    font-size: 1rem;
    font-family: "Lato", sans-serif;
    font-weight: normal;
    border-radius: 5px;
    transition: border 0.5s;
    ::placeholder {
      color: var(--color-text);
    }
    &:focus {
      border: 1px solid var(--color-link-blue);
    }
  }
  .radioBtn {
    border: 10px solid red;
    display: block;
    position: relative;
    padding-left: 35px;
    margin-bottom: 12px;
    cursor: pointer;
    font-size: 22px;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
  }

  p {
    color: red;
    margin-bottom: 0px !important;
    padding: 0 !important;
    text-align: left;
    font-size: 0.7rem;
    font-family: "Lato", sans-serif;
    font-weight: 400;
  }
`;

export const RadioBtn = styled.label`
  padding: 0;
  margin: 0;
  cursor: pointer;
  width: max-content;
  font-size: 1rem !important;

  input {
    padding: 0;
    margin: 0;
    height: max-content;
    cursor: pointer;
    width: max-content;
  }
  span {
    color: var(--black);
    letter-spacing: 1px;
    cursor: pointer;
    padding-left: 0.5rem;
  }
`;

export const ReservationRightCenterRight = styled.div`
  height: max-content;
  /* flex: 1.3; */
  border: 1px solid var(--color-link-blue);
  border-radius: 5px;
  /* gap: 1rem; */
  background-color: var(--white);
`;

export const CardTitle = styled.div`
  width: 100%;
  padding: 0.5rem;
  padding: 0.5rem 1rem;
  border-radius: 5px 0 0;
  color: var(--white);
  background: var(--color-link-blue);
  letter-spacing: 1px;
  margin-bottom: 0.5rem;
`;

export const ReservationRightBottom = styled.div`
  background-color: var(--white);
  width: 100%;
  height: auto;
  padding: 2rem 1rem 1rem;

  h1 {
    font-size: 1.1rem;
    font-family: "Lato", sans-serif;
    font-weight: 500;
    padding-bottom: 20px;
    letter-spacing: 1px;
    margin: 0;
    color: var(--color-light-gray);
  }
  h2 {
    font-size: 15px;
    font-family: "Lato", sans-serif;
    letter-spacing: 1px;
    color: var(--color-light-gray);
    padding-bottom: 30px;
    margin: 0;
  }
  p {
    font-size: 14px;
    letter-spacing: 1px;
    font-family: "Lato", sans-serif;
    color: var(--color-light-gray);
    text-transform: none;
    padding-bottom: 10px;
  }

  input {
    border: 1px solid var(--color-light-gray);
    width: 250px;
    height: 30px;
    padding: 5px;
    font-size: 1rem;
    transition: box-shadow 0.5s;
    border: 1px solid rgba(0, 0, 0, 0.2);
    color: rgba(0, 0, 0, 0.8);
    border-radius: 5px;
  }
  ::placeholder {
    color: var(--color-text);
  }

  input:focus {
    border: 1px solid var(--color-link-blue);
  }

  .btn {
    font-size: 1rem;
    border-radius: 5px;
    padding: 6px 12px;
    background-color: var(--color-link-blue);
    border: none;
    width: max-content;
    height: 2rem;
    cursor: pointer;
    color: var(--white);
    text-transform: capitalize;
    letter-spacing: 1px;
    text-align: center;
  }

  .btn-opacity-full {
    opacity: 1;
    font-size: 50rem;
  }

  .btn-opacity-half {
    opacity: 0.5;
    font-size: 1px;
  }
`;

// export const FormBtn = styled.div`
//   .btn {
//     font-size: 1rem;
//     border-radius: 5px;
//     padding: 6px 12px;
//     background-color: var(--color-link-blue);
//     border: none;
//     width: max-content;
//     height: 2rem;
//     cursor: pointer;
//     color: var(--white);
//     text-transform: capitalize;
//     letter-spacing: 1px;
//   }
// `;
