from flask import Flask
from flask_cors import CORS
from controllers.graph_controller import graph_blueprint


app = Flask(__name__)

app.register_blueprint(graph_blueprint)

cors = CORS(app)
app.config['CORS_HEADERS'] = 'Content-Type'
if __name__ == '__main__':
    app.run()