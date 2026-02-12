import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import Reports from "./pages/Reports";
import TeamCollaboration from "./pages/TeamCollaboration";

/**
 * NEWMAP-EIB Nasarawa State - Erosion Control Project Management
 * Design: Institutional Authority with Green Sustainability Focus
 * 
 * Color Scheme: Forest Green (#1B5E20) primary with Teal (#00897B) accents
 * Typography: Poppins (headings) + Inter (body)
 * Layout: Asymmetric sidebar navigation with role-based access
 */

function Router() {
  return (
    <Switch>
      <Route path={"/"} component={Home} />
      <Route path={"/dashboard"} component={Dashboard} />
      <Route path={"/reports"} component={Reports} />
      <Route path={"/team"} component={TeamCollaboration} />
      <Route path={"/404"} component={NotFound} />
      {/* Final fallback route */}
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider defaultTheme="light">
        <TooltipProvider>
          <Toaster />
          <Router />
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
