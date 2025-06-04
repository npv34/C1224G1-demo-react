import intanceAxios from "../config/axios.config.ts";

class UserService {
    static async getAllUser() {
        return await intanceAxios.get("/users?_expand=role")
    }

    static async deleteUserById(id: number) {
        return await intanceAxios.delete(`/users/${id}`)
    }

    static async createUser(data: any) {
        return await intanceAxios.post("/users", data);
    }

    static async changeStatusUser(active: boolean, id: number) {
        return await intanceAxios.patch(`/users/${id}`, {
            "active": active
        })
    }

    static async findById(id: number) {
        return await intanceAxios.get(`/users/${id}?_expand=role`)
    }

    static async updateUser(data: any, id: number) {
        return await intanceAxios.patch(`/users/${id}`, data)
    }

    static async searchByName(name: string) {
        return await intanceAxios.get(`/users?name_like=${name}`)
    }
}

export default UserService;