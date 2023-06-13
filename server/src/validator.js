const UUID_Rgx =
  /^[0-9a-f]{8}-[0-9a-f]{4}-[0-5][0-9a-f]{3}-[089ab][0-9a-f]{3}-[0-9a-f]{12}$/i;

module.exports.isUUID = (uuid) => UUID_Rgx.test(uuid);
