import { Button } from '../components/ui/button'
import { Moon, Sun } from 'lucide-react'

interface ThemeToggleProps { isDark: boolean; onToggle: () => void }

export function ThemeToggle({ isDark, onToggle }: ThemeToggleProps) {
  return (
    <Button variant="outline" size="icon" onClick={onToggle} className="h-9 w-9">
      {isDark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
      <span className="sr-only">Toggle theme</span>
    </Button>
  )
}
