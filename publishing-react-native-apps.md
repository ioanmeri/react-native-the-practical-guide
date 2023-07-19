## Publishing React Native Apps

From Development to Production,

## Publish to Google Store or Apple store.

### With Expo (managed or Bare Workflow)

- Configure the Project for Production
  - Permissions (camera, user's location etc)
    - Android: Control permissions requested & shown in app store
    - iOS: Define permissions request text snippets
  - App Name & Identifier
    - Set the visible app name, an app version and a unique app identifier (ID)
  - Environment Variables
    - Store app-wide variables securely (e.g. API keys)
  - Icons & Splash Screen
    - Configure and generate fitting icons and loading screens
- Build App Binaries with Expo's Cloud Service
- Advantage: No local resources used & you can build for all target platforms
- Submit to App Stores

### Without Expo

- Configure the Project
- Build App Binaries Locally
- Submit to App Stores

---

## Example

1. Use of **Expo Application Services** Documentation: **Expo EAS**

---

2. Configure App Name and Versions: `app.json`

```
expo.name: "My Recipe Book"
```

Version:

```
expo.version: "1.0.0"
```

Also there are iOS and android specific versions:

**iOS build number** (must match apple specified format)

```
ios.buildNumber: "1.0.0"
```

**Android version**

```
android.versionCode: 1
```

---

3. Environment variables

https://docs.expo.dev/build-reference/variables/

**.env**

```
EXPO_PUBLIC_API_URL=http://api.local
```

---

4. Icons & Splash Screen

**assets > icon.png**

and

**assets > splash.png**

multiple versions and multiple sized needed for icons & splash screen, but **expo** builds those icons for you.

---

## Building Expo Apps with EAS

1. Create react native project with expo

2. Create expo user account (for free)

3. Continue by logging into expo account:

First:

```
npm install -g eas-cli
```

Then:

```
eas login
```

4. Configure the project for building it

```
eas build:configure
```

Platforms to configure: **All**

5. Run a build

Start: Building APKs for Android emulators and devices

for this, build type should be **apk**.

In `eas.json`:

```
"build.preview.android.buildType": "apk"
```

6. Generate build for android:

```
eas build -p android --profile preview
```

- identifier asked (Android application id): reverse URL

```
com.max.academind.myrecipebook
```

- Generate a new Android Keystore: yes

Expo manages this signing key on their EAS servers

- Build in progress...

We will get a link to the APK file which we then can download, install on a simulator or a real device and which we could then also manually publish to the app stores.

Also can access it in the expo website and can download it via barcode.

For emulator install: drag and drop this APK file

- apk is fine for testing but not optimized for production Google Play store

For this the production config is used in `eas.json` where you get an `aab` binary file which you could upload to the Google Play store.

If build is used without profile it creates the production build.

```
eas build
```

You can submit the app using the EAS submit instead of uploading it manually.

---

## EAS for iOS

1. Need to tweek the `eas.json` file

```
"build.preview.ios.simulator": true
```

2. Build the project for simulator

```
eas build -p ios --profile preview
```

3. Specify iOS bundle identifier

```
com.academind.myrecipebook
```

this is uploaded to the EAS servers so that the build can be produced

Follow the link provided for the zip file (tar.gz)

Extract it and execute it on a simulator (works on macOS device to run iOS simulators)

4. Generate a production build

An Apple Developer Program membership is required (costs $99)

```
eas build --platform ios
```

Do you want to log in to your Apple account? n for no

4. 1. Generate Certificates

You will need to generate some certificates and files that are needed as part of the build process. You can do that from inside the Apple Developer web page (after logging in).

After signing in to **Apple Developer** account, create:

- iOS Distribution Certificate

  - upload the created certificate
  - download the certificate file
  - can be part of the project, but **NEVER** is source control
  - create folder `certs/ios` and drag the file `ios_distribution.cer`
  - add this folder to `.gitignore`

- Provisioning Profile
  - first need to go to **App Store Connect**, create new apps to link to profiler
  - Add a new App Apps of Store connect
  - Go back to certificates pages and register an **App ID**, you want to use the bundle ID, which is setup in `eas.json`
  - Back in **App Store Connect**, create a new app and pick the bundle ID
  - Back in Certificates and Profile, create the **App Store** Profile and Download the file
  - Drag and drop the profile in the `certs/ios` folder
  - Make `eas` aware of these two files

```
"build.production": {
  "ios": {
    "provisioningProfilePath": "certs/ios/profile.RN_Recipe_Book.mobileprovision",
    "distributionCertificate": {
      "path": "certs/ios/Certificates.p12",
      "password": "DISTRIBUTION_CERTIFICATE_PASSWORD"
    }
  }
}
```

we need to execute the certificate file: `ios_distribution.cer` so this get's added to **keychain**

search for this certificate, go to my certificates, export this item as a p12 file

this file should be added in the ios folder of the project

and now you need to assign a password

only possible to macOS (otherwise you should let EAS manage those profiles and certificates)

5. Add a new file `credentials.json` and add that setting in there

```
{
  "ios": {
    "provisioningProfilePath": "certs/ios/profile.RN_Recipe_Book.mobileprovision",
    "distributionCertificate": {
      "path": "certs/ios/Certificates.p12",
      "password": "DISTRIBUTION_CERTIFICATE_PASSWORD"
    }
  }
}
```

and `eas.json` does not need to be changed.

6. Build for iOS

```
eas build --platform ios
```

but it asks for apple certificates. To force use your local certificates, set the credentialsSource local in the `eas.json`

```
"build.production.credentialsSource": "local"
```

and run the build command again.

This uploads it to EAS servers to start the build there.

The output can be submitted to Apple store even manually or with EAS.
