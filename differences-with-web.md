1. default `flex` direction is **column**, not row

2. Styles do not cascade, no inheritance

3. some styles not supported in all platforms e.g. borderRadius for text in iOS, for these need an extra wrapper `<View>`

4. There is no `box-shadow` in react native, the equivalent is **elevation** for android and **shadow-prefixed** properties for iOS:

```
    elevation: 4,
    shadowColor: "black",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowRadius: 6,
    shadowOpacity: 0.25,
```
