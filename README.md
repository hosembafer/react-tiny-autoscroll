# react-tiny-autoscroll
[![npm version](https://img.shields.io/npm/v/react-tiny-autoscroll?logo=npm)](https://www.npmjs.com/package/react-tiny-autoscroll)
[![npm downloads](https://img.shields.io/npm/dw/react-tiny-autoscroll?logo=npm)](https://www.npmjs.com/package/react-tiny-autoscroll)
[![npm size](https://img.shields.io/bundlephobia/minzip/react-tiny-autoscroll?logo=npm)](https://www.npmjs.com/package/react-tiny-autoscroll)
![commit activity](https://img.shields.io/github/commit-activity/y/hosembafer/react-tiny-autoscroll)
![license](https://img.shields.io/github/license/hosembafer/react-tiny-autoscroll)

Automatically scrolls the element when the cursor approaches the boundaries.

### [Demo](https://react-tiny-autoscroll.netlify.app)

Mostly helpful when used in combination with drag and drop-like components which do not support scrollable containers.

## Install via [npm](https://www.npmjs.com/package/react-tiny-autoscroll)

```shell
npm install react-tiny-autoscroll
```

or

```shell
yarn add react-tiny-autoscroll
```

## Usage

```JSX
const containerRef = useRef();

useAutoScroll({
  containerRef,
});

// Making our container scrollable
const style: CSSProperties = {
  height: 400,
  overflowY: "auto",
  border: "1px solid red",
};

return (
  <div ref={containerRef} style={style}>
    {items.map((n) => (
      <Item key={n} />
    )}
  </div>
);
```

## API

- `containerRef` - reference to the scrollable container
- `skip` - lets you disable/enable the scrolling
- `threshold` - distance to boundaries where scrolling will start
- `maxSpeed` - maximum number of pixels allowed to scroll in 10ms
