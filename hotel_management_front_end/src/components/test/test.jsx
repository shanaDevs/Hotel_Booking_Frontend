import { useState } from "react";
import uploadFile from "../../utils/mediaupload";
export default function TestComponent() {
    const [file, setFile] = useState(null);
  
    const handleUpload = () => {
      if (file) {
        uploadFile(file);  // Call uploadFile function when the button is clicked
      } else {
        alert('Please select a file first.');
      }
    };
  
    return (
      <div className="w-full h-[100vh] flex justify-center items-center">
        <input
          type="file"
          onChange={(e) => {
            setFile(e.target.files[0]); // Update state with selected file
          }}
        />
        <button onClick={handleUpload}>Upload</button>
        {/* <Storage /> */}
      </div>
    );
  }