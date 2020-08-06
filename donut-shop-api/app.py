from flask import Flask, request, jsonify
from flask_sqlalchemy import SQLAlchemy
from flask_marshmallow import Marshmallow
from flask_cors import CORS

import os

app = Flask(__name__)
CORS(app)

basedir = os.path.abspath(os.path.dirname(__file__))

app.config["SQLALCHEMY_DATABASE_URI"] = "sqlite:///" + os.path.join(basedir, "app.sqlite")

app.config["SQLALCHEMY_TRACK_MODIFICATIONS"] = False


db = SQLAlchemy(app)
ma = Marshmallow(app)

class Donut(db.Model):
    __tablename__ = "donuts"
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(55))
    description = db.Column(db.String(75))
    picture_url = db.Column(db.String(155))
    price = db.Column(db.Integer)
    quantity = db.Column(db.Integer) 
    category = db.Column(db.String(20))

    def __init__(self,name, description, picture_url, price, quantity, category):
        self.name = name
        self.description = description
        self.picture_url = picture_url
        self.price = price
        self.quantity = quantity
        self.category = category

class DonutSchema(ma.Schema):
    class Meta:
        fields = ('name','description','picture_url', 'id')

donut_schema = DonutSchema()
donuts_schema = DonutSchema(many = True)


@app.route("/", methods=["GET"])
def home():
    return "<h1>Hello from flask!</h1>"

@app.route("/donut", methods = ["POST"])
def add_donut():
    name = request.json["name"]
    description = request.json["description"]
    picture_url = request.json["picture_url"]
    price = request.json["price"]
    quantity = request.json["quantity"]
    category = request.json["category"]

    new_donut = Donut(name, description, picture_url, price, quantity, category)

    db.session.add(new_donut)
    db.session.commit()

    donut = Donut.query.get(new_donut.id)

    return donut_schema.jsonify(donut)

@app.route("/donuts", methods=["GET"])
def get_donuts():
    all_donuts = Donut.query.all()
    result = donuts_schema.dump(all_donuts)

    return jsonify(result)

@app.route("/donut/<id>", methods = ['GET'])
def get_donut(id):
    donut = Donut.query.get(id)
    result = donut_schema.dump(donut)

    return jsonify(result)

@app.route("/delete/donut/<id>", methods=["DELETE"])
def delete_donut(id):
    record = Donut.query.get(id)

    db.session.delete(record)
    db.session.commit()

    return jsonify({"message": "DELETED"})

@app.route("/donut/<id>", methods=["PUT"])
def update_donut(id):
    donut = Donut.query.get(id)
    new_name = request.json["name"]
    new_description = request.json['description']
    new_picture_url = request.json['picture_url']
    new_price = request.json['price']
    new_quantity = request.json['quantity']
    new_category = request.sjon['category']

    new_donut = Donut(new_name, new_description, new_picture_url, new_price, new_quantity, new_category)


    db.session.commit()

    return donut_schema.jsonify(donut)

if __name__ == "__main__":
    app.run(debug=True)