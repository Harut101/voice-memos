import MuiButton from "@mui/material/Button";

function Button({ disabled, onClick, children }) {
  const handleClick = (e) => {
    e.stopPropagation();
    onClick(e);
  };

  return (
    <MuiButton
      sx={{ width: "100%" }}
      variant="contained"
      disabled={disabled}
      onClick={handleClick}
    >
      {children}
    </MuiButton>
  );
}

export default Button;
