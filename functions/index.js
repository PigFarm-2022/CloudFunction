const functions = require("firebase-functions");
const admin = require("firebase-admin");
admin.initializeApp(functions.config().firebase);

module.exports = {
  //C1 FEED NOTIF
  cage1: functions.database.ref("cage_1/feed_tank_1").onUpdate((evt) => {
    const payload = {
      notification: {
        title: "CAGE 1 ALERT",
        body: "Tank #1 is below 10%. Please refill immediately.",
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

  //bath_1_manual_indicator
  cage1_bath_manual_indicator: functions.database
    .ref("cage_1/bath_1_manual_indicator")
    .onUpdate((evt) => {
      const payload1 = {
        notification: {
          title: "CAGE 1 ALERT",
          body: "BATH SUCCESS.",
          badge: "1",
          sound: "default",
        },
      };
      const payload2 = {
        notification: {
          title: "CAGE 1 ALERT",
          body: "BATH FAILED.",
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
            return admin.messaging().sendToDevice(token, payload1);
          } else if (allToken.val() && evt.after.val() == "failed") {
            console.log("token available");
            const token = Object.keys(allToken.val());
            return admin.messaging().sendToDevice(token, payload2);
          }
        });
    }),
  //bath_1_scheduled_indicator
  cage1_bath_scheduled_indicator: functions.database
    .ref("cage_1/bath_1_scheduled_indicator")
    .onUpdate((evt) => {
      const payload1 = {
        notification: {
          title: "CAGE 1 ALERT",
          body: "BATH SCHEDULE SUCCESS.",
          badge: "1",
          sound: "default",
        },
      };
      const payload2 = {
        notification: {
          title: "CAGE 1 ALERT",
          body: "BATH SCHEDULE FAILED.",
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
            return admin.messaging().sendToDevice(token, payload1);
          } else if (allToken.val() && evt.after.val() == "failed") {
            console.log("token available");
            const token = Object.keys(allToken.val());
            return admin.messaging().sendToDevice(token, payload2);
          }
        });
    }),

  //feed_1_manual_indicator
  cage1_feed_manual_indicator: functions.database
    .ref("cage_1/feed_1_manual_indicator")
    .onUpdate((evt) => {
      const payload1 = {
        notification: {
          title: "CAGE 1 ALERT",
          body: "FEED SUCCESS.",
          badge: "1",
          sound: "default",
        },
      };
      const payload2 = {
        notification: {
          title: "CAGE 1 ALERT",
          body: "FEED FAILED.",
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
            return admin.messaging().sendToDevice(token, payload1);
          } else if (allToken.val() && evt.after.val() == "failed") {
            console.log("token available");
            const token = Object.keys(allToken.val());
            return admin.messaging().sendToDevice(token, payload2);
          }
        });
    }),

  //feed_1_scheduled_indicator
  cage1_feed_scheduled_indicator: functions.database
    .ref("cage_1/feed_1_scheduled_indicator")
    .onUpdate((evt) => {
      const payload1 = {
        notification: {
          title: "CAGE 1 ALERT",
          body: "FEED SCHEDULE SUCCESS.",
          badge: "1",
          sound: "default",
        },
      };
      const payload2 = {
        notification: {
          title: "CAGE 1 ALERT",
          body: "FEED SCHEDULE FAILED.",
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
            return admin.messaging().sendToDevice(token, payload1);
          } else if (allToken.val() && evt.after.val() == "failed") {
            console.log("token available");
            const token = Object.keys(allToken.val());
            return admin.messaging().sendToDevice(token, payload2);
          }
        });
    }),

  //wash_manual_indicator
  cage1_wash_manual_indicator: functions.database
    .ref("cage_1/wash_1_manual_indicator")
    .onUpdate((evt) => {
      const payload1 = {
        notification: {
          title: "CAGE 1 ALERT",
          body: "WASH SUCCESS.",
          badge: "1",
          sound: "default",
        },
      };
      const payload2 = {
        notification: {
          title: "CAGE 1 ALERT",
          body: "WASH FAILED.",
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
            return admin.messaging().sendToDevice(token, payload1);
          } else if (allToken.val() && evt.after.val() == "failed") {
            console.log("token available");
            const token = Object.keys(allToken.val());
            return admin.messaging().sendToDevice(token, payload2);
          }
        });
    }),
  //wash_1_scheduled_indicator
  cage1_wash_scheduled_indicator: functions.database
    .ref("cage_1/wash_1_scheduled_indicator")
    .onUpdate((evt) => {
      const payload1 = {
        notification: {
          title: "CAGE 1 ALERT",
          body: "WASH SCHEDULE SUCCESS.",
          badge: "1",
          sound: "default",
        },
      };
      const payload2 = {
        notification: {
          title: "CAGE 1 ALERT",
          body: "WASH SCHEDULE FAILED.",
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
            return admin.messaging().sendToDevice(token, payload1);
          } else if (allToken.val() && evt.after.val() == "failed") {
            console.log("token available");
            const token = Object.keys(allToken.val());
            return admin.messaging().sendToDevice(token, payload2);
          }
        });
    }),
  //C2 FEED NOTIF
  cage2: functions.database.ref("cage_2/feed_tank_2").onUpdate((evt) => {
    const payload = {
      notification: {
        title: "CAGE 2 ALERT",
        body: "Tank #2 is below 10%. Please refill immediately.",
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

  //CAGE2222222

  //bath_2_manual_indicator
  cage2_bath_manual_indicator: functions.database
    .ref("cage_2/bath_2_manual_indicator")
    .onUpdate((evt) => {
      const payload1 = {
        notification: {
          title: "CAGE 2 ALERT",
          body: "BATH SUCCESS.",
          badge: "1",
          sound: "default",
        },
      };
      const payload2 = {
        notification: {
          title: "CAGE 2 ALERT",
          body: "BATH FAILED.",
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
            return admin.messaging().sendToDevice(token, payload1);
          } else if (allToken.val() && evt.after.val() == "failed") {
            console.log("token available");
            const token = Object.keys(allToken.val());
            return admin.messaging().sendToDevice(token, payload2);
          }
        });
    }),
  //bath_1_scheduled_indicator
  cage2_bath_scheduled_indicator: functions.database
    .ref("cage_2/bath_2_scheduled_indicator")
    .onUpdate((evt) => {
      const payload1 = {
        notification: {
          title: "CAGE 2 ALERT",
          body: "BATH SCHEDULE SUCCESS.",
          badge: "1",
          sound: "default",
        },
      };
      const payload2 = {
        notification: {
          title: "CAGE 2 ALERT",
          body: "BATH FAILED.",
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
            return admin.messaging().sendToDevice(token, payload1);
          } else if (allToken.val() && evt.after.val() == "failed") {
            console.log("token available");
            const token = Object.keys(allToken.val());
            return admin.messaging().sendToDevice(token, payload2);
          }
        });
    }),

  //feed_2_manual_indicator
  cage2_feed_manual_indicator: functions.database
    .ref("cage_2/feed_2_manual_indicator")
    .onUpdate((evt) => {
      const payload1 = {
        notification: {
          title: "CAGE 2 ALERT",
          body: "FEED SUCCESS.",
          badge: "1",
          sound: "default",
        },
      };
      const payload2 = {
        notification: {
          title: "CAGE 2 ALERT",
          body: "FEED FAILED.",
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
            return admin.messaging().sendToDevice(token, payload1);
          } else if (allToken.val() && evt.after.val() == "failed") {
            console.log("token available");
            const token = Object.keys(allToken.val());
            return admin.messaging().sendToDevice(token, payload2);
          }
        });
    }),

  //feed_2_scheduled_indicator
  cage2_feed_scheduled_indicator: functions.database
    .ref("cage_2/feed_2_scheduled_indicator")
    .onUpdate((evt) => {
      const payload1 = {
        notification: {
          title: "CAGE 2 ALERT",
          body: "FEED SCHEDULE SUCCESS.",
          badge: "1",
          sound: "default",
        },
      };
      const payload2 = {
        notification: {
          title: "CAGE 2 ALERT",
          body: "FEED SCHEDULE FAILED.",
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
            return admin.messaging().sendToDevice(token, payload1);
          } else if (allToken.val() && evt.after.val() == "failed") {
            console.log("token available");
            const token = Object.keys(allToken.val());
            return admin.messaging().sendToDevice(token, payload2);
          }
        });
    }),

  //wash_manual_indicator
  cage2_wash_manual_indicator: functions.database
    .ref("cage_2/wash_2_manual_indicator")
    .onUpdate((evt) => {
      const payload1 = {
        notification: {
          title: "CAGE 2 ALERT",
          body: "WASH SUCCESS.",
          badge: "1",
          sound: "default",
        },
      };
      const payload2 = {
        notification: {
          title: "CAGE 2 ALERT",
          body: "WASH FAILED.",
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
            return admin.messaging().sendToDevice(token, payload1);
          } else if (allToken.val() && evt.after.val() == "failed") {
            console.log("token available");
            const token = Object.keys(allToken.val());
            return admin.messaging().sendToDevice(token, payload2);
          }
        });
    }),
  //wash_2_scheduled_indicator
  cage1_wash_scheduled_indicator: functions.database
    .ref("cage_2/wash_2_scheduled_indicator")
    .onUpdate((evt) => {
      const payload1 = {
        notification: {
          title: "CAGE 2 ALERT",
          body: "WASH SCHEDULE SUCCESS.",
          badge: "1",
          sound: "default",
        },
      };
      const payload2 = {
        notification: {
          title: "CAGE 2 ALERT",
          body: "WASH SCHEDULE FAILED.",
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
            return admin.messaging().sendToDevice(token, payload1);
          } else if (allToken.val() && evt.after.val() == "failed") {
            console.log("token available");
            const token = Object.keys(allToken.val());
            return admin.messaging().sendToDevice(token, payload2);
          }
        });
    }),
};
