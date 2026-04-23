import prisma from "../prisma/prismaClient.js";

class UserService {
    static async create (data){
        return prisma.user.create({data});
    }

    static async findByEmail (email){
        return prisma.user.findUnique({
            where: {email}
        })
    }
}

export default UserService;