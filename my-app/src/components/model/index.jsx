import "./model.css";
import img from "../../assets/images/1.jpg";

const Model = ({ flage, setFlage }) => {
  return (
    <>
      {flage && (
        <div className={`modal-wrapper ${flage && "slide-in-top"} `}>
          <div className="model-contants">
            <div className="model-header flex flex-column">
              <button
                type="button"
                className="close"
                onClick={() => {
                  setFlage(!flage);
                }}
              >
                X
              </button>
              <h4>
                SUN <span>RISE</span>
              </h4>
              <img src={img} alt=" "></img>
              <h5>We know what you love</h5>
              <p>
                Providing guests unique and enchanting views from their rooms
                with its exceptional amenities, makes Star Hotel one of bests in
                its kind.Try our food menu, awesome services and friendly staff
                while you are here.
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Model;
