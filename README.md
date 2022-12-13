
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
