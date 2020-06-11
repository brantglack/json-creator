const { v4 } = require('uuid');
const colors = ['E56399', 'E5D4CE', 'DE6E4B', '7FD1B9', '7A6563', '9BF3F0', '473198', '4A0D67', 'ADFC92', 'A2AD59','08605F']
const sizes = [50,100,127,200,250,300,450,500,550]
const writeJsonFile = require('write-json-file');

const randomImage = (color,size) => {
  return `https://via.placeholder.com/${size}/${color}`;
}

const createFeature = () => {
  var colorNumber = Math.floor(Math.random() * colors.length);
  var sizeNumber = Math.floor(Math.random() * sizes.length);
  var image = randomImage(colors[colorNumber], sizes[sizeNumber]);
  return {
    id: v4(),
    title: v4(),
    feature_image: image,
    permalink: 'https://via.placeholder.com/600/b4412f',
    color: colors[colorNumber],
    "albumId": 1,
    "url": "https://via.placeholder.com/600/b4412f",
    "thumbnailUrl": image
  }
}

var result = createFeature();

console.log(result)

writeJsonFile('foo.json', result);