# React Native Tutorial

## Running

`npm start`

## Chromebook Setup

### Opening Ports

`sudo apt-get install iptables`

Edit `/etc/rc.local`

Add These Lines

```
/sbin/iptables -I INPUT -p tcp --dport 19000 -j ACCEPT
/sbin/iptables -I INPUT -p tcp --dport 19001 -j ACCEPT
```
