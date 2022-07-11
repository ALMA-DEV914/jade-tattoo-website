import React, {useState} from "react";
import pic from "../assets/images/about.jpg";
import Modal from "react-modal";

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};

function About() {
  let subtitle;
  const [modalIsOpen, setIsOpen] = useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    subtitle.style.color = '#f00';
  }

  function closeModal() {
    setIsOpen(false);
  }
  return (
    <div className="container d-flex">
      <div className="row">
        <div className="col p-2">
          <img src={pic} alt="tattoo-hand" width="100%" />
        </div>

        <div className="col p-4 mt-6">
          <h1>About Us</h1>
          <p>
            {" "}
            Jade Tattoo is a small start up business. Being passionate in arts
            and design, he found ways on how to apply this skills. It is located
            in small town at Brgy. Maraska Roxas, oriental Mindoro. The most
            inspiring thing about him is that he is a self-taught designer.
          </p>

          <br></br>
          <button type="button" className="bg-success" onClick={openModal}>
            Reserve your sit
          </button>
          <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <h2 ref={(_subtitle) => (subtitle = _subtitle)}>Schedule at your convenience</h2>
      <div className="modal-content p-2">
        <div className="modal-header">
          <h5 className="modal-title" id="task-form-modal">Choose a date</h5>
          <button className="bg-dark" onClick={closeModal}>close</button>
        </div>
        <div className="modal-body">
          <form>
            <div className="form-group">
              <label for="modalTaskDescription">Add description</label>
              <textarea id="modalTaskDescription" rows="3" className="form-control"></textarea>
            </div>
            <div className="form-group">
              <label for="modalDueDate">Choosen date</label>
              <input type="text" id="modalDueDate" className="form-control" placeholder="mm/dd/yyyy" autocomplete="off" />
            </div>
          </form>
        </div><br></br>
        <div classname="modal-footer">
          <button type="button" className="btn-save bg-success">Save Date</button>
        </div>
      </div>
      </Modal>
        </div>
      </div>
    </div>
  );
}

export default About;
