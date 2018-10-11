# React Native Tutorial

## Running

  npm start

## Chromebook Setup

  sudo apt-get install iptables
  vim /etc/rc.local
  // Add these lines
  /sbin/iptables -I INPUT -p tcp --dport 19000 -j ACCEPT
  /sbin/iptables -I INPUT -p tcp --dport 19001 -j ACCEPT
