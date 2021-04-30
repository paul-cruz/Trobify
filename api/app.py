import os
import json
import datetime
from apis import api
from flask import Flask, jsonify
from bson.objectid import ObjectId

class JSONEncoder(json.JSONEncoder):
    ''' extend json-encoder class'''
    def default(self, o):
        if isinstance(o, ObjectId):
            return str(o)
        if isinstance(o, datetime.datetime):
            return str(o)
        return json.JSONEncoder.default(self, o)
        
app = Flask(__name__)
api.init_app(app)

# use the modified encoder class to handle ObjectId & datetime object while jsonifying the response.
app.json_encoder = JSONEncoder

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=os.getenv('PORT', 50000),
            debug=os.getenv('FLASK_DEBUG', 0))
