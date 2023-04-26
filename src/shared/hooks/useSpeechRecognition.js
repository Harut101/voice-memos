import { useCallback, useState } from "react";
import SpeechRecognition from "../services/speech-recognition/speech-recognition";

const speechRecognition = new SpeechRecognition();

function useSpeechRecognition() {
  const [text, setText] = useState("");
  const [recording, setRecording] = useState(false);

  const start = useCallback(() => {
    const recognition = speechRecognition.getRecognition();

    recognition.start();

    recognition.onresult = (event) => {
      const transcript = event.results[0][0].transcript;
      setText(transcript);
      setRecording(false);
      recognition.stop();
    };

    setRecording(true);
  }, []);

  const stop = useCallback(() => {
    const recognition = speechRecognition.getRecognition();
    recognition.stop();
    setRecording(false);
  }, []);

  return {
    text,
    recording,
    start,
    stop,
  };
}

export default useSpeechRecognition;
