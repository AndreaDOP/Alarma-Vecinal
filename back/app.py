# back/app.py
from flask import Flask, request, jsonify

app = Flask(__name__)

# Lista para almacenar las alarmas activadas
alarmas_activadas = []

@app.route('/activar_alarma', methods=['POST'])
def activar_alarma():
    data = request.get_json()
    if 'mensaje' in data:
        mensaje = data['mensaje']
        alarmas_activadas.append(mensaje)
        return jsonify({'mensaje': f'Alarma activada: {mensaje}'}), 200
    else:
        return jsonify({'error': 'El campo "mensaje" es requerido'}), 400

@app.route('/obtener_alarmas', methods=['GET'])
def obtener_alarmas():
    return jsonify({'alarmas_activadas': alarmas_activadas}), 200

if __name__ == '__main__':
    app.run(debug=True)
