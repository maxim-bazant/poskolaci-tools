import { createRoot } from 'react-dom/client'
import { createBrowserRouter, Navigate, RouterProvider } from 'react-router-dom'
import { StrictMode } from 'react';
import "./main.css"
import FlashCardMakerApp from './tools-pages/flashcard-maker/App';
import MainLayout from './layout/MainLayout';
import SlideShowApp from './tools-pages/slideshow/App';


const router = createBrowserRouter([
  {
    path: "/poskolaci-tools",
    element: <MainLayout />,
    children: [
      {
        index: true, // This matches "/poskolaci-tools"
        element: <Navigate to="flashcard-maker" replace />
      },
      {
        path: "flashcard-maker",
        element: <FlashCardMakerApp />
      },
      {
        path: "slide-show",
        element: <SlideShowApp />
      },
    ]
  },
]);



createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
)
