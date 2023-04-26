import { useState } from "react";
import IconButton from "@mui/material/IconButton";
import KeyboardVoiceIcon from "@mui/icons-material/KeyboardVoice";

function RecordButton({ onClick }) {
  const [recording, setRecording] = useState(false);

  const handleClick = () => {
    setRecording(!recording);
    onClick(!recording);
  };

  return (
    <IconButton onClick={handleClick}>
      <KeyboardVoiceIcon sx={{ color: recording ? "red" : "" }} />
    </IconButton>
  );
}

export default RecordButton;
