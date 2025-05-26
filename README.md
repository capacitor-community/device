# @capacitor-community/device

This plugin offers the API which has been removed from @capacitor/device plugin in v7.0 (getInfo() no longer returns diskFree, diskTotal, realDiskFree and realDiskTotal) as some apps still require this

## Install

```bash
npm install @capacitor-community/device
npx cap sync
```

## API

<docgen-index>

* [`echo(...)`](#echo)

</docgen-index>

<docgen-api>
<!--Update the source file JSDoc comments and rerun docgen to update the docs below-->

### echo(...)

```typescript
echo(options: { value: string; }) => Promise<{ value: string; }>
```

| Param         | Type                            |
| ------------- | ------------------------------- |
| **`options`** | <code>{ value: string; }</code> |

**Returns:** <code>Promise&lt;{ value: string; }&gt;</code>

--------------------

</docgen-api>
