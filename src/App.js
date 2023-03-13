
/* Criando uma aplicação React:
1. Verifique novamente se o node está instalado em seu computador executando o comando node -v no terminal
2. Crie uma pasta para guardar a aplicação React
3. Rode o comando npx create-react-app nome-do-app
4. Entre na pasta do projeto
5. Rode o projeto com npm run start
6. Observe os arquivos App.js e App.css que foram criados.

Componentizando:
Observe que no arquivo App.js, temos um componente sendo renderizado (return).
Usando o JSX, crie um button no componente. Este button deve conter a frase "Clique em mim, seu nome".
Para isso, vamos alterar o retorno da função em nosso arquivo App.js

Tornando dinâmico:
Agora, vamos criar variáveis e funções para nosso App recém-criado.
1. Altere o button do exercício anterior, para que seu nome seja guardado em uma variável antes de ser exibido.
2. Crie uma classe "meu-nome" no CSS, que pinte o texto de laranja, e adicione esta classe ao botão.
3. Crie uma função olaMundo, que é executada no clique do botão. Esta função deve exibir "Olá, Mundo!" num alert.

Exercício de fixação:
Com os conteúdos vistos hoje, vamos transformar uma página escrita utilizando apenas HTML, em uma página que usa JSX. 
1. Tenha em mãos o template da prática que iremos transformar em página React;
2. Crie a aplicação React e copie os elementos HTML do template, transformando-os em JSX;
3. Altere as classes, links de imagem, e eventos do projeto, para que sejam executados dinamicamente.
 */

/* import './App.css';

function App() {

  const nome = "Fulano de tal"

  function olaMundo(nome){
    alert(`Olá ${nome}`)
  }

  return (
    <div>
      Olá Barbosa
      <button className='meu-nome' onClick={()=>olaMundo("Renan")}>Clique em mim, {nome}</button>
    </div>
    
  );
}

export default App; */


/* Exercício */

import './App.css';
import imagem from "./logo.png"

function App() {

  const onClickBotao = () => {
    alert("Botão foi clicado!");
}

  return (
    <div>
      <div className="container">
        <h1>Aprenda React na Labenu!</h1>
        <div>
          <div>
            <img class="Logo" src={imagem} alt="logo"/>
          </div>
          <div>
            <a href="https://labenu.com.br">Site da Labenu</a>
          </div>
          <div>
            <button onClick={onClickBotao}> Clique aqui! </button>
          </div>
        </div>
      </div>
    </div>
    
  );
}

export default App;

/* o return é o componente sendo renderizado, e sempre será um JSX. O JSX é quase idêntico ao HTML. 
 */

/* Para chamarmos/executarmos uma variável e/ou função dentro do return utilizamos chaves {} */

/* Para a função parar de ficar chamando o alert automaticamente, sem eu ter clicado no botão, quando a função tem um parâmetro, eu chamo uma função anônima dentro dela, através do sinal ()=> */