module.exports = {
    purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {
            backgroundImage: (theme) => ({
                'login-background': "url('https://assets.nflxext.com/ffe/siteui/vlv3/d9cb1eea-62ee-4ec1-9b90-8d98874b8867/7ac0addb-1541-413a-9b6e-f4f5b38e9c4f/VN-en-20210817-popsignuptwoweeks-perspective_alpha_website_small.jpg')"
            }),
            width: {
                '2/7': '28.5714286%'
            }
        }
    },
    variants: {
        extend: {}
    },
    plugins: []
};
