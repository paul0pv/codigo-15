from django.db import models

# Create your models here.

class Subscription(models.Model):
    title = models.CharField(max_length=200)
    price = models.FloatField()
    discount = models.IntegerField(null=True)
    description = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    class Meta:
        db_table = "subscription"