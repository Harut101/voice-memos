import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import CreateMemo from "../../widgets/create-memo/CreateMemo";

function Memos() {
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
          Create Your Memo
        </Typography>
        <CreateMemo />
      </Box>
      <Box sx={{ width: "75%", height: "100vh", padding: "20px" }}>List</Box>
    </Box>
  );
}

export default Memos;
