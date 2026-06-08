import { Moon, Sun } from 'lucide-react'
import { useTheme } from '@/hooks/useTheme'

/**
 * ThemeToggle — switches between light and warm dark themes.
 * variant: 'icon' (compact) | 'full' (icon + label, used in sidebar)
 */
export default function ThemeToggle({ variant = 'icon', className = '' }) {
  const { theme, toggleTheme } = useTheme()
  const isDark = theme === 'dark'

  if (variant === 'full') {
    return (
      <button
        onClick={toggleTheme}
        className={`nav-link w-full ${className}`}
        aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
      >
        {isDark ? <Sun size={15} className="shrink-0" /> : <Moon size={15} className="shrink-0" />}
        <span>{isDark ? 'Light mode' : 'Dark mode'}</span>
      </button>
    )
  }

  return (
    <button
      onClick={toggleTheme}
      className={`inline-flex items-center justify-center w-9 h-9 rounded-lg border border-surface-border bg-surface text-ink-secondary hover:text-ink hover:bg-surface-subtle transition-colors ${className}`}
      aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
    >
      {isDark ? <Sun size={16} /> : <Moon size={16} />}
    </button>
  )
}
