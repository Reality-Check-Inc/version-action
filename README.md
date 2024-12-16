# version-action
github action to get a version number from tags

This action get the current unix time stamp and tag as a version

## Inputs

### `vartime`

**Options** Repository variable to hold the time stamp.

### `varversion`

**Options** Repository variable to hold the version.

## Outputs

### `time`

The current unix time stamp.

### `version`

The current tag as a version.

## Example usage

```yaml
- name: Get Data
  id: info
  uses: Reality-Check-Inc/version-action@v0.1
  with:
    vartime: 'nuget_timestamp'
    varversion: 'nuget_version'
  env:
    GH_TOKEN: ${{ secrets.PAT }}
```
