import React, { FC, useEffect, useRef, useState } from 'react'
import { SearchComponent } from '../../../assets/ts/components'
import { KTSVG, toAbsoluteUrl } from '../../../helpers'
import { useCustomerList } from '../../../../app/modules/customer/core/_hooks'

interface Customers {
  firstName: string
  lastName: string
  mobile: string
}

interface IProps {
  placeholder?: string
  customers?: Customers[]
}

const Search: FC<IProps> = ({ placeholder, customers }) => {
  const [menuState, setMenuState] = useState<'main' | 'advanced' | 'preferences'>('main')
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


  const [searchValue, setSearchValue] = useState('')

  const handleSearch = (e: any) =>  setSearchValue(e.target.value)

  const filtredData = customers?.filter((item: any) => {
    return item.firstName.includes(searchValue)
  })

  const selectedCustomers = (item: any) => {
    setSearchValue(item.firstName + " " + item.lastName)
  }


  return (
    <>
      <div
        id='kt_header_search'
        className='header-search d-flex align-items-center w-100'
        data-kt-search-keypress='true'
        data-kt-search-enter='enter'
        data-kt-search-layout='menu'
        data-kt-search-responsive='false'
        data-kt-menu-trigger='auto'
        data-kt-menu-placement='bottom-end'
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
            value={searchValue}
            onChange={handleSearch}
            data-kt-search-element='input'
          />
          {/*end::Input*/}
        </form>

        <div
          data-kt-search-element='content'
          className='menu menu-sub menu-sub-dropdown p-7 w-325px w-md-375px'
        >
          <div
            className={`${menuState === 'main' ? '' : 'd-none'}`}
            data-kt-search-element='wrapper'
          >
            <div className='d-flex flex-stack fw-bold mb-4'>
              {/*begin::Label*/}
              <span className='text-muted fs-6 me-2'>{placeholder}:</span>
              {/*end::Label*/}
            </div>

            <div className='mb-4'>
              <div className='scroll-y mh-200px mh-lg-325px'>
                <div className='d-flex align-items-center mb-5'>
                  <div className='d-flex flex-column'>
                    {filtredData?.map((item: any) => {
                      return <div className='d-flex justify-content-between mt-5 k-pr-4'>
                        <a onClick={() => selectedCustomers(item)} className='cursor-pointer fs-6 text-gray-800 text-hover-primary fw-bold'>
                          {item.firstName} {item.lastName}
                        </a>
                        <span className='fs-7 text-muted fw-bold k-pr-4'>{item.mobile}</span>
                      </div>

                    })}
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

export { Search }
