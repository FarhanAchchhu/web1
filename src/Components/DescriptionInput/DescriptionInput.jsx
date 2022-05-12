import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashAlt } from "@fortawesome/free-regular-svg-icons";

const DescriptionInput = ({ descs, changeItem, deleteItem, addItem }) => {
    return (
        <div className="input-group">
            <div className="input-heading">Description</div>
            <div className="input-num-text-groups">
                {descs.map((desc, index) => {
                    return (
                        <div className="input-num-text" key={index}>
                            <div className="num">{index + 1}</div>
                            <input
                                type="text"
                                value={desc}
                                onChange={(e) => {
                                    changeItem("desc", e, index);
                                }}
                            />
                            <div
                                className="delete"
                                onClick={() => {
                                    deleteItem("desc", index);
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
                    addItem("desc");
                }}
            >
                Add Description
            </div>
        </div>
    );
};

export default DescriptionInput;
