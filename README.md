# react-tiny-autoscroll

Automatically scrolls the element when the cursor approaches the boundaries.

### [Demo](https://react-tiny-autoscroll-example.netlify.app)

Mostly useful when used in combination with drag and drop-like components which do not support scrollable containers.

## Install

```shell
yarn add react-tiny-autoscroll
```

or

```shell
npm install react-tiny-autoscroll
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
