function multiplica(num1,num2) {
    let resultado = num1 * num2;
    return resultado;
  }

  var miImage = document.querySelector('img');
  miImage.onclick = function () {
      var miSrc = miImage.getAttribute('src');
      if (miSrc === 'https://www.geoenciclopedia.com/wp-content/uploads/2015/08/Galaxias.jpg') {
        miImage.setAttribute('src','https://1cursob12.files.wordpress.com/2013/08/ba2.jpg');
      } else {
        miImage.setAttribute('src', 'https://www.geoenciclopedia.com/wp-content/uploads/2015/08/Galaxias.jpg');
      }
  }

  