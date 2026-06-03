from django.shortcuts import redirect, render
from django.http import HttpResponse
from .models import Product, Cart
from django.contrib.auth.models import User
from django.contrib.auth import authenticate, login, logout
from django.contrib import messages

# def home(request):
#     return HttpResponse("Hello, World!")

# Create your views here.
def home(request):
    return render(request, 'home.html')

def about(request):
    return render(request, 'about.html')   

def products(request):
    data = Product.objects.all()
    return render(request, 'products.html', {'products' : data})

def contact(request):
    return render(request, 'contact.html')

def add_to_cart(request, id):

    product = Product.objects.get(id=id)

    cart_item, created = Cart.objects.get_or_create(product=product) 
    
    if not created:
        cart_item.quantity += 1
        cart_item.save()
    return redirect('cart')


def cart(request):
    cart_items = Cart.objects.all()
    total = 0

    for item in cart_items:
        total += item.product.price * item.quantity
    
    return render(request, 'cart.html', {'cart_items': cart_items, 'total':total})


def register_page(request):
    if request.method =='POST':
        username = request.POST.get('username')
        password = request.POST.get('password')
        email = request.POST.get('email')

        if User.objects.filter(username=username).exists():
            messages.error(request, 'username already exists')
            return redirect('register')
        user = User.objects.create_user(username=username, password=password, email=email)
        user.save()
        messages.success(request, 'account created successfully')
    
        
        # if user is not None:
        #     login(request, user)
        #     return redirect('home')
        # else:
        #     messages.error(request, 'invalid username or password')
        return redirect('login')

    return render(request, 'register.html')


def login_page(request):
    if request.method == 'POST':
        username = request.POST.get('username')
        password = request.POST.get('password')

        user = authenticate(request, username=username, password=password)

        if user is not None:
            login(request, user)
            return redirect('home')
        else:
            messages.error(request, 'invalid credentials')
            return redirect('login')

    return render(request, 'login.html')

def logout_page(request):
    logout(request)
    return redirect('login')

# FORGOT PASSWORD VIEW

def forgot_password(request):

    if request.method == 'POST':

        username = request.POST.get('username')
        new_password = request.POST.get('new_password')

        try:
            user = User.objects.get(username=username)

            user.set_password(new_password)
            user.save()

            messages.success(request, 'Password Changed Successfully')

            return redirect('login')

        except User.DoesNotExist:

            messages.error(request, 'User Not Found')

    return render(request, 'forgot_password.html')

