import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import CreateNote from "../../widgets/create-note/CreateNote";
import NoteGrid from "../../widgets/note-grid/NoteGrid";

function Notes() {
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
        <CreateNote />
      </Box>
      <Box sx={{ width: "70%", height: "100vh", padding: "40px" }}>
        <NoteGrid notes={[{ id: 1 }, { id: 2 }]} />
      </Box>
    </Box>
  );
}

export default Notes;
