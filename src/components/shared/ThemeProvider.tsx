"use client"

import * as React from "react"

interface ThemeProviderProps {
  children: React.ReactNode
  attribute?: string
  defaultTheme?: string
  enableSystem?: boolean
  forcedTheme?: string
  disableTransitionOnChange?: boolean
  storageKey?: string
  themes?: string[]
  value?: Record<string, string>
}

interface ThemeContextType {
  theme?: string
  setTheme: (theme: string) => void
  forcedTheme?: string
  resolvedTheme?: string
  themes: string[]
  systemTheme?: "dark" | "light"
}

const ThemeContext = React.createContext<ThemeContextType>({
  theme: "dark",
  setTheme: () => {},
  forcedTheme: "dark",
  resolvedTheme: "dark",
  themes: ["dark", "light"],
  systemTheme: "dark",
})

export const useTheme = () => React.useContext(ThemeContext)

export function ThemeProvider({
  children,
  defaultTheme = "dark",
  forcedTheme = "dark",
  storageKey = "theme",
  attribute = "class",
}: ThemeProviderProps) {
  const [theme, setThemeState] = React.useState<string>(forcedTheme || defaultTheme)

  const applyTheme = React.useCallback(
    (newTheme: string) => {
      if (typeof window === "undefined") return
      const root = document.documentElement
      const targetTheme = forcedTheme || newTheme
      if (attribute === "class") {
        root.classList.remove("light", "dark")
        root.classList.add(targetTheme)
      } else {
        root.setAttribute(attribute, targetTheme)
      }
      root.style.colorScheme = targetTheme
    },
    [attribute, forcedTheme]
  )

  const setTheme = React.useCallback(
    (newTheme: string) => {
      if (forcedTheme) return
      setThemeState(newTheme)
      try {
        localStorage.setItem(storageKey, newTheme)
      } catch {}
      applyTheme(newTheme)
    },
    [applyTheme, forcedTheme, storageKey]
  )

  React.useEffect(() => {
    applyTheme(forcedTheme || theme)
  }, [applyTheme, forcedTheme, theme])

  const contextValue = React.useMemo(
    () => ({
      theme: forcedTheme || theme,
      setTheme,
      forcedTheme,
      resolvedTheme: forcedTheme || theme,
      themes: ["dark", "light"],
      systemTheme: "dark" as const,
    }),
    [forcedTheme, theme, setTheme]
  )

  return <ThemeContext.Provider value={contextValue}>{children}</ThemeContext.Provider>
}

