import { useContext } from "react";
import { DataContext } from "../hoc/DataProvider";

export function useData() {
    return useContext(DataContext)
}