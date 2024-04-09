// Inventory.tsx
import React from 'react'
import { useGetInventoryQuery } from '../store/petApi'

interface InventoryProps {}

const Inventory: React.FC<InventoryProps> = () => {
  const { data, isLoading, isError } = useGetInventoryQuery()

  if (isLoading) {
    return <div>Loading inventory...</div>
  }

  if (isError) {
    return <div>Error fetching inventory</div>
  }

  return (
    <div>
      <h2>Inventory</h2>
     <> {data}</>
    </div>
  )
}

export default Inventory