# Documenting full steps to install and test with [angular-seed](https://github.com/mgechev/angular-seed)  

  ```bash
  npm install --save angular2-signature-pad
  ```

### In **project.config.ts**

  ```typescript
  //uncomment this
  import { ExtendPackages } from './seed.config.interfaces';

  // *towards the bottom, replace extended packages with this:

  let additionalPackages: ExtendPackages[] = [
  // required for dev build
  {
    name:'angular2-signature-pad',
    path:'node_modules/angular2-signature-pad/bundles/angular2-signature-pad.umd.min.js'
  },    

  // required for prod build
  {
    name:'angular2-signature-pad/*',
    path:'node_modules/angular2-signature-pad/bundles/angular2-signature-pad.umd.min.js'
  },
  ];    
  this.addPackagesBundles(additionalPackages);
  ```



## Verify by adding an SignaturePadModule to the home module and html:

### In **home.module.ts:**

  ```
  import { SignaturePadModule } from 'angular2-signature-pad';

  @NgModule({
    imports: [CommonModule, HomeRoutingModule, SharedModule, SignaturePadModule],
    declarations: [HomeComponent],
    exports: [HomeComponent],
    providers: [NameListService]
  })
  ```

### In **home.component.html:**

  ```
 <signature-pad 
        (onSave)="onSaveHandler($event)" 
        (onClear)="onClearHandler()" 
        [width]="width" 
        [height]="height" 
        [hideFooter]="noFooter" 
        [label]="label">
</signature-pad>
  ```
