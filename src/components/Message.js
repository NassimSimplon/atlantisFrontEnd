import React from "react";
import { Alert } from "reactstrap";

export const Message = ({variant, children}) => {
  return <Alert style={{
    display: 'block', width: '100%',
    
    padding: 30,
    textAlign: "center"
 }}
 color="warning"
>{children}</Alert>;
};
Message.defaultProps = {
  variant: "danger",
};
export default Message;