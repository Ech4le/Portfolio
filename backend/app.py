from flask import Flask, send_from_directory, jsonify, abort, request
from flask_restful import Resource, Api
import os

app = Flask(__name__)
api = Api(app)

UPLOAD_DIRECTORY = "/home/nsl/Kod/Portfolio/backend/media"


@app.route('/')
def project_data():
    data = {
        "all": 10,
        "cursor": 0,
        "items": 5,
        "limit": 5,
        "data": [
            {
                "id": 0,
                "name": "Good project",
                "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
                "link": "#",
                "os": False,
                "image": "Raspberry.jpg",
                "galery": [
                    {
                        "id": 0,
                        "image": "Raspberry.jpg",
                        "description": "Description",
                        "dt": "2020-01-01 11:30"
                    },
                    {
                        "id": 1,
                        "image": "Raspberry.jpg",
                        "description": "Description",
                        "dt": "2020-01-01 11:30"
                    },
                    {
                        "id": 2,
                        "image": "Raspberry.jpg",
                        "description": "Description",
                        "dt": "2020-01-01 11:30"
                    },
                ]
            },
            {
                "id": 1,
                "name": "Good project",
                "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
                "link": "#",
                "os": False,
                "image": "Raspberry.jpg",
                "galery": [
                    {
                        "id": 0,
                        "image": "Raspberry.jpg",
                        "description": "Description",
                        "dt": "2020-01-01 11:30"
                    },
                ]
            },
            {
                "id": 2,
                "name": "Good project",
                "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
                "link": "#",
                "os": False,
                "image": "",
                "galery": []
            },
            {
                "id": 3,
                "name": "Good project",
                "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
                "link": "#",
                "os": False,
                "image": "",
                "galery": []
            },
            {
                "id": 4,
                "name": "Good project",
                "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
                "link": "#",
                "os": False,
                "image": "",
                "galery": []
            },
        ]
    }

    response = jsonify(data)
    response.headers.add("Access-Control-Allow-Origin", "*")
    response.headers.add("Access-Control-Allow-Headers", "*")
    response.headers.add("Access-Control-Allow-Methods", "*")
    return response


@app.route('/files/<path:path>')
def get_file(path):
    response = send_from_directory(UPLOAD_DIRECTORY, path, as_attachment=True)
    response.headers.add("Access-Control-Allow-Origin", "*")
    response.headers.add("Access-Control-Allow-Headers", "*")
    response.headers.add("Access-Control-Allow-Methods", "*")
    return response


@app.route('/files')
def list_files():
    files = []
    for filename in os.listdir(UPLOAD_DIRECTORY):
        path = os.path.join(UPLOAD_DIRECTORY, filename)
        if os.path.isfile(path):
            files.append(filename)
    return jsonify(files)


@app.route('/files/<filename>', methods=['POST'])
def post_file(filename):
    if "/" in filename:
        abort(400, 'no subdirectories allowed')

    with open(os.path.join(UPLOAD_DIRECTORY, filename), 'wb') as fp:
        fp.write(request.data)

    return "", 201


if __name__ == "__main__":
    app.run(debug=True)
