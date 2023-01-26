import { createContext, useMemo, useReducer } from "react";
import StoreReducer, { initialState } from "./StoreReducer";

const StoreContext = createContext();

const StoreProvider =({children})=>{
    const [state, dispatch] = useReducer(StoreReducer, initialState)

    return(
        <StoreContext.Provider value={[state, dispatch]}>
            {children}
        </StoreContext.Provider>
    )
}


export {StoreContext};
export default StoreProvider;
