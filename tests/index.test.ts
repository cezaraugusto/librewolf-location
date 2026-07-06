import {expect, test, describe} from 'vitest'

import librewolfLocation, {getInstallGuidance} from '../src/index'

describe('librewolf-location module', () => {
  it('returns string or null', () => {
    const res = librewolfLocation()

    expect(typeof res === 'string' || res === null).toBe(true)
  })

  it('getInstallGuidance renders caller-provided install steps in order', () => {
    const msg = getInstallGuidance({
      steps: [
        {
          summary: 'Install LibreWolf for Testing (recommended)',
          command: 'npx extension install librewolf'
        },
        {
          summary: 'Install LibreWolf',
          command: 'npx extension install librewolf-stable'
        }
      ]
    })

    expect(msg).toMatch(
      new RegExp(
        '1\\) Install LibreWolf for Testing \\(recommended\\)\\n' +
          ' {3}npx extension install librewolf'
      )
    )
    expect(msg).toMatch(
      /2\) Install LibreWolf\n {3}npx extension install librewolf-stable/
    )
    expect(msg).not.toMatch(/Install LibreWolf from the official site/)
    expect(msg).toMatch(/We couldn't find a LibreWolf browser/)
  })

  it('getInstallGuidance with empty steps keeps the default hint', () => {
    expect(getInstallGuidance({steps: []})).toBe(getInstallGuidance())
  })
})
