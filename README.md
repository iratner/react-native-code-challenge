# React Native Code Challenge

# Ilya's Notes

Requires cocoapods 1.8.* to work correctly, otherwise you can cause some issues
npm run ios will not work, running the target in xcode works perfectly

Welcome to Rhove's React Native code challenge! We've already created all the boilerplate for you, so you can spend your time solving problems rather than setting up.


# From Rhove (Original Start)
You have one week to complete this challenge and it should take you **no longer than 4 hours**. We want to be respectful of your time, so at the four-hour mark, submit your challenge and go celebrate a job well done. If there's work you would have completed if you'd had more time (and the app was meant for production), feel free to write that down and submit it along with your code. 

Let us know if you have any questions, and good luck!

## Getting Started

    $ npm i
    $ npm start

## Challenge Instructions

The requirements for your application are as follows:

1) Displays a list of at least four XKCD comics, acquired via the XKCD API endpoint. 
    * Note: XCKD's API doesn't have CORS support. Using any-api.com's version of the API gets around this issue.
    * `https://any-api.com:8443/http://xkcd.com/{COMIC_ID}/info.0.json` where `COMIC_ID` is just a numeric identifier of the comic you'd like to pull.
    * [API console](https://any-api.com/xkcd_com/xkcd_com/console/_comicId_info_0_json/GET)
2) The list should includes a thumbnail, title, and date published for each comic.
3) Comics are sorted by date with the most recent comics first.
4) Includes a component that, when on, sorts the comic strips by date so the least recent comics are first.
5) When the component is off, the comics revert to most recent first.
6) Style however you would like, but keep in mind guidelines provided by [Apple](https://developer.apple.com/design/human-interface-guidelines/ios/overview/themes/) and [Google](https://developer.android.com/design) where applicable.
7) Tapping on a list item will show the detail view for the comic containing all pertinent information provided by the API.
8) The comic detail should includes an image, title, date published and transcript for each comic.

## Evaluation Criteria

* Runs on both Android and iOS simulators.
* iOS supports iOS 11+.
* Android supports Android 28+.
* Includes more than one commit, each with a thoughtful commit message.
* Work is logically grouped into commits.
* `npm i` downloads all dependencies.
* `npm run ios` starts the app on an iOS simulator (iPhone 11 Pro).
* `npm run android` starts the app on an Android Simulator (simulator can already be running).
* React Native components are organized into separate files.
* Styling is used to enhance the page, and done so in reusable components.
* No console errors or app crashes.
* Meets the challenge requirements.

## Code Challenge Submission

Send a link to your GitHub repository to your contact at Rhove, and you're all done!
