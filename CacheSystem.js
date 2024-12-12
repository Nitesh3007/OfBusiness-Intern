function createCache() {
    const store = {};
  
    const set = (key, value, timeToLive) => {
      store[key] = { value, expiry: ttl ? Date.now() + ttl : null };
    };
  
    const get = (key) => {
      const data = store[key];
      if (!data) return null;
      if (data.expiry && Date.now() > data.expiry) {
        delete store[key];
        return null;
      }
      return data.value;
    };
  
    return { set, get };
  }
  
  module.exports = createCache;