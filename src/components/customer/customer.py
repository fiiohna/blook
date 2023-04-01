from flask import Flask, request, jsonify
from flask_sqlalchemy import SQLAlchemy
from flask_cors import CORS

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'mysql+mysqlconnector://root:root@localhost:3306/book'
app.config['[SQLALCHEMY_TRACK_MODIFICATIONS]'] = False

db = SQLAlchemy(app)
CORS(app)


class Customer(db.Model):
    tablename = 'customer'

    cid = db.Column(db.Integer(20), primary_key=True)
    name = db.Column(db.String(30), nullable=False)
    email = db.Column(db.String(70), nullable=False)
    c_address = db.Column(db.String(70), nullable=False)
    billing_address = db.Column(db.String(70), nullable=False)
    phone = db.Column(db.Integer(20))

    def __init__(self, cid, name, email, c_address, billing_address, phone):
        self.cid = cid
        self.name = name
        self.email = email
        self.c_address = c_address
        self.billing_address = billing_address
        self.phone = phone

    def json(self):
        return{"cid": self.cid, "name": self.name, "email": self.email, "c_address": self.c_address, "billing_address": self.billing_address, "phone": self.phone}


@app.route("/customer")
def get_all():
    customerlist = Customer.query.all()
    if len(customerlist):
        return jsonify(
            {
                "code": 200,
                "data": {
                    "customer": [customer.json() for customer in customerlist]
                }
            }
        )
    return jsonify({
        "code": 404,
        "message": "There are no customers."
    }
    ), 404


@app.route("/customer/<int:cid123>")
def find_by_cid123(cid123):
    customer = Customer.query.filter_by(cid123=cid123).first()
    if customer:
        return jsonify({
            "code": 200,
            "data": customer.json()
        }
        )
    return jsonify({
        "code": 404,
        "message": "Customer not found."
    }
    ), 404


if __name__ == '__main__':
    app.run(port=5000, debug=True)
