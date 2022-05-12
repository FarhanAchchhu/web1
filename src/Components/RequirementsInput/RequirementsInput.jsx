import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashAlt } from "@fortawesome/free-regular-svg-icons";

const RequirementsInput = ({
    requirements,
    changeItem,
    deleteItem,
    addItem,
}) => {
    return (
        <div className="input-group">
            <div className="input-heading">Requirements</div>
            <div className="input-num-text-groups">
                {requirements.map((requirement, index) => {
                    return (
                        <div className="input-num-text" key={index}>
                            <div className="num">{index + 1}</div>
                            <input
                                type="text"
                                value={requirement}
                                onChange={(e) => {
                                    changeItem("req", e, index);
                                }}
                            />
                            <div
                                className="delete"
                                onClick={() => {
                                    deleteItem("req", index);
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
                    addItem("req");
                }}
            >
                Add Requirement
            </div>
        </div>
    );
};

export default RequirementsInput;
