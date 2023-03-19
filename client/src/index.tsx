import { ChakraProvider, ColorModeScript } from "@chakra-ui/react"
import * as React from "react"
import * as ReactDOM from "react-dom/client"
import { BrowserRouter, Route, RouterProvider, Routes } from "react-router-dom"
import theme from "./theme"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import AuthProvider from "./context/AuthProvider"
import { App } from "./App"
import Login from "./components/Login"
import ProtectedRouter from "./components/ProtectedRoute"

const container = document.getElementById("root")
if (!container) throw new Error('Failed to find the root element');
const root = ReactDOM.createRoot(container)

root.render(
  <React.StrictMode>
    <ColorModeScript initialColorMode={theme.config.initialColorMode}/>
    <ChakraProvider theme={theme}>
        <BrowserRouter>
          <AuthProvider>
            <Routes>
              <Route path="/" element={<ProtectedRouter/>}>
                <Route index element={<App />} />
              </Route>
              <Route path="/" element={<App />} />
              <Route path="/login" element={<Login />} />
            </Routes>
          </AuthProvider>
        </BrowserRouter>
      <ToastContainer />
    </ChakraProvider>
  </React.StrictMode>,
)

