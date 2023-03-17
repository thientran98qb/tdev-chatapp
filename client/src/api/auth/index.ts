import { LoginDataType } from "../../models";
import instanceAxios from "../apiServices"

export default {
    login: (data: LoginDataType) => {
        return instanceAxios.post('/login', data);
    }
}
