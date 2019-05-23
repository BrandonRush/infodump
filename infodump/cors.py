class CorsMiddleware:
    def __init__(self, get_response):
        self.get_response = get_response
        # One-time configuration and initialization.

    def __call__(self, request):
        print('test')
        response = self.get_response(request)
        response["Access-Control-Allow-Origin"] = "*"
        return response
