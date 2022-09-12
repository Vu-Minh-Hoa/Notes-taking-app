import { useState, useRef } from "react";

const AddNote = ({ handleAddNote }) => {
    const [noteContent, setNoteContent] = useState("");
    const noteContentLength = noteContent.trim().length;
    const characterLimit = 200;
    const inputRef = useRef();
    const handleNoteContentInput = (e) => {
        if (characterLimit - e.target.value.length >= 0) {
            setNoteContent(e.target.value);
        }
    };

    const handleSaveClick = () => {
        if (noteContentLength > 0) {
            handleAddNote(noteContent);
            setNoteContent("");

            inputRef.current.focus();
        }
    };

    return (
        <div className="note-container new">
            <textarea
                ref={inputRef}
                rows="8"
                cols="10"
                placeholder="Write a note"
                value={noteContent}
                onChange={handleNoteContentInput}
            ></textarea>
            <div className="note__footer">
                <small className="note__character-remain">
                    {characterLimit - noteContentLength} remain
                </small>
                <button className="note__save-btn" onClick={handleSaveClick}>
                    Save
                </button>
            </div>
        </div>
    );
};

export default AddNote;
