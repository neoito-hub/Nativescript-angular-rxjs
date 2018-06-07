"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var pushPlugin = require("nativescript-push-notifications");
var AppComponent = /** @class */ (function () {
    function AppComponent() {
        console.log('AAAAAAA fhgdkngkdjngkdngng kjdngkjen');
        var pushSettings = {
            senderID: '817056020730',
            notificationCallbackAndroid: function (stringifiedData, fcmNotification) {
                var notificationBody = fcmNotification && fcmNotification.getBody();
                alert('Message received!\n' + notificationBody + '\n' + stringifiedData);
            }
        };
        pushPlugin.register(pushSettings, function (token) {
            console.log(' Device registered. Access token: ' + token);
            alert(' Device registered. Access token: ' + token);
        }, function () { });
    }
    AppComponent = __decorate([
        core_1.Component({
            selector: 'ns-app',
            templateUrl: 'app.component.html'
        }),
        __metadata("design:paramtypes", [])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
// {"to":"fapSuf2iTf8:APA91bEhVXjHOigFHlMd9TgID05lf1NRic-DTKERccatlm5TPQbWrAQufdk4seqo4H5qXr-o7GtphxdikqmeZqEzNWNwiUX35jpjtaDpTuBKTYngr2ZTDZANDhFjmCyNZ1fD_ycr8hgf",
// "data":{"title":"Test Title","body":"Test Description"},
// "notification": {
// "title": "Test Title",
// "text": "Test Description"
// },
// "priority":"high"}
// Authorization  key=AAAAvjxVePo:APA91bElm-OTVW0i_1iZ7qQY_-5DYYqal5FEn81Ipg785-OfapLKCiq7c8SZb68VmuvTGABOKNblBVjARt4RTAkLNDeS94hcKdmaru6r00tBmJeZyycF4QgwuNecMb5XozyPpDH4AHtT
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBMEM7QUFDMUMsNERBQThEO0FBTTlEO0lBQ0U7UUFDRSxPQUFPLENBQUMsR0FBRyxDQUFDLHNDQUFzQyxDQUFDLENBQUM7UUFFcEQsSUFBSSxZQUFZLEdBQUc7WUFDakIsUUFBUSxFQUFFLGNBQWM7WUFDeEIsMkJBQTJCLEVBQUUsVUFDM0IsZUFBdUIsRUFDdkIsZUFBb0I7Z0JBRXBCLElBQU0sZ0JBQWdCLEdBQUcsZUFBZSxJQUFJLGVBQWUsQ0FBQyxPQUFPLEVBQUUsQ0FBQztnQkFDdEUsS0FBSyxDQUNILHFCQUFxQixHQUFHLGdCQUFnQixHQUFHLElBQUksR0FBRyxlQUFlLENBQ2xFLENBQUM7WUFDSixDQUFDO1NBQ0YsQ0FBQztRQUNGLFVBQVUsQ0FBQyxRQUFRLENBQ2pCLFlBQVksRUFDWixVQUFDLEtBQWE7WUFDWixPQUFPLENBQUMsR0FBRyxDQUFDLG9DQUFvQyxHQUFHLEtBQUssQ0FBQyxDQUFDO1lBQzFELEtBQUssQ0FBQyxvQ0FBb0MsR0FBRyxLQUFLLENBQUMsQ0FBQztRQUN0RCxDQUFDLEVBQ0QsY0FBWSxDQUFDLENBQ2QsQ0FBQztJQUNKLENBQUM7SUF4QlUsWUFBWTtRQUp4QixnQkFBUyxDQUFDO1lBQ1QsUUFBUSxFQUFFLFFBQVE7WUFDbEIsV0FBVyxFQUFFLG9CQUFvQjtTQUNsQyxDQUFDOztPQUNXLFlBQVksQ0F5QnhCO0lBQUQsbUJBQUM7Q0FBQSxBQXpCRCxJQXlCQztBQXpCWSxvQ0FBWTtBQTJCekIsb0tBQW9LO0FBQ3BLLDJEQUEyRDtBQUMzRCxvQkFBb0I7QUFDcEIseUJBQXlCO0FBQ3pCLDZCQUE2QjtBQUM3QixLQUFLO0FBQ0wscUJBQXFCO0FBRXJCLDhLQUE4SyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0ICogYXMgcHVzaFBsdWdpbiBmcm9tICduYXRpdmVzY3JpcHQtcHVzaC1ub3RpZmljYXRpb25zJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbnMtYXBwJyxcbiAgdGVtcGxhdGVVcmw6ICdhcHAuY29tcG9uZW50Lmh0bWwnXG59KVxuZXhwb3J0IGNsYXNzIEFwcENvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIGNvbnNvbGUubG9nKCdBQUFBQUFBIGZoZ2RrbmdrZGpuZ2tkbmduZyBramRuZ2tqZW4nKTtcblxuICAgIGxldCBwdXNoU2V0dGluZ3MgPSB7XG4gICAgICBzZW5kZXJJRDogJzgxNzA1NjAyMDczMCcsIC8vIFJlcXVpcmVkOiBzZXR0aW5nIHdpdGggdGhlIHNlbmRlci9wcm9qZWN0IG51bWJlclxuICAgICAgbm90aWZpY2F0aW9uQ2FsbGJhY2tBbmRyb2lkOiAoXG4gICAgICAgIHN0cmluZ2lmaWVkRGF0YTogU3RyaW5nLFxuICAgICAgICBmY21Ob3RpZmljYXRpb246IGFueVxuICAgICAgKSA9PiB7XG4gICAgICAgIGNvbnN0IG5vdGlmaWNhdGlvbkJvZHkgPSBmY21Ob3RpZmljYXRpb24gJiYgZmNtTm90aWZpY2F0aW9uLmdldEJvZHkoKTtcbiAgICAgICAgYWxlcnQoXG4gICAgICAgICAgJ01lc3NhZ2UgcmVjZWl2ZWQhXFxuJyArIG5vdGlmaWNhdGlvbkJvZHkgKyAnXFxuJyArIHN0cmluZ2lmaWVkRGF0YVxuICAgICAgICApO1xuICAgICAgfVxuICAgIH07XG4gICAgcHVzaFBsdWdpbi5yZWdpc3RlcihcbiAgICAgIHB1c2hTZXR0aW5ncyxcbiAgICAgICh0b2tlbjogU3RyaW5nKSA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKCcgRGV2aWNlIHJlZ2lzdGVyZWQuIEFjY2VzcyB0b2tlbjogJyArIHRva2VuKTtcbiAgICAgICAgYWxlcnQoJyBEZXZpY2UgcmVnaXN0ZXJlZC4gQWNjZXNzIHRva2VuOiAnICsgdG9rZW4pO1xuICAgICAgfSxcbiAgICAgIGZ1bmN0aW9uKCkge31cbiAgICApO1xuICB9XG59XG5cbi8vIHtcInRvXCI6XCJmYXBTdWYyaVRmODpBUEE5MWJFaFZYakhPaWdGSGxNZDlUZ0lEMDVsZjFOUmljLURUS0VSY2NhdGxtNVRQUWJXckFRdWZkazRzZXFvNEg1cVhyLW83R3RwaHhkaWtxbWVacUV6TldOd2lVWDM1anBqdGFEcFR1QktUWW5ncjJaVERaQU5EaEZqbUN5TloxZkRfeWNyOGhnZlwiLFxuLy8gXCJkYXRhXCI6e1widGl0bGVcIjpcIlRlc3QgVGl0bGVcIixcImJvZHlcIjpcIlRlc3QgRGVzY3JpcHRpb25cIn0sXG4vLyBcIm5vdGlmaWNhdGlvblwiOiB7XG4vLyBcInRpdGxlXCI6IFwiVGVzdCBUaXRsZVwiLFxuLy8gXCJ0ZXh0XCI6IFwiVGVzdCBEZXNjcmlwdGlvblwiXG4vLyB9LFxuLy8gXCJwcmlvcml0eVwiOlwiaGlnaFwifVxuXG4vLyBBdXRob3JpemF0aW9uICBrZXk9QUFBQXZqeFZlUG86QVBBOTFiRWxtLU9UVlcwaV8xaVo3cVFZXy01RFlZcWFsNUZFbjgxSXBnNzg1LU9mYXBMS0NpcTdjOFNaYjY4Vm11dlRHQUJPS05ibEJWakFSdDRSVEFrTE5EZVM5NGhjS2RtYXJ1NnIwMHRCbUplWnl5Y0Y0UWd3dU5lY01iNVhvenlQcERINEFIdFRcbiJdfQ==