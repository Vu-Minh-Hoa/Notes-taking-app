import { useEffect, useState } from "react";
import { nanoid } from "nanoid";
import SearchBar from "./components/searchBar";
import NotesList from "./components/notesList";
import Header from "./components/header";

const App = () => {
    const noteFromLocalStorage =
        JSON.parse(localStorage.getItem("note-app")) || [];

    const [notes, setNotes] = useState(noteFromLocalStorage);

    const [searchText, setSearchText] = useState("");
    const [toggleTheme, setToggleTheme] = useState(false);

    useEffect(() => {
        const savedNote = JSON.parse(
            localStorage.getItem("user-saved-note-app")
        );
        const savedtheme = JSON.parse(localStorage.getItem("user-pref-theme"));
        if (savedNote) {
            setNotes(savedNote);
        }
        if (savedtheme) {
            setToggleTheme(savedtheme);
        }
    }, []);

    useEffect(() => {
        localStorage.setItem("user-saved-note-app", JSON.stringify(notes));
    }, [notes]);

    useEffect(() => {
        localStorage.setItem("user-pref-theme", JSON.stringify(toggleTheme));
    }, [toggleTheme]);

    const handleDelete = (id) => {
        const newNotes = notes.filter((note) => {
            return note.id !== id;
        });

        setNotes(newNotes);
    };

    const addNote = (text) => {
        const date = new Date();
        const newNote = {
            id: nanoid(),
            content: text,
            date: date.toLocaleDateString(),
        };
        const newNotes = [...notes, newNote];
        setNotes(newNotes);
    };
    const handleChangeTheme = () => {
        setToggleTheme(!toggleTheme);
    };

    return (
        <div
            className={`${toggleTheme && "dark-mode"} `}
            style={{ transition: "background-color 0.3s ease" }}
        >
            <div className="container">
                <div className="header__container">
                    <Header handleChangeTheme={handleChangeTheme} />
                </div>
                <div className="note-list__container">
                    <SearchBar handleSearch={setSearchText} />
                    <NotesList
                        notes={notes.filter((note) => {
                            return note.content
                                .toLowerCase()
                                .includes(searchText);
                        })}
                        handleAddNote={addNote}
                        handleDelete={handleDelete}
                    />
                </div>
            </div>
        </div>
    );
};

export default App;
