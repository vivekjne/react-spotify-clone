import React, { useEffect, useState } from "react";
import { useDropzone } from "react-dropzone";
import "./test.css";
import styled from "styled-components";

const UploadButton = styled.button`
  width: 400px;
  margin: 10px auto;
  display: block;
  height: 40px;
  background: #1ec760;
  border: 0px;
  color: #fff;
  font-size: 20px;
  font-weight: bold;
  cursor: pointer;
  outline: none;
  &:hover {
    background: #1ed760;
    transform: scale(0.98) translate(0, 2px);
  }

  &:active {
    transform: scale(0.98) translate(0, 4px);
  }
`;
const thumbsContainer = {
  display: "flex",
  flexDirection: "row",
  flexWrap: "wrap",
  marginTop: 16
};

const container = {
  width: "400px",
  height: "400px"
};

const thumb = {
  display: "inline-flex",
  borderRadius: 2,
  border: "1px solid #eaeaea",
  marginBottom: 8,
  marginRight: 8,
  width: 100,
  height: 100,
  padding: 4,
  boxSizing: "border-box"
};

const thumbInner = {
  display: "flex",
  minWidth: 0,
  overflow: "hidden"
};

const img = {
  display: "block",
  width: "auto",
  height: "100%"
};

export default props => {
  const [files, setFiles] = useState([]);
  const { getRootProps, getInputProps } = useDropzone({
    accept: "image/*,aduio/*",
    onDrop: acceptedFiles => {
      setFiles(
        acceptedFiles.map(file =>
          Object.assign(file, {
            preview: URL.createObjectURL(file)
          })
        )
      );
    }
  });

  const thumbs = files.map(file => (
    <div style={thumb} key={file.name}>
      <div style={thumbInner}>
        <img src={file.preview} style={img} />
      </div>
    </div>
  ));

  useEffect(
    () => () => {
      // Make sure to revoke the data uris to avoid memory leaks
      files.forEach(file => URL.revokeObjectURL(file.preview));
    },
    [files]
  );

  return (
    <section style={{ container }}>
      <div {...getRootProps({ className: "dropzone" })}>
        <input {...getInputProps()} />
        <p>Drag 'n' drop some files here, or click to select files</p>
      </div>
      <aside style={thumbsContainer}>{thumbs}</aside>
      <UploadButton onClick={() => props.onUpload(files)}>Upload</UploadButton>
    </section>
  );
};
