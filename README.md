# Projeto 101 (Frontend em Next.js)

Implementação de um projeto do zero em Next.js

## Objetivo

Implementar um sistema do zero utilizando Next.js e adicionando recursos e bibliotecas durante o desenvolvimento, com a finalidade de revisar o que foi aprendido em meses de trabalho e estudos em Frontend.

## Tecnologias/pacotes utilizados

- Material-UI
- Tailwind CSS

## Extras

- CSS injection order

  https://material-ui.com/styles/advanced/#css-injection-order

## TO-DO

- Validação de Formulário
- Router
- Redux
- Lodash
- Auth JWT / OAuth / Firebase

## Estrutura

```bash
root/
  build/                        # Arquivos para produção
  node_modules/                 # Dependências do Projeto
  public/                       # Assets, arquivos estáticos que não serão processados pelo webpack
  src/                          # Código fonte da Aplicação
    api/                        # Abstração da API backend
    assets/                     # Alguns arquivos CSSs, Fonts, dentre outros, globais do projeto
    components/                 # Armazena todos os componentes "globais" do projeto
    config/                     # Armazena as onfigurações globais do projeto
    enums/                      # Armazena valores que são utilizados em vários lugares dos códigos
    hooks/                      # Armazen os hooks globais do projeto
    layout/                     # Layout ao App
    modules/                    # Armazena e separa os contextos do projeto
    services/                   # Serviços
    store/                      # Store principal do App
    utils/                      # Utilitários do App
  .env                          # Configuração de Variáveis de ambiente
  .gitignore                    # Arquivos a serem ignorados no repositório
  .prettierrc                   #
  craco.config.js               #
  jsconfig.json                 #
  package.json                  # Arquivo de dependências do projeto
  README.md                     # Documentação resumida
  tailwind.config.js            # Configuração do Tailing
  yarn.lock                     #
```

## Docker

### **Build da imagem**

Acessar diretorio

```bash
cd frontend-nextjs
```

Fazer o build do projeto

```bash
yarn build
```

Gerar imagem Docker

```bash
docker image build -t jeanbarcellos/project101_frontend-nextjs .
```

### **Developement**

Criar diretório do projeto e dar permissão:

```bash
# Se o projeto ainda não existir
mkdir /home/project-dir

sudo chown -R <USERNAME> /home/project-dir
```

Rodar um container com volume `Bind mounts`

```bash
docker run --rm --volume "$(pwd):/srv/react-docker" --workdir "/srv/react-docker" --publish 3000:3000 -it node bash

# ou
docker run --rm --volume "<PROJECT-PATH-ABS>:/srv/react-docker" --workdir "/srv/react-docker" --publish 3000:3000 -it node bash
```

- Em `<PROJECT-PATH-ABS>` informar o path absoluto deste projeto+

Exemplo:

```bash
docker run --rm --volume "/home/jean.barcellos/www/project-101/frontend-nextjs:/srv/react-docker" --workdir "/srv/react-docker" --publish 3000:3000 -it node bash

docker run --rm -v "/home/jean.barcellos/www/project-101/frontend-nextjs:/srv/react-docker" -w "/srv/react-docker" -p 3000:3000 -it node bash
```

<br>

### **Production**

Gerar a imagem

```
docker build -t jeanbarcellos/project101_frontend-nextjs .
```

Execução da imagem

Desenvolvimento

```bash
docker run -i --rm -p 8082:80 --name project101_frontend-nextjs jeanbarcellos/project101_frontend-nextjs
```

## Referências

https://medium.com/@princesingh808087/setting-up-materail-ui-and-tailwindcss-together-in-nextjs-app-directory-f7e65c3e1ecd

https://dev.to/sabbirsobhani/google-icons-from-google-fonts-with-nextjs-11pa

https://mui.com/material-ui/icons/

https://nextjs.org/docs/pages/building-your-application/optimizing/fonts

https://dev.to/bytebodger/default-props-in-react-typescript-2o5o

https://nextjs.org/docs/app/building-your-application/styling/tailwind-css

https://zustand.docs.pmnd.rs/guides/nextjs

https://medium.com/@harshdigwani/redux-vs-context-api-vs-local-storage-bced5118c531
