const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient;

module.exports = {
    User: prisma.user,
    Profile: prisma.profile,
    Category: prisma.category
};