import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Feedback from "./components/Feedback";
import Home from "./components/Home";
import Footer from "./components/Footer";
import Vision from "./components/Vision";
import Mission from "./components/Mission";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow">
          <Home />
          <About />
          <Vision />
          <Mission />
          <Feedback />
          <Footer />
        </main>
      </div>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
