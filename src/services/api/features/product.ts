import { handleApiError } from '../helper'
import { instance } from '../instance'

export default {
  async getAll<TRes>(): Promise<TRes> {
    try {
      const response = await instance.get<TRes>('/products')
      return response.data
    } catch (err) {
      handleApiError(err, 'getAll')
    }
  },
  async getById<TRes>(id: string): Promise<TRes> {
    try {
      const response = await instance.get<TRes>(`/products/${id}`)
      return response.data
    } catch (err) {
      handleApiError(err, 'getById')
    }
  },
}
