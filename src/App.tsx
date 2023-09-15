import "./App.css";
import { useState, useEffect, ChangeEvent, useCallback } from "react";

import UploaderCard from "./components/UploaderCard";
import AfterLoader from "./components/AfterLoader";
import Footer from "./components/Footer";
import { Loading } from "./components/Loading";
import { uploadImage } from "./libs/config";

function App() {
  const [preload, setPreload] = useState(true);
  const [onUpload, setOnUpload] = useState(false);
  const [uploadFinally, setUploadFinally] = useState(false);
  const [imagen, setImage] = useState<File | null>(null);
  const [url, setUrl] = useState("");

  const handleUpload = useCallback(async () => {
    try {
      setPreload(false);
      setOnUpload(true);
      const data = await uploadImage(imagen);
      setUrl(data!);
      setOnUpload(false);
      setUploadFinally(true);
    } catch (error) {
      console.error(error);
    }
  }, [imagen]);

  const handleUploadButtonClick = () => {
    const inputImage = document.getElementById(
      "input-imagen"
    ) as HTMLInputElement;
    inputImage?.click();
  };

  const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    const imageToUpload = event.target.files?.[0];
    if (imageToUpload) {
      setImage(imageToUpload);
    }
  };

  useEffect(() => {
    const dropzone = document.getElementById("drop-zone");
    dropzone?.addEventListener("drop", (event: DragEvent) => {
      event.preventDefault();
      const imageToUpload = event.dataTransfer?.files[0];

      if (imageToUpload) {
        setImage(imageToUpload);
      }
    });
    dropzone?.addEventListener("dragover", (event: DragEvent) => {
      event.preventDefault();
      dropzone.style.border = "1px dashed green";
    });

    dropzone?.addEventListener("dragleave", (event: DragEvent) => {
      event.preventDefault();
      dropzone.style.border = "1px dashed #97BEF4";
    });

    if (imagen) {
      handleUpload();
    }
  }, [imagen, handleUpload]);

  return (
    <main className="flex flex-col items-center justify-center h-screen">
      <div className="flex flex-col items-center justify-center mx-auto w-full">
        <div className="flex flex-col">
          <UploaderCard
            state={preload}
            buttonOnChange={handleUploadButtonClick}
            inputOnChange={handleFileChange}
          />
          <Loading state={onUpload} />
          <AfterLoader image={url} url={url} state={uploadFinally} />
        </div>
      </div>
      <Footer />
    </main>
  );
}

export default App;
