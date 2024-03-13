### Instruções de Uso 📋

1. **Pré-Requisitos:**
   - Node.js
   - Docker

2. **Instalação de Dependências (node_modules):**
   Execute o seguinte comando para instalar os pacotes necessários:

    ```shell
    npm install
    ```

3. **Configuração de Variáveis de Ambiente:**
Configure as variáveis de ambiente a partir do arquivo `.env.exemplo`.

4. **Execução do Docker:**
Execute o seguinte comando para iniciar o container Docker:

    ```shell
    docker compos up
    ```

5. **Execução do Prisma:**
Execute o seguinte comando para criar o banco de dados com o Prisma:

    ```shell
    npx prisma migrate dev
    ```

6. **Execução da Aplicação:**
Por fim, execute o seguinte comando e verifique se o terminal retorna uma mensagem de sucesso:

    ```shell
    npm run start:dev
    ```

### Tecnologias Utilizadas 🛠️

- **Vitest:** Utilizado para realizar testes unitários.
- **Prisma:** ORM utilizado para facilitar a interação entre o banco de dados e o código da aplicação.
- **Docker:** Utilizado para facilitar a utilização do banco de dados sem a necessidade de instalação de outros softwares.
  - Nesse caso, foi utilizado o container `bitnami/postgresql`.
- **TypeScript:** Utilizado para criar um código tipado.
- **Dotenv:** Utilizado para gerenciar as variáveis de ambiente.
