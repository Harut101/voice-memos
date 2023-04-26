import { useState, useEffect } from "react";
import TextField from "@mui/material/TextField";

function TextArea({ label, value, onChange }) {
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
      sx={{ width: "100%" }}
      label={label}
      value={text}
      onChange={handelChange}
      multiline
      rows={4}
    />
  );
}

export default TextArea;
