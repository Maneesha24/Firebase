import firebase from 'firebase';

export const initializeFirebase = () => {
  firebase.initializeApp({
    messagingSenderId: "100761590316"
  });
}

export const askForPermissioToReceiveNotifications = async () => {
  try {

    const messaging = firebase.messaging();

    await messaging.requestPermission();
    const token = await messaging.getToken();
    console.log('user token: ', token);

    return token;
  } catch (error) {
    console.error(error);
  }
}

// curl -X POST -H "Authorization: key=AAAAF3Xb2iw:APA91bE7IbO1XOa33asLsHTLyXFCN6FJWX9jkys6RcxIDD8nf7UN-al6aSXD6131B0NE-4b3jF4S0aqmjK5pl6uD4GkDALVdpujSCxkj_A_IMBLjLji8kaw5dg5H7bQQYfqpbw3Lj0tL" -H "Content-Type: application/json" -d '{
//   "notification": {
//     "title": "Portugal vs. Denmark",
//     "body": "5 to 1",
//     "icon": "firebase-logo.png",
//     "click_action": "http://localhost:8081"
//   },
//   "to": "crJKSqGzQr8:APA91bFhxTwSeVScu3Jw-PVVaGlhHUpAB41gb1OH9SHN_lsC2ULHRFgu8i90-4QoeAZam1XNDQntYFqCbmacG0GSu2PLmcVtjZ-repZI40TLS1x2t2TSj2oWWh9e2yfV9I-9kwWbIGNx"
// }' "https://fcm.googleapis.com/fcm/send"


