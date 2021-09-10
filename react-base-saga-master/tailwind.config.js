module.exports = {
    purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {
            backgroundImage: (theme) => ({
                'login-background': "url('https://assets.nflxext.com/ffe/siteui/vlv3/d9cb1eea-62ee-4ec1-9b90-8d98874b8867/7ac0addb-1541-413a-9b6e-f4f5b38e9c4f/VN-en-20210817-popsignuptwoweeks-perspective_alpha_website_small.jpg')",
                'banner-background': "url('https://res.cloudinary.com/bcvt/image/upload/v1630313895/movies/the_flash_banner_k90oc3.jpg')"
            }),
            backgroundColor: (theme) => ({
                banner: '#111',
                comment: 'rgba(12,12,12,var(--tw-bg-opacity))',
                area: 'rgba(51,51,51,var(--tw-bg-opacity))',
                admin: '#202124'
            }),
            width: {
                '2/7': '28.5714286%',
                img: '11%'
            }
        }
    },
    variants: {
        extend: {}
    },
    plugins: []
};
