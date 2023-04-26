import TextField from "@mui/material/TextField";

function TextInput({ value, label, onChange }) {
  const handelChange = (e) => {
    e.stopPropagation();
    const inputValue = e.target.value;
    onChange(inputValue);
  };

  return (
    <TextField
      sx={{ width: "100%", mb: 4 }}
      label={label}
      variant="outlined"
      value={value}
      onChange={handelChange}
    />
  );
}

export default TextInput;
