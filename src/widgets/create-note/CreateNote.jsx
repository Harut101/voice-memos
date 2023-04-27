import { useCallback, useState, useEffect } from "react";
import Box from "@mui/material/Box";
import TextInput from "../../shared/components/text-input/TextInput";
import Button from "../../shared/components/button/Button";
import RecordButton from "../../shared/components/record-button/RecordButton";
import TextArea from "../../shared/components/textarea/TextArea";
import useSpeechRecognition from "../../shared/hooks/useSpeechRecognition";

function CreateNote({ noteToEdit, onUpdate, onCreate }) {
  const { text, initializing, recording, start, stop } = useSpeechRecognition();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const descTitle = initializing
    ? "Wait..."
    : recording
    ? "Start Talking"
    : "Type or Record Description";

  useEffect(() => {
    if (noteToEdit) {
      setTitle(noteToEdit.title);
      setDescription(noteToEdit.description);
    }
  }, [noteToEdit]);

  useEffect(() => {
    if (text) {
      setDescription(text);
    }
  }, [text]);

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

  const handleRecord = useCallback(
    (isRecord) => {
      if (isRecord) {
        start();
      } else {
        stop();
      }
    },
    [start, stop]
  );

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
          label={descTitle}
          value={description}
          onChange={changeDescription}
        />
        <Box sx={{ position: "absolute", bottom: 0, right: 0 }}>
          <RecordButton
            isInitializing={initializing}
            isRecording={recording}
            onClick={handleRecord}
          />
        </Box>
      </Box>
      {!noteToEdit && (
        <Button
          sx={{ width: "100%" }}
          disabled={!description}
          onClick={handleCreate}
        >
          Create
        </Button>
      )}

      {noteToEdit && (
        <Button
          sx={{ width: "100%" }}
          disabled={!description}
          onClick={handleUpdate}
        >
          Update
        </Button>
      )}
    </Box>
  );
}

export default CreateNote;
