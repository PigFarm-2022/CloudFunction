const functions = require("firebase-functions");
const admin = require("firebase-admin");
admin.initializeApp(functions.config().firebase);

module.exports = {
  //CAGE 1 FEED TANK
  cage1_feedTank: functions.database
    .ref("cage_1/feed_tank_1")
    .onUpdate((evt) => {
      const payload = {
        notification: {
          title: "CAGE 1 ALERT",
          body: "Tank #1 is below 15%. Please refill immediately.",
          badge: "1",
          sound: "default",
        },
      };

      return admin
        .database()
        .ref("fcm-token")
        .once("value")
        .then((allToken) => {
          if (allToken.val() && evt.after.val() <= 15) {
            console.log("token available");
            const token = Object.keys(allToken.val());
            return admin.messaging().sendToDevice(token, payload);
          } else {
            console.log("No token available");
          }
        });
    }),
  //CAGE 2 FEED TANK
  cage2_feedTank: functions.database
    .ref("cage_2/feed_tank_2")
    .onUpdate((evt) => {
      const payload = {
        notification: {
          title: "CAGE 2 ALERT",
          body: "Tank #2 is below 15%. Please refill immediately.",
          badge: "1",
          sound: "default",
        },
      };

      return admin
        .database()
        .ref("fcm-token")
        .once("value")
        .then((allToken) => {
          if (allToken.val() && evt.after.val() <= 15) {
            console.log("token available");
            const token = Object.keys(allToken.val());
            return admin.messaging().sendToDevice(token, payload);
          } else {
            console.log("No token available");
          }
        });
    }),
  //WATER TANK
  waterTank: functions.database.ref("tanks/water_tank").onUpdate((evt) => {
    const payload = {
      notification: {
        title: "WATER TANK",
        body: "Water tank is at 50% below, Started refilling",
        badge: "1",
        sound: "default",
      },
    };
    const payload2 = {
      notification: {
        title: "WATER TANK",
        body: "Water tank is at 90% refilled",
        badge: "1",
        sound: "default",
      },
    };

    return admin
      .database()
      .ref("fcm-token")
      .once("value")
      .then((allToken) => {
        if (allToken.val() && evt.after.val() <= 50) {
          console.log("token available");
          const token = Object.keys(allToken.val());
          return admin.messaging().sendToDevice(token, payload);
        } else if (allToken.val() && evt.after.val() >= 90) {
          console.log("token available");
          const token = Object.keys(allToken.val());
          return admin.messaging().sendToDevice(token, payload2);
        } else {
          console.log("No token available");
        }
      });
  }),

  //cage_1/bath_1_manual_indicator
  cage_1_bath_1_manual_indicator: functions.database
    .ref("cage_1/bath_1_manual_indicator")
    .onUpdate((evt) => {
      const payload = {
        notification: {
          title: "CAGE 1 ALERT",
          body: "Manual Bath Success!",
          badge: "1",
          sound: "default",
        },
      };
      const payload2 = {
        notification: {
          title: "CAGE 1 ALERT",
          body: "Manual Bath Failed!",
          badge: "1",
          sound: "default",
        },
      };

      return admin
        .database()
        .ref("fcm-token")
        .once("value")
        .then((allToken) => {
          if (allToken.val() && evt.after.val() == "success") {
            console.log("token available");
            const token = Object.keys(allToken.val());
            return admin.messaging().sendToDevice(token, payload);
          } else if (allToken.val() && evt.after.val() == "failed") {
            console.log("token available");
            const token = Object.keys(allToken.val());
            return admin.messaging().sendToDevice(token, payload2);
          } else {
            console.log("No token available");
          }
        });
    }),

  //cage_1/bath_1_scheduled_indicator
  cage_1_bath_1_scheduled_indicator: functions.database
    .ref("cage_1/bath_1_scheduled_indicator")
    .onUpdate((evt) => {
      const payload = {
        notification: {
          title: "CAGE 1 ALERT",
          body: "Scheduled Bath Success!",
          badge: "1",
          sound: "default",
        },
      };
      const payload2 = {
        notification: {
          title: "CAGE 1 ALERT",
          body: "Scheduled Bath Failed!",
          badge: "1",
          sound: "default",
        },
      };

      return admin
        .database()
        .ref("fcm-token")
        .once("value")
        .then((allToken) => {
          if (allToken.val() && evt.after.val() == "success") {
            console.log("token available");
            const token = Object.keys(allToken.val());
            return admin.messaging().sendToDevice(token, payload);
          } else if (allToken.val() && evt.after.val() == "failed") {
            console.log("token available");
            const token = Object.keys(allToken.val());
            return admin.messaging().sendToDevice(token, payload2);
          } else {
            console.log("No token available");
          }
        });
    }),
  //cage_1/feed_1_manual_indicator
  cage_1_feed_1_manual_indicator: functions.database
    .ref("cage_1/feed_1_manual_indicator")
    .onUpdate((evt) => {
      const payload = {
        notification: {
          title: "CAGE 1 ALERT",
          body: "Manual Feed Success!",
          badge: "1",
          sound: "default",
        },
      };
      const payload2 = {
        notification: {
          title: "CAGE 1 ALERT",
          body: "Manual Feed Failed!",
          badge: "1",
          sound: "default",
        },
      };

      return admin
        .database()
        .ref("fcm-token")
        .once("value")
        .then((allToken) => {
          if (allToken.val() && evt.after.val() == "success") {
            console.log("token available");
            const token = Object.keys(allToken.val());
            return admin.messaging().sendToDevice(token, payload);
          } else if (allToken.val() && evt.after.val() == "failed") {
            console.log("token available");
            const token = Object.keys(allToken.val());
            return admin.messaging().sendToDevice(token, payload2);
          } else {
            console.log("No token available");
          }
        });
    }),
  //cage_1_feed_1_scheduled_indicator
  cage_1_feed_1_scheduled_indicator: functions.database
    .ref("cage_1/feed_1_scheduled_indicator")
    .onUpdate((evt) => {
      const payload = {
        notification: {
          title: "CAGE 1 ALERT",
          body: "Scheduled Feed Success!",
          badge: "1",
          sound: "default",
        },
      };
      const payload2 = {
        notification: {
          title: "CAGE 1 ALERT",
          body: "Scheduled Feed Failed!",
          badge: "1",
          sound: "default",
        },
      };

      return admin
        .database()
        .ref("fcm-token")
        .once("value")
        .then((allToken) => {
          if (allToken.val() && evt.after.val() == "success") {
            console.log("token available");
            const token = Object.keys(allToken.val());
            return admin.messaging().sendToDevice(token, payload);
          } else if (allToken.val() && evt.after.val() == "failed") {
            console.log("token available");
            const token = Object.keys(allToken.val());
            return admin.messaging().sendToDevice(token, payload2);
          } else {
            console.log("No token available");
          }
        });
    }),
  //cage_1/wash_1_manual_indicator
  cage_1_wash_1_manual_indicator: functions.database
    .ref("cage_1/wash_1_manual_indicator")
    .onUpdate((evt) => {
      const payload = {
        notification: {
          title: "CAGE 1 ALERT",
          body: "Manual Wash Success!",
          badge: "1",
          sound: "default",
        },
      };
      const payload2 = {
        notification: {
          title: "CAGE 1 ALERT",
          body: "Manual Wash Failed!",
          badge: "1",
          sound: "default",
        },
      };

      return admin
        .database()
        .ref("fcm-token")
        .once("value")
        .then((allToken) => {
          if (allToken.val() && evt.after.val() == "success") {
            console.log("token available");
            const token = Object.keys(allToken.val());
            return admin.messaging().sendToDevice(token, payload);
          } else if (allToken.val() && evt.after.val() == "failed") {
            console.log("token available");
            const token = Object.keys(allToken.val());
            return admin.messaging().sendToDevice(token, payload2);
          } else {
            console.log("No token available");
          }
        });
    }),
  //cage_1/wash_1_scheduled_indicator
  cage_1_wash_1_scheduled_indicator: functions.database
    .ref("cage_1/wash_1_scheduled_indicator")
    .onUpdate((evt) => {
      const payload = {
        notification: {
          title: "CAGE 1 ALERT",
          body: "Scheduled Wash Success!",
          badge: "1",
          sound: "default",
        },
      };
      const payload2 = {
        notification: {
          title: "CAGE 1 ALERT",
          body: "Scheduled Wash Failed!",
          badge: "1",
          sound: "default",
        },
      };

      return admin
        .database()
        .ref("fcm-token")
        .once("value")
        .then((allToken) => {
          if (allToken.val() && evt.after.val() == "success") {
            console.log("token available");
            const token = Object.keys(allToken.val());
            return admin.messaging().sendToDevice(token, payload);
          } else if (allToken.val() && evt.after.val() == "failed") {
            console.log("token available");
            const token = Object.keys(allToken.val());
            return admin.messaging().sendToDevice(token, payload2);
          } else {
            console.log("No token available");
          }
        });
    }),
  //cage_1/wash_1_sensor_indicator
  cage_1_wash_1_sensor_indicator: functions.database
    .ref("cage_1/wash_1_sensor_indicator")
    .onUpdate((evt) => {
      const payload = {
        notification: {
          title: "CAGE 1 ALERT",
          body: "Excreta Detected, Now Washing",
          badge: "1",
          sound: "default",
        },
      };

      return admin
        .database()
        .ref("fcm-token")
        .once("value")
        .then((allToken) => {
          if (allToken.val() && evt.after.val() == "success") {
            console.log("token available");
            const token = Object.keys(allToken.val());
            return admin.messaging().sendToDevice(token, payload);
          } else {
            console.log("No token available");
          }
        });
    }),
  //CAGE2

  //cage_2/bath_2_manual_indicator
  cage_2_bath_2_manual_indicator: functions.database
    .ref("cage_2/bath_2_manual_indicator")
    .onUpdate((evt) => {
      const payload = {
        notification: {
          title: "CAGE 2 ALERT",
          body: "Manual Bath Success!",
          badge: "1",
          sound: "default",
        },
      };
      const payload2 = {
        notification: {
          title: "CAGE 2 ALERT",
          body: "Manual Bath Failed!",
          badge: "1",
          sound: "default",
        },
      };

      return admin
        .database()
        .ref("fcm-token")
        .once("value")
        .then((allToken) => {
          if (allToken.val() && evt.after.val() == "success") {
            console.log("token available");
            const token = Object.keys(allToken.val());
            return admin.messaging().sendToDevice(token, payload);
          } else if (allToken.val() && evt.after.val() == "failed") {
            console.log("token available");
            const token = Object.keys(allToken.val());
            return admin.messaging().sendToDevice(token, payload2);
          } else {
            console.log("No token available");
          }
        });
    }),
  //cage_2/bath_2_scheduled_indicator
  cage_2_bath_2_scheduled_indicator: functions.database
    .ref("cage_2/bath_2_scheduled_indicator")
    .onUpdate((evt) => {
      const payload = {
        notification: {
          title: "CAGE 2 ALERT",
          body: "scheduled Bath Success!",
          badge: "1",
          sound: "default",
        },
      };
      const payload2 = {
        notification: {
          title: "CAGE 2 ALERT",
          body: "scheduled Bath Failed!",
          badge: "1",
          sound: "default",
        },
      };

      return admin
        .database()
        .ref("fcm-token")
        .once("value")
        .then((allToken) => {
          if (allToken.val() && evt.after.val() == "success") {
            console.log("token available");
            const token = Object.keys(allToken.val());
            return admin.messaging().sendToDevice(token, payload);
          } else if (allToken.val() && evt.after.val() == "failed") {
            console.log("token available");
            const token = Object.keys(allToken.val());
            return admin.messaging().sendToDevice(token, payload2);
          } else {
            console.log("No token available");
          }
        });
    }),

  //cage_2_feed_2_manual_indicator
  cage_2_feed_2_manual_indicator: functions.database
    .ref("cage_2/feed_2_manual_indicator")
    .onUpdate((evt) => {
      const payload = {
        notification: {
          title: "CAGE 2 ALERT",
          body: "Manual Feed Success!",
          badge: "1",
          sound: "default",
        },
      };
      const payload2 = {
        notification: {
          title: "CAGE 2 ALERT",
          body: "Manual Feed Failed!",
          badge: "1",
          sound: "default",
        },
      };

      return admin
        .database()
        .ref("fcm-token")
        .once("value")
        .then((allToken) => {
          if (allToken.val() && evt.after.val() == "success") {
            console.log("token available");
            const token = Object.keys(allToken.val());
            return admin.messaging().sendToDevice(token, payload);
          } else if (allToken.val() && evt.after.val() == "failed") {
            console.log("token available");
            const token = Object.keys(allToken.val());
            return admin.messaging().sendToDevice(token, payload2);
          } else {
            console.log("No token available");
          }
        });
    }),
  //cage_2/feed_2_scheduled_indicator
  cage_2_feed_2_scheduled_indicator: functions.database
    .ref("cage_2/feed_2_scheduled_indicator")
    .onUpdate((evt) => {
      const payload = {
        notification: {
          title: "CAGE 2 ALERT",
          body: "scheduled Feed Success!",
          badge: "1",
          sound: "default",
        },
      };
      const payload2 = {
        notification: {
          title: "CAGE 2 ALERT",
          body: "scheduled Feed Failed!",
          badge: "1",
          sound: "default",
        },
      };

      return admin
        .database()
        .ref("fcm-token")
        .once("value")
        .then((allToken) => {
          if (allToken.val() && evt.after.val() == "success") {
            console.log("token available");
            const token = Object.keys(allToken.val());
            return admin.messaging().sendToDevice(token, payload);
          } else if (allToken.val() && evt.after.val() == "failed") {
            console.log("token available");
            const token = Object.keys(allToken.val());
            return admin.messaging().sendToDevice(token, payload2);
          } else {
            console.log("No token available");
          }
        });
    }),
  //cage_2/wash_2_manual_indicator
  cage_2_wash_2_manual_indicator: functions.database
    .ref("cage_2/wash_2_manual_indicator")
    .onUpdate((evt) => {
      const payload = {
        notification: {
          title: "CAGE 2 ALERT",
          body: "Manual Wash Success!",
          badge: "1",
          sound: "default",
        },
      };
      const payload2 = {
        notification: {
          title: "CAGE 2 ALERT",
          body: "Manual Wash Failed!",
          badge: "1",
          sound: "default",
        },
      };

      return admin
        .database()
        .ref("fcm-token")
        .once("value")
        .then((allToken) => {
          if (allToken.val() && evt.after.val() == "success") {
            console.log("token available");
            const token = Object.keys(allToken.val());
            return admin.messaging().sendToDevice(token, payload);
          } else if (allToken.val() && evt.after.val() == "failed") {
            console.log("token available");
            const token = Object.keys(allToken.val());
            return admin.messaging().sendToDevice(token, payload2);
          } else {
            console.log("No token available");
          }
        });
    }),
  //cage_2/wash_2_scheduled_indicator
  cage_2_wash_2_scheduled_indicator: functions.database
    .ref("cage_2/wash_2_scheduled_indicator")
    .onUpdate((evt) => {
      const payload = {
        notification: {
          title: "CAGE 2 ALERT",
          body: "scheduled Wash Success!",
          badge: "1",
          sound: "default",
        },
      };
      const payload2 = {
        notification: {
          title: "CAGE 2 ALERT",
          body: "scheduled Wash Failed!",
          badge: "1",
          sound: "default",
        },
      };

      return admin
        .database()
        .ref("fcm-token")
        .once("value")
        .then((allToken) => {
          if (allToken.val() && evt.after.val() == "success") {
            console.log("token available");
            const token = Object.keys(allToken.val());
            return admin.messaging().sendToDevice(token, payload);
          } else if (allToken.val() && evt.after.val() == "failed") {
            console.log("token available");
            const token = Object.keys(allToken.val());
            return admin.messaging().sendToDevice(token, payload2);
          } else {
            console.log("No token available");
          }
        });
    }),
  //cage_2/wash_2_sensor_indicator
  cage_2_wash_2_sensor_indicator: functions.database
    .ref("cage_2/wash_2_sensor_indicator")
    .onUpdate((evt) => {
      const payload = {
        notification: {
          title: "CAGE 2 ALERT",
          body: "Excreta Detected, Now Washing",
          badge: "1",
          sound: "default",
        },
      };

      return admin
        .database()
        .ref("fcm-token")
        .once("value")
        .then((allToken) => {
          if (allToken.val() && evt.after.val() == "success") {
            console.log("token available");
            const token = Object.keys(allToken.val());
            return admin.messaging().sendToDevice(token, payload);
          } else {
            console.log("No token available");
          }
        });
    }),
};
