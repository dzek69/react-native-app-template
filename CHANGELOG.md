All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](http://keepachangelog.com/en/1.0.0/)
and this project adheres to [Semantic Versioning](http://semver.org/spec/v2.0.0.html).

## [UNRELEASED]
### Fixed
- fs-extra not being explicitly added as dep
### Changed
- README update about changing app name & id

## [0.2.0] - 2019-09-01
### Added
- building separate apk per architecture (including universal apk)
- hermes engine check on template App (for future releases)
- pre-push hook with code quality check
### Fixed
- unneeded permissions of the release app removed
- support for eslint for Windows

## [0.1.0] - 2019-08-31
### Changed
- updated a lot of deps
- upgraded react-native to current / 0.60.5
- README
### Fixed
- audit warnings
- some potential unit test issues related to must.js

## [0.0.5] - 2018-12-13
### Changed
- updated eslint config versions
- updated react-native and corresponding react libraries

### Fixed
- almost all warnings during deps install (added missing dep, set right react versions)

## [0.0.4] - 2018-11-06
### Added
- Example key for building release versions
- DO NOT USE FOR PRODUCTION APPS.

## [0.0.3] - 2018-10-17
### Changed
- Added react and react-native code linting

## [0.0.2] - 2018-10-12
### Changed
- Added `docs` dir to `.gitignore`

## [0.0.1] - 2018-10-12
### Added
- first version
