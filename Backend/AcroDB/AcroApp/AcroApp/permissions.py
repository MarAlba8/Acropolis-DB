from rest_framework.permissions import IsAuthenticated

class IsAuthenticated(IsAuthenticated):

    def has_permission(self, request, view):
        
        if request.method == 'OPTIONS':
            return True
        return super(IsAuthenticated, self).has_permission(request, view)
        