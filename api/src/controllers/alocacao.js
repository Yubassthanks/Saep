const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const create = async (req, res) => {
    try {
        const data = req.body;
        const alocacao = await prisma.alocacao.create({
            data: data
        });
        return res.status(201).json(alocacao).end();
    } catch (error) {
        res.status(400).json({ error: error.message }).end();
    }
}

const read = async (req, res) => {
    if (req.params.id) {
        if (!isNaN(req.params.id)) {
            const id = parseInt(req.params.id);
            const alocacao = await prisma.alocacao.findUnique({
                where: {
                    id: id
                }
            });
            return res.json(alocacao);
        }else{
            const alocacao = await prisma.alocacao.findMany({
                where: {
                    nome: {
                        contains: req.params.id
                    }
                }
            });
            return res.json(alocacao);
        }
    } else {
        const alocacao = await prisma.alocacao.findMany();
        return res.json(alocacao);
    }
}

const update = async (req, res) => {
    try {
        const data = req.body;
        let alocacao = await prisma.alocacao.update({
            data: data,
            where: {
                id: parseInt(req.body.id)
            }
        });
        res.status(202).json(alocacao).end();
    } catch (error) {
        res.status(404).json({ error: error.message }).end();
    }
}

const del = async (req, res) => {
    try {
        let alocacao = await prisma.alocacao.delete({
            where: {
                id: parseInt(req.params.id)
            }
        });
        res.status(204).json(alocacao).end();
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