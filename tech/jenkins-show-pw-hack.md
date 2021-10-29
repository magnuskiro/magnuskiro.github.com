

Bookmarklet:

```
javascript:(function(){var encryptedPassword = document.getElementsBySelector('input[type="password"')[0].value;prompt('Copy script below:','println( hudson.util.Secret.decrypt("' + encryptedPassword + '") )'); location.href='/script';})()
```

Can be used when you are on the "update" page for credentials and the password
field is visible.
