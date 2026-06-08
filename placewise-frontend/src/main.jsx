import React, { useEffect } from 'react'
import ReactDOM from 'react-dom/client'
import { Provider, useDispatch } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import { Toaster } from 'react-hot-toast'
import App from './App.jsx'
import store from './store.js'
import './index.css'
import { useSocket } from '@/hooks/useSocket'
import { fetchMe } from '@/features/auth/authSlice'
import { ThemeProvider } from '@/hooks/useTheme'

function AppShell() {
  const dispatch = useDispatch()
  useSocket()

  useEffect(() => {
    dispatch(fetchMe())
  }, [dispatch])

  return <App />
}

// ── Singleton root guard ──────────────────────────────────────────────────────
// Vite HMR re-executes this module on every hot reload.
// Without this guard, each reload calls createRoot() on the same #root element,
// causing the "container already passed to createRoot" warning and cascading
// DOM removeChild/insertBefore errors that crash LoginPage and ProtectedRoute.
// Storing the root on window means HMR updates call root.render() (safe)
// instead of createRoot() again (crashes).
const container = document.getElementById('root')

let root = window.__placewise_root__
if (!root) {
  root = ReactDOM.createRoot(container)
  window.__placewise_root__ = root
}

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <ThemeProvider>
        <BrowserRouter>
          <AppShell />
          <Toaster
            position="top-right"
            gutter={8}
            toastOptions={{
              duration: 4000,
              style: {
                background:   'rgb(var(--toast-bg))',
                color:        'rgb(var(--toast-text))',
                fontSize:     '0.875rem',
                borderRadius: '0.75rem',
                padding:      '12px 16px',
                border:       '1px solid rgb(var(--surface-border))',
              },
              success: { iconTheme: { primary: '#16a34a', secondary: 'rgb(var(--toast-bg))' } },
              error:   { iconTheme: { primary: '#dc2626', secondary: 'rgb(var(--toast-bg))' } },
            }}
          />
        </BrowserRouter>
      </ThemeProvider>
    </Provider>
  </React.StrictMode>,
)
