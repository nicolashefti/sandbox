# Localhost auto-configuration

"Never touch your Apache's vhost config in OS X again." Catchy, isn't it?

Inspired by those articles:

- [Automatic Apache vhosts](http://akrabat.com/automatic-apache-vhosts/)
- [Local Development with Apache VHosts and Dnsmasq](http://fourword.fourkitchens.com/article/local-development-apache-vhosts-and-dnsmasq)
- [Local development with OSX Yosemite](http://fourword.fourkitchens.com/article/local-development-osx-yosemite)
- [Never touch your local /etc/hosts ...](https://echo.co/blog/never-touch-your-local-etchosts-file-os-x-again)

## Setup

This is the setup for MacOs Yosemite. Other systems might differ a bit, but the spirit stays the same: a vhosts configuration with wildcards and a DNS mask to set the magic. 

    # Create necessary directories
    mkdir ~/Sites
    mkdir ~/Sites/sites-conf 
    
    # Create the vhost file and create a symlink
    # You can as well create the vhost file directly in the Apache directory
    touch ~/Sites/sites-conf/httpd-vhosts.conf
    sudo ln -s ~/Sites/sites-conf/httpd-vhosts.conf /etc/apache2/other
    
    # Activate vhost_alias_module by uncommenting the following line in /etc/apache2/httpd.conf:
    # '# LoadModule vhost_alias_module libexec/apache2/mod_vhost_alias.so'
    
    sudo apachectl restart
    
    # Install DNSmasq
    brew install dnsmasq
    
    # Copy the default configuration to its new home
    cp /usr/local/opt/dnsmasq/dnsmasq.conf.example /usr/local/etc/dnsmasq.conf
    
    # Setup the DNSmasq configuration
    echo 'address=/.dev/127.0.0.1' > $(brew --prefix)/etc/dnsmasq.conf

    # Set the resolver
    sudo mkdir -v /etc/resolver && sudo bash -c 'echo "nameserver 127.0.0.1" > /etc/resolver/dev'
    
    # Launch DNSmasq at startup and finally reload DNSmasq
    sudo cp -fv /usr/local/opt/dnsmasq/*.plist /Library/LaunchDaemons
    sudo launchctl load /Library/LaunchDaemons/homebrew.mxcl.dnsmasq.plist

