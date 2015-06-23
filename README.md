### WinnipegAndroid

A sample cordova project. This example is using cordova 5.0 and utilized multiple plugins.

#### Install Cordova
You will need to install npm and nodejs on your computer. This is realtively easy. Once these are done you can install cordova.

```bash
npm install -g cordova
```

#### Getting Started
To get started you will need to create a new cordova projects:
```bash
cordova create example com.winnipegandroid.example ExampleApp
```

You will then need to move into the app directory
```bash
cd ./example
```

You will likely need to edit the config file. Mine looks like this:

```xml
<?xml version='1.0' encoding='utf-8'?>
<widget id="com.winnipegandroid.example" version="0.0.1" xmlns="http://www.w3.org/ns/widgets" xmlns:cdv="http://cordova.apache.org/ns/1.0">
    <name>WinnipegAndroid</name>
    <description>
        A sample cordova application for Winnipeg Android
    </description>
    <author email="dann@bitspacedevelopment.com" href="http://bitspacedevelopment.com">
        Bit Space Development Ltd.
    </author>
    <content src="index.html" />
    <access origin="*" />
</widget>
```

#### Adding platforms

You can install various platforms including Android, iOS, FirefoxOS and Ubuntu Touch. For the purpose of this example we will add Android.

```bash
# Add android as a platform
cordova platform add android

# Build the platform
cordova build android

#run (for genymotion and physical device, emulate for other devices
cordova run android
```

### Adding plugins

We will add the camera, geolocation, and contacts plugins.

```bash
cordova plugin add https://git-wip-us.apache.org/repos/asf/cordova-plugin-camera.git
cordova plugin add https://github.com/apache/cordova-plugin-contacts.git
cordova plugin add https://git-wip-us.apache.org/repos/asf/cordova-plugin-geolocation.git
```
