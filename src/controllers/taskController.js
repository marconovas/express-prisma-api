import * as taskService  from "../services/taskService.js";

export async function getTasks (req, res) {
    const tasks = await taskService.tasks();

    if(!tasks){
        return res.status(500).json({ message: "Error al obtener tareas" });
    }

    res.json(tasks);
}

export async function getTaskById (req, res) {
    const id  = Number(req.params.id);
    const userId = req.user.userId;

    if(!id){
        return res.status(400).json({ message: "Id no especificado."});
    }

    const task = await taskService.task(id, userId);

    if(!task){
        return res.status(400).json({ message: "Tarea no encontrada." });
    }

    res.json(task);
}

export async function createTask (req, res) {
    const { title } = req.body;

    if(!title){
        return res.status(400).json({ 
            message: "title es obligatorio." 
        });
    }

    const userId = req.user.userId;

    const task = await taskService.create(title, userId);

    if(!task){
        return res.status(500).json({ 
            message: "No se puedo crear la tarea."
        });
    }

    res.status(200).json({
        message: "Tarea creada satisfactoriamente.", 
        task 
    });
}

export async function editTask (req, res) {
    const id = Number(req.params.id);
    const { title } = req.body;
    const userId = req.user.userId;

    if(!id || !title){
        return res.status(404).json({
            message: "Id o Título de tarea no encontrado."
        });
    }

    const result = await taskService.modify(id, userId, title);

    if(!result || result.count === 0){
        return res.status(500).json({
            message: "Tarea no encontrada."
        });
    }

    res.status(200).json({ 
        message: "Tarea modificada exitosamente."
    });
}

export async function deleteTask (req, res) {
    const id = Number(req.params.id);
    const userId = req.user.userId;

    if(!id){
        return res.status(400).json({ message: "Id de tarea no especificado." });
    }

    const status = await taskService.remove(id, userId);

    if(!status){
        return res.status(404).json({ message: "No se pudo eliminar la tarea." });
    }

    res.status(200).json({ message: "Tarea eliminada exitosamente." });
}