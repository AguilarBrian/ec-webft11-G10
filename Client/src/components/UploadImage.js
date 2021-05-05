import React, { useState } from "react";
//import { render } from "react-dom";
import { storage } from "../firebase";
import { Button } from '@material-ui/core';
const UploadImage = () => {
    const [image, setImage] = useState(null);
    const [url, setUrl] = useState("");
    const [progress, setProgress] = useState(0);

    const handleChange = e => {
        if (e.target.files[0]) {
            setImage(e.target.files[0]);
        }
    };

    const handleUpload = () => {
        const uploadTask = storage.ref(`images/${image.name}`).put(image);
        uploadTask.on(
            "state_changed",
            snapshot => {
                const progress = Math.round(
                    (snapshot.bytesTransferred / snapshot.totalBytes) * 100
                );
                setProgress(progress);
            },
            error => {
                console.log(error);
            },
            () => {
                storage
                    .ref("images")
                    .child(image.name)
                    .getDownloadURL()
                    .then(url => {
                        setUrl(url);
                    });
            }
        );
    };

    console.log("image: ", image);

    return (
        <>
            <progress value={progress} max="100" />
            <p>
                <label>Product Image</label>

            </p>
            <input type="file" onChange={handleChange} />
            <Button
                variant="contained"
                color="primary"
                type="submit"
                onClick={handleUpload}
            >
                Upload
                  </Button>
            {/* <br />
            {url}
            <br /> */}
        </>
    );
};

export default UploadImage;