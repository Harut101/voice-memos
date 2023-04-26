import { useState, useEffect } from "react";
import TextField from "@mui/material/TextField";

function TextInput({ value, label, onChange }) {
  const [text, setText] = useState("");

  useEffect(() => {
    if (typeof value === "string" && value.trim()) {
      setText(value);
    }
  }, [value]);

  const handelChange = (e) => {
    e.stopPropagation();
    const inputValue = e.target.value;
    setText(inputValue);
    onChange(inputValue);
  };

  return (
    <TextField
      sx={{ width: "100%", mb: 4 }}
      label={label}
      variant="outlined"
      value={text}
      onChange={handelChange}
    />
  );
}

export default TextInput;
