# pog-cars
Simple web app using both Express.js and React.js, connected with MySQL database 
- - - -
### Jak naprawić 'react-scripts' is not recognized.. coś tam
Najprostrzy sposob to niestety reinstall appki, kroki:
1. Usuwamy folder 'pog-cars'
2. odpalamy terminal (np. cmd lub ten z VSC w folderze gdzie chcemy umieścić naszą aplikację
3. klonujemy za pomocą komendy: `git clone https://github.com/KrystianOg/pog-cars.git`
4. przenosimy się do folderu klienckiego: `cd client`
5. usuwamy globalne react scripty: `npm uninstall -g react-scripts`
6. instalujemy inne dependencies: `npm install`
7. dodajemy tym razem do projektu react-scripts: `npm install react-scripts --save`
- - - -
### Jak dodać ikonę z fontawesome?
1. intalujemy fontawesome do projektu: 
  `npm install --save @fortawesome/free-solid-svg-icons && npm install --save @fortawesome/react-fontawesome`
2. Dodajemy do pliku .js w którym zdefiniowaliśmy component gdzie chcemy użyć ikony takie coś:
  ```javascript
  import { FontAwesomeIcon } from '@fortawesome/react-fontawesome' //to zawsze
  import { faCar } from '@fortawesome/free-solid-svg-icons' //tutaj przykladowo 'faCar' ale mozemy importować wiele różnych (free) ikon
  ```
3. na końcu używamy tego co dodaliśmy (tego niżej)
  ```javascript
  <FontAwesomeIcon icon={faCar} />
  ```
  np w taki sposób:
  ```javascript
import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCar } from '@fortawesome/free-solid-svg-icons'

const Navbar = () => {
    return (
        <>
            <FontAwesomeIcon icon={faCar} />
        </>
    )
}

export default Navbar
```

- - - -
### How to setup
1. Otwieramy terminal (ja korzystam z VSC) w folderze do którego chcemy sklonować aplikację  
![Terminal](https://imgur.com/GoNcsi0.jpg)  
2. Wpisujemy komendę: `git clone https://github.com/KrystianOg/pog-cars.git`  
![git clone](https://imgur.com/Gl7QIy5.jpg)  
3. Wybieramy nowo sklonowany projekt (glowny folder - pog-cars) w VSC  
4. Wybieramy: Terminal > New Terminal  
5. Zrobilem fajne skrypty w pog-cars/package.json wiec jedyne co na tym etapie musicie zrobic to z terminala w folderze glownym wpisać:  
  `npm run init-server-modules`
  `npm run init-client-modules`  
6. Hope it works
- - - -
### Przydatne rozszerzenia do VSC
1.  DotENV `mikestead.dotenv` - koloruje skladnie dla plikow .env  
2.  ES7 React `dsznajder.es7-react-js-snippets` - snippetsy do react'a  
3.  Github Copilot `github.copilot` - chyba najlepsze co ostatnio odkrylem, sugestie wpisywanego kodu z AI - czyli wyuczone przez innych + ucza sie czego uzywacie czesto  
4.  SQLTools `mtxr.sqltools` - obsluga baz danych z poziomu VSC
5.  npm `eg2.vscode-npm-script` - dodaje obsluge npm 
6.  vscode-styled-components `jpoissonnier.vscode-styled-components` - kolorowanie skladni styled components (frontend)
7.  styled-components-snippets `jonkwheeler.styled-components-snippets` ^ + snippetsy
8.  Bracket Pair Colorizer `coenraads.bracket-pair-colorizer` - (chyba nie trzeba tlumaczyć why)  
9.  indent-rainbox `oderwat.indent-rainbow` - koloruje wcięcia
