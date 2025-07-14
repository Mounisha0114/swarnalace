import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Bedding from "./pages/Bedding";
import Garments from "./pages/Garments";
import TableCloths from "./pages/TableCloths";
import PillowCases from "./pages/PillowCases";
import ToteBags from "./pages/ToteBags";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/bedding" element={<Bedding />} />
          <Route path="/garments" element={<Garments />} />
          <Route path="/tablecloths" element={<TableCloths />} />
          <Route path="/pillowcases" element={<PillowCases />} />
          <Route path="/totebags" element={<ToteBags />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
