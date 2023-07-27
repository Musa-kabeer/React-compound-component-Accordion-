/* eslint-disable react/prop-types */

import { useContext, useState } from 'react';
import { createContext } from 'react';

const AccordionContext = createContext();

function AccordionProvider({ children }) {
  const [selectedId, setSelectedId] = useState(null);

  return (
    <AccordionContext.Provider value={{ selectedId, setSelectedId }}>
      {children}
    </AccordionContext.Provider>
  );
}

function Header({ children, acccordionId }) {
  const { setSelectedId } = useContext(AccordionContext);

  return (
    <button
      onClick={() =>
        setSelectedId((id) => id !== acccordionId && acccordionId)
      }
    >
      {children}
    </button>
  );
}

function Body({ children, acccordionId }) {
  const { selectedId } = useContext(AccordionContext);

  if (selectedId !== acccordionId) return null;

  return <div className="content">{children}</div>;
}

AccordionProvider.Header = Header;
AccordionProvider.Body = Body;

export default AccordionProvider;
