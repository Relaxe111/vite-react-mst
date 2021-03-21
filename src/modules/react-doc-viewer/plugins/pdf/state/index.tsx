import React, { createContext, Dispatch, FC, useReducer } from "react";
import type { IMainState } from "../../../state/reducer";
import type { PDFActions } from "./actions";
import {
  initialPDFState,
  IPDFState,
  PDFStateReducer,
  reducer,
} from "./reducer";

const PDFContext = createContext<{
  state: IPDFState;
  dispatch: Dispatch<PDFActions>;
}>({ state: initialPDFState, dispatch: () => null });

const PDFProvider: FC<{ mainState: IMainState }> = ({
  children,
  mainState,
}) => {
  const [state, dispatch] = useReducer<PDFStateReducer>(reducer, {
    ...initialPDFState,
    mainState,
  });

  return (
    <PDFContext.Provider value={{ state, dispatch }}>
      {children}
    </PDFContext.Provider>
  );
};

export { PDFContext, PDFProvider };
