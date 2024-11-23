# Bank Web App
This is a passion project of mine which I wish to continually work on. I hope to have a fully functioning banking web app which can safely and securely transfer funds from one account to another. I will also incorporate a chat bot which can be asked questions on the products available within the bank. Users will also be able to perform credit checks, apply for current accounts, mortgages/loans, saving accounts and more!

## Tech Stack
The bank application tech stack is subject to change over time but currently it is the following:

|Technology|Version|Description|
|----------|-------|-----------|
|React|18.3.1|Build and run application frontend.|
|Node JS|18-alpine||
|Postgresql|16-alpine|Store and persist crucial user data.|
|Podman|5.2.5|Containerize and deploy services for application|
|Java|21|REST API service|

## Getting Started
### Podman
* **Podman and podman-compose**. If you don't have them installed, you can do so via Homebrew:
    ```unix
    brew install podman
    brew install podman-compose
    ```
* Then run the following command:
    ```unix
    podman machine init
    ```
* Start your podman machine by running:
    ```unix
    podman machine start
    ```
### Postgres DB
* Create a .env file in your root directory and fill with the following.
    ```env
    POSTGRES_DB=postgres_db
    POSTGRES_USER=postgres
    POSTGRES_PASSWORD=p.postgres
    POSTGRES_ROOT_PASSWORD=root
    POSTGRES_PORT=5432
    ```
