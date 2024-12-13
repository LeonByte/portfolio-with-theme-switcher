from django.shortcuts import render
from .models import Project, Contact
from django.http import HttpResponse

def home(request):
    theme = request.COOKIES.get('theme', 'light')  # Get the theme from cookies or default to 'light'
    response = render(request, 'index.html', {'theme': theme})
    return response

def index(request):
    projects = Project.objects.all()
    return render(request, 'index.html', {'projects': projects})

def about(request):
    return render(request, 'about.html')

def contact(request):
    if request.method == 'POST':
        name = request.POST['name']
        email = request.POST['email']
        message = request.POST['message']
        Contact.objects.create(name=name, email=email, message=message)
    return render(request, 'contact.html')
