<!-- # @capacitor-community/device

This plugin offers the API which has been removed from @capacitor/device plugin in v7.0 (getInfo() no longer returns diskFree, diskTotal, realDiskFree and realDiskTotal) as some apps still require this -->

<p align="center"><br><img src="https://user-images.githubusercontent.com/236501/85893648-1c92e880-b7a8-11ea-926d-95355b8175c7.png" width="128" height="128" /></p>
<h3 align="center">Capacitor Device Plugin</h3>
<p align="center"><strong><code>@capacitor-community/device</code></strong></p>
<p align="center">
  Capacitor community plugin to obtain internal information about the device (e.g. disk space, etc.)<br>
</p>

<p align="center">
  <img src="https://img.shields.io/maintenance/yes/2026?style=flat-square" />
  <a href="https://www.npmjs.com/package/@capacitor-community/device"><img src="https://img.shields.io/npm/l/@capacitor-community/device?style=flat-square" /></a>
  <br>
  <a href="https://www.npmjs.com/package/@capacitor-community/device"><img src="https://img.shields.io/npm/dw/@capacitor-community/device?style=flat-square" /></a>
  <a href="https://www.npmjs.com/package/@capacitor-community/device"><img src="https://img.shields.io/npm/v/@capacitor-community/device?style=flat-square" /></a>
  <!-- ALL-CONTRIBUTORS-BADGE:START - Do not remove or modify this section -->
  <a href="#contributors-"><img src="https://img.shields.io/badge/all%20contributors-1-orange?style=flat-square" /></a>
  <!-- ALL-CONTRIBUTORS-BADGE:END -->
</p>

# Table of Contents

- [Maintainers](#maintainers)
- [About](#about)
- [Plugin versions](#plugin-versions)
- [Supported Platforms](#supported-platforms)
- [Installation](#installation)
- [Apple Privacy Manifest Requirements](#apple-privacy-manifest-requirements)
- [Example Plugin Usage](#example-plugin-usage)
- [API](#api)

## Maintainers

| Maintainer | GitHub                          | Active |
| ---------- | ------------------------------- | ------ |
| ryaa       | [ryaa](https://github.com/ryaa) | yes    |

## About

This plugin offers the API which has been removed from `@capacitor/device` plugin in v7.0 (getInfo() no longer returns diskFree, diskTotal, realDiskFree and realDiskTotal). For more details also see https://capacitorjs.com/docs/updating/7-0#device

This plugin contains code derived from or inspired by [@capacitor/device](https://github.com/ionic-team/capacitor-plugins/tree/main/device) plugin.
Please note that it is a community plugin, not maintained by the Capacitor team.

**Features:**

- support reading diskFree, diskTotal, realDiskFree and realDiskTotal

**NOTE**: The plugin version 8.0.0 is compatible with Capacitor 8

## Plugin versions

| Capacitor version | Plugin version |
| ----------------- | -------------- |
| 8.x               | 8.x            |
| 7.x               | 7.x            |

## Supported Platforms

- iOS
- Android

## Installation

```bash
npm install @capacitor-community/device
npx cap sync
```

## Apple Privacy Manifest Requirements

Apple mandates that app developers now specify approved reasons for API usage to enhance user privacy. By May 1st, 2024, it's required to include these reasons when submitting apps to the App Store Connect.

When using this specific plugin in your app, you must create a `PrivacyInfo.xcprivacy` file in `/ios/App` or use the VS Code Extension to generate it, specifying the usage reasons.

For detailed steps on how to do this, please see the [Capacitor Docs](https://capacitorjs.com/docs/ios/privacy-manifest).

**For this plugin, the required dictionary key is [NSPrivacyAccessedAPICategoryDiskSpace](https://developer.apple.com/documentation/bundleresources/privacy_manifest_files/describing_use_of_required_reason_api#4278397) and the recommended reason is [85F4.1](https://developer.apple.com/documentation/bundleresources/privacy_manifest_files/describing_use_of_required_reason_api#4278397).**

### Example PrivacyInfo.xcprivacy

```xml
<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE plist PUBLIC "-//Apple//DTD PLIST 1.0//EN" "http://www.apple.com/DTDs/PropertyList-1.0.dtd">
<plist version="1.0">
  <dict>
    <key>NSPrivacyAccessedAPITypes</key>
    <array>
      <!-- Add this dict entry to the array if the PrivacyInfo file already exists -->
      <dict>
        <key>NSPrivacyAccessedAPIType</key>
        <string>NSPrivacyAccessedAPICategoryDiskSpace</string>
        <key>NSPrivacyAccessedAPITypeReasons</key>
        <array>
          <string>85F4.1</string>
        </array>
      </dict>
    </array>
  </dict>
</plist>
```

## Example Plugin Usage

```typescript
import { CommunityDevice } from '@capacitor-community/device';

const logDeviceInfo = async () => {
  const info = await CommunityDevice.getInfo();

  console.log(info);
};
```

## API

<docgen-index>

* [`getInfo()`](#getinfo)
* [Interfaces](#interfaces)

</docgen-index>

<docgen-api>
<!--Update the source file JSDoc comments and rerun docgen to update the docs below-->

### getInfo()

```typescript
getInfo() => Promise<CommunityDeviceInfo>
```

Return information about the underlying device/os/platform.

**Returns:** <code>Promise&lt;<a href="#communitydeviceinfo">CommunityDeviceInfo</a>&gt;</code>

**Since:** 7.0.0

--------------------


### Interfaces


#### CommunityDeviceInfo

| Prop                | Type                | Description                                                                                                                                                                                                                     | Since |
| ------------------- | ------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----- |
| **`diskFree`**      | <code>number</code> | How much free disk space is available on the normal data storage path for the os, in bytes. On Android it returns the free disk space on the "system" partition holding the core Android OS. On iOS this value is not accurate. | 7.0.0 |
| **`diskTotal`**     | <code>number</code> | The total size of the normal data storage path for the OS, in bytes. On Android it returns the disk space on the "system" partition holding the core Android OS.                                                                | 7.0.0 |
| **`realDiskFree`**  | <code>number</code> | How much free disk space is available on the normal data storage, in bytes.                                                                                                                                                     | 7.0.0 |
| **`realDiskTotal`** | <code>number</code> | The total size of the normal data storage path, in bytes.                                                                                                                                                                       | 7.0.0 |

</docgen-api>
