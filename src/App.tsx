import { lazy, Suspense } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";

const HomePage = lazy(() => import("./pages/marketing/HomePage"));
const ProductOverviewPage = lazy(() => import("./pages/marketing/ProductOverviewPage"));
const CheckoutPage = lazy(() => import("./pages/marketing/CheckoutPage"));
const CommerceRulesPage = lazy(() => import("./pages/marketing/CommerceRulesPage"));
const QuotesPortalPage = lazy(() => import("./pages/marketing/QuotesPortalPage"));
const IntelligencePage = lazy(() => import("./pages/marketing/IntelligencePage"));
const UseCasesPage = lazy(() => import("./pages/marketing/UseCasesPage"));
const UseCaseDetailPage = lazy(() => import("./pages/marketing/UseCaseDetailPage"));
const PricingPage = lazy(() => import("./pages/marketing/PricingPage"));
const EarlyAccessPage = lazy(() => import("./pages/marketing/EarlyAccessPage"));
const Privacy = lazy(() => import("./pages/Privacy"));
const TrustSupport = lazy(() => import("./pages/TrustSupport"));
const NotFound = lazy(() => import("./pages/NotFound"));

const queryClient = new QueryClient();
const PageLoader = () => <div className="mkt-route-loader" role="status"><span>Loading XO</span></div>;

const App = () => (
  <HelmetProvider>
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster /><Sonner />
        <BrowserRouter>
          <Suspense fallback={<PageLoader />}>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/xo-wp" element={<ProductOverviewPage />} />
              <Route path="/xo-wp/checkout" element={<CheckoutPage />} />
              <Route path="/xo-wp/commerce-rules" element={<CommerceRulesPage />} />
              <Route path="/xo-wp/quotes-and-portal" element={<QuotesPortalPage />} />
              <Route path="/xo-wp/intelligence" element={<IntelligencePage />} />
              <Route path="/use-cases" element={<UseCasesPage />} />
              <Route path="/use-cases/:slug" element={<UseCaseDetailPage />} />
              <Route path="/pricing" element={<PricingPage />} />
              <Route path="/early-access" element={<EarlyAccessPage />} />
              <Route path="/checkout-demo" element={<Navigate to="/xo-wp/checkout#gallery" replace />} />
              <Route path="/privacy" element={<Privacy />} />
              <Route path="/trust" element={<TrustSupport />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Suspense>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  </HelmetProvider>
);

export default App;
