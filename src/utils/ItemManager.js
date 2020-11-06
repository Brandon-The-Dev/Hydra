const items = require('./items');

class ItemManager {
    contructor() {
        this.items = items;
    }
    
    find(item = '') {
        const found = items.find(x => x.name === item);
        if (!found) return false;
        return found;
    }

    usable(item = '') {
        const found = items.find(x => x.name === item);
        if (!found) return false;
        if (!found.canUse) return false;
        return true; 
    }

    list() {
        return items;
    }
}

module.exports = ItemManager;