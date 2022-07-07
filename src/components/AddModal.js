
import React, { useState } from "react";
import { Button, Modal, ModalBody, ModalFooter, ModalHeader } from "reactstrap";

export const AddModal = (props) => {
  const [form, setForm] = useState({
    fullName:"",
    email: "",
    password:""
 
  });
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

 
  
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(form)
    props.registre(form);
    //dispatch(register(JSON.stringify(form)))
    props.onClose()
    setForm({
      fullName: "",
      email: "",
      password:""
   
    });
  };
  
  return (
    <div className="page-content ">
    <Modal  className="positionElement" isOpen={props.isOpen} toggle={props.toggle} centered>
      <ModalHeader className="bg-light p-3">إظافة شخص</ModalHeader>
      <form onSubmit={handleSubmit}>
        <ModalBody>
          <div className="mb-3" id="modal-id" style={{ display: "none" }}>
            <label htmlFor="id-field" className="form-label">
              ID
            </label>
            <input

              type="text"
              id="id-field"
              
              className="form-control"
              placeholder="ID"
              readOnly
            />
          </div>

          <div className="mb-3">
            <label htmlFor="customername-field" className="form-label">
            الإسم
            </label>
            <input
              type="text"
              id="customername-field"
              className="form-control"
              placeholder=" أدخل  الإسم  "
              required
              onChange={handleChange}
              value={form.fullName}
              name="fullName"
            />
          </div>
         
          <div className="mb-3">
            <label htmlFor="email-field" className="form-label">
            بريد إلكتروني             </label>
            <input
              type="email"
              id="email-field"
              className="form-control"
              placeholder="أدخل   بريد إلكتروني  "
              required
              name="email"
              onChange={handleChange}
              value={form.email}
            />
          </div>

          <div className="mb-3">
          <label htmlFor="email-field" className="form-label">
          الرقم السري       </label>
          <input
            type="password"
            id="email-field"
            className="form-control"
            placeholder="  أدخل  الرقم السري  "
            required
            name="password"
            onChange={handleChange}
            value={form.password}
          />
        </div>


         
        </ModalBody>
        <ModalFooter>
          <div className=" row hstack gap-2 justify-content-end">
            <Button
              type="button"
              className="btn btnModal "
              onClick={props.onClose}
            >
            إغلق
            </Button>
            </div>
            <div className=" row hstack gap-2 justify-content-end">

            <button type="submit" className="  btn btn-success" >
            إرسال
            </button>
          </div>
        </ModalFooter>
      </form>
    </Modal>
    </div>
  );
};
