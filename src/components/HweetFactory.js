import React, { useState, useRef } from "react";
import { v4 as uuidv4 } from "uuid";
import { dbService, storageService } from "fbase";
import { faPlus, faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const HweetFactory = ({ userObj }) => {
  const [hweet, setHweet] = useState("");
  const [attachment, setAttachment] = useState("");
  const fileInput = useRef();

  const onSubmit = async (e) => {
    e.preventDefault();
    let attachmentUrl = "";
    if (attachment !== "") {
      const attachmentRef = storageService
        .ref()
        .child(`${userObj.uid}/${uuidv4()}`);
      const response = await attachmentRef.putString(attachment, "data_url");
      attachmentUrl = await response.ref.getDownloadURL();
    }
    const hweetObj = {
      text: hweet,
      createdAt: Date.now(),
      creatorId: userObj.uid,
      attachmentUrl,
    };
    await dbService.collection("hweets").add(hweetObj);
    setHweet("");
    onClearAttachment();
  };

  const onChange = (e) => {
    const {
      target: { value },
    } = e;
    setHweet(value);
  };

  const onFileChange = (event) => {
    const {
      target: { files },
    } = event;
    const theFile = files[0];
    const reader = new FileReader();
    reader.onloadend = (finishedEvent) => {
      const {
        currentTarget: { result },
      } = finishedEvent;
      setAttachment(result);
    };
    reader.readAsDataURL(theFile);
  };

  const onClearAttachment = () => {
    fileInput.current.value = null;
    setAttachment("");
  };
  return (
    <form onSubmit={onSubmit} className="hweetForm">
      <div className="factoryInput_container">
        <input
          value={hweet}
          type="text"
          placeholder="What's on your mind?"
          maxLength={120}
          onChange={onChange}
          className="hweetInput"
        />
        <input type="submit" value="→" id="hweetBtn" />
      </div>
      <label htmlFor="addPhoto">
        <span>
          Add Photo <FontAwesomeIcon icon={faPlus} />
        </span>
      </label>
      <input
        type="file"
        accept="image/*"
        onChange={onFileChange}
        ref={fileInput}
        id="addPhoto"
      />
      {attachment && (
        <div className="photoContainer">
          <img src={attachment} alt={attachment} width="50px" height="50px" />
          <button onClick={onClearAttachment}>
            Remove <FontAwesomeIcon icon={faTimes} />
          </button>
        </div>
      )}
    </form>
  );
};

export default HweetFactory;
