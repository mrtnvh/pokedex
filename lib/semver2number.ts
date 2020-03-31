import * as semverUtils from 'semver-utils'

export default (semver: string) => {
  const { major, minor, patch, prerelease } = semverUtils.parse(semver)

  const prereleaseNumber = prerelease && prerelease.split('-')[1]

  return (
    1000 * major * 1000 * 1000 +
    1000 * minor * 1000 +
    1000 * patch +
    (prereleaseNumber ? prereleaseNumber - 1000 : 0)
  )
}
