[npm-version-image]: https://img.shields.io/npm/v/librewolf-location.svg?color=1e90ff
[npm-version-url]: https://www.npmjs.com/package/librewolf-location
[npm-downloads-image]: https://img.shields.io/npm/dm/librewolf-location.svg?color=2ecc40
[npm-downloads-url]: https://www.npmjs.com/package/librewolf-location
[action-image]: https://github.com/cezaraugusto/librewolf-location/actions/workflows/ci.yml/badge.svg?branch=main
[action-url]: https://github.com/cezaraugusto/librewolf-location/actions

> Approximates the current location of the LibreWolf browser across platforms.

# librewolf-location [![Version][npm-version-image]][npm-version-url] [![Downloads][npm-downloads-image]][npm-downloads-url] [![workflow][action-image]][action-url]

<img alt="LibreWolf" align="right" src="https://cdn.jsdelivr.net/gh/extension-js/media@9ef31f005a0192907d9f6405838e43776aca2124/browser_logos/svg/librewolf.svg" width="10.5%" />

* By default checks only `stable`.
* Supports macOS / Windows / Linux
* Works both as an ES module or CommonJS

## Support table

This table lists the default locations where LibreWolf is typically installed for each supported platform and channel. By default, only the Stable channel is checked.

<table>
  <thead>
    <tr>
      <th>Platform</th>
      <th>Channel</th>
      <th>Paths checked</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td align="center"><img alt="" width="64" height="64" src="https://cdn.jsdelivr.net/gh/extension-js/media@db5deb23fbfa85530f8146718812972998e13a4d/platform_logos/macos.png" /><br><strong>macOS</strong></td>
      <td align="center">LibreWolf (Stable)</td>
      <td>
        <ul>
          <li><code>/Applications/LibreWolf.app/Contents/MacOS/LibreWolf</code></li>
          <li><code>~/Applications/LibreWolf.app/Contents/MacOS/LibreWolf</code></li>
        </ul>
      </td>
    </tr>
    <tr>
      <td align="center"><img alt="" width="64" height="64" src="https://cdn.jsdelivr.net/gh/extension-js/media@db5deb23fbfa85530f8146718812972998e13a4d/platform_logos/windows.png" /><br><strong>Windows</strong></td>
      <td align="center">LibreWolf (Stable)</td>
      <td>
        <ul>
          <li><code>%LOCALAPPDATA%\LibreWolf\librewolf.exe</code></li>
          <li><code>%PROGRAMFILES%\LibreWolf\librewolf.exe</code></li>
          <li><code>%PROGRAMFILES(X86)%\LibreWolf\librewolf.exe</code></li>
        </ul>
      </td>
    </tr>
    <tr>
      <td align="center"><img alt="" width="64" height="64" src="https://cdn.jsdelivr.net/gh/extension-js/media@db5deb23fbfa85530f8146718812972998e13a4d/platform_logos/linux.png" /><br><strong>Linux/other</strong></td>
      <td align="center">LibreWolf (Stable)</td>
      <td>
        <ul>
          <li><code>librewolf</code> (on <code>$PATH</code>)</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

Returns the first existing path found (given selected channels), or <code>null</code> if none are found.

## Usage

**Via Node.js (strict by default):**

```js
import librewolfLocation from "librewolf-location";

// Strict (Stable only)
console.log(librewolfLocation());
// => "/Applications/LibreWolf.app/Contents/MacOS/LibreWolf" or null
```

**Via CLI:**

```bash
npx librewolf-location
```

## Related projects

* [brave-location](https://github.com/cezaraugusto/brave-location)
* [chrome-location2](https://github.com/cezaraugusto/chrome-location2)
* [edge-location](https://github.com/cezaraugusto/edge-location)
* [firefox-location2](https://github.com/cezaraugusto/firefox-location2)
* [opera-location2](https://github.com/cezaraugusto/opera-location2)
* [vivaldi-location2](https://github.com/cezaraugusto/vivaldi-location2)
* [yandex-location](https://github.com/cezaraugusto/yandex-location)
* [waterfox-location](https://github.com/cezaraugusto/waterfox-location)

## License

MIT (c) Cezar Augusto.


