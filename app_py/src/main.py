from flask import Flask, render_template,request 
from flask_restful import Api 

app = Flask(__name__)
api = Api(app) 

# to allow angular to your python app
@app.after_request
def after_request(response):
  response.headers.add('Access-Control-Allow-Origin', '*')
  response.headers.add('Access-Control-Allow-Headers', 'Content-Type,Authorization')
  response.headers.add('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS')
  return response

@app.route('/hello', methods=['POST'])
def hello():
 return 'hello' 

