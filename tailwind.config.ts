import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      fontFamily: {
        // DESIGN-ollama.md: system-ui body, rounded display (Nunito substitute
        // for SF Pro Rounded), monospace code (JetBrains Mono).
        body: [
          "-apple-system",
          "system-ui",
          "Segoe UI",
          "Helvetica",
          "Arial",
          "sans-serif",
        ],
        headline: [
          "var(--font-display)",
          "-apple-system",
          "system-ui",
          "sans-serif",
        ],
        code: ["var(--font-mono)", "ui-monospace", "SFMono-Regular", "Menlo", "monospace"],
      },
      colors: {
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        // --- DESIGN-ollama.md flat B&W palette ---
        // Named keys retained but repointed to the Ollama grayscale so any
        // existing markup referencing them stays on-brand (pure black/white).
        canvas: "#ffffff", // paper-white canvas end-to-end
        night: "#171717", // surface-dark — the single inverted "Max" band
        ink: {
          DEFAULT: "#000000", // ink — headings, primary CTA fill
          press: "#090909", // ink-deep — pressed state
        },
        lime: {
          DEFAULT: "#000000", // no lime — emphasis is plain ink
          foreground: "#ffffff",
        },
        pink: "#000000", // no accent hues
        violet: {
          deep: "#171717", // repurposed to surface-dark
          mid: "#525252", // charcoal
          link: "#000000", // inline links are ink
        },
        hairline: {
          DEFAULT: "#e5e5e5", // hairline
          cloud: "#e5e5e5", // hairline
          cool: "#d4d4d4", // hairline-strong — form-field borders
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        chart: {
          "1": "hsl(var(--chart-1))",
          "2": "hsl(var(--chart-2))",
          "3": "hsl(var(--chart-3))",
          "4": "hsl(var(--chart-4))",
          "5": "hsl(var(--chart-5))",
        },
        sidebar: {
          DEFAULT: "hsl(var(--sidebar-background))",
          foreground: "hsl(var(--sidebar-foreground))",
          primary: "hsl(var(--sidebar-primary))",
          "primary-foreground": "hsl(var(--sidebar-primary-foreground))",
          accent: "hsl(var(--sidebar-accent))",
          "accent-foreground": "hsl(var(--sidebar-accent-foreground))",
          border: "hsl(var(--sidebar-border))",
          ring: "hsl(var(--sidebar-ring))",
        },
      },
      borderRadius: {
        // DESIGN-ollama.md: pills use rounded-full; cards use lg (12px).
        xs: "6px",
        sm: "8px",
        md: "10px",
        lg: "12px",
        xl: "14px",
        "2xl": "16px",
      },
      boxShadow: {
        // DESIGN-ollama.md: no drop shadows — depth comes from hairlines only.
        // Keys retained as effectively-flat no-ops for any lingering usage.
        soft: "none",
        "lift-sm": "none",
        card: "none",
        elevated: "none",
        glow: "none",
        press: "none",
      },
      keyframes: {
        "accordion-down": {
          from: {
            height: "0",
          },
          to: {
            height: "var(--radix-accordion-content-height)",
          },
        },
        "accordion-up": {
          from: {
            height: "var(--radix-accordion-content-height)",
          },
          to: {
            height: "0",
          },
        },
        scroll: {
          to: {
            transform: 'translate(calc(-50% - 0.5rem))',
          },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        scroll: 'scroll 40s linear infinite',
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
