import { useState, useEffect, useCallback } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import CreateNote from "../../widgets/create-note/CreateNote";
import NoteGrid from "../../widgets/note-grid/NoteGrid";
import DB from "../../shared/services/db/db";

const db = new DB("database", "notes");

function Notes() {
  const [loading, setLoading] = useState(false);
  const [notes, setNotes] = useState([]);
  const [noteToEdit, setNoteToEdit] = useState(null);

  useEffect(() => {
    async function initDB() {
      try {
        setLoading(true);
        await db.init();
        let allNotes = await db.getAll();
        setNotes(allNotes);
      } catch (e) {
        console.log(e);
      } finally {
        setLoading(false);
      }
    }

    initDB();
  }, []);

  const createNote = useCallback(
    async (note) => {
      try {
        const result = await db.add(note);
        setNotes([...notes, { id: result, ...note }]);
      } catch (e) {
        console.log(e);
      }
    },
    [notes]
  );

  const removeNote = useCallback(
    async (note) => {
      try {
        await db.delete(note.id);
        const newList = notes.filter((n) => n.id !== note.id);
        setNotes(newList);
      } catch (e) {
        console.log(e);
      }
    },
    [notes]
  );

  const updateNote = useCallback(
    async (note) => {
      try {
        const newNote = await db.update(note);
        const newList = notes.filter((n) => n.id !== note.id);
        setNotes([...newList, newNote]);
        setNoteToEdit(false);
      } catch (e) {
        console.log(e);
      }
    },
    [notes]
  );

  const onEditNote = useCallback((note) => setNoteToEdit(note), []);

  if (loading) {
    return <h1>LOADING...</h1>;
  }

  return (
    <Box sx={{ display: "flex", width: "100%" }}>
      <Box
        sx={{
          width: "25%",
          height: "100vh",
          padding: "20px",
          background: "#F5F7F9",
        }}
      >
        <Typography
          gutterBottom
          variant="p"
          component="p"
          color="primary"
          sx={{ textAlign: "center", fontWeight: "bold", fontSize: "30px" }}
        >
          Create Your Note
        </Typography>
        <CreateNote
          onUpdate={updateNote}
          onCreate={createNote}
          noteToEdit={noteToEdit}
        />
      </Box>
      <Box sx={{ width: "70%", height: "100vh", padding: "40px" }}>
        <NoteGrid
          notes={notes}
          removeNote={removeNote}
          onEditNote={onEditNote}
        />
      </Box>
    </Box>
  );
}

export default Notes;
