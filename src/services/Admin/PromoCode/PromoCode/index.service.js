import { PromoCode } from '../../../../apiEndPoints'
import { logger } from '../../../../utils'
import APIrequest from '../../../axios'

export const ManagePromoCodeServices = {
  getPromoCodeList: async ({ queryParams }) => {
    try {
      const payload = {
        ...PromoCode.getAllPromoCodeList,
        queryParams
      }
      const res = await APIrequest(payload)
      return res
    } catch (error) {
      logger(error)
      throw error
    }
  },
  addPromoCodeService: async (bodyData) => {
    try {
      const payload = {
        ...PromoCode.addPromoCode,
        bodyData
      }
      const res = await APIrequest(payload)
      return res
    } catch (error) {
      logger(error)
      throw error
    }
  },
  updatePromoCodeStatus: async (id, bodyData) => {
    try {
      const payload = {
        ...PromoCode.promoCodeStatusUpdate(id),
        bodyData
      }
      const res = await APIrequest(payload)
      return res
    } catch (error) {
      logger(error)
    }
  },

  deletePromoCodeService: async (id) => {
    try {
      const payload = {
        ...PromoCode.deletePromoCode(id)
      }
      const res = await APIrequest(payload)
      return res
    } catch (error) {
      logger(error)
      throw error
    }
  },
  getPromoCodeDetailService: async (id) => {
    try {
      const payload = {
        ...PromoCode.getPromoCodeDetail(id)
      }
      return await APIrequest(payload)
    } catch (error) {
      logger(error)
    }
  },
  updatePromoCodeService: async (promoCodeId, bodyData) => {
    try {
      const payload = {
        ...PromoCode.updatePromoCode(promoCodeId),
        bodyData
      }
      return await APIrequest(payload)
    } catch (error) {
      logger(error)
    }
  },
  getAllProductService: async ({ queryParams }) => {
    try {
      const payload = {
        ...PromoCode.getAllProduct,
        queryParams
      }
      return await APIrequest(payload)
    } catch (error) {
      logger(error)
      throw error
    }
  }
}
