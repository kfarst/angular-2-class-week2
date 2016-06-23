System.config({
    map: {
        'rxjs': 'rxjs',
        '@angular': '@angular',
        'app': './'
    },
    packages: {
        'app': {
            main: '.js',
            defaultExtension: 'js'
        },
        '@angular/core': {
            main: 'index.js',
            defaultExtension: 'js'
        },
        '@angular/http': {
            main: 'index.js',
            defaultExtension: 'js'
        },
        '@angular/compiler': {
            main: 'index.js',
            defaultExtension: 'js'
        },
        '@angular/router': {
            main: 'index.js',
            defaultExtension: 'js'
        },

        '@angular/upgrade': {
            main: 'index.js',
            defaultExtension: 'js'
        },

        '@angular/forms': {
            main: 'index.js',
            defaultExtension: 'js'
        },

        '@angular/common': {
            main: 'index.js',
            defaultExtension: 'js'
        },
        '@angular/platform-browser': {
            main: 'index.js',
            defaultExtension: 'js'
        },
        '@angular/platform-browser-dynamic': {
            main: 'index.js',
            defaultExtension: 'js'
        },
        'rxjs': {
            defaultExtension: 'js'
        }
    }
})
