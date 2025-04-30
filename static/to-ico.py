from PIL import Image

img = Image.open('/Users/shuvo/Documents/GitHub/ShadmanSShuvo.github.io/src/lib/images/logo-dark.jpg')
img.save('favicon.ico', format='ICO', sizes=[(32, 32)])