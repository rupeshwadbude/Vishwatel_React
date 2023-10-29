import { Outlet } from 'react-router-dom'

import routesMap from '../../../routeControl/adminRoutes'
import { PromoCode } from '../../../pages'

export default function route() {
  return [
    {
      path: routesMap.PROMO.path,
      private: true,
      name: 'Manage Promo Code',
      key: routesMap.PROMO.path,
      belongsToSidebar: true,
      icon: routesMap.PROMO.icon,
      element: <Outlet />,
      children: [
        {
          path: routesMap.PROMO_CODE.path,
          private: true,
          name: 'Promo Code ',
          key: routesMap.PROMO_CODE.path,
          belongsToSidebar: true,
          icon: routesMap.PROMO_CODE.icon,
          element: <PromoCode />
        }
      ]
    }
  ]
}
