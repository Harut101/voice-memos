import { useEffect, useState } from "react";
import IconButton from "@mui/material/IconButton";
import KeyboardVoiceIcon from "@mui/icons-material/KeyboardVoice";

function RecordButton({ isRecording, onClick }) {
  const [recording, setRecording] = useState(false);

  useEffect(() => setRecording(isRecording), [isRecording]);

  const handleClick = () => onClick(!recording);

  return (
    <IconButton onClick={handleClick}>
      <KeyboardVoiceIcon sx={{ color: recording ? "red" : "" }} />
    </IconButton>
  );
}

export default RecordButton;
