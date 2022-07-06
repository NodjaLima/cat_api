//usando try e catch

const url_api_gatos = 'https://api.thecatapi.com/v1/images/search'

const pegar_gato = async () => {
  try {

    const retorno_api = await fetch(url_api_gatos);
    const objeto_gato = await retorno_api.json();
    return objeto_gato[0].url

  } catch (e) {

    console.log(e.message)

  }
  
};

const mostrar_foto = async () => {

  const foto = document.getElementsByTagName('img')[0]
  foto.src = await pegar_gato()

};

mostrar_foto();

const botao = document.getElementById('change-cat');
botao.addEventListener('click', mostrar_foto)




