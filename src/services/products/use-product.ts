import useSWR from 'swr'
import { ApiContext, Product } from '@/types/data'

export type UseProductProps = {
  id: number
  initial?: Product
}

export type UseProduct = {
  product?: Product
  isLoading?: boolean
  isError: boolean
}

const useProduct = (
  context: ApiContext,
  { id, initial }: UseProductProps,
): UseProduct => {
  const { data, error } = useSWR<Product>(
    `${context.apiRootUrl}/products/${id}`,
  )

  return {
    product: data ?? initial,
    isLoading: !error && !data,
    isError: error,
  }
}

export default useProduct
