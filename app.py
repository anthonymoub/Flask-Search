from flask import Flask, request, jsonify
from flask_cors import CORS
from function import test

app = Flask(__name__)
CORS(app)  # This will enable CORS for all routes

@app.route('/api/search', methods=['POST'])
def search():
    input_data = request.json.get('search_query')
    processed_data = test(input_data)
    #FUNCTION THAT TAKES IN THE INPUT_DATA AND RETURNS THE FORMATTED DATA
    # print(input_data)
    return jsonify({'response': f'highcharts_data: {processed_data}'})

if __name__ == '__main__':
    app.run(debug=True, port=8080)
