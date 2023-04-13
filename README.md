# MBA Fiap - Cadastro de clientes
<br>
Projeto de conclusão da disciplina de DESENVOLVIMENTO DE MICROSSERVIÇOS E APIS - MBA FIAP
<br>

## Aluno 
  -  Adriano Bastos e Silva Moraes (rm344764)
<br>

## Descrição:
O Projeto consiste numa aplicação para realizar as seguintes funções relacionadas a uma cadastro de clientes do sistema:
  - Cadastrar cliente;
  - Alterar dados de clientes;
  - Listar todos os clientes;
 
<br>

## Requisitos:
- node versão 14.19.1 ou superior;
- instalar nodemon, com o comando abaixo: 
  ```
  npm install nodemon
  ```

## Rodando o projeto:
  - Para rodar o projeto é necessário rodar o comando:
    ```
    npm install && npm start
    ```

## Rotas: 

  ### - Cadastro de clientes:
  - **POST:**
    - http://localhost:3000/api/usuarios/cadastro
    
  - **RETORNOS:**
    - **status (201):**
      "Cadastro realizado"
    
    - **status (500):**
      "Erra ao cadastrar"
  
  ### - Listar todos os clientes:
  - **POST:**
    - http://localhost:3000/api/clientes/listarclientes
   
  - **RETORNOS:**

      **status (202):**
        "Listado com sucesso"
    -       
    - **status (400):**
        "Não foi possível atualizar"

    - **status (500):**
       "Erro ao processar a atualização"
<br>

 ### - Atualizar dados do clientes:
  - **PUT:**
    - http://localhost:3000/api/clientes/atualizardados/:id
    
  - **RETORNOS:**
    - **status (202):**
      "Atualizado",
      
    - **status (400):**
      "Não foi possível atualizar -> null"

    - **status (500):**
       "Erro ao processar a atualização"

      
