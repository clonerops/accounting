import {KTSVG, toAbsoluteUrl} from '../../../helpers'
import { HeaderUserMenu, QuickLinks} from '../../../partials'

const AsideFooter = () => {
  return (
    <div
      className='aside-footer d-flex flex-column align-items-center flex-column-auto'
      id='kt_aside_footer'
    >

      {/* begin::User */}
      <div className='d-flex align-items-center mb-10' id='kt_header_user_menu_toggle'>
        {/* begin::Menu wrapper */}
        <div
          className='cursor-pointer symbol symbol-40px'
          data-kt-menu-trigger='click'
          data-kt-menu-overflow='false'
          data-kt-menu-placement='top-start'
          title='User profile'
        >
          <img src={toAbsoluteUrl('/media/avatars/pr.jpg')} alt='avatar' />
        </div>
        {/* end::Menu wrapper */}
        <HeaderUserMenu />
      </div>
      {/* end::User */}
    </div>
  )
}

export {AsideFooter}
