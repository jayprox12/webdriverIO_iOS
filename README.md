# webdriverIO_iOS - iOS testing suite

Using Appium and WebdriverIO to build tests for iOS apps. Created this test by following a tutorial from Dilpreet Johal in the Udemy course: Mobile Automation with Appium 2.0.

Before we begin, you will need to have the following installed: Node.js, Java JDK, Appium Inspector, Xcode. This is on-going and more tests will be added.


## Installations


### Installing Node.js:
1. Go to http://nodejs.org, and click the Install button
2. Run the installer that you just downloaded
3. When the installer completes, a message indicates that Node was installed at /usr/local/bin/node and npm was installed at /usr/local/bin/npm.

### Install Java JDK:
1. Go to: https://adoptium.net/
2. Download latest release
3. Run the installer that you just downloaded
4 Open Terminal, and enter: java --version
5. Verify installed version is displayed

### Install Xcode and command line tools:
1. Download from the App Store
2. When finished, open Terminal and enter: xcode-select --install
3. Go through with the installation
4. In the Terminal, enter: brew install carthage


### Install Appium Inspector:
1. Download latest release here: https://github.com/appium/appium-inspector/releases
2. Open Appium Inspctor



## Setup


### Java JDK Setup:
1. In the Terminal, enter: echo $JAVA_HOME
2. If nothing is displayed, we'll need to update the zshenv file (or bash for older macs)
3. In the Terminal, enter: /usr/libexec/java_home
4. Observe the path in the Terminal
5. In Terminal, enter: vim ~/.zshenv
6. Enter: export JAVA_HOME=$(/usr/libexec/java_home)
7. Hit esc key
8. Enter: :wq!
9. Hit Enter key. (Saves changes in zshenv file)
10. In Terminal, enter: source ~/.zshenv
11. In Terminal, enter: echo $JAVA_HOME.
12. Verify the path is displayed


### Setup iOS Emulator:
1. Open Xcode
2. Right-click on Xcode icon, and go to Open Developer Tool > Simulator
3. Right-click on the Simulator icon, and go to Device > iOS version > iPhone/iPad device
4. Verify the simulator boots up


### Appium Setup:
1. In Terminal, enter: npm install -g appium-doctor
2. In Termainl, enter: appium-doctor --version
3. Verify the version installed
4. In Terminal, enter: appium-doctor --ios
5. Verify the checks for necessary dependencies are successful
6. In the Terminal, enter: appium driver install xcuitest
7. In the Terminal, enter: appium driver list
8. Verify xcuitest is displayed


### WebDriverIO Setup: (If planning to do a first time setup. Can skip if wanted to use the provided files, proceed to Running Tests)
1. Create a new directory and go there (mkdir {new folder}, then cd to {new folder}
2. In the Terminal, enter: npm init
3. Go through the setup. Can use defaults
4. In the Terminal, enter: npm i @wdio/cli
5. In the Terminal, enter npx wdio config
6. Enter the following:
 - local machine
 - mocha
 - No to compiler
 - Default location
 - No generating test files
 - spec reporter
 - Deselect default selection, then select appium
 - Default base url
7. Verify installation completes
8. In Terminal, enter npm install appium@next
9. Open package.json file and verify the installation modules

### Emulator Setup (To gather locators on the app in the device):
1. Open Appium Inspector
2. Update port (ex. I used 4724)
3. In Desired Capabilities, enter the following: (Can try to mirror the capabilites section in the wdio.conf, but the device and os is up to you)
 - platformName, text, {devicePlatform}
 - appium:platformVersion, text, {versionNumber}
 - appium:deviceName, text, {deviceName}
 - appium:app, text, {appPath}
 - automationName, text, {automationName}
4. Open the device simulator. (Same one that matches the Desired Capabilities)
5. In the Terminal, enter: appium -p {portNumber} //(ex. 4724)
6. Verify it started
7. In Appium Inspector, click Start Session button
8. Verify the app is installed and booted up in the simulator
9. Verify the device is displayed in the Appium Inspector



## Running Tests


Before running the tests using the provided files, be sure the following is done:
- node.js installation and setup
- Java JDK installation and setup
- Xcode installation and setup
- Appium setup

### WebdriverIO Config Setup:
1. Open wdio.conf
2. In capabilities section, enter:
- platformName: "{devicePlatform}", //(ios)
- "appium:platformVersion": "{versionNumber}", //(12.0)
- "appium:deviceName": "{deviceName}", //(iPhone 12 Pro)
- "appium:automationName": "{automationName}", //(XCUITest)
- "appium:app": path.join(process.cwd(), "{appPath}") //(app/{appName}.app)
3. Create a test folder
4. Under that test folder, create a spec folder (ex. test/spec)
5. NOTE: When using a real device, update the conf file by removing or commenting out the follwing lines:
- appium:platformVersion
- appium:deviceName


### Test Run:
1. In the Terminal, go to the main directory
2. Enter: npm install
3. Verify the installation completes
4. In the Terminal, enter: npx wdio
5. Verify the tests run
6. Verify tests were successful
