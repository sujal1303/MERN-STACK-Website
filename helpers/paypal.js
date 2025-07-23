const paypal = require("paypal-rest-sdk");

paypal.configure({
  mode: "sandbox",
  client_id: "AU6D0W5F2AddIuf09Yu4la6uyFHCtgCIMH4uZ6_xUDSbWsi96S79SuPl1038Q0DR2xuIGcH_c4Azh1lV",
  client_secret: "EJ-PPuz3g-1m3igQ0_HMnbFLBBOiczxYGAFhRKn19Q2prQex3XBBAFZGBhDEU-havFMZ_OYgW0UvRDef",
});

module.exports = paypal;
