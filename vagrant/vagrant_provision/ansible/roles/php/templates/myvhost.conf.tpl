<VirtualHost *:80>

DocumentRoot /vagrant/public

    <Directory /vagrant/public/>
        Require all granted
    </Directory>

</VirtualHost>
