import intanceAxios from "../config/axios.config.ts";

class RoleService {
    static async getAll() {
        return intanceAxios.get("/roles");
    }
}

export default RoleService;