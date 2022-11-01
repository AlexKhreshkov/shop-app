import { useContext } from "react";
import { DataContext } from "../hoc/DataProvider";


export function useAuth() {
    return useContext(DataContext)
}
