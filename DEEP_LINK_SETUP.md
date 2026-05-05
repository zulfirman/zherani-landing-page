# Deep Link Host Setup

This repo now includes host verification files:

- `.well-known/assetlinks.json` (Android App Links)
- `.well-known/apple-app-site-association` (iOS Universal Links)

## 1) Fill required values

### Android
Edit `.well-known/assetlinks.json` and replace:

- `REPLACE_WITH_YOUR_ANDROID_SIGNING_CERT_SHA256`

Use your release signing certificate SHA-256 fingerprint.  
Format example:

`"AA:BB:CC:...:FF"`

### iOS
Edit `.well-known/apple-app-site-association` and replace:

- `REPLACE_WITH_APPLE_TEAM_ID`

The resulting value must be:

`<APPLE_TEAM_ID>.com.airshade.zherani`

## 2) Ensure HTTPS and correct headers

For iOS, `https://zherani.my.id/.well-known/apple-app-site-association` must:

- be served over HTTPS
- return `Content-Type: application/json`

For Android, `https://zherani.my.id/.well-known/assetlinks.json` should return JSON content.

## 3) Path currently configured

Both platforms are configured for:

- `/app/workspaces/join/*`

Example:

- `https://zherani.my.id/app/workspaces/join/BbVYkGFQkpbSdBVBWNJt9CMlnWwFtZym`

## 4) Verify host files

### Android

Open in browser:

- `https://zherani.my.id/.well-known/assetlinks.json`

### iOS

Run:

`curl -v https://app-site-association.cdn-apple.com/a/v1/zherani.my.id`
