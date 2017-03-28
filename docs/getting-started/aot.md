### How to use angular2-signature-pad in Angular2 with AoT compilation using ngc and rollup

The compilation process is described on the official Angular2 website here: https://angular.io/docs/ts/latest/cookbook/aot-compiler.html



#### 1) Install `angular2-signature-pad`

```bash
npm install angular2-signature-pad --save
```

#### 2) Edit Angular 2 module

Open the module file where you want to include angular2-signature-pad (most probably `app.module.ts`) and import either specific angular2-signature-pad modules by listing them in the import statement and then in the import array of the Angular 2 module

```typescript
import { SignaturePadModule } from 'angular2-signature-pad';
...

@NgModule({
   ...
   imports: [SignaturePadModule, ... ],
   ...
})
```

#### 3) Edit rollup configuration (rollup-config.js)

You have to use CommonJS rollup plugin, which you should be using anyway due to RxJS. If for some reason not, install it:

```bash
npm install rollup-plugin-commonjs --save --dev
```

Then you have to import the CommonJS plugin, include it in the plugins array and add angular2-signature-pad to the list of modules:

```javascript
...
import commonjs from 'rollup-plugin-commonjs';
...

//paths are relative to the execution path
export default {
	...
	plugins: [
		...
		commonjs({
			include: [
				'node_modules/rxjs/**',
				'node_modules/angular2-signature-pad/**'
			]
		}),
		...
	]
}
```

#### 4) Run compilation the standard way

e.g.

```bash
ngc -p tsconfig-aot.json
rollup -c rollup-config.js
```
