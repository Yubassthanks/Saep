const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const create = async (req, res) => {
    const data = req.body;
    const concessionaria = await prisma.concessionaria.create({
        data: data
    });
    return res.status(201).json(concessionaria).end();
}

const read = async (req, res) => {
    if (req.params.id) {
        const id = parseInt(req.params.id);
        const concessionaria = await prisma.concessionaria.findUnique({
            where: {
                id: id
            }
        });
        return res.json(concessionaria);
    } else {
        const concessionaria = await prisma.concessionaria.findMany();
        return res.json(concessionaria);
    }
}

const update = async (req, res) => {
    try {
        const data = req.body;
        let concessionaria = await prisma.concessionaria.update({
            data: data,
            where: {
                id: parseInt(req.body.id)
            }
        });
        res.status(202).json(concessionaria).end();
    } catch (error) {
        res.status(404).json({ error: error.message }).end();
    }
}

const del = async (req, res) => {
    try {
        let concessionaria = await prisma.concessionaria.delete({
            where: {
                id: parseInt(req.params.id)
            }
        });
        res.status(204).json(concessionaria).end();
    } catch (error) {
        res.status(404).json({ error: error.message }).end();
    }
}

module.exports = {
    read,
    create,
    update,
    del
};