import os
import pymongo
from flask import jsonify
from bson.json_util import dumps, loads
from flask_restplus import Namespace, Resource, fields

myclient = pymongo.MongoClient(os.getenv("BD_CONN"))
db = myclient[os.getenv("DB_NAME")]
mycol = db["properties"]
api = Namespace('properties', description='properties related operations')

apoiment = {
    "ref": fields.Integer(),
    "date": fields.Date()
}
property = api.model('Properties', {
    "tittle": fields.String(),
    "price": fields.Integer(),
    "features": {
        "land": fields.Decimal(),
        "built": fields.Decimal(),
        "rooms": fields.Integer(),
        "bathrooms": fields.Integer(),
        "kitchens": fields.Integer(),
        "garage": fields.Integer()
    },
    "address": {
        "line1": fields.String(),
        "state": fields.String(),
        "zip": fields.String(),
        "city": fields.String()
    },
    "location": {
        "lat": fields.Decimal(),
        "long": fields.Decimal()
    },
    "description": fields.String(),
    "type": fields.String(),
    "age": fields.Integer(),
    "floors": fields.Integer(),
    "contact": {
        "name": fields.String(),
        "phones": fields.List(fields.String),
        "email": fields.String()
    },
    "apoiments": fields.List(fields.Nested(apoiment))
})


@api.route('/')
class Properties(Resource):
    @api.doc('list_properties')
    def get(self):
        return dumps(list(mycol.find()))


'''@api.route('/<id>')
@api.param('id', 'The property identifier')
@api.response(404, 'Cat not found')
class Property(Resource):
    @api.doc('get_cat')
    def get(self, id):
        return {"hola": 1}
        api.abort(404)
'''
