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
}
