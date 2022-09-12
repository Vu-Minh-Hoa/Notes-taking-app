import Note from "./note";
import AddNote from "./AddNote";

const NotesList = ({ notes, handleAddNote, handleDelete }) => {
    return (
        <div className="notes-list">
            {notes.map((note, index) => {
                return (
                    <Note
                        id={note.id}
                        key={index}
                        content={note.content}
                        date={note.date}
                        handleDelete={handleDelete}
                    />
                );
            })}
            <AddNote handleAddNote={handleAddNote} />
        </div>
    );
};

export default NotesList;
