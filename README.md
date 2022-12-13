
# QuikPost

Este projeto foi criado como teste admissional para a empresa QuikDev. 
O objetivo é criar um micro blog permitindo que os usuários possam interagir entre si através de posts e comentários.


## Funcionalidades

Abaixo uma lista das funcionalidades que esse projeto possui ordenadas por features.

### Users

- Criação de novos usuários
- Realizar login utilizando as credencias criadas
- Realizar logout da aplicação

### Posts

- Lista publicações da rede (Do usuário logado e de algum outro usuário) de uma forma resumida.
- Exibir de forma detalhada uma publicação e seus comentários.
- Criar uma nova publicação.
- Editar uma publicação a qual o usuário logado seja o autor.
- Remover uma publicação a qual o usuário logado seja o autor.
- Exibir o numero de comentários de uma publicação.

### Comments

- Listar o comentários de uma publicação.
- Criar um novo comentário em uma publicação
- Editar um comentário a qual o usuário logado seja o autor.
- Remover um comentário a qual o usuário logado seja o autor.


## Instalação

Instale o projeto com npm

Clone o repositório para um diretório em sua maquina e execute o seguinte comando:

```bash
  npm install 
```

Ao final da Instalação para executar o projeto execute o seguinte comando:

```bash
  npm run dev
```

Ao executar o comando um link pra o acesso será gerado em seu terminal ao qual executou o comando.




## Stack utilizada

- ReactJS
- TypeScript
- Vite: Por ser mais performático quando comparado com o Creat React App.
- React Query: Para gerenciar as requisições criando estados em cache melhorando a performance e simplificando atualização de dados mediante alguma mudança.
- notistack: Para o fornecer feedbacks aos usuários via snackbar.
- React-hook-form: Gerenciamento de formulários. 
- Material UI: Design system
- Jest e TestingLibrary: Para testes unitários e de integração. 

Alem disso para garantir um melhorar a padronização do código e sanitização foram usadas as tecnologias abaixo:

- Eslint: Padronização do código.
- Prettier: Correções automáticas de estrutura de código.
- Commitlint: Manter um padrão da forma de como os commits são escritos e muito importante para um crescimento de um projeto. Commitlint impedi que commits que estejam fora do padrão do conventional commits seja realizado. 
- Husk e LintStage: Para verificar e impedir que códigos que não estejam seguindo o padrão definido no eslint seja publicado.

&nbsp;

## Screenshots

&nbsp;

<h4 align="center">
<img src="https://user-images.githubusercontent.com/58531490/207200649-8767c374-904c-4c57-9112-1730fef53c6c.png" width="800px" /><br>
 <b>Login</b>
</h4>
&nbsp;
<h4 align="center">
<img src="https://user-images.githubusercontent.com/58531490/207200742-8df2452e-0f40-4f4a-86f3-c439c327ef9a.png" width="800px" /><br>
 <b>Cadastro</b>
</h4>
&nbsp;
<h4 align="center">
<img src="https://user-images.githubusercontent.com/58531490/207201303-3456bb63-5a58-4663-964c-c7066a605f21.png" width="800px" /><br>
 <b>Lista de posts</b>
</h4>
&nbsp;
<h4 align="center">
<img src="https://user-images.githubusercontent.com/58531490/207201380-be68f005-75d4-4de0-9704-057e422c718d.png" width="800px" /><br>
 <b>Post</b>
</h4>
&nbsp;
<h4 align="center">
<img src="https://user-images.githubusercontent.com/58531490/207201433-d619d3be-d463-44d9-896f-bdd08848dbc8.png" width="800px" /><br>
 <b>Criar Post</b>
</h4>
&nbsp;
<h4 align="center">
<img src="https://user-images.githubusercontent.com/58531490/207201695-595ab82f-d1de-48f2-8f9f-283b253d0a04.png" width="800px" /><br>
 <b>Criar comentario</b>
</h4>
&nbsp;
<h4 align="center">
<img src="https://user-images.githubusercontent.com/58531490/207201614-5e1711c4-ba67-4cb8-8ec1-da48d5b74821.png" width="200px" /><br>
 <b>Logout</b>
</h4>

