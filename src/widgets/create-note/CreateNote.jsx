import { useCallback, useState, useEffect } from "react";
import Box from "@mui/material/Box";
import TextInput from "../../shared/components/text-input/TextInput";
import Button from "../../shared/components/button/Button";
import RecordButton from "../../shared/components/record-button/RecordButton";
import TextArea from "../../shared/components/textarea/TextArea";

function CreateNote({ noteToEdit, onUpdate, onCreate }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  useEffect(() => {
    if (noteToEdit) {
      setTitle(noteToEdit.title);
      setDescription(noteToEdit.description);
    }
  }, [noteToEdit]);

  const changeTitle = useCallback((value) => setTitle(value), []);

  const changeDescription = useCallback((value) => setDescription(value), []);

  const handleCreate = async () => {
    await onCreate({ title, description });
    resetForm();
  };

  const handleUpdate = async () => {
    await onUpdate({ ...noteToEdit, title, description });
    resetForm();
  };

  const resetForm = () => {
    setTitle("");
    setDescription("");
  };

  return (
    <Box>
      <TextInput label="Title" value={title} onChange={changeTitle} />
      <Box
        sx={{
          position: "relative",
          alignItems: "center",
          width: "100%",
          mb: 4,
        }}
      >
        <TextArea
          label="Description"
          value={description}
          onChange={changeDescription}
        />
        <Box sx={{ position: "absolute", bottom: 0, right: 0 }}>
          <RecordButton />
        </Box>
      </Box>
      {!noteToEdit && (
        <Button sx={{ width: "100%" }} onClick={handleCreate}>
          Create
        </Button>
      )}

      {noteToEdit && (
        <Button sx={{ width: "100%" }} onClick={handleUpdate}>
          Update
        </Button>
      )}
    </Box>
  );
}

export default CreateNote;
