[Yo](https://en.wikipedia.org/wiki/Yo_(app)) has shut down, so this repository has been archived.

### Original Readme
Technology choices in this application were made for maximum entertainment, not because the author believes they are good.

This is a program for implementing a web-and-yo doorbell. You'll need two Yo API accounts:

1. RESIDENTS
 * Callback: http://this.app.example.com/xyo
2. DOORBELL
 * Callback: http://this.app.example.com/yo

Put the RESIDENTS key in config.js (using config.js.example). Make everyone in the house Yo at RESIDENTS.

Any time someone Yo's DOORBELL all of the RESIDENTS subscribers will get Yo'd. Easy peasy.
