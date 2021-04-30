from flask_restplus import Api
from .Property import api as nsProperties

api = Api(
    title='Trobify API',
    version='1.0',
    description='this is the trobify API'
)

api.add_namespace(nsProperties, path='/property')
