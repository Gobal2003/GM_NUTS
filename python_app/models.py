from django.db import models

# Create your models here.

class Product (models.Model):
    name = models.CharField(max_length=100)
    price = models.IntegerField()
    image = models.ImageField(upload_to='products/',blank = True, null = True)
    description = models.TextField(max_length=200)


    def __str__(self):
        return self.name

class Cart(models.Model):
     
     product = models.ForeignKey(Product, on_delete=models.CASCADE)

     quantity = models.IntegerField(default = 1)

def __str__(self):
    return self.product.name