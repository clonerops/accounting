import {KTSVG, toAbsoluteUrl} from '../../../helpers'
import { HeaderUserMenu, QuickLinks} from '../../../partials'

const AsideFooter = () => {
  return (
    <div
      className='aside-footer d-flex flex-column align-items-center flex-column-auto'
      id='kt_aside_footer'
    >
      {/* begin::Quick links */}
      <div className='d-flex align-items-center mb-2'>
        {/* begin::Menu wrapper */}
        <div
          className='btn btn-icon btn-active-color-primary btn-color-gray-400 btn-active-light'
          data-kt-menu-trigger='click'
          data-kt-menu-overflow='true'
          data-kt-menu-placement='top-start'
          data-bs-toggle='tooltip'
          data-bs-placement='right'
          data-bs-dismiss='click'
          title='Quick links'
        >
          <KTSVG
            path='/media/icons/duotune/general/gen022.svg'
            className='svg-icon-2 svg-icon-lg-1'
          />
        </div>
        {/* end::Menu wrapper */}
        <QuickLinks backgroundUrl='/media/misc/pattern-1.jpg' />
      </div>
      {/* end::Quick links */}

      {/* begin::Activities */}
      <div className='d-flex align-items-center mb-3'>
        {/* begin::Drawer toggle */}
        <div
          className='btn btn-icon btn-active-color-primary btn-color-gray-400 btn-active-light'
          data-kt-menu-trigger='click'
          data-kt-menu-overflow='true'
          data-kt-menu-placement='top-start'
          data-bs-toggle='tooltip'
          data-bs-placement='right'
          data-bs-dismiss='click'
          title='Activity Logs'
          id='kt_activities_toggle'
        >
          <KTSVG
            path='/media/icons/duotune/general/gen032.svg'
            className='svg-icon-2 svg-icon-lg-1'
          />
        </div>
        {/* end::drawer toggle */}
      </div>
      {/* end::Activities */}

      {/* begin::Notifications */}
      <div className='d-flex align-items-center mb-2'>
        {/* begin::Menu wrapper */}
        <div
          className='btn btn-icon btn-active-color-primary btn-color-gray-400 btn-active-light'
          data-kt-menu-trigger='click'
          data-kt-menu-overflow='true'
          data-kt-menu-placement='top-start'
          data-bs-toggle='tooltip'
          data-bs-placement='right'
          data-bs-dismiss='click'
          title='Notifications'
        >
          <KTSVG
            path='/media/icons/duotune/general/gen025.svg'
            className='svg-icon-2 svg-icon-lg-1'
          />
        </div>
        {/* end::Menu wrapper */}
      </div>
      {/* end::Notifications */}

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
          <img src={toAbsoluteUrl('/media/avatars/300-1.jpg')} alt='avatar' />
        </div>
        {/* end::Menu wrapper */}
        <HeaderUserMenu />
      </div>
      {/* end::User */}
    </div>
  )
}

export {AsideFooter}