# django 3.0.5 with vue non-SPA or hybrid mode

- vuetify ^2.2.11
- vue ^2.6.11
- vuex ^3.2.0
- vuex-persistedstate ^3.0.1
- axios ^0.19.2
- webpack 4
- sass eslint django-webpack-loader
- production ready with both Zopfli and Brotli [compression](https://webpack.js.org/plugins/compression-webpack-plugin/) build, [chunked](https://webpack.js.org/plugins/split-chunks-plugin/) assets


Everyone knows the advantage of SPA nowaday but theres always a reason not to use SPA, especially for enterprise grade application with some high volume marketing landing page,  you want to avoid preloading all code while you still want to share codes and keep them maintainable, it's when you need hybird mode with django 


## project env setup
```
virtualenv myproject 
cd myproject
source bin/activate
```

### git clone
```
git clone `this repo` repo
```

### install django and dependency
```
cd repo
pip install -r requirements.txt
```

### run vue development server
```
cd vue
yarn install
yarn start
```
more info, check readme inside vue folder

### django development server startup
```
python manage.py migrate
python manage.py createsuperuser
python manage.py runserver
```

### further info
my codes based on this [article](https://ilikerobots.github.io/django/vue/software/2019/05/26/django-and-vue-multipage.html).

