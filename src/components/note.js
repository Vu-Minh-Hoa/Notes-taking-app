import { MdDeleteForever } from "react-icons/md";

const Note = ({ id, index, content, date, handleDelete }) => {
    return (
        <div className="note-container" key={index} id={id}>
            <div className="note__content">
                <p>{content}</p>
            </div>
            <div className="note__footer">
                <span className="note__date">{date}</span>
                <span className="note__remove">
                    <MdDeleteForever
                        onClick={() => {
                            handleDelete(id);
                        }}
                        cursor="pointer"
                        className="note__delete-icon"
                        size="1.3em"
                    />
                </span>
            </div>
        </div>
    );
};

export default Note;
