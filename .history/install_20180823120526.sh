sudo mv wp-cli.phar /usr/local/bin/wp
    # Download and install robo
    # Download and install robo
    wget http://robo.li/robo.phar
    wget http://robo.li/robo.phar
    sudo chmod +x robo.phar
    sudo chmod +x robo.phar && mv robo.phar /usr/bin/robo
    sudo mv robo.phar /usr/bin/robo
    # Start MySQL Server
    # Start MySQL Server
    sudo service mysql start
    sudo service mysql start
elif [[ "$OSTYPE" == "darwin"* ]]; then
elif [[ "$OSTYPE" == "darwin"* ]]; then
    # Download and install wp-cli
    # Download and install wp-cli
    brew install wp-cli
    brew install wp-cli
    # Download and install robo
    # Download and install robo
    brew install homebrew/php/robo
    wget http://robo.li/robo.phar
    sudo chmod +x robo.phar && mv robo.phar /usr/local/bin/robo
    # Install mysql-server
    # Install mysql-server
    brew install mysql
    brew install mysql
    # Start mysql-server
    # Start mysql-server
0 comments on commit b1dfe8c
