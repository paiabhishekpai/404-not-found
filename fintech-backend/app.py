from flask import Flask, request, jsonify, render_template
import os
from werkzeug.utils import secure_filename
import numpy as np
from utils import preprocess_image, run_model1, run_model2

app = Flask(__name__)
app.config['UPLOAD_FOLDER'] = './static/uploads'

# Route for homepage
@app.route('/')
def index():
    return render_template('index.html')

# Route to handle uploads and predictions
@app.route('/predict', methods=['POST'])
def predict():
    if 'image1' not in request.files or 'image2' not in request.files:
        return jsonify({'error': 'Both images must be uploaded.'}), 400

    # Save uploaded files
    image1 = request.files['image1']
    image2 = request.files['image2']
    image1_path = os.path.join(app.config['UPLOAD_FOLDER'], secure_filename(image1.filename))
    image2_path = os.path.join(app.config['UPLOAD_FOLDER'], secure_filename(image2.filename))
    image1.save(image1_path)
    image2.save(image2_path)

    # Preprocess images and run models
    preprocessed_img1 = preprocess_image(image1_path)
    preprocessed_img2 = preprocess_image(image2_path)

    model1_result = run_model1(preprocessed_img1, preprocessed_img2)
    model2_result = run_model2(image1_path, image2_path)

    # Return results to the frontend
    return jsonify({
        'model1_similarity': model1_result,
        'model2_matches': model2_result
    })

if __name__ == '__main__':
    app.run(debug=True)
