#!/usr/bin/env bash

# LIST OF OS HOST FILE LOCATION | DON'T MODIFY THIS
mac_os="/private/etc/hosts"
win_os="/etc/hosts" 

# LIST OF CUSTOM HOST | FEEL FREE TO ADD ANY OTHER WEBSITE captcha.DOMAIN.COM
host_data=( "captcha.supremenewyork.com" "captcha.kith.com" "captcha.undefeated.com" "captcha.bdgastore.com" )

# echo 127.0.0.1 captcha.supremenewyork.com >> %WinDir%\system32\drivers\etc\hosts

for i in "${host_data[@]}"; do
    if [[ "$OSTYPE" == "linux-gnu"* ]] || [[ "$OSTYPE" == "msys"* ]]; then
        if [ -n "$(grep $i $win_os)" ]; then
            echo "$i already exist! :$(grep $i $win_os)"
        else
            echo "Adding $i to your $win_os!"
            echo 127.0.0.1 $i >> $win_os
        fi
    elif [[ "$OSTYPE" == "darwin"* ]]; then
        if [ -n "$(grep $i $mac_os)" ]; then
            echo "$i already exist! :$(grep $i $mac_os)"
        else
            echo "Adding $i to your $mac_os!"
            sudo -- sh -c -e "echo 127.0.0.1 '$i' >> $mac_os";
        fi
    fi
done