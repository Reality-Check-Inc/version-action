# version-action
github action to get a version number from tags

This action get the current unix time stamp and tag as a version

## Inputs

None

## Outputs

### `time`

The current unix time stamp.

### `version`

The current tag as a version.

## Example usage

```yaml
- name: Get Data
  id: info
  uses: Reality-Check-Inc/version-action@v1.0

- name: Set the output time and version variables
  run: |
    echo "nug_time=${{ steps.info.outputs.time }}" | Out-File -FilePath $env:GITHUB_ENV -Append
    echo "nug_version=${{ steps.info.outputs.version }}" | Out-File -FilePath $env:GITHUB_ENV -Append

- name: Show the current output time and version.
  run: |
    echo "${{ env.nug_time }}"
    echo "${{ env.nug_version }}"    
```
