from django.shortcuts import render
from django.http import JsonResponse
from django.http import HttpResponse

from rest_framework import status
from rest_framework.decorators import api_view
from rest_framework.response import Response

import requests
import json


def ip(request):
    return HttpResponse(request.META['REMOTE_ADDR'])


def useragent(request):
    return HttpResponse(request.META['HTTP_USER_AGENT'])

# def useragent(request):
#     return HttpResponse(request.META['HTTP_USER_AGENT'])
