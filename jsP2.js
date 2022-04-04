var getInitials = name => name.split(' ').map(nameItem => nameItem.slice(0,1).toUpperCase()).join('.');
    

    console.log(getInitials("aaron jack"))