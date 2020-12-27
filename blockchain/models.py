from django.db import models
from django.contrib.auth.models import User  # added


class Santa(models.Model):
    task = models.CharField(max_length=255)
    owner = models.ForeignKey(User, related_name="santa", on_delete=models.CASCADE, null=True)
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.task