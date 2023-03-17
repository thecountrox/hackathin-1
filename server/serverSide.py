from flask import Flask, request
from flask_cors import CORS, cross_origin   

app = Flask(__name__)
cors = CORS(app) #Jai Mata ji

@app.route('/post', methods=['POST'])
def post():
    data = request.get_json() #you'll get aadhar number and cause of admission

    print(f"HOLY SHIT WE GOT A POST REQ {data}")
    
    return f"New POST REQ: {data}"

@app.route('/test', methods=['GET'])
def test():
    print("got a request")
    return "API is working!"

if __name__ == '__main__':
    print("Running!")
    print("Go to http://localhost:5000/test")
    app.run(port=5000,debug=True)