import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import NoteCard from "../../shared/note-card/NoteCard";

function NoteGrid({ notes }) {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid
        container
        spacing={{ xs: 2, md: 3 }}
        columns={{ xs: 4, sm: 8, md: 12 }}
      >
        {notes.map((note) => (
          <Grid item xs={2} sm={4} md={4} key={note.id}>
            <NoteCard {...note} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

export default NoteGrid;