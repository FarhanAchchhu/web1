import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashAlt } from "@fortawesome/free-regular-svg-icons";

const ResponsibilitiesInput = ({
    responsibilities,
    changeItem,
    deleteItem,
    addItem,
}) => {
    return (
        <div className="input-group">
            <div className="input-heading">Resposnibilities</div>
            <div className="input-num-text-groups">
                {responsibilities.map((responsibility, index) => {
                    return (
                        <div className="input-num-text" key={index}>
                            <div className="num">{index + 1}</div>
                            <input
                                type="text"
                                value={responsibility}
                                onChange={(e) => {
                                    changeItem("resp", e, index);
                                }}
                            />
                            <div
                                className="delete"
                                onClick={() => {
                                    deleteItem("resp", index);
                                }}
                            >
                                <FontAwesomeIcon icon={faTrashAlt} />
                            </div>
                        </div>
                    );
                })}
            </div>
            <div
                className="button"
                style={{ display: "inline-block", marginTop: "20px" }}
                onClick={() => {
                    addItem("resp");
                }}
            >
                Add Responsibility
            </div>
        </div>
    );
};

export default ResponsibilitiesInput;
