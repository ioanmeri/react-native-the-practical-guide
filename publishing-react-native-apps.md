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
