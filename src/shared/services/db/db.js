class DB {
  constructor(dbName, storeName) {
    this.dbName = dbName;
    this.storeName = storeName;
    this.db = null;
  }

  async init() {
    return new Promise((resolve, reject) => {
      const request = window.indexedDB.open(this.dbName);

      request.onerror = () => {
        reject(new Error("Failed to open database"));
      };

      request.onsuccess = () => {
        this.db = request.result;
        resolve();
      };

      request.onupgradeneeded = (event) => {
        const db = event.target.result;
        db.createObjectStore(this.storeName, {
          keyPath: "id",
          autoIncrement: true,
        });
      };
    });
  }

  async add(item) {
    return new Promise((resolve, reject) => {
      const transaction = this.db.transaction([this.storeName], "readwrite");
      const objectStore = transaction.objectStore(this.storeName);

      const request = objectStore.add(item);

      request.onerror = () => {
        reject(new Error("Failed to add item to store"));
      };

      request.onsuccess = () => {
        resolve(request.result);
      };
    });
  }

  async update(newData) {
    return new Promise((resolve, reject) => {
      const transaction = this.db.transaction([this.storeName], "readwrite");
      const objectStore = transaction.objectStore(this.storeName);

      const getRequest = objectStore.get(newData.id);

      getRequest.onerror = () => {
        reject(new Error("Failed to get item from store"));
      };

      getRequest.onsuccess = () => {
        const itemToUpdate = getRequest.result;
        if (!itemToUpdate) {
          reject(new Error("Item not found in store"));
          return;
        }

        const updatedItem = { ...itemToUpdate, ...newData };

        const updateRequest = objectStore.put(updatedItem);

        updateRequest.onerror = () => {
          reject(new Error("Failed to update item in store"));
        };

        updateRequest.onsuccess = () => {
          resolve(updatedItem);
        };
      };
    });
  }

  async get(id) {
    return new Promise((resolve, reject) => {
      const transaction = this.db.transaction([this.storeName], "readonly");
      const objectStore = transaction.objectStore(this.storeName);

      const request = objectStore.get(id);

      request.onerror = () => {
        reject(new Error("Failed to get item from store"));
      };

      request.onsuccess = () => {
        resolve(request.result);
      };
    });
  }

  async getAll() {
    return new Promise((resolve, reject) => {
      const transaction = this.db.transaction([this.storeName], "readonly");
      const objectStore = transaction.objectStore(this.storeName);

      const request = objectStore.getAll();

      request.onerror = () => {
        reject(new Error("Failed to get items from store"));
      };

      request.onsuccess = () => {
        resolve(request.result);
      };
    });
  }

  async delete(id) {
    return new Promise((resolve, reject) => {
      const transaction = this.db.transaction([this.storeName], "readwrite");
      const objectStore = transaction.objectStore(this.storeName);

      const request = objectStore.delete(id);

      request.onerror = () => {
        reject(new Error("Failed to delete item from store"));
      };

      request.onsuccess = () => {
        resolve(request.result);
      };
    });
  }

  async clear() {
    return new Promise((resolve, reject) => {
      const transaction = this.db.transaction([this.storeName], "readwrite");
      const objectStore = transaction.objectStore(this.storeName);

      const request = objectStore.clear();

      request.onerror = () => {
        reject(new Error("Failed to clear store"));
      };

      request.onsuccess = () => {
        resolve(request.result);
      };
    });
  }
}

export default DB;
