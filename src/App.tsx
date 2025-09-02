import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => {
  // Handle GitHub Pages SPA routing only in production
  if (typeof window !== 'undefined' && sessionStorage.redirect && import.meta.env.PROD) {
    const redirect = sessionStorage.redirect;
    delete sessionStorage.redirect;
    if (redirect !== location.href) {
      history.replaceState(null, '', redirect.split(location.origin)[1]);
    }
  }

  // Use basename only for GitHub Pages production deployment
  const basename = import.meta.env.PROD ? '/terminal-tales-showcase' : '';

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <div className="dark">
          <Toaster />
          <Sonner />
          <BrowserRouter basename={basename}>
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </BrowserRouter>
        </div>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
