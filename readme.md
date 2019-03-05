# Webstorm / IntelliJ tslint problem
The IDE does not show the tslint error on line 2

How to reproduce:
1. Open project in IDE (ide only shows error on line 4)
2. `yarn install`
3. `yarn tslint --project tslint.json src/*`

Tslint Errors:
```
ERROR: tslint-problem/src/test.ts:2:25 - Private member variable 'input' is never reassigned; mark it as 'readonly'.
ERROR: tslint-problem/src/test.ts:4:5 - 'public' is implicit.
```
