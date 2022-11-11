import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

function App() {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  const handleSendNotification = async () => {
    const myData = {
      to: "fFhiTijFQVmTYhC-ewj8gK:APA91bHhEnUAIop7fIuj5Kh1NG1yY0Hz9hYWBBTfwjLUvkQTaH2LdQ3RZzomaWwo7yj47TCGxXo6pLmBcyT1sHIXHLVWZ1FZ0_rjWLD0BwgFFXN7_4nOHSt1KHRSAOWmnVGVL6OGJLG8",
      priority: "high",
      soundName: "default",
      notification: {
        title: title,
        body: body,
      },
    };

    const result = await fetch("https://fcm.googleapis.com/fcm/send", {
      method: "POST",
      headers: {
        Authorization:
          "key=AAAABmQd5eE:APA91bHv_UVj5qj94wMuVkbDZ_XdyXmZ7Yhzx36aP1loLL-_KwaI5qbEo5-WYyyKvbhrvnPY7VnxUKJ4mixRPko7BoZwFG-YL_QFZHCIX_v1aMot5NjtO1vQL_cdXbQhn6uu8xMdzD3f",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(myData),
    });

    const resultJson = await result.json();
    console.log(resultJson);
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Example Simple Send Remote Notification to React Native.</p>

        <label>Title: </label>
        <input
          type="text"
          id="Txt_Title"
          name="Txt_Title"
          onChange={(e) => setTitle(e.target.value)}
        />

        <label>Body: </label>
        <input
          type="text"
          id="Txt_Body"
          name="Txt_Body"
          onChange={(e) => setBody(e.target.value)}
        />

        <button style={{ marginTop: 20 }} onClick={handleSendNotification}>
          Send Notification
        </button>
      </header>
    </div>
  );
}

export default App;
