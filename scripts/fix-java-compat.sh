#!/usr/bin/env bash
set -euo pipefail

# Fix Java source/target compatibility to Java 17 for build environments
# Run: bash ./scripts/fix-java-compat.sh

FILES=(
  "android/app/capacitor.build.gradle"
  "android/capacitor-cordova-android-plugins/build.gradle"
  "node_modules/@capacitor/android/capacitor/build.gradle"
)

for f in "${FILES[@]}"; do
  if [ -f "$f" ]; then
    if grep -q "VERSION_21" "$f"; then
      echo "Patching $f -> VERSION_17"
      sed -i.bak 's/JavaVersion.VERSION_21/JavaVersion.VERSION_17/g' "$f" || true
    else
      echo "No VERSION_21 in $f; skipping"
    fi
  else
    echo "File $f not found; skipping"
  fi
done

echo "Java compatibility patch complete."
