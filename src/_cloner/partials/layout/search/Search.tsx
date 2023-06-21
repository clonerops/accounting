import React, {FC, useEffect, useRef, useState} from 'react'
import {SearchComponent} from '../../../assets/ts/components'
import {KTSVG, toAbsoluteUrl} from '../../../helpers'

interface IProps {
  placeholder?: string
}

const Search: FC<IProps> = ({placeholder}) => {
  const [menuState, setMenuState] = useState<'main' | 'advanced' | 'preferences'>('main')
  const element = useRef<HTMLDivElement | null>(null)
  const wrapperElement = useRef<HTMLDivElement | null>(null)
  const resultsElement = useRef<HTMLDivElement | null>(null)
  const suggestionsElement = useRef<HTMLDivElement | null>(null)
  const emptyElement = useRef<HTMLDivElement | null>(null)

  const processs = (search: SearchComponent) => {
    setTimeout(function () {
      const number = Math.floor(Math.random() * 6) + 1

      // Hide recently viewed
      suggestionsElement.current!.classList.add('d-none')

      if (number === 3) {
        // Hide results
        resultsElement.current!.classList.add('d-none')
        // Show empty message
        emptyElement.current!.classList.remove('d-none')
      } else {
        // Show results
        resultsElement.current!.classList.remove('d-none')
        // Hide empty message
        emptyElement.current!.classList.add('d-none')
      }

      // Complete search
      search.complete()
    }, 1500)
  }

  const clear = (search: SearchComponent) => {
    // Show recently viewed
    suggestionsElement.current!.classList.remove('d-none')
    // Hide results
    resultsElement.current!.classList.add('d-none')
    // Hide empty message
    emptyElement.current!.classList.add('d-none')
  }

  useEffect(() => {
    // Initialize search handler
    const searchObject = SearchComponent.createInsance('#kt_header_search')

    // Search handler
    searchObject!.on('kt.search.process', processs)

    // Clear handler
    searchObject!.on('kt.search.clear', clear)
  }, [])

  return (
    <>
      <div
        id='kt_header_search'
        className='header-search d-flex align-items-center w-100'
        data-kt-search-keypress='true'
        data-kt-search-min-length='2'
        data-kt-search-enter='enter'
        data-kt-search-layout='menu'
        data-kt-search-responsive='false'
        data-kt-menu-trigger='auto'
        data-kt-menu-permanent='true'
        data-kt-menu-placement='bottom-end'
        data-kt-search='true'
        ref={element}
      >
        <form
          data-kt-search-element='form'
          className='w-100 position-relative mb-5 mb-lg-0'
          autoComplete='off'
        >
          <KTSVG
            path='/media/icons/duotune/general/gen021.svg'
            className='svg-icon-2 svg-icon-lg-3 svg-icon-gray-800 position-absolute top-50 translate-middle-y ms-5'
          />
          {/*begin::Input*/}
          <input
            type='text'
            className='search-input form-control form-control-solid ps-13'
            name='search'
            placeholder={placeholder}
            data-kt-search-element='input'
          />
          {/*end::Input*/}
          {/*begin::Spinner*/}
          <span
            className='position-absolute top-50 end-0 translate-middle-y lh-0 me-5 d-none'
            data-kt-search-element='spinner'
          >
            <span className='spinner-border h-15px w-15px align-middle text-gray-400'></span>
          </span>
          {/*end::Spinner*/}
          {/*begin::Reset*/}
          <span
            className='btn btn-flush btn-active-color-primary position-absolute top-50 end-0 translate-middle-y lh-0 me-4 d-none'
            data-kt-search-element='clear'
          >
            <KTSVG
              path='/media/icons/duotune/arrows/arr061.svg'
              className='svg-icon svg-icon-2 svg-icon-lg-1 me-0'
            />
          </span>
          {/*end::Reset*/}
        </form>

        <div
          data-kt-search-element='content'
          className='menu menu-sub menu-sub-dropdown p-7 w-325px w-md-375px'
        >
          <div
            className={`${menuState === 'main' ? '' : 'd-none'}`}
            ref={wrapperElement}
            data-kt-search-element='wrapper'
          >
            <div className='d-flex flex-stack fw-bold mb-4'>
              {/*begin::Label*/}
              <span className='text-muted fs-6 me-2'>{placeholder}:</span>
              {/*end::Label*/}
            </div>

            <div ref={suggestionsElement} className='mb-4' data-kt-search-element='main'>
              <div className='scroll-y mh-200px mh-lg-325px'>
                <div className='d-flex align-items-center mb-5'>
                  <div className='symbol symbol-40px me-4'>
                    <span className='symbol-label bg-light'>
                      <KTSVG
                        path='/media/icons/duotune/electronics/elc004.svg'
                        className='svg-icon-2 svg-icon-primary'
                      />
                    </span>
                  </div>

                  <div className='d-flex flex-column'>
                    <a href='/#' className='fs-6 text-gray-800 text-hover-primary fw-bold'>
                      BoomApp by Keenthemes
                    </a>
                    <span className='fs-7 text-muted fw-bold'>#45789</span>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </>
  )
}

export {Search}
