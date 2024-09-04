const apiKey= 'rJWC3J4CRbpV98t5CA3o5McOy3zd75dw';

const peticion = fetch (`https://api.giphy.com/v1/gifs/random?apikey=${ apiKey }`);

peticion
    .then( resp=> resp.json())
    .then(  ({data})=> {
        const {url} = data.images.original;

        const img = document.createElement('img');
        img.src = url;

        document.body.append(img);
    })
    .catch( console.warn);
    