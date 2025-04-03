
import { Moon, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useAppContext } from "@/context/AppContext";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";
import { Switch } from "@/components/ui/switch";

const ThemeToggle = () => {
  const { theme, toggleTheme } = useAppContext();
  const isDark = theme === "dark";

  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <div className="flex items-center space-x-2 bg-background/80 backdrop-blur-sm p-2 rounded-full shadow-md border border-border">
          <Sun className={`h-4 w-4 ${isDark ? 'text-muted-foreground' : 'text-yellow-500'}`} />
          <Switch
            checked={isDark}
            onCheckedChange={toggleTheme}
            className="data-[state=checked]:bg-slate-700"
          />
          <Moon className={`h-4 w-4 ${isDark ? 'text-blue-400' : 'text-muted-foreground'}`} />
        </div>
      </TooltipTrigger>
      <TooltipContent side="left">
        <p>Switch to {theme === "light" ? "dark" : "light"} mode</p>
      </TooltipContent>
    </Tooltip>
  );
};

export default ThemeToggle;
