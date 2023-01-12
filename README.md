# Patchable UI

This library provides a set of standard components such as buttons,
inputs and arrays but gives the possibility to override their
implementation without changing their behavior.

The idea was to have access to a library of components without
thinking about their designs and to give the possibility to patch their designs later.

## Install

WIP

## Usage

In your application, use components from `@patchable-ui/base`:

```javascript
// App.jsx

import React, { useState } from "react";
import { Text, Button } from '@patchable-ui/base';

export const App () => {
  const [count, setCount] = useState(0);

  return (
    <div>
      <Button label="-" onClick={() => setCount(count + 1)} />
      <Text>{count}
      <Button label="+" onClick={() => setCount(count + 1)} />
    </div>
  );
};

```

##### Implemented patch

You can use the patch made with bootstrap:

```javascript
// index.jsx

import { patchWithBootstrap } from '@patchable-ui/bootstrap';
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

patchWithBootstrap();

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
```

You should see your button with the bootstrap style. 🎉

##### Custom patch

Create your custom component respecting the props.
(You have access to the props typing of each component in Typescript).

```javascript
// CustomButton.jsx

import React, { useState } from "react";

const CustomButton ({ label, ...props }) => {
  return (
    <button {...props}>
      {`🖲️ ${label}`}
    </button>
  );
};
```

Patch with your component:

```javascript
// index.jsx

import { Button, patchComponent } from '@patchable-ui/bootstrap';
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { CustomButton } from './CustomButton';

patchComponent(Button, CustomButton);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
```

## Contribute

We would love for you to contribute to our component library. Here are some ways to contribute:

- Report bugs or feature requests using our issue tracker.
- Submit pull requests to fix bugs, add new features, add style implementation.
- Read and give feedback on pending pull requests.
- Document the library's components.

## License

This project is licensed under the MIT license.
This means that you are free to use, modify, and distribute the software,
as long as you include the original copyright and license notice in your copy.
For more information, please refer to the [MIT License](https://opensource.org/licenses/MIT).
