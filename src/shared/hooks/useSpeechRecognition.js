import { useCallback, useState } from "react";
import SpeechRecognition from "../services/speech-recognition/speech-recognition";

const speechRecognition = new SpeechRecognition();

function useSpeechRecognition() {
  const [text, setText] = useState("");
  const [initializing, setInitializing] = useState(false);
  const [recording, setRecording] = useState(false);

  const start = useCallback(() => {
    const recognition = speechRecognition.getRecognition();

    recognition.start();

    recognition.onaudiostart = () => {
      setRecording(true);
      setInitializing(false);
    };

    recognition.onresult = (event) => {
      const transcript = event.results[0][0].transcript;
      setText(transcript);
      setRecording(false);
      setInitializing(false);
      recognition.stop();
    };

    setInitializing(true);
  }, []);

  const stop = useCallback(() => {
    const recognition = speechRecognition.getRecognition();
    recognition.stop();
    setRecording(false);
  }, []);

  return {
    text,
    initializing,
    recording,
    start,
    stop,
  };
}

export default useSpeechRecognition;
