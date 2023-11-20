from flask import Flask, request
from app.routes.tasks import task_route


app = Flask(__name__)

app.register_blueprint(task_route)


if __name__ == "__main__":
    app.run(debug=True)