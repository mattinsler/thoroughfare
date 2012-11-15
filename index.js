// Generated by CoffeeScript 1.4.0
(function() {
  var Cache;

  Cache = (function() {

    function Cache() {}

    Cache.prototype.configure = function(client, prefix) {
      this.client = client;
      return this.prefix = prefix;
    };

    Cache.prototype.read = function(key, expire, generate, cb) {
      return this.client.get(key, function(err, data) {
        if (err != null) {
          return cb(err);
        }
        if (data != null) {
          return cb(JSON.parse(data));
        }
        return generate(function(err, data) {
          if (err != null) {
            return cb(err);
          }
          this.client.setex("" + prefix + ":" + key, expire, JSON.stringify(data));
          return cb(null, data);
        });
      });
    };

    return Cache;

  })();

  module.exports = Cache;

}).call(this);
