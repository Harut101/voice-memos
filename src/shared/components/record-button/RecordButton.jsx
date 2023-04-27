import { useEffect, useState } from "react";
import IconButton from "@mui/material/IconButton";
import KeyboardVoiceIcon from "@mui/icons-material/KeyboardVoice";

function RecordButton({ isInitializing, isRecording, onClick }) {
  const [recording, setRecording] = useState(false);
  const color = isInitializing ? "#e09209" : recording ? "red" : "";

  useEffect(() => setRecording(isRecording), [isRecording]);

  const handleClick = () => onClick(!recording);

  return (
    <IconButton onClick={handleClick}>
      <KeyboardVoiceIcon sx={{ color }} />
    </IconButton>
  );
}

export default RecordButton;
