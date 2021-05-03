import React from "react";
import Modal from "react-modal";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};
Modal.setAppElement("#root");

const ProjectDetails = ({ modalIsOpen, closeModal }) => {
  return (
    <div onClick={closeModal}>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <div>
          <h3>he66</h3>
        </div>
      </Modal>
    </div>
  );
};

export default ProjectDetails;
