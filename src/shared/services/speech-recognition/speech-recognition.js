class SpeechRecognition {
  constructor() {
    this.recognition = null;
  }

  getRecognition() {
    if (!this.recognition) {
      this.recognition = new window.webkitSpeechRecognition();
      this.recognition.continuous = true;
      this.recognition.lang = "en-US";
    }

    return this.recognition;
  }
}

export default SpeechRecognition;
