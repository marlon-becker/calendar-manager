# Ulabox React Weather App

> Small calendar APP created with Ruby on Rails for the Backend and React for the Backend
> For seek of simplicity in the test both parts are in the same repository
> Backend /server
> Frontend /client

# Local Usage

After cloning the repository:

## Setup Ruby on Rails Backend

### Install and configure Mysql database

- Install Mysql on your machine and run the service (macOS):

```bash
brew info mysql
brew tap homebrew/services
brew services start mysql
```

For Windows installation refer to:
https://dev.mysql.com/downloads/windows/installer/8.0.html

For Linux installation refer to:
https://dev.mysql.com/doc/refman/8.0/en/linux-installation.html

- Change your Msyql user password:

```bash
mysqladmin -u username password 'yourpassword'
```

- Access Mysql and create the needed databases:

```bash
mysql -u username -pyourpassword
```

- Create developing database:

```bash
mysql> CREATE DATABASE calendar_manager;
```

```bash
cd server
bundle install
bin/rails db:migrate
bundle server
```

> Migrate will create a fake user and events for this user
> Server API will run in port 3001

## Setup React Frontend

```bash
cd client
npm install
npm start
```

> Frontend will run in port 3000

### Testing

> For basic testing just run

```bash
npm run test
```

## Built using

- [Ruby-on-rails](https://rubyonrails.org/)
- [Mysql](https://www.mysql.com/)
- [Reactjs](https://reactjs.org/)
- [Redux](https://redux.js.org/)
- [Redux-saga](https://github.com/redux-saga/redux-saga)
- [Sass](https://sass-lang.com/)
