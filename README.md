## Whatmeplaying

[![Build Status](https://travis-ci.org/rickycodes/whatmeplaying.svg?branch=master)](https://travis-ci.org/rickycodes/whatmeplaying) [![codecov](https://codecov.io/gh/rickycodes/whatmeplaying/branch/master/graph/badge.svg)](https://codecov.io/gh/rickycodes/whatmeplaying/) [![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg)](http://standardjs.com/)
[![deprecated](http://badges.github.io/stability-badges/dist/deprecated.svg)](http://github.com/badges/stability-badges)

### !!! this project is deprecated !!!

### take a look at <a href='https://github.com/rickycodes/retrorecord'>retrorecord</a>

🎮 twit app to post screenshots or recrord video games from my raspberry pi (RetroPie) to twitter:  
https://twitter.com/whatmeplaying

<p align="center">
  <br />
  <img src="https://i.imgur.com/QxptoU7.png" />
</p>

## Requirements
This was setup to run on a Raspberry Pi 3 Model B running [RetroPie](https://retropie.org.uk/). I'm sure it would work on other [Retroarch](https://www.retroarch.com/)'s as well. I wouldn't try this on an older Pi 1, or single core system. The screenshot stuff should work (maybe this should be configurable?) but the recording/gif converting would likely be too slow on a single core system (it can already bog down the Pi 3 at times).

What you really really need is:

| software    | command   | version  |
|-------------|-----------|----------|
| Node.js     | `node`    | >=8.9.4  |
| npm         | `npm`     | >=5.6.0  |
| ImageMagick | `convert` | =6.8.9-9 |
| ffmpeg      | `ffmpeg`  | =3.1.4   |

(I am sure versions can flex a bit)

If you are setting these things up on RetroPie you can follow these guides:

- [Recording Live Gameplay in RetroPie’s RetroArch Emulators Natively on the Raspberry Pi](https://retroresolution.com/2016/07/06/recording-live-gameplay-in-retropies-retroarch-emulators-natively-on-the-raspberry-pi/#li_before_proceeding)
- [Recording gameplay videos on RetroPie](https://www.artificialworlds.net/blog/2018/01/07/recording-gameplay-videos-on-retropie/) ([with some handy shell scripts!](https://github.com/andybalaam/retropie-recording))
- [I also ran into this snag](https://github.com/libretro/RetroArch/issues/5717#issuecomment-357494398)

## Installation
clone this repo somewhere:  
`git clone git@github.com:rickycodes/whatmeplaying.git`  
install deps via npm:  
`npm i`

## Configuration
You'll need to modify values [here](https://github.com/rickycodes/whatmeplaying/blob/master/config.example.js) to match your needs (the folder structure needs to be set up by you and depending on how you configure RetroArch the folders may vary)

this file also needs to be renamed to `config.js`

## Tests
run unit tests:  
`npm t`  
I've also added a test to check your configuration:  
`NODE_ENV=local node test.js`

## Startup
`node index.js` or `npm start`

(Good luck and jah bless!)

## Notes
All this app really does is watch folders for [screenshots & recordings](https://github.com/rickycodes/whatmeplaying/blob/master/index.js#L9), so presumably you could get this to work on most systems? While this was used to create [whatmeplaying](https://twitter.com/whatmeplaying) you could use a similar setup to post screenshots/videos/gifs from games to anywhere (so long as there's an API of some sort).

Most of the magic (literally ImageMagick) is in the [mkvToGif.sh](https://github.com/rickycodes/whatmeplaying/blob/master/mkvToGif.sh) file

## License
MIT License

Copyright © 2017 Ricky Miller

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
