import prisma from "../prisma/prismaClient.js";

export async function tasks () {
    try{
        return await prisma.task.findMany();
    } catch (error) {
        return null;
    }
}

export async function task (id, userId) {
    try{
        return await prisma.task.findUnique({
            where: {
                id,
                userId
            }
        });
    } catch(error) {
        return null;
    }
}

export async function create (title, userId) {
    try{
        return await prisma.task.create({
            data: { 
                title,
                user: {
                    connect: { id: userId }
                } 
            }
        });
    } catch(error) {
        console.log(error);
        return null;
    }
}

export async function modify(id, userId, title) {
    try {
        return await prisma.task.updateMany({
            where: { id, userId },
            data: { title }
        });
    } catch (error) {
        console.log(error);
        return null;
    }
}

export async function remove (id, userId) {
    try{
        const result = await prisma.task.deleteMany({
            where: {
                id, 
                userId
            }
        });
        return result.count > 0;
    } catch (error) {
        return false;
    }
}