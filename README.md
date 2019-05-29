# Your Stream Platform
Project of a streaming platform, made with course online. 

## Getting Started

In this case, streaming from your computer is made by using OBS client. By selecting Settings -> Broadcast Settings, in the field FMS URL, we put rtmp://localhost/live ; In stream key, chose the id of one of created stream channels.

### Installing

Install all modules in every main directory by
```
npm install
```

Change YOUR_GOOGLE_CLIENT_ID to your Google Client ID, inside GoogleAuth component

```
class GoogleAuth extends Component {
  componentDidMount() {
    window.gapi.load("client:auth2", () => {
      window.gapi.client
        .init({
          clientId:
            "YOUR_GOOGLE_CLIENT_ID",
          scope: "email"
        })
        .then(() => {
          this.auth = window.gapi.auth2.getAuthInstance();
          this.onAuthChange(this.auth.isSignedIn.get());
          this.auth.isSignedIn.listen(this.onAuthChange);
        });
    });
  }
```

## Built With

* Create-React-App
* Redux
* GoogleAuth
* React Portal
* React Router
* [JSON-server](https://www.npmjs.com/package/json-server) - Simple backend server
* [FLV.js](https://www.npmjs.com/package/flv.js) - Flash Video Player
* [Node-media-server](https://www.npmjs.com/package/node-media-server) - implementation of RTMP Media Server