import { lazy, StrictMode, Suspense } from 'react'
import { createRoot } from 'react-dom/client'
import { Routes, Route, BrowserRouter } from "react-router";
import '@/index.css'
import Loading from '@/components/common/Loading';
import { ApolloProvider } from "@apollo/client/react";
import { client } from '@/apollo/client';
import Layout from "@/components/common/Layout"; 
import { Toaster } from "@/components/ui/sonner"
import { ThemeProvider } from "@/components/theme-provider"
import { I18nextProvider } from 'react-i18next';
import i18n from '@/lib/i18n';

const Home = lazy(() => import('@/pages/Home'))
const Services = lazy(() => import('@/pages/Services'))
const Resume = lazy(() => import('@/pages/Resume'))
const Projects = lazy(() => import('@/pages/Projects'))
const Contact = lazy(() => import('@/pages/Contact'))
const Error404Page = lazy(() => import ('@/components/common/Error-404'))

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <I18nextProvider i18n={i18n}>
      <ThemeProvider defaultTheme="dark" storageKey="portfolio-theme">
      <Toaster position="bottom-right" richColors />
      <BrowserRouter>
        <Suspense fallback={<Loading />}>
          <ApolloProvider client={client}>
            <Routes>
              <Route element={<Layout />}>
                <Route path="/" element={<Home />} />
                <Route path="/services" element={<Services />} />
                <Route path="/resume" element={<Resume />} />
                <Route path="/projects" element={<Projects />} />
                <Route path="/contact" element={<Contact />} />
              </Route>
              <Route path="*" element={<Error404Page />} />
            </Routes>
          </ApolloProvider>
        </Suspense>
      </BrowserRouter>
      </ThemeProvider>
    </I18nextProvider>
  </StrictMode>,
)
