import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import CardActions from "@mui/material/CardActions";
import { CardActionArea } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import EditIcon from "@mui/icons-material/Edit";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";

function NoteCard({ id, title, description, onEdit, onDelete }) {
  const edit = () => {
    onEdit({ id, title, description });
  };
  const deleteNote = () => {
    onDelete({ id, title, description });
  };

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {title || "Note"}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {description}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions sx={{ justifyContent: "flex-end" }}>
        <IconButton onClick={edit}>
          <EditIcon />
        </IconButton>
        <IconButton onClick={deleteNote}>
          <DeleteForeverIcon />
        </IconButton>
      </CardActions>
    </Card>
  );
}

export default NoteCard;
