# curry

Wonderful reusable library implementing Schönfinkelisation.

### npm
```bash
npm install @alepop/curry
```

# usage
```javascript
const curry = require('@alepop/curry');

const sum = curry((a,b) => a + b);

sum(1, 2) // 3
sum(1)(2) // 3
```
