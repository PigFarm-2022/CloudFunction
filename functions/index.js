const functions = require("firebase-functions");
const admin = require("firebase-admin");
admin.initializeApp(functions.config().firebase);

module.exports = {
  cage1: functions.database.ref("cage_1/feed_tank_1").onUpdate((evt) => {
    const payload = {
      notification: {
        title: "TANK ALERT",
        body: "Tank #1 is below 20%. Please refill immediately.",
        badge: "1",
        sound: "default",
      },
    };

    return admin
      .database()
      .ref("fcm-token")
      .once("value")
      .then((allToken) => {
        if (allToken.val() && evt.after.val() <= 20) {
          console.log("token available");
          const token = Object.keys(allToken.val());
          return admin.messaging().sendToDevice(token, payload);
        } else {
          console.log("No token available");
        }
      });
  }),
  cage2: functions.database.ref("cage_2/feed_tank_2").onUpdate((evt) => {
    const payload = {
      notification: {
        title: "TANK ALERT",
        body: "Tank #2 is below 20%. Please refill immediately.",
        badge: "1",
        sound: "default",
      },
    };

    return admin
      .database()
      .ref("fcm-token")
      .once("value")
      .then((allToken) => {
        if (allToken.val() && evt.after.val() <= 20) {
          console.log("token available");
          const token = Object.keys(allToken.val());
          return admin.messaging().sendToDevice(token, payload);
        } else {
          console.log("No token available");
        }
      });
  }),
};
