from django.urls import path
from python_app import views   

urlpatterns = [
    path('', views.home,name='home'),
    path('about/', views.about,name='about'),
    path('products/', views.products,name='products'),
    path('contact/', views.contact,name='contact'),
    path('cart/', views.cart,name='cart'),
    path('add_to_cart/<int:id>/', views.add_to_cart, name='add_to_cart'),
    # REGISTER
    path('register/',views.register_page, name='register'),

    # LOGIN
    path('login/',views.login_page, name='login'),

    # LOGOUT
    path('logout/', views.logout_page,name='logout'),

    # FORGOT PASSWORD
    path('forgot-password/', views.forgot_password, name='forgot_password'),
]