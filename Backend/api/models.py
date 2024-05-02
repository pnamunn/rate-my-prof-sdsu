from django.db import models

# Create your models here.

class ReviewPost(models.Model):
    class Rating(models.IntegerChoices):
        one = 1
        two = 2
        three = 3
        four = 4
        five = 5 
    
    professorName = models.CharField(max_length=100)
    rating = models.IntegerField(choices=Rating)
    review = models.TextField()
    published_date = models.DateTimeField(auto_now_add=True)
    
    def __str__(self):
        return self.professorName
