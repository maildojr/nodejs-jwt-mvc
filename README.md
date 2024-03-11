# Node.js: Authentication with JSON Web Tokens
This project showcases an MVC application for implementing authentication with JSON Web Tokens (JWT) in Node.js. It includes both public and private routes, with the latter demonstrating a CRUD functionality for movies.

## Project Structure
- :open_file_folder: src
    - :open_file_folder: controllers
        - :ledger: AuthController.js
        - :ledger: MovieController.js   
	- :open_file_folder: database
        - :ledger: db.js
    - :open_file_folder: models
        - :ledger: Movies.js
        - :ledger: Users.js
    - :ledger: router.js 
	- :ledger: server.js
- :orange_book: .gitignore
- :orange_book: .env
- :closed_book: api.http
- :green_book: package-lock.json
- :green_book: package.json
- :blue_book: README.md

## Dependencies
Ensure you have installed the following dependencies:

- **express**: "^4.18.3"
- **jsonwebtoken**: "^9.0.2"
- **mysql2**: "^3.9.2"
- **pg**: "^8.11.3"
- **pg-hstore**: "^2.3.4"
- **sequelize**: "^6.37.1"

## Usage

1. Clone the repository:

```bash
git clone https://github.com/maildojr/nodejs-jwt-mvc.git
cd nodejs-jwt-mvc
```

2. Install the dependencies:

```bash
npm install
```

3. Run the server:
```bash
npm dev
```

## References
[JSON Web Tokens — jwt.io](https://jwt.io/)

[RFC 7519 — JSON Web Token (JWT) (ietf.org)](https://datatracker.ietf.org/doc/html/rfc7519)

[jsonwebtoken — npm (npmjs.com)](https://www.npmjs.com/package/jsonwebtoken)

[Express — framework for building web Node.js (expressjs.com)](https://expressjs.com/pt-br/)

[remy/nodemon: Monitor for any changes in your node.js application and automatically restart the server — perfect for development (github.com)](https://github.com/remy/nodemon)

