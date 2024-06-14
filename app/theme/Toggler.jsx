"use client";
import React, { useEffect, useState } from "react";
import { Form } from "react-bootstrap";

const ModeToggler = () => {
  const [mode, setMode] = useState(false);
  useEffect(() => {
    if(mode === true){
      document.documentElement.classList.add("dark")
    }else{
      document.documentElement.classList.remove("dark")
    }
    
  }, [mode]);
  return (
    <Form>
      <Form.Check
        type="switch"
        id="mode-toggler"
        checked={mode}
        onChange={() => setMode((prev) => !prev)}
      />
    </Form>
  );
};

export default ModeToggler;