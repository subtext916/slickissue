
import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';

export default {
    input: 'src/slickgrid-component.js',
    name: 'SlickgridComponent',
    output: {
        file: 'dist/example.js',
        format: 'iife',
        sourcemap: false
    },
    plugins: [
        resolve({
            jsnext: true,
            main: true,
            browser: true,
        }),
        commonjs()
    ]

};
