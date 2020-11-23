# Github Actions set-env deprecation

## Error message
We get the following deprecation message in our github actions workflow
```
The `set-env` command is deprecated and will be disabled on November 16th. 
Please upgrade to using Environment Files. 
For more information see: 
[https://github.blog/changelog/2020-10-01-github-actions-deprecating-set-env-and-add-path-commands/]
```

The CVE note in the link above directs us to the documentation: [https://docs.github.com/en/free-pro-team@latest/actions/reference/workflow-commands-for-github-actions#environment-files]


## Fix
So how to fix the issue. 
We have to replace the way we set environment variables in our workflow.

We have an example step in our workflow something like this: 

```yml
- name: Deploy ARM template
  run: |
    $output = az deployment group create --resource-group ${{ env.resourcegroup }} --template-file azuredeploy.json --parameters environment=dev --parameters administratorLogin=JallaJalla --parameters administratorLoginPassword=${{ secrets.DBPASSWORD }}
    $armOutputObj = $output | ConvertFrom-Json
    $webAppName = $armOutputObj.properties.outputs.webappname.value
    echo "::set-env name=webAppName::$webAppName"
  shell: pwsh
```

In this case the line 
`echo "::set-env name=webAppName::$webAppName"` 
needs to be replaced with 
`echo "webAppName=$webAppName" | Out-File -FilePath $env:GITHUB_ENV -Encoding utf8 -Append`

! Keep in mind that different shells have different syntaxes. 
So when you do this with `shell: bash` the replacement should be `echo "webAppName=$webAppName" >> $GITHUB_ENV`.

## Syntax examples
An example I found show differences in the use of env vars: [https://github.community/t/environment-variable-setup-from-windows-runner/139296/4]

```yml
env:
  MSG: Hello
jobs:
  print_env_var:
    name: Print environment variable
    runs-on: windows-latest
    steps:
    - name: Print environment variable with cmd 
      run: echo "String matches %MSG%"
      shell: cmd

    - name: Print environment variable with powershell 
      run: echo "String matches $env:MSG"
      shell: powershell

    - name: Print environment variable with bash 
      run: echo "String matches $MSG"
      shell: bash

    - name: Print environment variable with pwsh 
      run: echo "String matches ${env:MSG}"  # Use $env:MSG also can work
      shell: pwsh

    - name: Print environment variable with python
      run: |
        import os
        print("String matches", os.environ['MSG'])
      shell: python
```







