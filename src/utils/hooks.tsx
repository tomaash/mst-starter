import { useEffect } from 'react'
export const useMount = cb => {
  return useEffect(cb, [])
}
