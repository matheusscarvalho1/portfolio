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



const Home = lazy(() => import('@/pages/Home'))
const Services = lazy(() => import('@/pages/Services'))
const Curriculum = lazy(() => import('@/pages/Curriculum'))
const Projects = lazy(() => import('@/pages/Projects'))
const Contact = lazy(() => import('@/pages/Contact'))
const ErrorPage = lazy(() => import('@/components/common/Error'))

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeProvider defaultTheme="dark" storageKey="portfolio-theme">
    <Toaster position="bottom-right" richColors />
    <BrowserRouter>
      <Suspense fallback={<Loading />}>
        <ApolloProvider client={client}>
          <Routes>
            <Route element={<Layout />}>
              <Route path="/" element={<Home />} />
              <Route path="/services" element={<Services />} />
              <Route path="/curriculum" element={<Curriculum />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/contact" element={<Contact />} />
            </Route>
            <Route path="*" element={<ErrorPage statusCode={404} />} />
          </Routes>
        </ApolloProvider>
      </Suspense>
    </BrowserRouter>
    </ThemeProvider>
  </StrictMode>,
)
