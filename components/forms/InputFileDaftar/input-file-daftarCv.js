import React, { useState } from "react";

const InputFileDaftarCv = ({ name, type, id, selectedFile, setSelectedFile }) => {
   const handleFileChange = (event) => {
      const file = event.target.files[0];
      setSelectedFile(file);
   };

   return (
      <>
         <div
            style={{
               display: "flex",
               marginTop: "50px",
               position: "relative",
            }}
         >
            <input
               id={id}
               type={type}
               onChange={handleFileChange}
               name={name}
               style={{
                  opacity: 0,
                  position: "absolute",
                  top: 0,
                  right: 0,
                  bottom: 0,
                  left: 0,
                  width: "100%",
                  cursor: "pointer",
               }}
            />
            <span
               style={{
                  float: "left",
                  border: "solid",
                  borderWidth: "1px",
                  width: "100%",
                  borderRadius: "8px 0 0 8px",
                  height: "40px",
                  textAlign: "justify",
                  paddingTop: "8px",
                  paddingLeft: "5px",
                  borderColor: "#D2D2D2",
                  color: "gray",
               }}
            >
               {selectedFile ? selectedFile.name : "Pilih File"}
            </span>
            <label
               htmlFor="file-input-cv"
               style={{
                  backgroundColor: "#8EBF59",
                  color: "white",
                  padding: "8px 35px",
                  cursor: "pointer",
                  borderRadius: "0 8px 8px 0",
                  float: "right",
               }}
            >
               Pilih
            </label>
         </div>
      </>
   );
};

export default InputFileDaftarCv;
