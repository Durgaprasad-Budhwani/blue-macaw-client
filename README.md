# Blue Macaw Music App  Client 

Parrots have musical tastes, with some preferring classical works and others pop tunes.
Blue macaw parrot that inspired "Rio" is now officially extinct in the wild. 
This simple Express and React Application is dedicated to them.

Right now, this app only contains backend code.

## Getting Started

- Clone the repo

```
git clone https://github.com/Durgaprasad-Budhwani/blue-macaw-client.git
```


- Install dependencies:

```
yarn
```

- Rename `.env.default` file to `.env` and change environment variables


## Running locally

```
yarn dev
```

## Running in Production

```
yarn start
```

## Creating and running docker

To create a Docker image, use the following command:

    docker build -t durgaprasadbudhwani/blue-macaw-music-app .

It will create a Docker image named `durgaprasadbudhwani/blue-macaw-music-app:latest`.

To run a Docker image locally, use the following command:

    docker run -p 5005:80 --env PORT=80 durgaprasadbudhwani/blue-macaw-music-app .
    
## Lint

```
# lint code with ESLint
yarn lint

# try to fix ESLint errors
yarn lint:fix

# lint and watch for changes
yarn lint:watch
```


    

