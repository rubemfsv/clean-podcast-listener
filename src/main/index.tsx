import React from 'react'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

const rootElement = document.getElementById('main') as Element
const root = createRoot(rootElement)

root.render(
  <StrictMode>
    <h1>Hello World</h1>
  </StrictMode>
)