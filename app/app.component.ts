import { Component } from '@angular/core';
import * as pushPlugin from 'nativescript-push-notifications';

@Component({
  selector: 'ns-app',
  templateUrl: 'app.component.html'
})
export class AppComponent {
  constructor() {
    console.log('AAAAAAA fhgdkngkdjngkdngng kjdngkjen');

    let pushSettings = {
      senderID: '817056020730', // Required: setting with the sender/project number
      notificationCallbackAndroid: (
        stringifiedData: String,
        fcmNotification: any
      ) => {
        const notificationBody = fcmNotification && fcmNotification.getBody();
        alert(
          'Message received!\n' + notificationBody + '\n' + stringifiedData
        );
      }
    };
    pushPlugin.register(
      pushSettings,
      (token: String) => {
        console.log(' Device registered. Access token: ' + token);
        alert(' Device registered. Access token: ' + token);
      },
      function() {}
    );
  }
}

// {"to":"fapSuf2iTf8:APA91bEhVXjHOigFHlMd9TgID05lf1NRic-DTKERccatlm5TPQbWrAQufdk4seqo4H5qXr-o7GtphxdikqmeZqEzNWNwiUX35jpjtaDpTuBKTYngr2ZTDZANDhFjmCyNZ1fD_ycr8hgf",
// "data":{"title":"Test Title","body":"Test Description"},
// "notification": {
// "title": "Test Title",
// "text": "Test Description"
// },
// "priority":"high"}

// Authorization  key=AAAAvjxVePo:APA91bElm-OTVW0i_1iZ7qQY_-5DYYqal5FEn81Ipg785-OfapLKCiq7c8SZb68VmuvTGABOKNblBVjARt4RTAkLNDeS94hcKdmaru6r00tBmJeZyycF4QgwuNecMb5XozyPpDH4AHtT
