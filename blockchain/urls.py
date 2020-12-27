from django.urls import path
from . import views


urlpatterns = [
    path('get_chain', views.get_chain, name="get_chain"),
    path('mine_block', views.mine_block, name="mine_block"),
    path('is_valid', views.is_valid, name="is_valid"),
    path('add_transaction', views.add_transaction, name="add_transaction"),  # New
    path('is_valid', views.is_valid, name="is_valid"),  # New
    path('connect_node', views.connect_node, name="connect_node"),  # New
    path('replace_chain', views.replace_chain, name="replace_chain"),  # New
]
