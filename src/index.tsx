import {createRoot} from 'react-dom/client'
// Axios
import {Chart, registerables} from 'chart.js'
import {QueryClient, QueryClientProvider} from 'react-query'
import {ReactQueryDevtools} from 'react-query/devtools'
import './_cloner/assets/sass/style.react.scss'
import './_cloner/assets/css/style.rtl.css'
import '@progress/kendo-theme-default/dist/all.css';


import {AppRoutes} from './app/routing/AppRoutes'
import {ThemeModeProvider} from './_cloner/partials/layout/theme-mode/ThemeModeProvider'
Chart.register(...registerables)

const queryClient = new QueryClient()
const container = document.getElementById('root')
if (container) {
  createRoot(container).render(
    <QueryClientProvider client={queryClient}>
        <ThemeModeProvider>
            <AppRoutes />
        </ThemeModeProvider>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  )
}
