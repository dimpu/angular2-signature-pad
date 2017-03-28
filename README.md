# Angular 2 SignaturePad

[![Build Status][travis-badge]][travis-badge-url]
[![npm][circleci-badge-url]][circleci-url]
[![version][npm-badge-url]][npm-url]
[![npm][license-badge-url]][license-url]
[![npm][dep-badge-url]][dep-url]

Source @ [https://github.com/dimpu/angular2-signature-pad](https://github.com/dimpu/angular2-signature-pad)

## Table of contents
1. [Getting Started](#getting-started)
2. [Installation instructions](#installation-instructions)
3. [Usage & Demo](#usage--demo)
4. [Contributing](#contribution)
5. [License](#license)

# Getting Started

angular2-signature-pad contains SignaturePadModule for Angular 2.

Additionally we use [signature_pad](https://github.com/szimek/signature_pad)  for this component.

# Installation instructions

Install `angular2-signature-pad` from `npm`:

```bash
npm install angular2-signature-pad --save
```
or using `yarn`:

```bash
yarn add angular2-signature-pad
```

## How to use it with:

- `angular-cli` — please refer to [Getting started with `angular-cli`](https://github.com/dimpu/angular2-signature-pad/tree/master/docs/getting-started/ng-cli.md)
- `angular-seed` — please refer to [Getting started with `angular-seed`](https://github.com/dimpu/angular2-signature-pad/tree/master/docs/getting-started/angular-seed.md)
- `system.js` (and [Angular 2 QuickStart](https://angular.io/docs/ts/latest/quickstart.html)) — please checkout [sample repository](https://github.com/dimpu/angular2-quickstart)
- `webpack` — you can view our demo page [source code](https://github.com/dimpu/angular2-signature-pad/tree/master/demo)
- `plnkr` — sample available [here](https://embed.plnkr.co/mlzpscNs65tXCJMl7bl1/)
- `AoT` using `ngc` and `rollup` — please refer to [How to use `angular2-signature-pad` in Angular 2 with `AoT` compilation using `ngc` and `rollup`](https://github.com/dimpu/angular2-signature-pad/tree/master/docs/getting-started/aot.md)

# Usage & Demo

Main source of API documentation and usage scenarios is available at [https://dimpu.github.io/angular2-signature-pad/](https://dimpu.github.io/angular2-signature-pad/).

# Contribution

Is very welcome! And remember, contribution is not only PRs and code, but any help with docs or helping other developers to solve issues are very appreciated! Thanks in advance!

## Quick Guide

### app.module.js

```typescript
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { SignaturePadModule } from 'angular2-signature-pad';
import { AppComponent } from '../src/app.component';

@NgModule({
  imports: [
    BrowserModule,
    SignaturePadModule,
  ],
  declarations: [AppComponent],
  bootstrap: [AppComponent],
})
```

### app.component.html

```html
<signature-pad 
        (onSave)="onSaveHandler($event)" 
        (onClear)="onClearHandler()" 
        [width]="width" 
        [height]="height" 
        [hideFooter]="noFooter" 
        [label]="label"></signature-pad>
```


## Example

You can find a working example inside the `demo` directory.

To serve it locally, run:

```bash
git clone https://github.com/dimpu/angular2-signature-pad.git

npm i

npm run demo.serve
```


[travis-badge]: https://travis-ci.org/dimpu/angular2-signature-pad.svg?branch=master
[travis-badge-url]: https://travis-ci.org/dimpu/angular2-signature-pad
[license-url]: https://opensource.org/licenses/MIT
[license-badge-url]: https://img.shields.io/npm/l/angular2-signature-pad.svg
[npm-url]: https://www.npmjs.com/package/angular2-signature-pad
[npm-badge-url]: https://img.shields.io/npm/v/angular2-signature-pad.svg?style=flat
[circleci-url]: https://circleci.com/gh/dimpu/angular2-signature-pad/master
[circleci-badge-url]: https://circleci.com/gh/dimpu/angular2-signature-pad/tree/master.svg?style=shield&
[demo-url]: https://github.com/dimpu/angular2-signature-pad
[dep-url]: https://david-dm.org/dimpu/angular2-signature-pad
[dep-badge-url]: https://david-dm.org/dimpu/angular2-signature-pad/status.svg
