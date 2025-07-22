import React from 'react'
import { Button } from '@/components/ui/Button'


function HomePage() {
  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">Welcome to Taf'Yaa</h1>
      
      <Button variant="primary" onClick={() => alert("Creating tree...")}>
        Create Family Tree
      </Button>

      <Button variant="secondary" size="sm" className="mt-4">
        Join Existing Tree
      </Button>

      <Button variant="danger" disabled className="mt-4">
        Delete Tree (Disabled)
      </Button>

      <Button variant="ghost" size="lg"  className="mt-4">
        View Tree
      </Button>

      <Button variant="link" size="sm" className="mt-5">learn it</Button>

      <Button></Button>

    </div>
  )
}


export default HomePage