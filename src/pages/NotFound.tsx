import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Home } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <main id="main-content" className="flex min-h-screen items-center justify-center bg-background" tabIndex={-1}>
      <div className="text-center px-6">
        <h1 className="mb-4 text-8xl font-extrabold text-primary">404</h1>
        <p className="mb-2 text-2xl font-semibold text-foreground">Page not found</p>
        <p className="mb-8 text-muted-foreground max-w-md mx-auto">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <Button variant="hero" size="lg" asChild>
          <a href="/">
            <Home className="w-4 h-4 mr-2" />
            Back to Home
          </a>
        </Button>
      </div>
    </main>
  );
};

export default NotFound;
