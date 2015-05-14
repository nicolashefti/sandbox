<VirtualHost *:80>

    ServerAlias *.dev
    ServerName sites-vhosts.dev
    VirtualDocumentRoot /Users/{USERNAME}/Sites/%-2+/htdocs

    ErrorLog "/Users/{USERNAME}/Sites/sites-conf/sites-error_log"
    
    <Directory "/Users/{USERNAME}/Sites/*">
        Options Indexes FollowSymLinks MultiViews
        AllowOverride All
        Order allow,deny
        Allow from all
    </Directory>

</VirtualHost>