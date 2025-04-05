import { IClassroom } from "@typed/Misc";
import { createContext, useReducer, ReactNode, Dispatch } from "react";

interface GlobalState {
  user: any | null;
  token: string;
  isAuthenticated: boolean;
  course: IClassroom | null;
}

type GlobalAction =
  | { type: "SET_USER"; payload: { user: any; token: string } }
  | { type: "LOGOUT" }
  | { type: "SET_COURSE"; payload: any };

const initialState: GlobalState = {
  user: null,
  token: "",
  isAuthenticated: false,
  course: null,
};

const globalReducer = (
  state: GlobalState,
  action: GlobalAction
): GlobalState => {
  switch (action.type) {
    case "SET_USER":
      return {
        ...state,
        user: action.payload.user,
        token: action.payload.token,
        isAuthenticated: !!(action.payload.user && action.payload.token),
      };
    case "SET_COURSE":
      return {
        ...state,
        course: action.payload,
      };
    case "LOGOUT":
      return {
        ...state,
        user: null,
        token: "",
        isAuthenticated: false,
        course: null,
      };
    default:
      return state;
  }
};

export const GlobalContext = createContext<
  { state: GlobalState; dispatch: Dispatch<GlobalAction> } | undefined
>(undefined);

export const GlobalProvider = ({ children }: { children: ReactNode }) => {
  const [state, dispatch] = useReducer(globalReducer, initialState);

  return (
    <GlobalContext.Provider value={{ state, dispatch }}>
      {children}
    </GlobalContext.Provider>
  );
};
