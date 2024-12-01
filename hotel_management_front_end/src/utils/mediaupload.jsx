// utils/mediaupload.jsx
const uploadFile = async (file) => {
  console.log(import.meta.env.CLOUDINARY_CLOUD_NAME);
  try {
    const formData = new FormData();
    formData.append('file', file);
    formData.append('upload_preset', 'ml_default'); 
    const response = await fetch(
      `https://api.cloudinary.com/v1_1/${import.meta.env.VITE_CLOUDINARY_CLOUD_NAME}/image/upload`,

      {
        method: 'POST',
        body: formData,
      }
    );

    if (!response.ok) {
      throw new Error('Failed to upload file');
    }

    const data = await response.json();
    console.log('Upload successful:', data);
    console.log(data.secure_url);
    return data.secure_url; 
  } catch (error) {
    console.error('Error uploading file:', error);
  }
};

export default uploadFile;
