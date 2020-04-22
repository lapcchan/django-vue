# django 3.0.5 with vue non-SPA or hybird mode

- vuetify ^2.2.11
- vue ^2.6.11
- vuex ^3.2.0
- vuex-persistedstate ^3.0.1
- axios ^0.19.2
- webpack sass eslint
- production ready with both Zopfli and Brotli compression build, chunked assets

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

