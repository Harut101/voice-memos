import Box from "@mui/material/Box";
import TextInput from "../../shared/components/text-input/TextInput";
import Button from "../../shared/components/button/Button";
import RecordButton from "../../shared/components/record-button/RecordButton";
import TextArea from "../../shared/components/textarea/TextArea";

function CreateNote() {
  return (
    <Box>
      <TextInput label="Title" />
      <Box
        sx={{
          position: "relative",
          alignItems: "center",
          width: "100%",
          mb: 4,
        }}
      >
        <TextArea label="Description" />
        <Box sx={{ position: "absolute", bottom: 0, right: 0 }}>
          <RecordButton />
        </Box>
      </Box>
      <Button sx={{ width: "100%" }} onClick={(e) => console.log(e)}>
        ADD
      </Button>
    </Box>
  );
}

export default CreateNote;
