const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const create = async (req, res) => {
    try {
        const data = req.body;
        const automovel = await prisma.automovel.create({
            data: data
        });
        return res.status(201).json(automovel).end();
    } catch (error) {
        res.status(400).json({ error: error.message }).end();
    }
}

const read = async (req, res) => {
    if (req.params.id) {
        if (!isNaN(req.params.id)) {
            const id = parseInt(req.params.id);
            const automovel = await prisma.automovel.findUnique({
                where: {
                    id: id
                }
            });
            return res.json(automovel);
        }else{
            const automovel = await prisma.automovel.findMany({
                where: {
                    nome: {
                        contains: req.params.id
                    }
                }
            });
            return res.json(automovel);
        }
    } else {
        const automovel = await prisma.automovel.findMany();
        return res.json(automovel);
    }
}

const update = async (req, res) => {
    try {
        const data = req.body;
        let automovel = await prisma.automovel.update({
            data: data,
            where: {
                id: parseInt(req.body.id)
            }
        });
        res.status(202).json(automovel).end();
    } catch (error) {
        res.status(404).json({ error: error.message }).end();
    }
}

const del = async (req, res) => {
    try {
        let automovel = await prisma.automovel.delete({
            where: {
                id: parseInt(req.params.id)
            }
        });
        res.status(204).json(automovel).end();
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