import PropTypes from "prop-types";
import React from "react";
import { Modal, ModalBody } from "reactstrap";

import { useDispatch, useSelector } from "react-redux";


const DeleteModal = (props) => {
  const dispatch = useDispatch();

console.log(props._id);
  return (
    <Modal isOpen={props.show} toggle={props.onCloseClick} centered={true}>
      <ModalBody className="py-3 px-5">
        <div className="mt-2 text-center">
          <lord-icon
            src="https://cdn.lordicon.com/gsqxdxog.json"
            trigger="loop"
            colors="primary:#f7b84b,secondary:#f06548"
            style={{ width: "100px", height: "100px" }}
          ></lord-icon>
          <div className="mt-4 pt-2 fs-15 mx-4 mx-sm-5">
            <h4>هل انت متأكد ؟</h4>
           
          </div>
        </div>
        <div className="d-flex gap-2 justify-content-center mt-4 mb-2">
          <button
            type="button"
            className="btn w-sm btn-light"
            data-bs-dismiss="modal"
            onClick={props.onCloseClick}
          >
          إغلق
          </button>
          <button
            type="button"
            className="btn w-sm btnModal  "
            id="delete-record"
            onClick={props.deleteContact}

          >
          نعم
          </button>
        </div>
      </ModalBody>
    </Modal>
  );
};


export default DeleteModal;