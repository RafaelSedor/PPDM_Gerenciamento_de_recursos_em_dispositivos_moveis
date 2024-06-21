# PPDM - Gerenciamento de Recursos em Dispositivos Móveis

Este projeto é um exemplo de gerenciamento de recursos em dispositivos móveis usando React Native, React Navigation, Zustand e Expo. O objetivo é demonstrar a navegação entre telas de login, perfil, configurações e uma lista de compras que só está disponível quando o usuário está logado.

## Estrutura do Projeto

```
/src
|-- /components
|   |-- CustomDrawerContent.tsx
|-- /navigation
|   |-- AppNavigator.tsx
|   |-- LoggedHome.tsx
|-- /screens
|   |-- HomeScreen.tsx
|   |-- LoginScreen.tsx
|   |-- ProfileScreen.tsx
|   |-- SettingsScreen.tsx
|   |-- ShoppingListScreen.tsx
|-- store.ts
|-- types.ts
```

### Descrição dos Arquivos

- **AppNavigator.tsx**: Define a navegação principal da aplicação, incluindo as telas de login, home, perfil, configurações e a tela de navegação com drawer.
- **LoggedHome.tsx**: Define a navegação do drawer que inclui a tela de lista de compras e permite que o usuário faça logout.
- **CustomDrawerContent.tsx**: Personaliza o conteúdo do drawer, incluindo a funcionalidade de logout.
- **HomeScreen.tsx**: Tela inicial que permite a navegação para as telas de login, perfil e configurações.
- **LoginScreen.tsx**: Tela de login que, ao logar, redireciona o usuário para a tela principal logada.
- **ProfileScreen.tsx**: Tela de perfil do usuário.
- **SettingsScreen.tsx**: Tela de configurações do usuário.
- **ShoppingListScreen.tsx**: Tela de lista de compras que é acessível apenas quando o usuário está logado, mostrando uma lista mock de itens.
- **store.ts**: Define a store usando Zustand para gerenciar o estado de autenticação do usuário.
- **types.ts**: Define os tipos de navegação usados na aplicação.

## Instalação

1. Clone o repositório:
   ```sh
   git clone https://github.com/RafaelSedor/PPDM_Gerenciamento_de_recursos_em_dispositivos_moveis.git
   cd PPDM_Gerenciamento_de_recursos_em_dispositivos_moveis
   ```

2. Instale as dependências:
   ```sh
   npm install
   ```

3. Inicie o servidor de desenvolvimento:
   ```sh
   expo start
   ```

## Uso

1. **Navegação entre telas**:
   - **HomeScreen**: Tela inicial com botões para navegar para as telas de Login, Perfil e Configurações.
   - **LoginScreen**: Tela de login que autentica o usuário e redireciona para a tela principal logada.
   - **ProfileScreen**: Tela de perfil do usuário.
   - **SettingsScreen**: Tela de configurações do usuário.
   - **ShoppingListScreen**: Tela de lista de compras acessível apenas quando o usuário está logado.

2. **Navegação com Drawer**:
   - Quando logado, a tela principal exibe uma navegação do tipo drawer, permitindo acessar a lista de compras e fazer logout.

## Contribuição

Se quiser contribuir com este projeto, sinta-se à vontade para fazer um fork do repositório, criar uma branch para sua funcionalidade ou correção e enviar um pull request.

### Como Inicializar

1. **Clone o Repositório**
   ```sh
   git clone https://github.com/RafaelSedor/PPDM_Gerenciamento_de_recursos_em_dispositivos_moveis.git
   cd PPDM_Gerenciamento_de_recursos_em_dispositivos_moveis
   ```

2. **Instale as Dependências**
   ```sh
   npm install
   ```

3. **Inicie o Servidor de Desenvolvimento**
   ```sh
   yarn expo start
   ```

Com estas instruções, você deve ser capaz de clonar, instalar e iniciar o projeto em seu ambiente local.
