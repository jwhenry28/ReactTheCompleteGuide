import { createContext, useContext } from "react";

const AccordianItemContext = createContext();

export function useAccordianItemContext() {
  const ctx = useContext(AccordianItemContext);

  if (!ctx) {
    throw new Error(
      "AccordianItem-related components must be wrapped by <Accordian.Item>"
    );
  }

  return ctx;
}

export default function AccordionItem({ id, children, className }) {
  return (
    <AccordianItemContext.Provider value={id}>
      <li className={className}>{children}</li>
    </AccordianItemContext.Provider>
  );
}
