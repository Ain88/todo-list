import React from 'react';
import { createPortal } from 'react-dom';

interface Props {
    selector?: string;
    children?: React.ReactNode;
  }  

const Portal: React.FC<Props> = ({ children }) => {
  const rootElement = document.getElementById('#modal-root');

  return (
    <>
      {rootElement ? createPortal(children, rootElement) : children}
    </>
  )
}

export default Portal;