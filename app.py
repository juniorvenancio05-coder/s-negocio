from flask import Flask, render_template

# Inicializa o aplicativo Flask
app = Flask(__name__)

# Define a rota principal (a página inicial do seu site)
@app.route('/')
def home():
    # Renderiza o arquivo HTML que está dentro da pasta templates
    return render_template('index.html')

# Inicia o servidor local se o arquivo for executado
if __name__ == '__main__':
    app.run(debug=True)
