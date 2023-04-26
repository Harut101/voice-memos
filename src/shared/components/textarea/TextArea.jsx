import TextField from "@mui/material/TextField";

function TextArea({ label, value, onChange }) {
  const handelChange = (e) => {
    e.stopPropagation();
    const inputValue = e.target.value;
    onChange(inputValue);
  };

  return (
    <TextField
      sx={{ width: "100%" }}
      label={label}
      value={value}
      onChange={handelChange}
      multiline
      rows={4}
    />
  );
}

export default TextArea;
