import { defineConfig } from 'vite'
import reactRefresh from '@vitejs/plugin-react-refresh'
import svgr from 'vite-plugin-svgr'
import { getAliases } from 'vite-aliases'
// https://vitejs.dev/config/

const aliases = getAliases({
    deep: true,
    depth: 2,
})

const root_path = process.cwd()

console.log('aliases', aliases)
export default defineConfig({
    plugins: [reactRefresh(), svgr()],
    resolve: {
        alias: [
            ...aliases,
            {
                find: '@componentsantd',
                replacement: `${root_path}/src/components/AntdComponents`,
            },
        ],
    },
})
