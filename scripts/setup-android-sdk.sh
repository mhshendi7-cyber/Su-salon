#!/usr/bin/env bash
set -euo pipefail

# Usage: sudo ./scripts/setup-android-sdk.sh /absolute/path/to/sdk
# Installs Android command-line tools, platforms, build-tools and accepts licenses.
# Requires: sudo privileges to install packages (apt), or run manually on CI with available tools.

SDK_DIR=${1:-$HOME/android-sdk}
CMDLINE_ZIP="commandlinetools-linux-9477386_latest.zip"

echo "Using SDK dir: $SDK_DIR"
mkdir -p "$SDK_DIR"
cd /tmp

if ! command -v java >/dev/null 2>&1; then
  echo "Java not found. Installing OpenJDK 17 (requires sudo)..."
  sudo apt-get update
  sudo DEBIAN_FRONTEND=noninteractive apt-get install -y openjdk-17-jdk wget unzip ca-certificates
fi

if [ ! -f "$CMDLINE_ZIP" ]; then
  echo "Downloading Android command-line tools..."
  wget -q https://dl.google.com/android/repository/$CMDLINE_ZIP
fi

unzip -o -q $CMDLINE_ZIP -d "$SDK_DIR/cmdline-tools"
mkdir -p "$SDK_DIR/cmdline-tools/latest"
# Move contents if necessary
if [ -d "$SDK_DIR/cmdline-tools/cmdline-tools" ]; then
  mv -f "$SDK_DIR/cmdline-tools/cmdline-tools/"* "$SDK_DIR/cmdline-tools/latest/"
fi

export ANDROID_SDK_ROOT="$SDK_DIR"
export PATH="$ANDROID_SDK_ROOT/cmdline-tools/latest/bin:$ANDROID_SDK_ROOT/platform-tools:$PATH"

echo "Installing platform-tools, platforms;android-36 and build-tools..."
yes | sdkmanager --sdk_root="$ANDROID_SDK_ROOT" "platform-tools" "platforms;android-36" "build-tools;36.0.0" "build-tools;35.0.0" "cmdline-tools;latest"

echo "Accepting licenses..."
yes | sdkmanager --sdk_root="$ANDROID_SDK_ROOT" --licenses || true

# Write local.properties for the project
PROJECT_LOCAL_PROPERTIES="$(pwd)/local.properties"
if [ -d "/workspaces/Su-salon" ]; then
  echo "sdk.dir=$ANDROID_SDK_ROOT" > /workspaces/Su-salon/android/local.properties
  echo "Wrote /workspaces/Su-salon/android/local.properties"
fi

echo "Android SDK setup complete."

echo "To build the app:"
echo "  cd /workspaces/Su-salon/android && ./gradlew assembleDebug"
