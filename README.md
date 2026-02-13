<div align="center">
<img width="1200" height="475" alt="GHBanner" src="https://github.com/user-attachments/assets/0aa67016-6eaf-458a-adb2-6e31a0763ed6" />
</div>

# Run and deploy your AI Studio app

This contains everything you need to run your app locally.

View your app in AI Studio: https://ai.studio/apps/drive/1YS52fLKr5cqQjpumKb-bXTT-8ovdRIna

## Run Locally

**Prerequisites:**  Node.js


1. Install dependencies:
   `npm install`
2. Set the `GEMINI_API_KEY` in [.env.local](.env.local) to your Gemini API key
3. Run the app:
   `npm run dev`


## Android build (native)

If you need to build the Android app locally or in CI, install JDK 17 and the
Android SDK command-line tools. Example steps (Linux):

1. Install OpenJDK 17 and prerequisites (requires sudo):

```bash
sudo apt update
sudo DEBIAN_FRONTEND=noninteractive apt install -y openjdk-17-jdk wget unzip ca-certificates
```

2. Run the helper script to download the Android command-line tools, install
    platforms and build-tools, accept licenses, and write `android/local.properties`:

```bash
./scripts/setup-android-sdk.sh /absolute/path/to/sdk
# e.g. ./scripts/setup-android-sdk.sh $HOME/android-sdk
```

3. Build the app:

```bash
cd android
./gradlew assembleDebug
```

Notes:
- The project expects Java 17. If your environment uses a different Java
   version, set `JAVA_HOME` or install OpenJDK 17.
- We enabled `android.useAndroidX=true` in `android/gradle.properties`.
- The setup script requires network access and (for installing system packages)
   sudo rights; in CI you can run the script in your pipeline image that has
   package manager access.
