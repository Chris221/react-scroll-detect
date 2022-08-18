[![Version](https://img.shields.io/npm/v/@chris221/react-scroll-detect)](https://www.npmjs.com/package/@chris221/react-scroll-detect)
[![Build status](https://ci.appveyor.com/api/projects/status/7nuk7aqsi6nq7c5l?svg=true)](https://ci.appveyor.com/project/Chris221/react-scroll-detect)
[![Bundle size](https://img.shields.io/bundlephobia/minzip/@chris221/react-scroll-detect)](https://bundlephobia.com/package/@chris221/react-scroll-detect)
![License](https://img.shields.io/npm/l/@chris221/react-scroll-detect)


# react-scroll-detect
A set of utility components to watch scroll changes.

[Codesandbox demo](https://codesandbox.io/s/inspiring-goldwasser-5k13y?fontsize=14&hidenavigation=1&theme=dark)

## Install

`npm install --save @chris221/react-scroll-detect`

or

`yarn add @chris221/react-scroll-detect`

### Fork

Forked from [g30elipse/react-scroll-detect](https://github.com/g30elipse/react-scroll-detect)

### Components


#### DetectSection
Wrap your component with `DetectSection` to attach it to the listener. `ReactScrollDetect` will call `onChange` 
event whenever the component wrapped with `DetectSection` enters the viewport.

##### props
| props    | signature               | required       | description |
|------    | --------------         | ----           | ----------- |
| - | - | - | - |


#### ReactScrollDetect
This is a wrapper component for your scrollable component. Wrap your component with `ReactScrollDetect` and attach the `onChange` listener.

##### props
| props    | signature               | required   | default value     | description |
|------    | --------------         | ----        | -----------       | -------- |
| onChange | (index: number) => void | false      | () => null        | Function which is exectuted when a new section enters the viewport |
| triggerPoint | 'center', 'top', 'bottom | false | 'center'        | Trigger point for DetectSection (default: center) |
| index    | number                  | false      | 0    | This spectifies which section(index) the needs to be scrolled to the viewport.(note: this is an experimental feature)  |
| offset    | number                  | false      |0     |The offset from the top (of the screen) for the scroll to snap |


#### Example
```typescript
import ReactScrollDetect, { DetectSection } from 'react-scroll-detect';
```

```jsx
<ReactScrollDetect triggerPoint='center' onChange={handleSectionChange}>
  <DetectSection>
    <div style={{height: 500}}/>
  </DetectSection>
  <DetectSection>
    <div style={{height: 700}}/>
  </DetectSection>
  <DetectSection>
    <div style={{height: 400}}/>
  </DetectSection>
</ReactScrollDetect>
```
