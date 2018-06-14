# Save to Excel from calendar



## Run

```
ng serve --open
```


## Problems and solutions

*

```
ERROR in ./node_modules/jszip/lib/readable-stream-browser.js
```

fix in file tsconfig.json

```json
{
  * * *
  "compilerOptions": {
     * * *
    "paths": {
      "jszip": [
        "node_modules/jszip/dist/jszip.min.js"
      ]
    }
  }
}

```

*
```
ERROR in node_modules/fullcalendar/dist/fullcalendar.d.ts(695,36): error TS2304: Cannot find name 'JQueryPromise'.
```

```bash
npm install --save-dev @types/jquery
```

*
```
ERROR in src/app/components/fullcalendar/fullcalendar.component.ts(2,8): error TS1192: Module ''jquery'' has no default export.
```

```typesript
import * as $ from 'jquery';
```