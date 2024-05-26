from django.db import models

# Create your models here.

class ContactModel(models.Model):
    username=models.CharField(max_length=100)
    email=models.EmailField(max_length=100)
    message=models.TextField()
    
    def __str__(self):
        return self.username
    