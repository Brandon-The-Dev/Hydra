require('dotenv').config();
const { Client } = require('discord.js');
const mongoose = require('mongoose');
const economy = require('../models/EconomyModel');
const ItemManager = require('./ItemManager');

class MongoClient extends Client {
    constructor() {
        super();
        mongoose.connect(process.env.MONGODB, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        this.economy = economy;
        this.items = new ItemManager();
        this.commandsUsed = 1;
    }

    /**
     * 
     * @param {string} userId - A discord user ID.
     */

    async fetchUser(userId) {
        const someone = this.users.cache.get(userId);
        if (!someone || someone.bot) return false;
        const user = await economy.findOne({ userId: userId });
        if (!user) {
            const newUser = new economy({
                userId: userId,
                items: []
            });
            newUser.save();
            return newUser;
        }
        return user;
    }

    /**
     * 
     * @param {string} userId - A discord user ID.
     * @param {number} amount - Amount of bank space to give.
     */

    async giveBankSpace(userId, amount) {
        const someone = this.users.cache.get(userId);
        if (!someone || someone.bot) return false;
        let user = await economy.findOne({ userId: userId });
        if (!user) {
            const newUser = new economy({
                userId: userId,
                items: []
            });
            newUser.save();
            return newUser;
        }
        user.bankSpace += parseInt(amount);
        await user.save();
        return user;
    }

    /**
     * 
     * @param {string} userId - A discord user ID.
     */

    async createUser(userId) {
        const someone = this.users.cache.get(userId);
        if (!someone || someone.bot) return false;
        const user = await economy.findOne({ userId: userId });
        if (!user) return false;
        const newUser = new economy({
            userId: userId,
            items: []
        });
        newUser.save();
        return newUser;
    }

    /**
     * 
     * @param {string} userId - A discord user ID.
     * @param {number} amount - Amount of coins to give.
     */

    async giveCoins(userId, amount) {
        const someone = this.users.cache.get(userId);
        if (!someone || someone.bot) return false;
        let user = await economy.findOne({ userId: userId });
        if (!user) {
            const newUser = new economy({
                userId: userId,
                items: [],
                coinsInWallet: parseInt(amount)
            });
            newUser.save();
            return newUser;
        }
        user.coinsInWallet += parseInt(amount);
        await user.save();
        return user;
    }

}

module.exports = MongoClient;
