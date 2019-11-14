# skylark-data-streams
The stream features enhancement for skylark utils.

## Dependences

| Project                                                      | Status | Description                           |
| ------------------------------------------------------------ | ------ | ------------------------------------- |
| [skylark-langx](https://github.com/skylarklangx/skylark-langx) |        | Javascript language extension library |

## Different builds

builds are in the directory dist.

|                      | build                                    | Description              |
| -------------------- | ---------------------------------------- | ------------------------ |
| full                 | skylark-data-streams-all.js              | included dependences     |
| only                 | skylark-data-streams.js                  | not included dependences |
| full （development） | uncompressed/skylark-data-streams-all.js | included dependences     |
| only （development） | uncompressed/skylark-data-streams.js     | not included dependences |

Please use the "full" version when using this library alone, and use the "only" version when using other skylark libraries.

## Installation

You can get the latest version in many different ways:

- Downloading [a ZIP file from master](https://github.com/skylark-data/skylark-data-streams/archive/master.zip)
- Cloning using Git: `git clone https://github.com/skylark-data/skylark-data-streams.git`
- Installing via NPM: `npm install https://github.com/skylark-data/skylark-data-streams.git#master --save`

## Building 

- Ensure that Node.js is installed.
- Run npm install https://github.com/skylarkjs/skylark-bundle-cli.git -g to ensure sbundle is installed.
- Run npm install to ensure the required dependencies are installed.
- Run npm run build. The builds will be placed in the dist/ directory.

## License

Released under the [MIT](http://opensource.org/licenses/MIT)