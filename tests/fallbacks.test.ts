import {afterEach, describe, expect, it, vi} from 'vitest'

/* Biome-ignore-all lint/suspicious/noExplicitAny: test harness uses dynamic imports with untyped injected deps */

describe('librewolf-location scanners', () => {
  afterEach(() => {
    vi.restoreAllMocks()
    vi.resetModules()
  })

  it('macOS: finds LibreWolf in /Applications', async () => {
    const scanOsxPath = (await import('../src/scan-osx-path')).default as any
    const found = scanOsxPath(false, {
      fs: {existsSync: (p: string) => p.includes('LibreWolf.app')},
      userhome: () => '/Users/test/Applications'
    })

    expect(typeof found === 'string' && /LibreWolf\.app/.test(found)).toBe(true)
  })

  it('macOS: checks the user Applications directory too', async () => {
    const scanOsxPath = (await import('../src/scan-osx-path')).default as any
    const found = scanOsxPath(false, {
      fs: {existsSync: (p: string) => p.startsWith('/Users/test/Applications')},
      userhome: () => '/Users/test/Applications'
    })

    expect(
      typeof found === 'string' && found.startsWith('/Users/test/Applications')
    ).toBe(true)
  })

  it('macOS: returns null when not installed', async () => {
    const scanOsxPath = (await import('../src/scan-osx-path')).default as any

    expect(
      scanOsxPath(false, {
        fs: {existsSync: () => false},
        userhome: () => '/Users/test/Applications'
      })
    ).toBeNull()
  })

  it('Windows: finds librewolf.exe under a known prefix', async () => {
    const scanWindowsPath = (await import('../src/scan-windows-path'))
      .default as any
    const found = scanWindowsPath(false, {
      fs: {existsSync: (p: string) => /librewolf\.exe$/i.test(p)},
      env: {LOCALAPPDATA: 'C:\\Local'} as any
    })

    expect(typeof found === 'string' && /librewolf\.exe$/i.test(found)).toBe(
      true
    )
  })

  it('Windows: returns null when not installed', async () => {
    const scanWindowsPath = (await import('../src/scan-windows-path'))
      .default as any

    expect(
      scanWindowsPath(false, {
        fs: {existsSync: () => false},
        env: {LOCALAPPDATA: 'C:\\Local'} as any
      })
    ).toBeNull()
  })

  it('Linux/other: resolves librewolf via which', async () => {
    const scanUnknown = (await import('../src/scan-unknown-platform-path'))
      .default as any
    const found = scanUnknown(false, {
      which: {
        sync: (cmd: string) => {
          if (cmd === 'librewolf') return '/usr/bin/librewolf'
          throw new Error('not found')
        }
      }
    })

    expect(found).toBe('/usr/bin/librewolf')
  })

  it('Linux/other: returns null when which finds nothing', async () => {
    const scanUnknown = (await import('../src/scan-unknown-platform-path'))
      .default as any

    expect(
      scanUnknown(false, {
        which: {
          sync: () => {
            throw new Error('not found')
          }
        }
      })
    ).toBeNull()
  })
})
