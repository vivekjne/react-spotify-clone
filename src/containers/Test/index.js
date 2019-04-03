import React from "react";
import MultiUpload from "./MultiUpload";
import { storage } from "../../firebase";
export default class Test extends React.Component {
  state = {
    files: []
  };
  uploadToFirebase = files => {
    console.log("files=", files);
    files.map(f => {
      f.progress = 0;
      f.downloadURL = "";
    });
    this.setState({ files });
    files.map((file, index) =>
      this.uploadImageAsPromise(file, index).then(res => console.log(res))
    );
  };

  uploadImageAsPromise = (imageFile, index) => {
    return new Promise((resolve, reject) => {
      const storageRef = storage.ref(`files/${imageFile.name}`);
      const task = storageRef.put(imageFile);

      task.on(
        "state_changed",
        snapshot => {
          const percentage =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          let files = [...this.state.files];
          files[index].progress = percentage;
          this.setState({ files });
        },
        err => {
          console.log(err);
        },
        () => {
          let files = [...this.state.files];
          files[index].downloadURL = task.snapshot.downloadURL;
          this.setState({ files });
        }
      );
    });
  };
  render() {
    const { files } = this.state;
    return (
      <div
        style={{
          marginLeft: "20px",
          display: "flex",
          justifyContent: "center"
        }}
      >
        <MultiUpload onUpload={files => this.uploadToFirebase(files)} />
        {files.map(file => (
          <div
            style={{
              background: "#ccc",
              width: "400px",
              height: "20px",
              marginTop: "10px",
              position: "relative"
            }}
          >
            <div
              style={{
                position: "absolute",
                left: 0,
                width: file.progress ? file.progress * 4 + "px" : "0px",
                height: "20px",
                background: "green",
                textAlign: "center"
              }}
            >
              {file.name}
            </div>
          </div>
        ))}
      </div>
    );
  }
}
