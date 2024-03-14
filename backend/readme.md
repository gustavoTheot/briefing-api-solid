### 📂 Conteúdo

- [Instruções de Uso](#instrucoes)
- [Tecnologia Utilizada](#tecUtilizada)

<a id="instrucoes"></a>

### 📋 Instruções de Uso

1. **Instalação de Dependências `(node_modules)`:**
   Execute o seguinte comando para instalar os pacotes necessários:

    ```shell
    npm install
    ```

2. **Configuração de Variáveis de Ambiente** a partir do arquivo `.env.exemplo`.

3. **Execução do Docker** para construir o container e a imagem:

    ```shell
    docker compos up
    ```

4. **Execução do Prisma** para construir a coluna no banco de dados:

    ```shell
    npx prisma migrate dev
    ```

5. **Execução da Aplicação:**

    ```shell
    npm run start:dev
    ```

6. **Executando os testes:**
Caso queria realizar a execução dos testes presentes no sistema, basta rodar no prompt:

    **Teste simples:**

    ```shell
    # Teste será feito através do prompt
    npm run test

    # Teste que ira utilizar uma interface web para apresentar os teste (precisa aceitar instalação o execurar o comando)
    npm run test:ui

    ```

<a id="tecUtilizada"></a>

### 🛠️ Tecnologias Utilizadas

- **[Vitest](https://vitest.dev/):** Utilizado para realizar testes unitários.
- **[Prisma](https://www.prisma.io/):** ORM utilizado para facilitar a interação entre o banco de dados e o código da aplicação.
- **[Docker](https://www.docker.com/):** Utilizado para facilitar a utilização do banco de dados sem a necessidade de instalação de outros softwares.
  - Nesse caso, foi utilizado a imagem [`bitnami/postgresql`](https://bitnami.com/stack/postgresql).
- **[TypeScript](https://www.typescriptlang.org/):** Utilizado para criar um código tipado.
- **[Dotenv](https://www.npmjs.com/package/dotenv):** Utilizado para gerenciar as variáveis de ambiente.

**OBS**: Todas as bibliotecas utilizadas são consolidadas
