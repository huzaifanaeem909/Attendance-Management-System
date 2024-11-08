from django.contrib.auth import authenticate, login, logout
from django.shortcuts import redirect
from rest_framework import status
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.permissions import AllowAny
from django.contrib.auth.models import User


class UserRegistrationView(APIView):
    permission_classes = [AllowAny]

    def post(self, request):
        username = request.data.get("username")
        password = request.data.get("password")
        email = request.data.get("email")

        if User.objects.filter(username=username).exists():
            return Response(
                {"error": "User already exists"}, status=status.HTTP_400_BAD_REQUEST
            )

        user = User.objects.create_user(
            username=username, password=password, email=email
        )
        user.save()

        # Automatically log the user in after registration
        login(request, user)

        return Response(
            {"message": "User created and logged in successfully"},
            status=status.HTTP_201_CREATED,
        )


class UserLoginView(APIView):
    permission_classes = [AllowAny]

    def post(self, request):
        username = request.data.get("username")
        password = request.data.get("password")

        user = authenticate(username=username, password=password)
        if user is not None:
            login(request, user)  # Log in the user on successful authentication
            return Response({"message": "Login successful"}, status=status.HTTP_200_OK)
        else:
            return Response(
                {"error": "User does not exist or incorrect password"},
                status=status.HTTP_400_BAD_REQUEST,
            )


class UserLogoutView(APIView):
    def post(self, request):
        logout(request)
        return Response({"message": "Logged out successfully"}, status=200)
