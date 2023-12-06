import axios from "axios";

export default function useJSP() {
    const jpAxios = axios.create(
        {
            baseURL:"https://apramteam.ir/api/proptrading/"
        }
    )
    return jpAxios
}
