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

1. Use of **Expo Application Services** feature: **Expo EAS**

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

**android version**

```
android.versionCode: 1
```
