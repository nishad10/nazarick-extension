# Chrome Extension Boilerplate with React 16.13 and Webpack 4

[![npm](https://img.shields.io/npm/v/chrome-extension-boilerplate-react)](https://github.com/nishad10/nazarick-extension.git)
[![npm-download](https://img.shields.io/npm/dw/chrome-extension-boilerplate-react)](https://github.com/nishad10/nazarick-extension.git)
[![npm](https://img.shields.io/npm/dm/chrome-extension-boilerplate-react)](https://github.com/nishad10/nazarick-extension.git)

[![dependencies Status](https://david-dm.org/lxieyang/chrome-extension-boilerplate-react/status.svg)](https://david-dm.org/lxieyang/chrome-extension-boilerplate-react)
[![devDependencies Status](https://david-dm.org/lxieyang/chrome-extension-boilerplate-react/dev-status.svg)](https://david-dm.org/lxieyang/chrome-extension-boilerplate-react?type=dev)

## Installing and Running

### Procedures:

1. Check if your [Node.js](https://nodejs.org/) version is >= **10.13**.
2. Clone this repository.
3. Change the package's `name`, `description`, and `repository` fields in `package.json`.
4. Change the name of your extension on `src/manifest.json`.
5. Run `npm install` to install the dependencies.
6. Run `npm start`
7. Load your extension on Chrome following:
   1. Access `chrome://extensions/`
   2. Check `Developer mode`
   3. Click on `Load unpacked extension`
   4. Select the `build` folder.
8. Happy hacking.

## Packing

After the development of your extension run the command

```
$ NODE_ENV=production npm run build
```

Now, the content of `build` folder will be the extension ready to be submitted to the Chrome Web Store. Just take a look at the [official guide](https://developer.chrome.com/webstore/publish) to more infos about publishing.
