import { dbService, storageService } from "fbase";
import React, { useState } from "react";
import { faTrashAlt, faEdit } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Hweet = ({ hweetObj, isOwner }) => {
  const [editing, setEditing] = useState(false);
  const [newHweet, setNewHweet] = useState(hweetObj.text);
  const onDeleteClick = async () => {
    const ok = window.confirm("Are you sure you want to delete this hweet?");
    if (ok) {
      await dbService.doc(`hweets/${hweetObj.id}`).delete();
      if (hweetObj.attachmentUrl) {
        await storageService.refFromURL(hweetObj.attachmentUrl).delete();
      }
    }
  };
  const toggleEditing = () => setEditing((prev) => !prev);

  const onSubmit = async (event) => {
    event.preventDefault();
    await dbService.doc(`hweets/${hweetObj.id}`).update({
      text: newHweet,
    });
    setEditing(false);
  };
  const onChange = (event) => {
    const {
      target: { value },
    } = event;
    setNewHweet(value);
  };
  return (
    <div className="hweet">
      {editing ? (
        <>
          {isOwner && (
            <div className="editingContainer">
              <form onSubmit={onSubmit}>
                <input
                  type="text"
                  placeholder="Edit your hweet"
                  value={newHweet}
                  onChange={onChange}
                  required
                  className="editInput"
                />
                <div className="updateBtnContainer">
                  <input
                    type="submit"
                    value="Update Hweet"
                    className="updateBtn"
                  />
                  <button onClick={toggleEditing} className="updateCancleBtn">
                    Cancle
                  </button>
                </div>
              </form>
            </div>
          )}
        </>
      ) : (
        <>
          <h4>{hweetObj.text}</h4>
          {hweetObj.attachmentUrl && (
            <img
              src={hweetObj.attachmentUrl}
              alt={hweetObj.attachmentUrl}
              width="50px"
              height="50px"
            />
          )}
          {isOwner && (
            <div className="editBtnContainer">
              <button onClick={onDeleteClick}>
                <FontAwesomeIcon icon={faTrashAlt} />
              </button>
              <button onClick={toggleEditing}>
                <FontAwesomeIcon icon={faEdit} />
              </button>
            </div>
          )}
        </>
      )}
    </div>
  );
};
export default Hweet;
