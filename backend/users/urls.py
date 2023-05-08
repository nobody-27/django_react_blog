from django.urls import path,include
from users import views

urlpatterns = [
    path('user_create/',views.RegisterView.as_view(),name="user_register"),
    path('me/',views.RetrieveUserView.as_view())
]
