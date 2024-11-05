import { useState } from 'react'
import { Card, Container } from 'react-bootstrap'
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'
import PostComponent from './components/PostComponent'
import UpdatingComponent from './components/UpdatingComponent'
import DeletingComponent from './components/DeletingComponent'

function App() {
  const queryClient = new QueryClient()

  return (
    <QueryClientProvider 
    client={queryClient}>
    
    <Container>
    <Card className="m-5">
      <h1 className='m-2'>Data Fetching 🏠</h1>
      <hr />
      <PostComponent />
      <UpdatingComponent />
      <DeletingComponent />
    </Card>
    </Container>
    </QueryClientProvider>
  )
}

export default App
