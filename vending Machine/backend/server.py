from flask import Flask
from flask import request
import json
from flask_pymongo import PyMongo
from bson.objectid import ObjectId
from bson.json_util import dumps
app = Flask(__name__)
app.config["MONGO_URI"] = "mongodb://localhost:27017/vendingMachine"
mongo = PyMongo(app)

@app.route('/add_stock',methods=['POST'])   
def add_stock():
    data={}
    data["name"]=request.json['name']
    data["quantity"]=request.json['quantity']
    mongo.db.stock.insert_one(data)
    return dumps(data)

@app.route('/show/stock')
def show_stock():
    data=mongo.db.stock.find({})
    return dumps(data)

@app.route('/show/single/<ObjectId:id>')
def show_single_stock(id):
    data=mongo.db.stock.find({"_id":id})
    return dumps(data)

@app.route('/add_quantity/<ObjectId:id>',methods=['POST'])
def add_quantity(id):
    data={}
    data["name"]=request.json['name']
    data["quantity"]=request.json['quantity']
    mongo.db.stock.update({"_id":id},{"$set":data})
    return dumps(data)

@app.route('/buy_stock/<ObjectId:id>',methods=['POST'])
def buy_stock(id):
    data={}
    data["name"]=request.json['name']
    data["quantity"]=request.json['quantity']
    mongo.db.stock.update({"_id":id},{"$set":data})
    return dumps(data)

    