# babel-plugin-dva-namespace

## Example

#### In

```javascript
// models/userinfo.js
export default {
  state: {
    // TODO:
  },
  effects: {
    // TODO:
  },
};
```

#### Out

```javascript
// models/userinfo.js
export default {
  namespace: "userInfo",
  state: {
    // TODO:
  },
  effects: {
    // TODO:
  },
};
```

## Installation

```bash
npm install --save-dev @babel/plugin-transform-spread
```

## Usage

### Via .babelrc (Recommended)

**.babelrc**

Without options:

```json
{
  "plugins": ["dva-namespace"]
}
```
