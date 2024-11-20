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
### IBM MQ
Now let's set up our  MQ Container.
* If your machine is NOT a Silicon Mac, pull the MQ image from ICR:
    ```unix
    podman pull icr.io/ibm-messaging/mq:latest
    ```
    If you have a Silicon Mac, follow the steps [here](https://community.ibm.com/community/user/integration/blogs/richard-coppen/2023/06/30/ibm-mq-9330-container-image-now-available-for-appl) to create the image natively.
    
    Ensure the image name on your docker-compose.yml file matches the name on the image you pulled/built.