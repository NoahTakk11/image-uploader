import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
import {
  ref,
  uploadBytes,
  getDownloadURL,
  deleteObject,
  listAll,
} from "firebase/storage";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: import.meta.env.VITE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_APP_ID,
};
const connection = initializeApp(firebaseConfig);
const storage = getStorage(connection);
const memorizeFile: string[] = [];

const listFiles = async () => {
  const filesRef = ref(storage, "images");
  try {
    const res = await listAll(filesRef);
    res.items.forEach((element) => {
      memorizeFile.push(element.name);
    });
  } catch (error) {
    console.error(error);
  }
};

listFiles();

export const uploadImage = async (file: File | null) => {
  try {
    if (!file) {
      throw new Error("No se proporcionó ningún archivo.");
    }
    memorizeFile.push(file.name);
    if (memorizeFile.length >= 3) {
      const deletedFile = memorizeFile[0];
      const deleteFileRef = ref(storage, `images/${deletedFile}`);
      await deleteObject(deleteFileRef)
        .then(() => {
          console.log(`Deleted file with name <${deletedFile}>`);
        })
        .catch((error: Error) => {
          console.error(error);
        });
      memorizeFile.shift();
    }
    const storageImagesRef = ref(storage, `images/${file.name}`);
    await uploadBytes(storageImagesRef, file);
    const urlDownload = await getDownloadURL(storageImagesRef);

    return urlDownload;
  } catch (error) {
    console.error(error);
  }
};
