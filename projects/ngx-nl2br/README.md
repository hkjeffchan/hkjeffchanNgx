# ngx-nl2br

- [ngx-nl2br](#ngx-nl2br)
    - [1. Description](#1-description)
    - [2. Installation](#2-installation)
    - [3. Usage](#3-usage)
    - [5. Git repository](#5-git-repository)
  - [Build](#build)
  - [Publishing](#publishing)
  - [Running unit tests](#running-unit-tests)

### <a name="description"></a>1. Description

`ngx-nl2br` is a pipe for angular projects to transform new line to `<br />`.

### <a name="installation"></a>2. Installation

Install the module into your application and save it as a dev
dependency in your `package.json` file

```
npm install ngx-nl2br --save-dev
```

### <a name="usage"></a>3. Usage

In order to use the `nxg-nl2br` you have to include/import its module into your application:

```typescript
import { NgxNl2brPipe } from "ngx-nl2br";
```

Include it in your component's `imports` list of your `@NgModule(...)`:

```typescript
@NgModule({
  //...
  imports: [NgxNl2brModule],
  //...
})
```

Use it in your template to replace new line characters `\n` with
the `<br />` tag:

```
<div [innerHTML]="'html content\nsecond line\nthird line' | nl2br"></div>

<!-- sanitize the input -->
<div [innerHTML]="'html content\nsecond line\nthird line' | nl2br : true"></div>
```

Output:

```html
<div><strong>html content</strong><br />nsecond line<br />third line</div>
```

### <a name="git"></a>5. Git repository

[https://github.com/hkjeffchan/hkjeffchanngx](https://github.com/hkjeffchan/hkjeffchanngx)

## Build

Run `ng build ngx-nl2br` to build the project. The build artifacts will be stored in the `dist/` directory.

## Publishing

After building your library with `ng build ngx-nl2br`, go to the dist folder `cd dist/ngx-nl2br` and run `npm publish`.

## Running unit tests

Run `ng test ngx-nl2br` to execute the unit tests via [Karma](https://karma-runner.github.io).
